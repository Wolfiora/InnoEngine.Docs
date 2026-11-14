---
uid: api.bd43dff90f29c38bed9e5b344dc4def9cc8189e1ad3ce2ede4b556df23e85006
symbol: "scripting:Inno.Core.Logging:M:InnoEngine.Logging.Log.Debug(System.Type,System.Object,System.String,System.Int32)"
source: xml
reviewed: 5245c390fe9a0c76887d0aaa6721860f3548c3b92bb17a8df1d15ffe48ebce12
title: "Log.Debug"
kind: api
owners: [Inno.Core.Logging]
apiSurface: editor-script
apiScope: Runtime
---

Writes a debug-level message using the object's string representation.

## Parameters

**Parameter `sourceType`:** The declaring type whose assembly supplies domain and scope metadata; it is borrowed only for this call.

**Parameter `obj`:** The object to log; null produces an empty message.

**Parameter `filePath`:** The source file supplied by the compiler; its file name is the category.

**Parameter `lineNumber`:** The source line supplied by the compiler.

## Exceptions

**Exception `T:System.ArgumentNullException`:** The source type is null.

**Exception `T:System.InvalidOperationException`:** The source assembly lacks valid domain or scope metadata.
