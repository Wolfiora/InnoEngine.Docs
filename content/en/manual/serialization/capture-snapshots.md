---
title: Capture and reuse immutable serialized state
description: Reuse neutral snapshot nodes while preserving complete change detection and generation ownership.
uid: manual.serialization.capture-snapshots
kind: how-to
owners:
  - Inno.Core.Serialization
contracts:
  - project.inno-core-serialization#operation-and-generation-contract
exampleMode: host
exampleProjects:
  - Inno.Core.Serialization
---
# Capture and reuse immutable serialized state

Use `CaptureSnapshot` when a host repeatedly observes complete serialized state and can retain a previous immutable capture. It reuses unchanged neutral nodes without introducing a second persistence format or retaining the live source graph.

Start with [ordinary state serialization](save-state.md). Snapshot capture is a host API, not a gameplay script capability or an automatic History service.

## Capture against a previous observation

The host supplies a stable source, its registry and all reference/context services. This example returns both the observation and independent encoded bytes; the caller chooses how long to retain either.

```csharp
using Inno.Core.Serialization;

static (SerializationSnapshot snapshot, byte[] bytes) Observe<T>(
    SerializationRegistry serialization,
    T source,
    SerializationContext ownerContext,
    SerializationSnapshot? previous
) where T : class, ISerializable
{
    SerializationSnapshot snapshot = serialization.CaptureSnapshot(
        source, ownerContext, previous);
    return (snapshot, snapshot.ToArray());
}
```

Default capture executes current getters and converters completely. It then shares equal neutral nodes. Passing `previous` never means “trust that the mutable object has not changed.” Capture failure publishes no replacement and does not alter the prior snapshot.

If the returned snapshot is the same instance, its bytes are unchanged. Different snapshot instances can still encode to identical bytes. Do not substitute reference inequality for a semantic content change.

## Encode after the source retires

A snapshot owns scalars, immutable strings and copied binary values. It does not retain source objects, metadata, converters, delegates or a generation lease. It can be shared across threads and encoded after the source registry has retired.

`ToArray` returns new caller-owned bytes. Mutating them cannot change the snapshot. `WriteTo` leaves the caller's stream open; failed writes may leave partial stream output, which the caller must discard or recover. Failure does not corrupt the immutable snapshot.

The implementation can retain canonical encoded blocks of at most 64 KiB on proven immutable object nodes. Larger values stream through the same encoder. This is an internal optimization, not a separate file format, global block cache or cross-domain identity service.

## Opt into capture keys only with complete proof

An explicit converter may override `TryCaptureKey`. The default returns false. A complete key covers every value, order, layout and context dependency that affects output. Ordinary `Serialize` never calls this optimization.

Core qualifies keys by the active converter generation, metadata declaration and current runtime identity. A matching key can avoid the corresponding write only when the declared proof remains valid. A changed key runs the original writer and is checked again before publication. Source state must remain stable throughout the owner's synchronous operation.

| Builder operation | Required evidence |
| --- | --- |
| `TryAddOwner` | A currently registered Core identity and a complete, non-repeating revision for the owner's state. |
| `TryAddProperties` | Metadata-backed complete property revision and a proven default value path without custom converters. |
| `AddValue(ulong)` / `AddValue(Guid)` | Exact ordered neutral values; identifiers are not reduced to collision-prone hashes. |
| `AddText` | Exact ordinal text, including the distinction between null and empty. |
| `EnsureCapacity` | Capacity estimated from the actual frozen inputs; it does not contribute evidence. |

A failed `TryAdd` invalidates the entire key. Passing a null source to an argument that requires one throws; a missing revision or detached identity declines reuse. The builder belongs only to its synchronous callback and thread. Do not retain it, its context or borrowed identities.

`SerializationRevisionAttribute` selects a non-persistent `ulong` or nullable `ulong` member on a sealed serializable identity type. Every relevant mutation must advance the complete revision before changing state, without recycling values. A nullable result can decline reuse. UI edit notifications alone are not complete revisions.

Metadata providers may declare revision and pure-field access through the corresponding immutable metadata methods. Arbitrary getters are not proven pure field reads. Equivalent new metadata declarations can still serialize correctly but do not automatically qualify for reuse across declaration identities.

## Preserve nested converter and property boundaries

`WritePropertiesData` embeds independent property bytes through the same owner context and encoder. `WriteObjectArray` can receive a capture-key callback for each ordered element. These paths still execute their original writers whenever proof is unavailable.

Core tracks actual nested converter execution and propagates that information from property payloads. A parent's local revision cannot silently prove a stateful nested converter unchanged. Missing data, unproved metadata, mutable references, changing context or invalid identity keeps authoritative full capture in control.

The Scene owner can supply exact object/parent/source identities, sibling position and complete component proofs. That is a domain declaration of inputs, not permission for Core to infer Scene changes or skip arbitrary plugin state.

See [custom converters](../../extending/serialization-converters.md) before implementing a key, and use the [exact builder and snapshot reference](../../api/types/core-serialization/index.md) for failures and overloads.
