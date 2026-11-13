---
uid: api.f577347a5478b7e466556805a4dc1a8c8af00b7f627cb69f7485efe79a4be22a
symbol: "engine:Inno.Core.IO:M:Inno.Core.IO.AtomicFile.WriteAllBytes(System.String,System.ReadOnlySpan{System.Byte},System.Boolean)"
source: xml
reviewed: dbe97892d5cd17614a78b9158acc3e2cfc876d90a618faf52d6c645770332d1c
title: "WriteAllBytes"
kind: api
owners: [Inno.Core.IO]
apiSurface: source-clr
---

Writes a complete byte payload and atomically installs it at the destination.

**Parameter `path`:** The destination file path.

**Parameter `data`:** The complete file payload.

**Parameter `overwrite`:** Whether an existing destination may be replaced; false atomically rejects name collisions.

**Exception `T:System.IO.IOException`:** Publication or cleanup fails, the destination already exists in create-only mode, or the filesystem cannot atomically publish a complete file. No copy fallback exposes partial content.

**Exception `T:System.PlatformNotSupportedException`:** The host does not provide an atomic create-only filesystem primitive.
