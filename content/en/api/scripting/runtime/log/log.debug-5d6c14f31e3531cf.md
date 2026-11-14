---
uid: api.5d6c14f31e3531cfb590937431bf1ebd847c400a9300e3871d37bfe436009368
symbol: "scripting:Inno.Core.Logging:M:InnoEngine.Logging.Log.Debug(System.Type,System.String,System.Collections.Generic.IReadOnlyList{System.Object},System.String,System.Int32)"
source: xml
reviewed: eacc3d3f8bf084ec505a51b9dc0efa927b8f451a500d7fdeb998231e1672d890
title: "Log.Debug"
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
