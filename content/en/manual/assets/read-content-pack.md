---
title: Open a verified deployment content pack
description: Transfer pack ownership to a verified store and read logical
  entries through independent leases.
uid: manual.assets.content-pack
kind: how-to
owners:
  - Inno.Content
contracts:
  - project.inno-content#content-ownership-contract
exampleMode: host
exampleProjects:
  - Inno.Content
  - Inno.Core.Serialization
---
# Open a verified deployment content pack

Use the Content layer when composing a runtime host that receives a deployed pack. Ordinary gameplay code should use asset services instead of opening archives directly.

## Prerequisites

Obtain the expected `ContentPackDescriptor` from validated deployment metadata, capture the appropriate serialization generation, and supply a readable, seekable stream whose ownership can be transferred. The example assumes the declared content includes `Data/example.bin`:

```csharp
using System.IO;
using Inno.Content;
using Inno.Core.Serialization;

static int ReadFirstByte(
    Stream ownedPack,
    ContentPackDescriptor descriptor,
    SerializationGeneration serialization
) {
    using PackContentStore content = ContentPackReader.Open(ownedPack, descriptor, serialization);
    using ContentReadLease lease = content.Acquire(new ContentKey("Data/example.bin"));
    using Stream input = lease.OpenRead();
    return input.ReadByte();
}
```

The reader takes ownership of `ownedPack` even if validation fails. Do not reuse the stream afterward. It verifies the encoded pack, complete index, decoded entry contents and finite budgets before returning a store. Supply explicit `ContentReadLimits` when your host needs a different supported budget; do not bypass validation for a large archive.

## Finish in dependency order

Retire runtime services before closing the host's store. Closing blocks new acquisitions, while already acquired leases and streams finish through their independent pins. The final pin releases the archive. Reads retain separate cursors with internal synchronization; callers do not share a raw archive position.

Invalid hashes, missing entries, unsafe paths and expansion limits are errors. Preserve the failing identity and deployment diagnostic instead of substituting an empty entry or borrowing content from a different build.
