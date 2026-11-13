---
uid: api.f577347a5478b7e466556805a4dc1a8c8af00b7f627cb69f7485efe79a4be22a
symbol: "engine:Inno.Core.IO:M:Inno.Core.IO.AtomicFile.WriteAllBytes(System.String,System.ReadOnlySpan{System.Byte},System.Boolean)"
source: xml
reviewed: c261b2720bf24a012c4b25ca32abbccae005c6c522c1fd54d15025c3480855d8
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
