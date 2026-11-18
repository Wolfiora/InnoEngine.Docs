---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.c50a7efaaf949b7ab884c40bd4e11c01f28e61ed2c990bb4f655b2b46f98b9d4
symbol: engine:Inno.Core.Logging:M:Inno.Core.Logging.Log.Fatal(System.Type,System.String,System.Collections.Generic.IReadOnlyList{System.Object},System.String,System.Int32)
title: Log.Fatal
kind: api
owners:
- Inno.Core.Logging
apiSurface: source-clr
sourceFingerprint: 6e636393b351dfbb3f96c70a9593da5984ade981a52c7e78659ab48e4381ac29
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
