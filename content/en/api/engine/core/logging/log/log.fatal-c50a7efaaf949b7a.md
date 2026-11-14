---
uid: api.c50a7efaaf949b7ab884c40bd4e11c01f28e61ed2c990bb4f655b2b46f98b9d4
symbol: "engine:Inno.Core.Logging:M:Inno.Core.Logging.Log.Fatal(System.Type,System.String,System.Collections.Generic.IReadOnlyList{System.Object},System.String,System.Int32)"
source: xml
reviewed: 0f5a1ee493c4e164fad5fd8cada6c4b3beef67dd748db4837a884c8efba1ded6
title: "Log.Fatal"
kind: api
owners: [Inno.Core.Logging]
apiSurface: source-clr
---

Writes a formatted fatal-level message with its source location.

**Parameter `sourceType`:** The declaring type whose assembly supplies domain and scope metadata; it is borrowed only for this call.

**Parameter `message`:** The composite format string or final message.

**Parameter `arguments`:** Optional composite-format arguments; null preserves the message verbatim.

**Parameter `filePath`:** The source file supplied by the compiler; its file name is the category.

**Parameter `lineNumber`:** The source line supplied by the compiler.

**Exception `T:System.FormatException`:** The composite format string is invalid for the supplied arguments.

**Exception `T:System.ArgumentNullException`:** The source type is null.

**Exception `T:System.InvalidOperationException`:** The source assembly lacks valid domain or scope metadata.
