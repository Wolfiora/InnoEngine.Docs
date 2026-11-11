---
title: "LogLevel"
description: "Reference for LogLevel in Inno.Core.Logging."
uid: api.inno.core.logging.8459dde37b559ef8
kind: api
owners:
  - Inno.Core.Logging
apiSurface: source-clr
contracts:
  - project.inno-core-logging#delivery-and-ownership-contract
---
# `LogLevel`

This reference describes `LogLevel` in `Inno.Core.Logging`. Read the [shared contract](../../projects/inno-core-logging.md#delivery-and-ownership-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.Enum`.

## Members

| Member | Kind |
| --- | --- |
| [`Debug`](#api-f9dcebae441867c0) | Field |
| [`Error`](#api-6d5777fda1050352) | Field |
| [`Fatal`](#api-84fa4f01e4cba61a) | Field |
| [`Info`](#api-d33d5da919a39a48) | Field |
| [`Warn`](#api-d94b453ab2247495) | Field |

## Type declaration

<a id="api-8459dde37b559ef8"></a>
<!-- api: T:Inno.Core.Logging.LogLevel cb1b0c874cf3543a4745e1a55c4cda0be55196ffeb3974498c15c56d163a6016 -->

```csharp
public enum Inno.Core.Logging.LogLevel : int
```

Represents log severity levels in ascending order.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/c7c2e650d4607be0611e3419a95d9e13a76a2554/src/foundation/core/Inno.Core.Logging/LogLevel.cs#L6).

## `Debug`

<a id="api-f9dcebae441867c0"></a>
<!-- api: F:Inno.Core.Logging.LogLevel.Debug 1cf5870fbf5dcb27ad114f57fe6f79d45e8fb403d38a8e00c9ebf8835414a718 -->

```csharp
Inno.Core.Logging.LogLevel.Debug = 0
```

Diagnostic logs intended for local debugging.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/c7c2e650d4607be0611e3419a95d9e13a76a2554/src/foundation/core/Inno.Core.Logging/LogLevel.cs#L11).

## `Error`

<a id="api-6d5777fda1050352"></a>
<!-- api: F:Inno.Core.Logging.LogLevel.Error 95f31790d816de0956af823b546385753ac32743bbeea28cd0802b54bb977665 -->

```csharp
Inno.Core.Logging.LogLevel.Error = 3
```

Error logs for failures that should be investigated.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/c7c2e650d4607be0611e3419a95d9e13a76a2554/src/foundation/core/Inno.Core.Logging/LogLevel.cs#L26).

## `Fatal`

<a id="api-84fa4f01e4cba61a"></a>
<!-- api: F:Inno.Core.Logging.LogLevel.Fatal a56d16ae7f6c095dd8289494a1e48c08244d3dbe11ecbb169e9349b034579803 -->

```csharp
Inno.Core.Logging.LogLevel.Fatal = 4
```

Fatal logs for unrecoverable failures.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/c7c2e650d4607be0611e3419a95d9e13a76a2554/src/foundation/core/Inno.Core.Logging/LogLevel.cs#L31).

## `Info`

<a id="api-d33d5da919a39a48"></a>
<!-- api: F:Inno.Core.Logging.LogLevel.Info 90c48267842f4ba4e97d74f09936943843330fe7790c91faebf5c5bf7a1c53db -->

```csharp
Inno.Core.Logging.LogLevel.Info = 1
```

Informational logs for normal runtime flow.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/c7c2e650d4607be0611e3419a95d9e13a76a2554/src/foundation/core/Inno.Core.Logging/LogLevel.cs#L16).

## `Warn`

<a id="api-d94b453ab2247495"></a>
<!-- api: F:Inno.Core.Logging.LogLevel.Warn 5ec8051daa9503c8e8704cc90866465c2ed4fa2acfd32fbe67a505f77b2abd78 -->

```csharp
Inno.Core.Logging.LogLevel.Warn = 2
```

Warning logs for recoverable problems.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/c7c2e650d4607be0611e3419a95d9e13a76a2554/src/foundation/core/Inno.Core.Logging/LogLevel.cs#L21).
