---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.9c8f4071722a72b35d0f4ef4f12e1bb08a3836da377dfe5d1cc15103abcf1c98
symbol: scripting:Inno.Core.Logging:M:InnoEngine.Logging.Log.Info(System.Type,System.String,System.Collections.Generic.IReadOnlyList{System.Object},System.String,System.Int32)
title: Log.Info
kind: api
owners:
- Inno.Core.Logging
apiSurface: editor-script
sourceFingerprint: bd12c3de0cda7ed3dab952f11e93665ddcc160e66fe1dcef12cf5c01de296862
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
