---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.9d07adcbc091af240307f7571b0cdc504eee0a13ffdb43a7590be9df5933f5f0
symbol: scripting:Inno.Core.Logging:M:InnoEngine.Logging.Log.Info(System.Type,System.Object,System.String,System.Int32)
title: Log.Info
kind: api
owners:
- Inno.Core.Logging
apiSurface: editor-script
reviewed: 4efa2532db1a745618e13cb5fdf414cec0e81540d8ed8b9af2da81f6dcceac92
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
