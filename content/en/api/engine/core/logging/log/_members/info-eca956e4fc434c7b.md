---
uid: api.eca956e4fc434c7b635d965e42744b14e76a947669f9aeb4a569cf3131b0afe0
symbol: "engine:Inno.Core.Logging:M:Inno.Core.Logging.Log.Info(System.Type,System.Object,System.String,System.Int32)"
source: xml
reviewed: 1395952e725445ad22c40f47765682b7b88c922d33f96af1f063cf2121f9d3c6
title: "Info"
kind: api
owners: [Inno.Core.Logging]
apiSurface: source-clr
---

Writes a info-level message using the object's string representation.

**Parameter `sourceType`:** The declaring type whose assembly supplies domain and scope metadata; it is borrowed only for this call.

**Parameter `obj`:** The object to log; null produces an empty message.

**Parameter `filePath`:** The source file supplied by the compiler; its file name is the category.

**Parameter `lineNumber`:** The source line supplied by the compiler.

**Exception `T:System.ArgumentNullException`:** The source type is null.

**Exception `T:System.InvalidOperationException`:** The source assembly lacks valid domain or scope metadata.
