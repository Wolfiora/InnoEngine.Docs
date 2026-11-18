---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.inno.core.logging.5791799ed731929c
symbol: engine:Inno.Core.Logging:T:Inno.Core.Logging.LogEntry
title: LogEntry
kind: api
owners:
- Inno.Core.Logging
apiSurface: source-clr
sourceFingerprint: fafca0f2956c13bf3adf28afd6bd2030f6d41be3120688804dbab3f5d7f4e31c
contracts:
- project.inno-core-logging#delivery-and-ownership-contract

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
aliases: []
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

**Parameter `sessionId`:** The isolated runtime session that produced the entry, or `P:Inno.Core.Logging.LogSessionId.none` for process-level work.
