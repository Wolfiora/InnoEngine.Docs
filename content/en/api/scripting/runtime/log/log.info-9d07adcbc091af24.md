---
uid: api.9d07adcbc091af240307f7571b0cdc504eee0a13ffdb43a7590be9df5933f5f0
symbol: "scripting:Inno.Core.Logging:M:InnoEngine.Logging.Log.Info(System.Type,System.Object,System.String,System.Int32)"
source: xml
reviewed: 0ff9967e97eca64f3fda57cae5e0fe56f09951dc0283e2965814e5c19ea2191c
title: "Log.Info"
kind: api
owners: [Inno.Core.Logging]
apiSurface: editor-script
apiScope: Runtime
---

Writes a info-level message using the object's string representation.

## Parameters

**Parameter `sourceType`:** The declaring type whose assembly supplies domain and scope metadata; it is borrowed only for this call.

**Parameter `obj`:** The object to log; null produces an empty message.

**Parameter `filePath`:** The source file supplied by the compiler; its file name is the category.

**Parameter `lineNumber`:** The source line supplied by the compiler.

## Exceptions

**Exception `T:System.ArgumentNullException`:** The source type is null.

**Exception `T:System.InvalidOperationException`:** The source assembly lacks valid domain or scope metadata.
