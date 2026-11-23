---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.5101cb214ff956d1b6cfd0962f30c6a51112215fbcb72f26bc78b58c8062ed4f
symbol: engine:Inno.Core.Logging:M:Inno.Core.Logging.LogEntry.#ctor(Inno.Core.Logging.LogLevel,Inno.Extensibility.Modules.AssemblyDomain,Inno.Extensibility.Modules.AssemblyScope,System.String,System.String,System.String,System.Int32,System.String,Inno.Core.Logging.LogSessionID)
title: LogEntry.Constructor
kind: api
owners:
- Inno.Core.Logging
apiSurface: source-clr
sourceFingerprint: 96ebae8d0719a3e2e88511e49af69c206a090e7bd11e81c9456becb646fe5962
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `level`:** The severity of the log message.

**Parameter `domain`:** The resolved assembly ownership domain.

**Parameter `scope`:** The resolved runtime or editor scope.

**Parameter `category`:** The log category, typically the declaring type name.

**Parameter `message`:** The rendered log message text.

**Parameter `file`:** The source file name when available.

**Parameter `line`:** The source line number when available.

**Parameter `stackTrace`:** The captured managed stack trace, or an empty string when no trace is available.

**Parameter `sessionID`:** The isolated runtime session that produced the entry, or `P:Inno.Core.Logging.LogSessionID.none` for process-level work.
