---
uid: api.inno.core.logging.5791799ed731929c
symbol: "engine:Inno.Core.Logging:T:Inno.Core.Logging.LogEntry"
source: xml
reviewed: da3e4ae932dd63b5e46f0a4b425d4acd4cfe6f41fb721650fe3861553ce340e6
title: "LogEntry"
kind: api
owners: [Inno.Core.Logging]
apiSurface: source-clr
contracts:
- project.inno-core-logging#delivery-and-ownership-contract
aliases: []
---

Represents an immutable log message dispatched by a `T:Inno.Core.Logging.LogRouter`.

**Parameter `level`:** The severity of the log message.

**Parameter `domain`:** The resolved assembly ownership domain.

**Parameter `scope`:** The resolved runtime or editor scope.

**Parameter `category`:** The log category, typically the declaring type name.

**Parameter `message`:** The rendered log message text.

**Parameter `file`:** The source file name when available.

**Parameter `line`:** The source line number when available.

**Parameter `stackTrace`:** The captured managed stack trace, or an empty string when no trace is available.

**Parameter `sessionId`:** The isolated runtime session that produced the entry, or `P:Inno.Core.Logging.LogSessionId.none` for process-level work.
