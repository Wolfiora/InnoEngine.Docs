---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.9c8f4071722a72b35d0f4ef4f12e1bb08a3836da377dfe5d1cc15103abcf1c98
symbol: scripting:Inno.Core.Logging:M:InnoEngine.Logging.Log.Info(System.Type,System.String,System.Collections.Generic.IReadOnlyList{System.Object},System.String,System.Int32)
title: Log.Info
kind: api
owners:
- Inno.Core.Logging
apiSurface: editor-script
reviewed: 078d490d2b30a8c9a3be9f3ccd1549bb830c3de6607fa29e4da951c803d7f555
apiScope: Runtime
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

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
