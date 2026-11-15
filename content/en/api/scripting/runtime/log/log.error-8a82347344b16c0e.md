---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.8a82347344b16c0ee6929433c1eefd29016168a84a4a9925b507f56342c2a255
symbol: scripting:Inno.Core.Logging:M:InnoEngine.Logging.Log.Error(System.Type,System.String,System.Collections.Generic.IReadOnlyList{System.Object},System.String,System.Int32)
title: Log.Error
kind: api
owners:
- Inno.Core.Logging
apiSurface: editor-script
reviewed: 948bed7991c4485a5955ffd1bce2d0b5dd83f32e1e3fda57f0373c8a06d1ea5d
apiScope: Runtime

# Authoring metadata. Edit these fields and the explanation below.
source: xml
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
