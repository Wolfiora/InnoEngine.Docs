---
title: Storage admission and persistence tests
description: Portable scopes, atomic filesystem writes, cancellation ownership and frame-bound storage access.
uid: project.inno-storage-tests
kind: project
owners:
  - Inno.Storage.Tests
---
# Storage admission and persistence tests

`Inno.Storage.Tests` exercises storage values, the managed filesystem adapter and runtime composition. It uses real fixture-owned files for persistence checks and controllable boundaries for admission and cancellation. Start with [persistent storage](../../../manual/storage/save-data.md).

## Behavior covered

`StorageTests` verifies:

- Portable scope names and rejection of escaping or ambiguous keys.
- An explicitly selected volume root and atomic store/list behavior.
- Admission rejection before backend work, and ownership of accepted write bytes.
- Runtime cancellation retaining the backend until an accepted write completes.
- Adapter disposal preserving the semaphore still used by an active write.
- Last-in-first-out execution scopes and storage binding for the complete runtime frame.

Cancellation is not permission to destroy resources still required by accepted work. Assertions inspect this boundary rather than treating a canceled caller as proof that the write has stopped.

## Run and maintain

Follow [the shared validation workflow](../../validate-change.md). A focused diagnostic is:

```powershell
dotnet test tests/storage/Inno.Storage.Tests/Inno.Storage.Tests.csproj --configuration Debug --disable-build-servers -m:1 -nodeReuse:false
```

Drain accepted operations before removing fixture-owned directories. Test methods are infrastructure, not product or script exports.

[Read the scenarios and project references](https://github.com/Wolfiora/InnoEngine/tree/80fbbb550f0de634b04605b31abc4d96b3d526f6/tests/storage/Inno.Storage.Tests).
