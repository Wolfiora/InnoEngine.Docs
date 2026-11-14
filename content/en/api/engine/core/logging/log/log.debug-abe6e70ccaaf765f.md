---
uid: api.abe6e70ccaaf765feab132d81a39083e36c7884e2dfb13bed412197f16befd8a
symbol: "engine:Inno.Core.Logging:M:Inno.Core.Logging.Log.Debug(System.Type,System.String,System.Collections.Generic.IReadOnlyList{System.Object},System.String,System.Int32)"
source: xml
reviewed: 4479504b780fa1238459eac958d64007e3d28fba948d73af473ceefdba3d9cc4
title: "Log.Debug"
kind: api
owners: [Inno.Core.Logging]
apiSurface: source-clr
---

Writes a formatted debug-level message with its source location.

## Parameters

**Parameter `sourceType`:** The declaring type whose assembly supplies domain and scope metadata; it is borrowed only for this call.

**Parameter `message`:** The composite format string or final message.

**Parameter `arguments`:** Optional composite-format arguments; null preserves the message verbatim.

**Parameter `filePath`:** The source file supplied by the compiler; its file name is the category.

**Parameter `lineNumber`:** The source line supplied by the compiler.

## Exceptions

**Exception `T:System.FormatException`:** The composite format string is invalid for the supplied arguments.

**Exception `T:System.ArgumentNullException`:** The source type is null.

**Exception `T:System.InvalidOperationException`:** The source assembly lacks valid domain or scope metadata.
