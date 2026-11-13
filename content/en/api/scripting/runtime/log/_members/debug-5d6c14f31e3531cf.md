---
uid: api.5d6c14f31e3531cfb590937431bf1ebd847c400a9300e3871d37bfe436009368
symbol: "scripting:Inno.Core.Logging:M:InnoEngine.Logging.Log.Debug(System.Type,System.String,System.Collections.Generic.IReadOnlyList{System.Object},System.String,System.Int32)"
source: xml
reviewed: 382132c71f1381b23d5179fee0d95884fd3860f8afb5be5cd2c6e1f17c2b7bb9
title: "Debug"
kind: api
owners: [Inno.Core.Logging]
apiSurface: editor-script
apiScope: Runtime
---

Writes a formatted debug-level message with its source location.

**Parameter `sourceType`:** The declaring type whose assembly supplies domain and scope metadata; it is borrowed only for this call.

**Parameter `message`:** The composite format string or final message.

**Parameter `arguments`:** Optional composite-format arguments; null preserves the message verbatim.

**Parameter `filePath`:** The source file supplied by the compiler; its file name is the category.

**Parameter `lineNumber`:** The source line supplied by the compiler.

**Exception `T:System.FormatException`:** The composite format string is invalid for the supplied arguments.

**Exception `T:System.ArgumentNullException`:** The source type is null.

**Exception `T:System.InvalidOperationException`:** The source assembly lacks valid domain or scope metadata.
