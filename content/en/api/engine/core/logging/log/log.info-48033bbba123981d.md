---
uid: api.48033bbba123981d882b1478f998f6e68ef1fe53380fc21a646733ba8df32b6b
symbol: "engine:Inno.Core.Logging:M:Inno.Core.Logging.Log.Info(System.Type,System.String,System.Collections.Generic.IReadOnlyList{System.Object},System.String,System.Int32)"
source: xml
reviewed: 1d317afdb87b8c447b1c22457d4425546e5be4f40f15ad3b7fcf90adb93709f7
title: "Log.Info"
kind: api
owners: [Inno.Core.Logging]
apiSurface: source-clr
---

Writes a formatted info-level message with its source location.

**Parameter `sourceType`:** The declaring type whose assembly supplies domain and scope metadata; it is borrowed only for this call.

**Parameter `message`:** The composite format string or final message.

**Parameter `arguments`:** Optional composite-format arguments; null preserves the message verbatim.

**Parameter `filePath`:** The source file supplied by the compiler; its file name is the category.

**Parameter `lineNumber`:** The source line supplied by the compiler.

**Exception `T:System.FormatException`:** The composite format string is invalid for the supplied arguments.

**Exception `T:System.ArgumentNullException`:** The source type is null.

**Exception `T:System.InvalidOperationException`:** The source assembly lacks valid domain or scope metadata.
