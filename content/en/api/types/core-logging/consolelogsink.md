---
title: "ConsoleLogSink"
description: "Reference for ConsoleLogSink in Inno.Core.Logging."
uid: api.inno.core.logging.ddc49b8633bfff5b
kind: api
owners:
  - Inno.Core.Logging
apiSurface: source-clr
contracts:
  - project.inno-core-logging#delivery-and-ownership-contract
---
# `ConsoleLogSink`

This reference describes `ConsoleLogSink` in `Inno.Core.Logging`. Read the [shared contract](../../projects/inno-core-logging.md#delivery-and-ownership-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

**Direct interfaces:** `Inno.Core.Logging.ILogSink`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-bd56cfc647d2fccd) | Method |
| [`Receive`](#api-b66075167bc754a0) | Method |

## Type declaration

<a id="api-ddc49b8633bfff5b"></a>
<!-- api: T:Inno.Core.Logging.ConsoleLogSink 5410ee93264c2c283f9656c1749fb75515112ac6ad0b29cc145ab33719df7247 -->

```csharp
public class Inno.Core.Logging.ConsoleLogSink : Inno.Core.Logging.ILogSink
```

Writes log entries to the process console, using level-based colors when a terminal is available.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/c7c2e650d4607be0611e3419a95d9e13a76a2554/src/foundation/core/Inno.Core.Logging/ConsoleLogSink.cs#L8).

## `#ctor`

<a id="api-bd56cfc647d2fccd"></a>
<!-- api: M:Inno.Core.Logging.ConsoleLogSink.#ctor(System.Boolean) 285081b26454852b2936318b79d2896a1673c7cf2623904b051ce1edf1b995d4 -->

```csharp
public Inno.Core.Logging.ConsoleLogSink.ConsoleLogSink(bool useColors = false)
```

Creates a console sink with explicitly selected terminal capabilities.

**Parameter `useColors`:** Whether the host supports console colors; redirected output always uses plain text.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/c7c2e650d4607be0611e3419a95d9e13a76a2554/src/foundation/core/Inno.Core.Logging/ConsoleLogSink.cs#L18).

## `Receive`

<a id="api-b66075167bc754a0"></a>
<!-- api: M:Inno.Core.Logging.ConsoleLogSink.Receive(Inno.Core.Logging.LogEntry) d021c602bd023d4330bf793cabab1be8c635f9834869e1dce7ac4d40785a6597 -->

```csharp
public void Inno.Core.Logging.ConsoleLogSink.Receive(Inno.Core.Logging.LogEntry entry)
```

Writes the specified entry to standard output.

**Parameter `entry`:** The log entry to print.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/c7c2e650d4607be0611e3419a95d9e13a76a2554/src/foundation/core/Inno.Core.Logging/ConsoleLogSink.cs#L26).
