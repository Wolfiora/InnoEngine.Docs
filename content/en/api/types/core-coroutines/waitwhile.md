---
title: "WaitWhile"
description: "Reference for WaitWhile in Inno.Core.Coroutines."
uid: api.inno.core.coroutines.56c93aa091fd6687
kind: api
owners:
  - Inno.Core.Coroutines
apiSurface: source-clr
contracts:
  - project.inno-core-coroutines#execution-and-release-contract
---
# `WaitWhile`

This reference describes `WaitWhile` in `Inno.Core.Coroutines`. Read the [shared contract](../../projects/inno-core-coroutines.md#execution-and-release-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `Inno.Core.Coroutines.YieldInstruction`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-696d105567d30470) | Method |
| [`predicate`](#api-f8d60a9b993094a0) | Property |

## Type declaration

<a id="api-56c93aa091fd6687"></a>
<!-- api: T:Inno.Core.Coroutines.WaitWhile a6e2cb03589d417c355de3659515e263f95b5d652245211f47212ffb204bde4c -->

```csharp
public sealed class Inno.Core.Coroutines.WaitWhile : Inno.Core.Coroutines.YieldInstruction
```

Waits while the predicate returns `true`.

**Parameter `predicate`:** The predicate used to initialize this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0a857166e14c83e44feb557768cb9d01d4383135/src/foundation/core/Inno.Core.Coroutines/YieldInstructions/WaitWhile.cs#L11).

## `#ctor`

<a id="api-696d105567d30470"></a>
<!-- api: M:Inno.Core.Coroutines.WaitWhile.#ctor(System.Func{System.Boolean}) 4dd6ec914dd482c792239b58f89cea64198b276a43149b042f1c2c6ad9e1700e -->

```csharp
public Inno.Core.Coroutines.WaitWhile.WaitWhile(System.Func<bool> predicate)
```

Waits while the predicate returns `true`.

**Parameter `predicate`:** The predicate used to initialize this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0a857166e14c83e44feb557768cb9d01d4383135/src/foundation/core/Inno.Core.Coroutines/YieldInstructions/WaitWhile.cs#L11).

## `predicate`

<a id="api-f8d60a9b993094a0"></a>
<!-- api: P:Inno.Core.Coroutines.WaitWhile.predicate ffc85d708cf1ddf4089c8da33eeafdd9dee571ddb46a977cbe106a73817e8bdc -->

```csharp
public System.Func<bool> Inno.Core.Coroutines.WaitWhile.predicate { get; }
```

Gets the predicate evaluated each tick.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0a857166e14c83e44feb557768cb9d01d4383135/src/foundation/core/Inno.Core.Coroutines/YieldInstructions/WaitWhile.cs#L16).
