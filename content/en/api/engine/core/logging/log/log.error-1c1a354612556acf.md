---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.1c1a354612556acfffcb7abf5bfe07e6b8c018a3df0c76f332a3c4cac8e6bf69
symbol: engine:Inno.Core.Logging:M:Inno.Core.Logging.Log.Error(System.Type,System.String,System.Collections.Generic.IReadOnlyList{System.Object},System.String,System.Int32)
title: Log.Error
kind: api
owners:
- Inno.Core.Logging
apiSurface: source-clr
reviewed: ab3ccaf538747f1f732a992b54bbdf246728b0372875b610df4aedb6d6561f65
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
