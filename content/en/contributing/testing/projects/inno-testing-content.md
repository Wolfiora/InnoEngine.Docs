---
# Generated metadata. Maintained by project synchronization tooling.
uid: project.inno-testing-content
symbol: project:Inno.Testing.Content
title: Inno.Testing.Content
kind: project
owners:
- Inno.Testing.Content
sourceFingerprint: 6d5fe8f26a89f46b02764f0907c34c87925a9afdf55614a9cda98b9147204135
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: FLwolfy
description:
- Test the real content-provider contract with frozen metadata and explicit corruption.
outdated: false
exampleMode: host
exampleProjects:
- Inno.Testing.Content
- Inno.Content
---
# Inno.Testing.Content

`Inno.Testing.Content` supplies `ContentTestStore`, a test implementation of the actual `IRuntimeContentStore` boundary. Use it when a contract needs controlled payloads or corruption without tying the consumer to a filesystem.

## Use a retained reader

The constructor copies input bytes and freezes lengths, hashes and the inventory. This example opens a reader before replacing the store's future payload:

```csharp
using System.Collections.Generic;
using System.IO;
using Inno.Content;
using Inno.Testing.Content;

static int ReadOriginalPayload()
{
    var key = new ContentKey("Data/pinned.bin");
    using var store = new ContentTestStore(
        new Dictionary<ContentKey, byte[]> { [key] = new byte[] { 7, 9 } });
    using ContentReadLease lease = store.Acquire(key);
    using Stream input = lease.OpenRead();
    store.CorruptPayload(key, new byte[] { 1, 2 });
    return input.ReadByte();
}
```

The existing reader returns the originally pinned first byte, 7. Corruption injection replaces a copy for later acquisitions while deliberately preserving old metadata, allowing integrity checks to detect the mismatch.

## Ownership and failure

The caller owns the store, each acquired lease and each opened stream. Closing the store rejects future reads or corruption and clears its own references; previously borrowed leases and streams retain their original bytes and must still be released by their readers. Coordinate reads, writes and disposal serially when mutating this test store.

`FromDirectory` copies every file into memory and retains no dependency on that directory. Filesystem failures propagate. Duplicate input keys fail during dictionary construction. `CorruptPayload` rejects an unknown key with `KeyNotFoundException` and a disposed store with `ObjectDisposedException`.

This is a reusable public support contract, not a shipped plugin API. [Content tests](inno-content-tests.md) exercise it through real consumers; an independent `dotnet test` invocation on this library is not acceptance.

## API reference

[Types and exact member contracts](inno-testing-content.md). These declarations describe this support library, not a product or script API surface.
