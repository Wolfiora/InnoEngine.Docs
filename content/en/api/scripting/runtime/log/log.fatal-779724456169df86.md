---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.779724456169df86e18fec9afeea7ee6b7a4ef42a21d35fb5fd55caf52d7ed8d
symbol: scripting:Inno.Core.Logging:M:InnoEngine.Logging.Log.Fatal(System.Type,System.Object,System.String,System.Int32)
title: Log.Fatal
kind: api
owners:
- Inno.Core.Logging
apiSurface: editor-script
reviewed: 3ef6c42b5e5954a9084b34ae683e6c28c8d1882019b438e1792fb960463c5959
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
