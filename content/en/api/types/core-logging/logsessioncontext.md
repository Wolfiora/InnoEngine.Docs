---
title: "LogSessionContext"
description: "Reference for LogSessionContext in Inno.Core.Logging."
uid: api.inno.core.logging.5f0194f840af3f28
kind: api
owners:
  - Inno.Core.Logging
apiSurface: source-clr
contracts:
  - project.inno-core-logging#delivery-and-ownership-contract
---
# `LogSessionContext`

This reference describes `LogSessionContext` in `Inno.Core.Logging`. Read the [shared contract](../../projects/inno-core-logging.md#delivery-and-ownership-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`Enter`](#api-9d065e5274b8013d) | Method |
| [`current`](#api-2dc07f026080490b) | Property |

## Type declaration

<a id="api-5f0194f840af3f28"></a>
<!-- api: T:Inno.Core.Logging.LogSessionContext a444a33845903f2a80386ca52acbbf210915acd2aee05cf7676ff1c0bb9267c7 -->

```csharp
public static class Inno.Core.Logging.LogSessionContext
```

Associates logs written on one asynchronous execution flow with an isolated runtime session.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/c7c2e650d4607be0611e3419a95d9e13a76a2554/src/foundation/core/Inno.Core.Logging/LogSessionContext.cs#L10).

## `Enter`

<a id="api-9d065e5274b8013d"></a>
<!-- api: M:Inno.Core.Logging.LogSessionContext.Enter(Inno.Core.Logging.LogSessionId) c0e1ea25d6519de797cc4e1125a5a6ee01e40ce5de064b55f1dab31233cc3c9c -->

```csharp
public static System.IDisposable Inno.Core.Logging.LogSessionContext.Enter(Inno.Core.Logging.LogSessionId sessionId)
```

Enters a nested execution scope whose emitted logs belong to the supplied runtime session.

**Parameter `sessionId`:** The non-empty identifier of the runtime session receiving execution.

**Returns:** A scope that restores the previous session when disposed in reverse creation order.

**Throws `System.ArgumentException`:** Thrown when `sessionId` does not identify a runtime session.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/c7c2e650d4607be0611e3419a95d9e13a76a2554/src/foundation/core/Inno.Core.Logging/LogSessionContext.cs#L32).

## `current`

<a id="api-2dc07f026080490b"></a>
<!-- api: P:Inno.Core.Logging.LogSessionContext.current 2551f5af5c04f14a2c5528527dee17462ab70bd84bc43500da6288f82e865d52 -->

```csharp
public static Inno.Core.Logging.LogSessionId Inno.Core.Logging.LogSessionContext.current { get; }
```

Gets the runtime session associated with the current asynchronous execution flow.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/c7c2e650d4607be0611e3419a95d9e13a76a2554/src/foundation/core/Inno.Core.Logging/LogSessionContext.cs#L18).
