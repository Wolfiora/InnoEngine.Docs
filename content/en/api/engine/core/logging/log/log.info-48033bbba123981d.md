---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.48033bbba123981d882b1478f998f6e68ef1fe53380fc21a646733ba8df32b6b
symbol: engine:Inno.Core.Logging:M:Inno.Core.Logging.Log.Info(System.Type,System.String,System.Collections.Generic.IReadOnlyList{System.Object},System.String,System.Int32)
title: Log.Info
kind: api
owners:
- Inno.Core.Logging
apiSurface: source-clr
sourceFingerprint: a89310aa80a81faa81c517f192f223ed4fd29f3245fe7873a0470eceec830aa8
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
