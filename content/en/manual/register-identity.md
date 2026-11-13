---
exampleMode: host
exampleProjects:
  - Inno.Core.Identity
title: Register an identity object
description: Preserve a saved identity while explicitly owning registration and
  release in a runtime domain.
uid: manual.register-identity
kind: how-to
owners:
  - Inno.Core.Identity
contracts:
  - manual.identity-and-missing
  - architecture.ownership
---
# Register an identity object

Use an allocator when a lifecycle owner needs to resolve its live objects by identity. This example creates an isolated host-side domain, restores a saved persistent ID, performs a lookup and releases registration. It does not replace the allocator already owned by a running engine session.

## Prerequisites

Use the CLR host API from `Inno.Core.Identity` and supply a nonempty saved GUID. The caller owns the example object. For application code inside a runtime session, use that session's allocator and lifetime boundaries instead of creating an unrelated domain.

## Register, use and unregister

```csharp
using System;
using Inno.Core.Identity;

internal static class IdentityExample
{
    public static Guid RegisterAndRelease(Guid savedId)
    {
        var identities = new IdentityAllocator();
        var resource = new RuntimeResource();
        identities.InitializePersistentIdentity(resource, savedId);
        identities.Register(resource);
        try
        {
            RuntimeIdentity address = resource.identity.runtimeIdentity!.Value;
            RuntimeResource? same = identities.Get<RuntimeResource>(address);
            return same!.identity.persistentId;
        }
        finally
        {
            identities.Unregister(resource);
        }
    }

    private sealed class RuntimeResource : IdentityObject;
}
```

The returned GUID equals `savedId`. Lookup succeeds while the registration and object are live. The `finally` block removes the runtime mapping even if work inside the protected region fails. This example object has no separate disposable resource; real owners must also satisfy their resources' release contracts.

## Keep identity separate from lifetime

A copied `Identity` is a snapshot, not a strong reference or lease. `Resolve<TObject>()` can return null after the registry is collected, the object is unregistered, the slot changes generation or the requested type does not match. A successful lookup does not grant a new ownership lifetime.

Use `RuntimeIdentity` when a transient interaction can cross runtime domains. A bare integer runtime ID is interpreted only inside the selected allocator. Neither representation belongs in saved assets or History.

## Handle conflicts and cleanup errors

Registration returns false when the same live object is already registered. A different live object with the same persistent ID causes a conflict. Do not catch that conflict and silently assign a new ID to saved content.

`Unregister` removes the mapping before notifying observers. It can throw an `AggregateException` after every observer has been attempted; removal has still happened. If the surrounding operation also fails, its owner must preserve both relevant failures rather than assuming cleanup restored the old state.

## Resolve the exact contract

See [IdentityAllocator](../api/engine/core/identity/identityallocator/index.md) for registration, lookup overloads and scope rules, and [the project overview](../architecture/projects/inno-core-identity.md) for the full ownership model.
