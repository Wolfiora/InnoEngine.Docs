---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.edbdc3e62f2e2639d635d902222d0e49318063055c8ed78a21ae1f48465f9b30
symbol: engine:Inno.Core.Logging:M:Inno.Core.Logging.Log.Warn(System.Type,System.String,System.Collections.Generic.IReadOnlyList{System.Object},System.String,System.Int32)
title: Log.Warn
kind: api
owners:
- Inno.Core.Logging
apiSurface: source-clr
reviewed: 72ed73e6b48a81d766542104feea65c1a879eeeea1fec0a302fc0122b2f0570b
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
