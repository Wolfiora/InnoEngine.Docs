---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.d76ea218c1a3953be15213597e651cda9dbe625e8233447bb4e48d5e1dd3c966
symbol: scripting:Inno.Core.Logging:M:InnoEngine.Logging.Log.Error(System.Type,System.Object,System.String,System.Int32)
title: Log.Error
kind: api
owners:
- Inno.Core.Logging
apiSurface: editor-script
sourceFingerprint: a2adc4905a5b40fd3c9732a02a34ff2c651a7939b5e31f043e76307f8117bd19
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
