---
title: Preserve and resolve a Missing reference
description: Keep persistent intent when an object or its resolver is
  temporarily unavailable.
uid: manual.references.resolve-missing
kind: how-to
aliases:
  - Missing references
  - resolve Missing reference
  - recover Missing reference
owners:
  - Inno.References
contracts:
  - project.inno-references#reference-and-recovery-contract
exampleMode: host
exampleProjects:
  - Inno.References
---
# Preserve and resolve a Missing reference

A saved reference expresses which persistent object a user intended to select. Resolution answers whether the current generation can use it. Keep these separate so unloading a plugin or losing an asset does not silently erase the user's assignment.

## Choose the correct state

| State | Meaning for the caller |
| --- | --- |
| Unassigned | No target was selected; the descriptor's target ID is empty. |
| Resolved | The resolver supplied a current domain-qualified runtime identity. |
| Missing | The target or its protocol implementation is unavailable. |
| TypeMismatch | The target does not meet the required type contract. |
| Invalid | The resolver cannot accept the reference as valid input. |

Use names and old paths for useful diagnostics, never to silently select a different object. A stable type ID constrains the target's type; it does not replace the target object's persistent ID.

## Resolve without losing intent

This host example illustrates an installed protocol with no available resolver. In a real domain, receive the generation's catalog from its explicit composition boundary. The illustrative protocol name below does not register an engine feature.

```csharp
using System;
using Inno.References;

public static class ReferenceInspection
{
    public static ReferenceResolution Inspect(Guid savedTarget)
    {
        var descriptor = new ReferenceDescriptor(
            new ReferenceKindId("example.document"),
            savedTarget,
            lastKnownName: "Selected document");
        return ReferenceCatalog.empty.Resolve(descriptor);
    }
}
```

With an empty target, this returns Unassigned without invoking a resolver. With a nonempty target and no matching resolver, it returns Missing while preserving the descriptor. The caller may display the retained name and diagnostic and keep the saved slot intact.

Do not treat a missing assignment as permission to write `null` over its persistent record. `SerializedMissingState` preserves a slot key, descriptor and copied payload for recovery. The domain decides the payload schema and captures neutral data before retiring the old object.

## Restore through the owning generation

Recovery applies all provisional objects before resolving and validating slots. This permits references between restored objects without exposing a half-restored frame. Read [joining reference recovery](../../extending/reference-recovery.md) for the publication and compensation order.

A Resolved result is not a long-lived strong object handle. Use it only within the current owner's lifetime and access protections. Never write its runtime identity into settings, assets, Scene persistence or History.

See [identity and Missing](../identity-and-missing.md) for persistent versus generation identity and [the References API](../../architecture/projects/inno-references.md) for exact resolution contracts.
