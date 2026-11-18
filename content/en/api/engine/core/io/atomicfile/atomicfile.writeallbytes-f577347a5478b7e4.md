---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.f577347a5478b7e466556805a4dc1a8c8af00b7f627cb69f7485efe79a4be22a
symbol: engine:Inno.Core.IO:M:Inno.Core.IO.AtomicFile.WriteAllBytes(System.String,System.ReadOnlySpan{System.Byte},System.Boolean)
title: AtomicFile.WriteAllBytes
kind: api
owners:
- Inno.Core.IO
apiSurface: source-clr
sourceFingerprint: 83eeb9a624fd9926fd35a5eb3344b53d10d9a6e90101f4b73d2b0e5eb967617f
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `path`:** The destination file path.

**Parameter `data`:** The complete file payload.

**Parameter `overwrite`:** Whether an existing destination may be replaced; false atomically rejects name collisions.

## Exceptions

**Exception `T:System.IO.IOException`:** Publication or cleanup fails, the destination already exists in create-only mode, or the filesystem cannot atomically publish a complete file. No copy fallback exposes partial content.

**Exception `T:System.PlatformNotSupportedException`:** The host does not provide an atomic create-only filesystem primitive.
