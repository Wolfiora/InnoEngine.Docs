---
uid: api.bd43dff90f29c38bed9e5b344dc4def9cc8189e1ad3ce2ede4b556df23e85006
symbol: "scripting:Inno.Core.Logging:M:InnoEngine.Logging.Log.Debug(System.Type,System.Object,System.String,System.Int32)"
source: xml
reviewed: a22196eb6569d37791070cb0b111e2a136fbf6268c8f98a7e940ad0aca83174a
title: "Debug"
kind: api
owners: [Inno.Core.Logging]
apiSurface: editor-script
apiScope: Runtime
---

Writes a debug-level message using the object's string representation.

**Parameter `sourceType`:** The declaring type whose assembly supplies domain and scope metadata; it is borrowed only for this call.

**Parameter `obj`:** The object to log; null produces an empty message.

**Parameter `filePath`:** The source file supplied by the compiler; its file name is the category.

**Parameter `lineNumber`:** The source line supplied by the compiler.

**Exception `T:System.ArgumentNullException`:** The source type is null.

**Exception `T:System.InvalidOperationException`:** The source assembly lacks valid domain or scope metadata.
