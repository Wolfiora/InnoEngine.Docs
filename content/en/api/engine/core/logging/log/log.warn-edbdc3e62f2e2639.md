---
uid: api.edbdc3e62f2e2639d635d902222d0e49318063055c8ed78a21ae1f48465f9b30
symbol: "engine:Inno.Core.Logging:M:Inno.Core.Logging.Log.Warn(System.Type,System.String,System.Collections.Generic.IReadOnlyList{System.Object},System.String,System.Int32)"
source: xml
reviewed: f3a60fa1fb09ee5c6c5477ed83f81248897ce55c8eefe01627ca300851e2fb5f
title: "Log.Warn"
kind: api
owners: [Inno.Core.Logging]
apiSurface: source-clr
---

Writes a formatted warn-level message with its source location.

**Parameter `sourceType`:** The declaring type whose assembly supplies domain and scope metadata; it is borrowed only for this call.

**Parameter `message`:** The composite format string or final message.

**Parameter `arguments`:** Optional composite-format arguments; null preserves the message verbatim.

**Parameter `filePath`:** The source file supplied by the compiler; its file name is the category.

**Parameter `lineNumber`:** The source line supplied by the compiler.

**Exception `T:System.FormatException`:** The composite format string is invalid for the supplied arguments.

**Exception `T:System.ArgumentNullException`:** The source type is null.

**Exception `T:System.InvalidOperationException`:** The source assembly lacks valid domain or scope metadata.
