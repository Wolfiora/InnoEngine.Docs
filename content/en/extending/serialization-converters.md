---
title: Implement a serialization converter
description: Define explicit value or identity semantics through the shared operation-scoped reader and writer.
uid: extending.serialization-converters
kind: how-to
owners:
  - Inno.Core.Serialization
contracts:
  - project.inno-core-serialization#operation-and-generation-contract
exampleMode: host
exampleProjects:
  - Inno.Core.Serialization
---
# Implement a serialization converter

Use `SerializationConverter<T>` when a value needs an explicit schema, an identity graph needs domain-controlled reference handling, or restoration must preserve invariants that automatic DTO conversion cannot express. Keep the converter stateless and register its declaration through the host's existing type-catalog composition.

## Define the value contract

The following host converter preserves both the numeric endpoints and the from-end flags of `System.Range`. Its public parameterless constructor is implicit. Registration and discovery belong to the host; defining this class alone does not inject it into an unrelated catalog.

```csharp
using System;
using Inno.Core.Serialization;
using Inno.Core.Serialization.Converters;

public sealed class RangeConverter : SerializationConverter<Range>
{
    public override void Write(SerializationWriter writer, Range value)
    {
        writer.Write("start", value.Start.Value);
        writer.Write("startFromEnd", value.Start.IsFromEnd);
        writer.Write("end", value.End.Value);
        writer.Write("endFromEnd", value.End.IsFromEnd);
    }

    public override Range Read(SerializationReader reader)
    {
        Index start = new(reader.Read<int>("start"), reader.Read<bool>("startFromEnd"));
        Index end = new(reader.Read<int>("end"), reader.Read<bool>("endFromEnd"));
        return new Range(start, end);
    }
}
```

Write all values that affect the contract, including flags that a convenient string or integer representation would lose. Read the same declared types. A nonempty member name must be unique within its object; duplicate writes fail.

`Read` creates a value. `Restore` modifies an existing value and defaults to `NotSupportedException`; override it only when your domain can support in-place restoration correctly. `[RequiresSerializationConverter]` prevents accidental default-object handling for a type that requires an explicit converter.

## Borrow readers and writers synchronously

`context`, `path` and `valueType` identify the operation and declared value. Read/write operations are scoped to the active callback/operation. Do not retain a reader or writer, schedule later work that uses one, or store its context in plugin-global state. Snapshot converter writers are retired when their synchronous callback ends.

| Operation | Purpose |
| --- | --- |
| `Write<T>` / declared-type `Write` | Use the shared value pipeline for a named value. |
| `WriteObject` / `WriteObjectArray` | Define nested structured objects and ordered elements. |
| `WriteProperties` | Include marked properties through the current metadata. |
| `WritePropertiesData` | Embed independent property bytes with the complete supplied owner context. |
| `Contains` / `TryRead` | Distinguish absence; `TryRead` is not a blanket handler for malformed present data. |
| `ReadObject` / `ReadObjectArray` | Borrow nested readers within the same operation. |
| `OnCompleted` | Defer reference finalization until decoding/restoration reaches completion. |

Use precise context contracts for external references. A converter must not recursively serialize an already active object to solve a cycle. Encode the domain's stable identity and resolve it through the owner, with deferred completion when required.

## Use a structured schema without a converter

For a local structured payload, `Encode` and `Decode` use the same operation model and binary encoder. This example accepts a host registry and a stable point array; the decoded array is caller-owned.

```csharp
using System.Linq;
using Inno.Core.Serialization;

static (float x, float y)[] RoundTripPoints(
    SerializationRegistry serialization,
    (float x, float y)[] points
) {
    byte[] bytes = serialization.Encode(writer =>
    {
        writer.WriteObjectArray("points", points, (item, point) =>
        {
            item.Write("x", point.x);
            item.Write("y", point.y);
        });
    });

    return serialization.Decode(bytes, reader => reader.ReadObjectArray("points")
        .Select(item => (item.Read<float>("x"), item.Read<float>("y")))
        .ToArray());
}
```

Do not return nested readers instead of materialized results: the operation has ended by the time the caller receives the result.

## Handle discovery and failure

The current catalog selects converters by declared type and applicability. Equal best matches are errors. Keep one intentional owner for each selected contract and ensure the catalog can construct it. Do not rely on assembly scan order, a hidden global registry or a missing-dependency fallback.

Converters may be reused within a generation. Mutable instance fields therefore need explicit ownership and synchronization; a stateless converter is the usual design. A generation lease protects availability, not arbitrary converter thread safety.

Completion callbacks are not a general rollback journal. A thrown setter or converter can have external effects, and earlier completion callbacks can already have run when a later one fails. Stage publication through the domain owner.

Only implement `TryCaptureKey` after reading the [complete snapshot-proof contract](../manual/serialization/capture-snapshots.md). Omitting a context input or revision dependency can make an apparently fast capture incorrect.

## Rewrite identifiers in an existing neutral payload

`SerializedIdentityRemapper.Rewrite` replaces exact Guid values and optional exact string values in recognized current object/property payloads, including recognized nested binary values. It returns detached bytes. It does not perform substring replacement or infer which strings are filesystem paths.

Unknown binary values are copied unchanged; malformed recognized formats fail. This is useful inside a domain-owned clone transaction, but it does not allocate live identities, repair Missing references or migrate old schemas.

See the [serialization reference](../api/types/core-serialization/index.md) for overloads and the [generation architecture](../architecture/serialization.md) for ownership.
