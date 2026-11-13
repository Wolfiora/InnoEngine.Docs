---
title: Read retained artifact bytes
description: Open immutable asset output with a lease instead of borrowing a
  physical cache path.
uid: manual.assets.artifacts
kind: how-to
owners:
  - Inno.Assets
contracts:
  - project.inno-assets#artifact-reading-contract
exampleMode: host
exampleProjects:
  - Inno.Assets
---
# Read retained artifact bytes

An artifact is a named immutable output of asset processing. Acquire it through the asset/artifact lookup that owns the current generation, then read through the returned lease.

## Read within an explicit lifetime

This host helper borrows an already acquired lease. It owns only the stream it opens:

```csharp
using System.IO;
using Inno.Assets;

static int ReadFirstByte(ArtifactLease lease)
{
    using Stream input = lease.OpenRead();
    return input.ReadByte();
}
```

Each opened stream has an independent retention pin. The outer lease may be released while that stream finishes, but the stream itself must be closed. Keep lease ownership explicit at the caller; this helper does not release its borrowed argument.

## Respect content identity

`AssetArtifactInfo` gives the logical output name, complete key, hash and length, not a cache path. Do not bypass the lease by reopening a guessed artifact file. Lookup metadata checks and complete payload verification have different costs and guarantees; neither timestamps nor a same-length file substitution proves valid content.

Missing content and corrupt content fail visibly. Closing the provider prevents fresh acquisitions. A retained-key snapshot helps a coordinated collector protect output; it cannot prove that future readers are absent or authorize deleting the owner directory.
