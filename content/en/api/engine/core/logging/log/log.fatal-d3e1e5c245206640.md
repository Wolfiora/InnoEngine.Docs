---
uid: api.d3e1e5c245206640392d754e05d88dba4f4ec522df53889be0ef8f3df1e7dbf3
symbol: "engine:Inno.Core.Logging:M:Inno.Core.Logging.Log.Fatal(System.Type,System.Object,System.String,System.Int32)"
source: xml
reviewed: 636f19bbe526f7603ca8e069ded6d171bff46c0b4b5b0f8e55a6c14b12b74878
title: "Log.Fatal"
kind: api
owners: [Inno.Core.Logging]
apiSurface: source-clr
---

Writes a fatal-level message using the object's string representation.

**Parameter `sourceType`:** The declaring type whose assembly supplies domain and scope metadata; it is borrowed only for this call.

**Parameter `obj`:** The object to log; null produces an empty message.

**Parameter `filePath`:** The source file supplied by the compiler; its file name is the category.

**Parameter `lineNumber`:** The source line supplied by the compiler.

**Exception `T:System.ArgumentNullException`:** The source type is null.

**Exception `T:System.InvalidOperationException`:** The source assembly lacks valid domain or scope metadata.
