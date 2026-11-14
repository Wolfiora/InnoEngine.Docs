---
uid: api.921187d54cf5f5cc142467526313dfc78abc7fa4256958318e4363c825bfb4bb
symbol: "engine:Inno.Core.Logging:M:Inno.Core.Logging.Log.Debug(System.Type,System.Object,System.String,System.Int32)"
source: xml
reviewed: 4166f3dfc02206db0abdb68792ea9f0f63afa36e7f4dcee1fb87ea811ea3cacb
title: "Log.Debug"
kind: api
owners: [Inno.Core.Logging]
apiSurface: source-clr
---

Writes a debug-level message using the object's string representation.

**Parameter `sourceType`:** The declaring type whose assembly supplies domain and scope metadata; it is borrowed only for this call.

**Parameter `obj`:** The object to log; null produces an empty message.

**Parameter `filePath`:** The source file supplied by the compiler; its file name is the category.

**Parameter `lineNumber`:** The source line supplied by the compiler.

**Exception `T:System.ArgumentNullException`:** The source type is null.

**Exception `T:System.InvalidOperationException`:** The source assembly lacks valid domain or scope metadata.
