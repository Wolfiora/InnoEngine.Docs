---
title: "LogEntry"
description: "Reference for LogEntry in Inno.Core.Logging."
uid: api.inno.core.logging.5791799ed731929c
kind: api
owners:
  - Inno.Core.Logging
apiSurface: source-clr
contracts:
  - project.inno-core-logging#delivery-and-ownership-contract
---
# `LogEntry`

This reference describes `LogEntry` in `Inno.Core.Logging`. Read the [shared contract](../../projects/inno-core-logging.md#delivery-and-ownership-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.ValueType`.

## Members

| Member | Kind |
| --- | --- |
| [`category`](#api-d2e35aeb0c281842) | Field |
| [`domain`](#api-69a7fed42d8a3617) | Field |
| [`file`](#api-126a836a0daddb1c) | Field |
| [`level`](#api-866660a41f9ebaa7) | Field |
| [`line`](#api-dc93e15a48a42fa4) | Field |
| [`message`](#api-696745a10a34d864) | Field |
| [`scope`](#api-b88ab2774ba40bea) | Field |
| [`sessionId`](#api-05669310141edfca) | Field |
| [`stackTrace`](#api-bef00d3ff5ab7a3c) | Field |
| [`time`](#api-87a7b90ffb000d9a) | Field |
| [`#ctor`](#api-706e84c35e195652) | Method |

## Type declaration

<a id="api-5791799ed731929c"></a>
<!-- api: T:Inno.Core.Logging.LogEntry 08ec6e44bab8ac7dcbb92aeacfa0be8df8acaac237039b2133e47bb4e5d54ec2 -->

```csharp
public readonly struct Inno.Core.Logging.LogEntry
```

Represents an immutable log message dispatched by a `Inno.Core.Logging.LogRouter`.

**Parameter `level`:** The severity of the log message.

**Parameter `domain`:** The resolved assembly ownership domain.

**Parameter `scope`:** The resolved runtime or editor scope.

**Parameter `category`:** The log category, typically the declaring type name.

**Parameter `message`:** The rendered log message text.

**Parameter `file`:** The source file name when available.

**Parameter `line`:** The source line number when available.

**Parameter `stackTrace`:** The captured managed stack trace, or an empty string when no trace is available.

**Parameter `sessionId`:** The isolated runtime session that produced the entry, or `Inno.Core.Logging.LogSessionId.none` for process-level work.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/c7c2e650d4607be0611e3419a95d9e13a76a2554/src/foundation/core/Inno.Core.Logging/LogEntry.cs#L37).

## `category`

<a id="api-d2e35aeb0c281842"></a>
<!-- api: F:Inno.Core.Logging.LogEntry.category f818f915368a0987e2ca529307ea1a934234e89485ecabd3321e6836fa5cf93b -->

```csharp
public readonly string Inno.Core.Logging.LogEntry.category
```

Gets the category name for this entry.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/c7c2e650d4607be0611e3419a95d9e13a76a2554/src/foundation/core/Inno.Core.Logging/LogEntry.cs#L66).

## `domain`

<a id="api-69a7fed42d8a3617"></a>
<!-- api: F:Inno.Core.Logging.LogEntry.domain 24b6c102d2bfa6efaead74f2b02e5813af25114700b963db6523d3bc2aa191d6 -->

```csharp
public readonly Inno.Extensibility.Modules.AssemblyDomain Inno.Core.Logging.LogEntry.domain
```

Gets the assembly ownership domain for this entry.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/c7c2e650d4607be0611e3419a95d9e13a76a2554/src/foundation/core/Inno.Core.Logging/LogEntry.cs#L56).

## `file`

<a id="api-126a836a0daddb1c"></a>
<!-- api: F:Inno.Core.Logging.LogEntry.file 44c7084e05546fdd0df76907b861eda83bed46cd01a8d06356339aed4c666ec6 -->

```csharp
public readonly string Inno.Core.Logging.LogEntry.file
```

Gets the source file name if available; otherwise a fallback name.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/c7c2e650d4607be0611e3419a95d9e13a76a2554/src/foundation/core/Inno.Core.Logging/LogEntry.cs#L81).

## `level`

<a id="api-866660a41f9ebaa7"></a>
<!-- api: F:Inno.Core.Logging.LogEntry.level e80ce21da876c740e7c2deb7fdb90f6360b2101ebd21cc6eb3bf69a4235cbb93 -->

```csharp
public readonly Inno.Core.Logging.LogLevel Inno.Core.Logging.LogEntry.level
```

Gets the severity of this entry.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/c7c2e650d4607be0611e3419a95d9e13a76a2554/src/foundation/core/Inno.Core.Logging/LogEntry.cs#L51).

## `line`

<a id="api-dc93e15a48a42fa4"></a>
<!-- api: F:Inno.Core.Logging.LogEntry.line 74691958aeedf92b023278432ca3c5cf22bc002199e6f99e6d3365248b1272c9 -->

```csharp
public readonly int Inno.Core.Logging.LogEntry.line
```

Gets the source line number if available.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/c7c2e650d4607be0611e3419a95d9e13a76a2554/src/foundation/core/Inno.Core.Logging/LogEntry.cs#L86).

## `message`

<a id="api-696745a10a34d864"></a>
<!-- api: F:Inno.Core.Logging.LogEntry.message 3e4d10b8d31cc57d3530d944596f49cacd537b38e6e3660dd6d030cab56bf44a -->

```csharp
public readonly string Inno.Core.Logging.LogEntry.message
```

Gets the rendered message text.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/c7c2e650d4607be0611e3419a95d9e13a76a2554/src/foundation/core/Inno.Core.Logging/LogEntry.cs#L71).

## `scope`

<a id="api-b88ab2774ba40bea"></a>
<!-- api: F:Inno.Core.Logging.LogEntry.scope 72f999af67bad74edf0b67798c2f620fba54a84b0bf0d45517f859ac819bb63b -->

```csharp
public readonly Inno.Extensibility.Modules.AssemblyScope Inno.Core.Logging.LogEntry.scope
```

Gets the runtime or editor scope for this entry.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/c7c2e650d4607be0611e3419a95d9e13a76a2554/src/foundation/core/Inno.Core.Logging/LogEntry.cs#L61).

## `sessionId`

<a id="api-05669310141edfca"></a>
<!-- api: F:Inno.Core.Logging.LogEntry.sessionId e69f835f472f57f37e99e82af97a4e53761a179d1a8483a45077ca419d2459dd -->

```csharp
public readonly Inno.Core.Logging.LogSessionId Inno.Core.Logging.LogEntry.sessionId
```

Gets the isolated runtime session that produced this entry.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/c7c2e650d4607be0611e3419a95d9e13a76a2554/src/foundation/core/Inno.Core.Logging/LogEntry.cs#L96).

## `stackTrace`

<a id="api-bef00d3ff5ab7a3c"></a>
<!-- api: F:Inno.Core.Logging.LogEntry.stackTrace 59ad634f0499e51fb515069e1cb6f961cce0693aec2c9fa4d52bac26a35677dd -->

```csharp
public readonly string Inno.Core.Logging.LogEntry.stackTrace
```

Gets the managed stack trace captured at the logging call site.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/c7c2e650d4607be0611e3419a95d9e13a76a2554/src/foundation/core/Inno.Core.Logging/LogEntry.cs#L91).

## `time`

<a id="api-87a7b90ffb000d9a"></a>
<!-- api: F:Inno.Core.Logging.LogEntry.time 55ba3f189068ae350cef8796684eb1e7467ff6d4d20ccd210a9176b6a1f1b57d -->

```csharp
public readonly System.DateTime Inno.Core.Logging.LogEntry.time
```

Gets the timestamp captured when this entry was created.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/c7c2e650d4607be0611e3419a95d9e13a76a2554/src/foundation/core/Inno.Core.Logging/LogEntry.cs#L76).

## `#ctor`

<a id="api-706e84c35e195652"></a>
<!-- api: M:Inno.Core.Logging.LogEntry.#ctor(Inno.Core.Logging.LogLevel,Inno.Extensibility.Modules.AssemblyDomain,Inno.Extensibility.Modules.AssemblyScope,System.String,System.String,System.String,System.Int32,System.String,Inno.Core.Logging.LogSessionId) 1ba66914638abf8a1db4437f30e28e4b45d5275c3d8b67deb1933dfa77df1cb9 -->

```csharp
public Inno.Core.Logging.LogEntry.LogEntry(Inno.Core.Logging.LogLevel level, Inno.Extensibility.Modules.AssemblyDomain domain, Inno.Extensibility.Modules.AssemblyScope scope, string category, string message, string file, int line, string stackTrace, Inno.Core.Logging.LogSessionId sessionId)
```

Represents an immutable log message dispatched by a `Inno.Core.Logging.LogRouter`.

**Parameter `level`:** The severity of the log message.

**Parameter `domain`:** The resolved assembly ownership domain.

**Parameter `scope`:** The resolved runtime or editor scope.

**Parameter `category`:** The log category, typically the declaring type name.

**Parameter `message`:** The rendered log message text.

**Parameter `file`:** The source file name when available.

**Parameter `line`:** The source line number when available.

**Parameter `stackTrace`:** The captured managed stack trace, or an empty string when no trace is available.

**Parameter `sessionId`:** The isolated runtime session that produced the entry, or `Inno.Core.Logging.LogSessionId.none` for process-level work.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/c7c2e650d4607be0611e3419a95d9e13a76a2554/src/foundation/core/Inno.Core.Logging/LogEntry.cs#L37).
