---
title: Save and load application data
description: Store complete byte values without exposing filesystem paths to game scripts.
uid: manual.storage.save-data
kind: how-to
owners:
  - Inno.Storage
  - Inno.Storage.Runtime
contracts:
  - project.inno-storage#operation-and-ownership-contract
  - project.inno-storage-runtime#admission-and-lifetime-contract
exampleMode: runtime-script
exampleProjects:
  - Inno.Storage
---
# Save and load application data

Use application storage for persistent byte values such as a save or preference document. Your application defines the format and save policy; the engine supplies logical keys, cancellation and atomic replacement of a complete value.

## Prerequisites

The session must have a storage subsystem created from an explicitly selected backend and application scope. Call the script facade within its active execution scope. The host selects the physical location; a game script should not construct an absolute path.

Choose a stable key such as `saves/slot-1.bin`. Rooted paths, `..`, current-directory segments and drive-qualified segments are rejected. Serialize the complete value using your application's schema before submitting it.

## Write a complete value

This helper uses the Runtime script projection. Compile it with the project's generated script references and call it from the active session. Pass cancellation from the owning operation.

```csharp
using System;
using System.Threading;
using System.Threading.Tasks;
using InnoEngine.Storage;

public static class SaveData
{
    public static async ValueTask SaveAsync(
        ReadOnlyMemory<byte> bytes,
        CancellationToken cancellationToken
    ) {
        StorageKey key = new("saves/slot-1.bin");
        await Storage.WriteAsync(key, bytes, cancellationToken);
    }

    public static ValueTask<byte[]?> LoadAsync(CancellationToken cancellationToken)
    {
        return Storage.ReadAsync(new StorageKey("saves/slot-1.bin"), cancellationToken);
    }
}
```

Awaiting the write observes its completion or failure. The runtime wrapper copies an accepted write before awaiting the backend, so later caller mutation cannot alter that operation's value. A raw provider service may have a different borrowing contract; use the session-owned boundary.

## Handle missing and invalid data

`ReadAsync` returns null when the key is absent. Treat that as a first-run or missing-save case according to your application. An empty byte array is a present empty value. Parsing failures, schema upgrades and recovery from invalid application data belong to your format; the storage service does not infer a save schema.

Use `ListAsync` for an ordinal key snapshot under an optional prefix. `DeleteAsync` reports false if the value was already absent. Neither listing nor a preceding existence check locks a key until a later read. A write/read sequence and multiple-key updates are not a transaction.

## Respect cancellation and retirement

The default runtime budget admits up to 128 concurrent operations and 64 MiB per write. Capacity exhaustion rejects work before invoking the backend. Decide whether to coalesce, defer or reject saves at your owning feature instead of launching unlimited untracked operations.

When the session retires, it cancels accepted work and keeps the backend alive until that work quiesces. Pending retirement must remain pending; do not dispose the service yourself to force completion. Await does not promise a continuation on an Editor/UI owner thread.

## Troubleshoot

- **No active storage scope:** check session composition and call timing. The facade does not create a fallback store.
- **Invalid key or namespace:** use a sandbox-relative key and let the host choose a valid application scope.
- **Read returns null:** verify the intended application/session namespace and key before assuming a write was lost.
- **Write rejected by budget:** reduce value size or coordinate accepted operations at the feature owner; this budget is distinct from disk quota.
- **Filesystem operation fails:** inspect permissions and rejected link/path components in the host-owned root. Do not bypass the boundary by writing to an arbitrary path from a script.

See [filesystem backend constraints](../../api/projects/inno-adapter-storage-filesystem.md) and [provider composition](../../api/projects/inno-adapter-storage.md) when configuring a host.
