---
title: Save and restore declared state
description: Choose persistent members, borrow the owning registry and restore through the current serialization contract.
uid: manual.serialization.save-state
kind: how-to
owners:
  - Inno.Core.Serialization
contracts:
  - project.inno-core-serialization#operation-and-generation-contract
exampleMode: host
exampleProjects:
  - Inno.Core.Serialization
---
# Save and restore declared state

Use InnoEngine serialization when a host-owned object needs a deterministic, current-format representation. Declare which state participates, obtain the registry and reference-resolution context from that host, and choose whether to create a new object or restore an existing one.

Serialization produces bytes. It does not choose a file, publish a project transaction, own your object graph or migrate old schemas. Use the relevant storage or host-document owner to commit the result.

## Prerequisites

The host must already have an initialized type catalog and a `SerializationRegistry` constructed with the metadata source selected by the same composition. Dynamic authoring uses the [DotNet metadata adapter](../../backends/dotnet-serialization.md); static deployment uses [generated declarations](../../extending/serialization-metadata.md).

The following examples use the host CLR API. Runtime script declarations are projected into `InnoEngine.Serialization`; the registry itself is exported only to the Editor script surface, with construction and generation-management members excluded. Do not create a host registry from gameplay scripts.

## Declare persistent state

Implement `ISerializable` and annotate the members that participate. These attributes describe persistence and runtime property access, not Inspector layout.

```csharp
using Inno.Core.Serialization;

static byte[] SaveState(
    SerializationRegistry serialization,
    PlayerState state,
    SerializationContext ownerContext
) {
    return serialization.Serialize(state, ownerContext);
}

static PlayerState LoadState(
    SerializationRegistry serialization,
    byte[] data,
    SerializationContext ownerContext
) {
    return serialization.Deserialize<PlayerState>(data, ownerContext);
}

public sealed class PlayerState : ISerializable
{
    [SerializableProperty(order = 0)]
    public string playerName { get; set; } = string.Empty;

    [SerializableProperty(PropertyVisibility.Readonly, order = 1)]
    public int score { get; private set; }

    [SerializableProperty(PropertyVisibility.Transient)]
    public bool isSelected { get; set; }

    [OnSerializableRestored]
    private void OnRestored()
    {
        isSelected = false;
    }
}
```

The caller owns the returned byte array and the newly deserialized object. `Serialize` does not transfer ownership of the source. Keep source state stable throughout the synchronous operation; persistence is not a lock around application mutations.

## Choose member participation

`PropertyVisibility` is a flags enum. The presets combine four independent permissions:

| Preset | Serialize | Deserialize | Runtime get | Runtime set |
| --- | --- | --- | --- | --- |
| `None` | No | No | No | No |
| `Show` | Yes | Yes | Yes | Yes |
| `Hide` | Yes | Yes | No | No |
| `Readonly` | Yes | Yes | Yes | No |
| `Transient` | No | No | Yes | Yes |
| `SerializeOnly` | Yes | No | Yes | Yes |
| `DeserializeOnly` | No | Yes | Yes | Yes |

`Readonly` does not mean “never restored”: it prevents writes through `SerializedProperty`, while deserialization still needs a valid setter or field accessor. The selected metadata source rejects declarations that cannot supply their required access.

`GetProperties` returns members with runtime-read permission. Each `SerializedProperty` retains access to its target and declaration; do not retain it across retirement of that generation. Check `canWrite` before assigning through it.

## Keep ordering intentional

Base declarations precede derived declarations. `SerializablePropertyAttribute.order` orders members within one declaring type. Use explicit order values when a precompiled assembly needs a defined field/property interleaving: CLR metadata tokens alone do not represent C# source order across those two member kinds.

The script compiler supplies declaration order in its transformed runtime output. This does not make object-member write order a second binary format: named object keys use the current canonical encoding order, while array order remains data.

## Restore an existing object

Call `Restore(target, bytes, ownerContext)` when the domain must preserve the target instance. A custom converter must explicitly implement in-place restoration; its default `Restore` throws `NotSupportedException`.

Restoration is not an automatic transaction over arbitrary application setters. A setter or converter may change state before throwing. Stage a candidate or provide a domain rollback transaction when publication must be all-or-nothing. Completion callbacks only begin after decoding/restoring reaches completion; if one callback throws, earlier callbacks may already have run.

Use [independent property restoration](restore-properties.md) for selected state crossing a reload boundary. It is a separate operation with explicit failure accounting, not a permissive reader for old file formats.

## Pass reference services through context

`SerializationContext` is immutable and keyed by the exact contract type. `With<T>(service)` returns a new context; lookup does not search assignable base classes or interfaces. Register and retrieve a service using the same intended contract.

The registry binds its own type catalog, registry and metadata provider while retaining caller-provided services. Reference resolution still belongs to the scene, asset or other domain owner. Missing context is an error to diagnose, not a reason to construct a global resolver.

## Diagnose a failed save or load

| Symptom | Check |
| --- | --- |
| Missing closed shape | The selected static catalog includes the actual reachable declaration. |
| Duplicate key or invalid access | Member names across the inheritance chain and the requested visibility flags. |
| Converter ambiguity | Equally applicable registrations; discovery order is not a tie-breaker. |
| A cycle is detected | Use an explicit identity/reference converter and owner context instead of recursively embedding the same live object. |
| Invalid binary data | Correct current format, complete bytes and the matching declared contract; do not add implicit schema fallback. |

Continue with [custom converters](../../extending/serialization-converters.md), [snapshot reuse](capture-snapshots.md) and the [exact API reference](../../api/types/core-serialization/index.md).
