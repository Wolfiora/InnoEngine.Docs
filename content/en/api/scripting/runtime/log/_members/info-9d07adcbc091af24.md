---
uid: api.9d07adcbc091af240307f7571b0cdc504eee0a13ffdb43a7590be9df5933f5f0
symbol: "scripting:Inno.Core.Logging:M:InnoEngine.Logging.Log.Info(System.Type,System.Object,System.String,System.Int32)"
source: xml
reviewed: 1e0e14a5209633ca0da86d552c5cc399b857c007c8125b3a774e7c0b68904fb0
title: "Info"
kind: api
owners: [Inno.Core.Logging]
apiSurface: editor-script
apiScope: Runtime
---

Writes a info-level message using the object's string representation.

**Parameter `sourceType`:** The declaring type whose assembly supplies domain and scope metadata; it is borrowed only for this call.

**Parameter `obj`:** The object to log; null produces an empty message.

**Parameter `filePath`:** The source file supplied by the compiler; its file name is the category.

**Parameter `lineNumber`:** The source line supplied by the compiler.

**Exception `T:System.ArgumentNullException`:** The source type is null.

**Exception `T:System.InvalidOperationException`:** The source assembly lacks valid domain or scope metadata.
