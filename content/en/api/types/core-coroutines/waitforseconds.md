---
title: "WaitForSeconds"
description: "Reference for WaitForSeconds in Inno.Core.Coroutines."
uid: api.inno.core.coroutines.7b1f6d5740602968
kind: api
owners:
  - Inno.Core.Coroutines
apiSurface: source-clr
contracts:
  - project.inno-core-coroutines#execution-and-release-contract
---
# `WaitForSeconds`

This reference describes `WaitForSeconds` in `Inno.Core.Coroutines`. Read the [shared contract](../../projects/inno-core-coroutines.md#execution-and-release-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `Inno.Core.Coroutines.YieldInstruction`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-5c970c58bf80efa1) | Method |
| [`seconds`](#api-9d91d6f9365553a1) | Property |

## Type declaration

<a id="api-7b1f6d5740602968"></a>
<!-- api: T:Inno.Core.Coroutines.WaitForSeconds 4bbaaa68fc69280642c9bc465ac84db6ff7940da1ff9d03368c03f67fabb8d75 -->

```csharp
public sealed class Inno.Core.Coroutines.WaitForSeconds : Inno.Core.Coroutines.YieldInstruction
```

Waits for the specified number of scaled seconds.

**Parameter `seconds`:** The seconds used to initialize this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0a857166e14c83e44feb557768cb9d01d4383135/src/foundation/core/Inno.Core.Coroutines/YieldInstructions/WaitForSeconds.cs#L9).

## `#ctor`

<a id="api-5c970c58bf80efa1"></a>
<!-- api: M:Inno.Core.Coroutines.WaitForSeconds.#ctor(System.Single) 6d17e5a1c0f3da38e0117b5e09be7b1fd6847908c629a888aa83752ab231a07f -->

```csharp
public Inno.Core.Coroutines.WaitForSeconds.WaitForSeconds(float seconds)
```

Waits for the specified number of scaled seconds.

**Parameter `seconds`:** The seconds used to initialize this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0a857166e14c83e44feb557768cb9d01d4383135/src/foundation/core/Inno.Core.Coroutines/YieldInstructions/WaitForSeconds.cs#L9).

## `seconds`

<a id="api-9d91d6f9365553a1"></a>
<!-- api: P:Inno.Core.Coroutines.WaitForSeconds.seconds 0aa07e1e70f57bd4e7af7256b923453687bd723f6425343d1cf33e95d304a841 -->

```csharp
public float Inno.Core.Coroutines.WaitForSeconds.seconds { get; }
```

Gets the configured wait time in seconds.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0a857166e14c83e44feb557768cb9d01d4383135/src/foundation/core/Inno.Core.Coroutines/YieldInstructions/WaitForSeconds.cs#L14).
