---
uid: api.directory.engine.core.logging
title: "Logging"
kind: landing
owners: []
---

# Logging

Find types in this project category. Each type links to its exact declarations and member contracts.

## Types

| Type | Purpose |
| --- | --- |
| [ConsoleLogSink](consolelogsink/index.md) | Writes log entries to the process console, using level-based colors when a terminal is available. |
| [DiagnosticLogSink](diagnosticlogsink/index.md) | Projects changed diagnostic issues into a host&#39;s log stream without introducing another diagnostic owner. |
| [FileLogSink](filelogsink/index.md) | Writes complete log entries to uniquely named rotating files under the router&#39;s delivery policy. |
| [ILogSink](ilogsink/index.md) | Defines a log sink that consumes log entries from a T:Inno.Core.Logging.LogRouter. |
| [Log](log/index.md) | Writes logs with compiler-provided locations and explicitly declared type ownership across managed deployments. |
| [LogDeliveryMode](logdeliverymode/index.md) | Selects the delivery policy independently of the operating system or execution host. |
| [LogEntry](logentry/index.md) | Represents an immutable log message dispatched by a T:Inno.Core.Logging.LogRouter. |
| [Logger](logger/index.md) | Writes category-bound entries through one explicitly owned log router. |
| [LogLevel](loglevel/index.md) | Represents log severity levels in ascending order. |
| [LogRouter](logrouter/index.md) | Owns one host&#39;s bounded log queue, filtering policy, and sink collection. |
| [LogSessionContext](logsessioncontext/index.md) | Associates logs written on one asynchronous execution flow with an isolated runtime session. |
| [LogSessionId](logsessionid/index.md) | Identifies the isolated runtime session that produced a log entry. |

