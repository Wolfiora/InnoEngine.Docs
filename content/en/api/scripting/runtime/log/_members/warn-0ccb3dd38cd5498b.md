---
uid: api.0ccb3dd38cd5498b8f0f691158094728d4a084fccdef3a085b299b927c46bcb6
symbol: "scripting:Inno.Core.Logging:M:InnoEngine.Logging.Log.Warn(System.Type,System.String,System.Collections.Generic.IReadOnlyList{System.Object},System.String,System.Int32)"
source: xml
reviewed: 9d702d521e878783ff952d13dc270c95fa137c4d879e1b0b893f934b71759adb
title: "Warn"
kind: api
owners: [Inno.Core.Logging]
apiSurface: editor-script
apiScope: Runtime
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
