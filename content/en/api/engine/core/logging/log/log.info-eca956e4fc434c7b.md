---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.eca956e4fc434c7b635d965e42744b14e76a947669f9aeb4a569cf3131b0afe0
symbol: engine:Inno.Core.Logging:M:Inno.Core.Logging.Log.Info(System.Type,System.Object,System.String,System.Int32)
title: Log.Info
kind: api
owners:
- Inno.Core.Logging
apiSurface: source-clr
sourceFingerprint: 1670671b3cdc9fd04ce20372147db617743c07b621ba7912b9ae617c052b1aca
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `sourceType`:** The declaring type whose assembly supplies domain and scope metadata; it is borrowed only for this call.

**Parameter `obj`:** The object to log; null produces an empty message.

**Parameter `filePath`:** The source file supplied by the compiler; its file name is the category.

**Parameter `lineNumber`:** The source line supplied by the compiler.

## Exceptions

**Exception `T:System.ArgumentNullException`:** The source type is null.

**Exception `T:System.InvalidOperationException`:** The source assembly lacks valid domain or scope metadata.
