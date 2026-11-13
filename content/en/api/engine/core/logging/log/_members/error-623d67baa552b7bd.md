---
uid: api.623d67baa552b7bd2c93e23a43cded95bb6d0ea0a3ae3d0bda74e863937cd51b
symbol: "engine:Inno.Core.Logging:M:Inno.Core.Logging.Log.Error(System.Type,System.Object,System.String,System.Int32)"
source: xml
reviewed: d0b0c813680666d03c09a72dcc8ed37c6bae4f38c7166ecfc31170321cd62cbe
title: "Error"
kind: api
owners: [Inno.Core.Logging]
apiSurface: source-clr
---

Writes a error-level message using the object's string representation.

**Parameter `sourceType`:** The declaring type whose assembly supplies domain and scope metadata; it is borrowed only for this call.

**Parameter `obj`:** The object to log; null produces an empty message.

**Parameter `filePath`:** The source file supplied by the compiler; its file name is the category.

**Parameter `lineNumber`:** The source line supplied by the compiler.

**Exception `T:System.ArgumentNullException`:** The source type is null.

**Exception `T:System.InvalidOperationException`:** The source assembly lacks valid domain or scope metadata.
