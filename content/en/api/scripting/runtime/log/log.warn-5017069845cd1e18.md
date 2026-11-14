---
uid: api.5017069845cd1e1890ef97a2299ef01d1759549cb9ac0bd0374efe81a71b37d2
symbol: "scripting:Inno.Core.Logging:M:InnoEngine.Logging.Log.Warn(System.Type,System.Object,System.String,System.Int32)"
source: xml
reviewed: 3988fb2b2a4ccc19d75dc166cdfb3a3451a8dd4571e2e01bc746f4dcc532002d
title: "Log.Warn"
kind: api
owners: [Inno.Core.Logging]
apiSurface: editor-script
apiScope: Runtime
---

Writes a warn-level message using the object's string representation.

## Parameters

**Parameter `sourceType`:** The declaring type whose assembly supplies domain and scope metadata; it is borrowed only for this call.

**Parameter `obj`:** The object to log; null produces an empty message.

**Parameter `filePath`:** The source file supplied by the compiler; its file name is the category.

**Parameter `lineNumber`:** The source line supplied by the compiler.

## Exceptions

**Exception `T:System.ArgumentNullException`:** The source type is null.

**Exception `T:System.InvalidOperationException`:** The source assembly lacks valid domain or scope metadata.
