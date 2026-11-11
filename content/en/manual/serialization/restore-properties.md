---
title: Restore properties across a reload
description: Carry neutral property data across generations and account for rejected or missing members explicitly.
uid: manual.serialization.restore-properties
kind: how-to
owners:
  - Inno.Core.Serialization
contracts:
  - project.inno-core-serialization#operation-and-generation-contract
exampleMode: host
exampleProjects:
  - Inno.Core.Serialization
---
# Restore properties across a reload

Capture independent property data when an owning domain needs to recreate an object after a generation change while preserving its applicable state. Carry bytes across the boundary, resolve the current target through its persistent identity, and restore using current metadata and the current owner's context.

This mechanism does not make an old CLR object, `Type`, property accessor or converter safe to retain after unload. Read [identity and Missing](../identity-and-missing.md) before designing the domain's replacement transaction.

## Capture neutral data

This host example borrows registries selected by the old and new owners. The caller controls the lifecycle transition between its two methods and supplies the matching reference services.

```csharp
using Inno.Core.Serialization;

static byte[] CaptureForReload(
    SerializationRegistry previousRegistry,
    ISerializable previous,
    SerializationContext previousContext
) {
    return previousRegistry.CapturePropertiesData(previous, previousContext);
}

static SerializationPropertyRestoreResult RestoreAfterReload(
    SerializationRegistry currentRegistry,
    ISerializable current,
    byte[] captured,
    SerializationContext currentContext
) {
    return currentRegistry.RestorePropertiesData(
        current,
        captured,
        SerializationPropertyRestoreMode.CollectFailures,
        currentContext);
}
```

Use `CapturePropertyData(value, name, context)` to capture exactly one persistent member without executing unrelated getters. Use the plural operation for the complete persistent member set. Neither operation serializes the owning graph as a new root.

`CaptureProperties` instead returns in-memory `SerializationPropertySnapshot` values that include the declaring `Type`. These snapshots belong to their originating generation. `EncodePropertySnapshots` can convert them to neutral bytes before retirement; do not keep collectible types alive in a long-lived History or workspace record.

## Choose a failure policy

| Mode | Behavior |
| --- | --- |
| `Strict` | Stop at the first matched property that cannot be decoded or assigned. |
| `CollectFailures` | Record recoverable per-property failures and continue with other independent properties. |

There is no `Compatible` enum value. `CollectFailures` is not schema migration. Matching is by the exact serialized property key and the target's current declaration. Deleted or non-restorable members contribute to `ignoredCount`; newly introduced members receive no assignment from absent data.

Inspect `restoredCount`, `ignoredCount` and every entry in `failures`. A successful return with failures does not mean all requested values were restored. The failure entries include the property name, prior/current type information available to that capture and an error description.

## Understand the rollback boundary

For a rejected property, the operation removes completion callbacks and restored-object scheduling added since that property's checkpoint. It does **not** restore arbitrary mutations already made by a setter, constructor or converter. If decoding fails before assignment, that member remains unchanged; if user code mutates and then throws, a domain transaction must handle those effects.

Cancellation, out-of-memory, stack-overflow and access-violation exceptions are not collected as normal per-property failures. Invalid snapshot structure fails validation. Object-level restoration hooks run after the property loop and their failures propagate; they are not swallowed by `CollectFailures`.

The target's restoration hook is scheduled once for the operation. Hooks run in declaration order through the selected metadata. They may rebuild derived state, but must not assume unrelated domain publication has already committed.

## Publish through the domain owner

1. Keep the original neutral payload until the replacement transaction succeeds.
2. Resolve or construct the replacement in its current generation.
3. Restore with complete current reference services.
4. Classify ignored/rejected values according to the domain's Missing and recovery policy.
5. Publish the candidate only when the domain's required invariants hold.

The property format validates its current magic, lengths and trailing bytes. Do not patch bytes to hide a malformed capture. Preserve the payload and report the specific failure through the owning diagnostic channel.

See [serialization architecture](../../architecture/serialization.md) for generation pinning and completion order, and [the API reference](../../api/types/core-serialization/index.md) for exact overloads and result types.
