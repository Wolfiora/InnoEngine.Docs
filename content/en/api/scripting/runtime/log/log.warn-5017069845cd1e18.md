---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.5017069845cd1e1890ef97a2299ef01d1759549cb9ac0bd0374efe81a71b37d2
symbol: scripting:Inno.Core.Logging:M:InnoEngine.Logging.Log.Warn(System.Type,System.Object,System.String,System.Int32)
title: Log.Warn
kind: api
owners:
- Inno.Core.Logging
apiSurface: editor-script
reviewed: 3de963ccd7603726185a9c621c6c4f29486403d0046f780f6d5ef30b31432ad3
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
