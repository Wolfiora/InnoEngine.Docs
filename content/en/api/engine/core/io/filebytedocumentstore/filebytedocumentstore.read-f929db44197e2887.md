---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.f929db44197e28875bcdc9c82a987b22fd7a7d9588ec10a0fc0b44952adead46
symbol: engine:Inno.Core.IO:M:Inno.Core.IO.FileByteDocumentStore.Read
title: FileByteDocumentStore.Read
kind: api
owners:
- Inno.Core.IO
apiSurface: source-clr
sourceFingerprint: 09ef83e42c2d55d92e053bc792beedb9b8e2b40104c90f20c0e4721cdec721c7
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Returns

Owned document bytes, or null when no document exists; an empty document remains distinct from absence.

## Exceptions

**Exception `T:System.IO.IOException`:** The document cannot be read completely or exceeds the maximum supported byte-array size.

**Exception `T:System.UnauthorizedAccessException`:** The selected location denies reading or names a directory instead of a document.

## Remarks

One rename-compatible handle pins the selected complete publication until its owned bytes are read. Writers must atomically replace the document rather than modify the selected file in place.
