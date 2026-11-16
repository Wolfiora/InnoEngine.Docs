---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.0ccb3dd38cd5498b8f0f691158094728d4a084fccdef3a085b299b927c46bcb6
symbol: scripting:Inno.Core.Logging:M:InnoEngine.Logging.Log.Warn(System.Type,System.String,System.Collections.Generic.IReadOnlyList{System.Object},System.String,System.Int32)
title: Log.Warn
kind: api
owners:
- Inno.Core.Logging
apiSurface: editor-script
reviewed: 524943c8e88111f5f938a65e5274e71bc311755863c0c315065a5d0d5eb492a3
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
