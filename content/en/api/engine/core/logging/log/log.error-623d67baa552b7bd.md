---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.623d67baa552b7bd2c93e23a43cded95bb6d0ea0a3ae3d0bda74e863937cd51b
symbol: engine:Inno.Core.Logging:M:Inno.Core.Logging.Log.Error(System.Type,System.Object,System.String,System.Int32)
title: Log.Error
kind: api
owners:
- Inno.Core.Logging
apiSurface: source-clr
sourceFingerprint: 9249aeea6d40d9938342372f63ec6dd78fad69c35e0d3ec0132e9a2fc8ab93f5
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
