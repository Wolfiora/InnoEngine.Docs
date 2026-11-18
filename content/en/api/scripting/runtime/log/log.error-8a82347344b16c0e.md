---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.8a82347344b16c0ee6929433c1eefd29016168a84a4a9925b507f56342c2a255
symbol: scripting:Inno.Core.Logging:M:InnoEngine.Logging.Log.Error(System.Type,System.String,System.Collections.Generic.IReadOnlyList{System.Object},System.String,System.Int32)
title: Log.Error
kind: api
owners:
- Inno.Core.Logging
apiSurface: editor-script
sourceFingerprint: 99236efcf14285c5cfcde2dd71637625f88c0ebb41e5fc6fc1f4fff14e63712b
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
