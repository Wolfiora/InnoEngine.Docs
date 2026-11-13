---
uid: api.022b398dc241f138b7af2e1e0c41ebb0aeb197ecee0c93dc71f2b2c25c465d16
symbol: "engine:Inno.Core.Logging:M:Inno.Core.Logging.LogEntry.#ctor(Inno.Core.Logging.LogLevel,Inno.Extensibility.Modules.AssemblyDomain,Inno.Extensibility.Modules.AssemblyScope,System.String,System.String,System.String,System.Int32,System.String,Inno.Core.Logging.LogSessionId)"
source: xml
reviewed: 841b95f72951c98d214512a2ee342c09de6e27e96c298f4871d642ba409778e8
title: "Constructor"
kind: api
owners: [Inno.Core.Logging]
apiSurface: source-clr
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
