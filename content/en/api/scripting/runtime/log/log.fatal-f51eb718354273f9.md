---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.f51eb718354273f95fd49ae4eb877c12c862148858300a04bf3a35dea42648de
symbol: scripting:Inno.Core.Logging:M:InnoEngine.Logging.Log.Fatal(System.Type,System.String,System.Collections.Generic.IReadOnlyList{System.Object},System.String,System.Int32)
title: Log.Fatal
kind: api
owners:
- Inno.Core.Logging
apiSurface: editor-script
reviewed: 52112ba017c3f29e2ba2fa2f53d7818effdbaaee7c9431acab8547feabeebd37
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
