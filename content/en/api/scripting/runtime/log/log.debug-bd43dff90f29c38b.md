---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.bd43dff90f29c38bed9e5b344dc4def9cc8189e1ad3ce2ede4b556df23e85006
symbol: scripting:Inno.Core.Logging:M:InnoEngine.Logging.Log.Debug(System.Type,System.Object,System.String,System.Int32)
title: Log.Debug
kind: api
owners:
- Inno.Core.Logging
apiSurface: editor-script
reviewed: 236bd0025ba522ce94e2f880b73c96335e8339bb355fa9640341160832226f4c
apiScope: Runtime
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
