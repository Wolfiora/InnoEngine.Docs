---
title: "WaitUntil"
description: "Reference for WaitUntil in Inno.Core.Coroutines."
uid: api.inno.core.coroutines.cfdeeefa424095c4
kind: api
owners:
  - Inno.Core.Coroutines
apiSurface: source-clr
contracts:
  - project.inno-core-coroutines#execution-and-release-contract
---
# `WaitUntil`

This reference describes `WaitUntil` in `Inno.Core.Coroutines`. Read the [shared contract](../../projects/inno-core-coroutines.md#execution-and-release-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `Inno.Core.Coroutines.YieldInstruction`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-b279b81ef962dbda) | Method |
| [`predicate`](#api-a41f284a45bc68de) | Property |

## Type declaration

<a id="api-cfdeeefa424095c4"></a>
<!-- api: T:Inno.Core.Coroutines.WaitUntil 2387c4e36d3296fddb1bd5ec112d85bf5c8563881b4ddf404b9cc7a57afd700b -->

```csharp
public sealed class Inno.Core.Coroutines.WaitUntil : Inno.Core.Coroutines.YieldInstruction
```

Waits until the predicate returns `true`.

**Parameter `predicate`:** The predicate used to initialize this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0a857166e14c83e44feb557768cb9d01d4383135/src/foundation/core/Inno.Core.Coroutines/YieldInstructions/WaitUntil.cs#L11).

## `#ctor`

<a id="api-b279b81ef962dbda"></a>
<!-- api: M:Inno.Core.Coroutines.WaitUntil.#ctor(System.Func{System.Boolean}) cdc4c1bfa65fdd3eb4d59e7b77551600cc9ee79434d05a7af164175132112837 -->

```csharp
public Inno.Core.Coroutines.WaitUntil.WaitUntil(System.Func<bool> predicate)
```

Waits until the predicate returns `true`.

**Parameter `predicate`:** The predicate used to initialize this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0a857166e14c83e44feb557768cb9d01d4383135/src/foundation/core/Inno.Core.Coroutines/YieldInstructions/WaitUntil.cs#L11).

## `predicate`

<a id="api-a41f284a45bc68de"></a>
<!-- api: P:Inno.Core.Coroutines.WaitUntil.predicate 4cc1e18a4a21c8c33f2d89d5d0aab438b87e1d3a0ace0b7350d708e48171cab1 -->

```csharp
public System.Func<bool> Inno.Core.Coroutines.WaitUntil.predicate { get; }
```

Gets the predicate evaluated each tick.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0a857166e14c83e44feb557768cb9d01d4383135/src/foundation/core/Inno.Core.Coroutines/YieldInstructions/WaitUntil.cs#L16).
