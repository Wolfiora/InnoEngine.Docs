---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.inno.core.logging.5791799ed731929c
symbol: engine:Inno.Core.Logging:T:Inno.Core.Logging.LogEntry
title: LogEntry
kind: api
owners:
- Inno.Core.Logging
apiSurface: source-clr
sourceFingerprint: 77c64183622c59caf3b67601e511d5ab034e818fe5776fad9a748c1492f753ba
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

**Parameter `sessionID`:** The isolated runtime session that produced the entry, or `P:Inno.Core.Logging.LogSessionID.none` for process-level work.
