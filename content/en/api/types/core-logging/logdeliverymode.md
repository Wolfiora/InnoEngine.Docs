---
title: "LogDeliveryMode"
description: "Reference for LogDeliveryMode in Inno.Core.Logging."
uid: api.inno.core.logging.a33f86962b1349a5
kind: api
owners:
  - Inno.Core.Logging
apiSurface: source-clr
contracts:
  - project.inno-core-logging#delivery-and-ownership-contract
---
# `LogDeliveryMode`

This reference describes `LogDeliveryMode` in `Inno.Core.Logging`. Read the [shared contract](../../projects/inno-core-logging.md#delivery-and-ownership-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.Enum`.

## Members

| Member | Kind |
| --- | --- |
| [`Background`](#api-2736198d7c260879) | Field |
| [`Inline`](#api-5422f9921f2b488a) | Field |

## Type declaration

<a id="api-a33f86962b1349a5"></a>
<!-- api: T:Inno.Core.Logging.LogDeliveryMode 3a0930eaca2da807c0688583b39f006071b2f1adebec72477319bdad1382ed0d -->

```csharp
public enum Inno.Core.Logging.LogDeliveryMode : int
```

Selects the delivery policy independently of the operating system or execution host.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/c7c2e650d4607be0611e3419a95d9e13a76a2554/src/foundation/core/Inno.Core.Logging/LogDeliveryMode.cs#L6).

## `Background`

<a id="api-2736198d7c260879"></a>
<!-- api: F:Inno.Core.Logging.LogDeliveryMode.Background 6dc08b7c5fa1b430f85fc2871247745b47c0b3a7e1566505152640726b933d4f -->

```csharp
Inno.Core.Logging.LogDeliveryMode.Background = 0
```

Delivers queued entries through a dedicated background worker.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/c7c2e650d4607be0611e3419a95d9e13a76a2554/src/foundation/core/Inno.Core.Logging/LogDeliveryMode.cs#L11).

## `Inline`

<a id="api-5422f9921f2b488a"></a>
<!-- api: F:Inno.Core.Logging.LogDeliveryMode.Inline cd94b6c1fb7cb5a3ff340a1a6d2540995cb068165cd55bd5cc0a2a209d398731 -->

```csharp
Inno.Core.Logging.LogDeliveryMode.Inline = 1
```

Delivers entries synchronously on the producer's thread.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/c7c2e650d4607be0611e3419a95d9e13a76a2554/src/foundation/core/Inno.Core.Logging/LogDeliveryMode.cs#L16).
