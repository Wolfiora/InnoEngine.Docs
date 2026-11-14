---
uid: api.f929db44197e28875bcdc9c82a987b22fd7a7d9588ec10a0fc0b44952adead46
symbol: "engine:Inno.Core.IO:M:Inno.Core.IO.FileByteDocumentStore.Read"
source: xml
reviewed: 52835d24f49112d3a540e3be57a59fc33ebfea083d5286d0e01b3d4ac1b4ceef
title: "FileByteDocumentStore.Read"
kind: api
owners: [Inno.Core.IO]
apiSurface: source-clr
---

Obtains a newly owned complete document snapshot.

## Returns

Owned document bytes, or null when no document exists; an empty document remains distinct from absence.

## Remarks

One rename-compatible handle pins the selected complete publication until its owned bytes are read. Writers must atomically replace the document rather than modify the selected file in place.

## Exceptions

**Exception `T:System.IO.IOException`:** The document cannot be read completely or exceeds the maximum supported byte-array size.

**Exception `T:System.UnauthorizedAccessException`:** The selected location denies reading or names a directory instead of a document.
