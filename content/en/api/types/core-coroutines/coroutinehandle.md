---
title: "CoroutineHandle"
description: "Reference for CoroutineHandle in Inno.Core.Coroutines."
uid: api.inno.core.coroutines.9c47ff402c5c8640
kind: api
owners:
  - Inno.Core.Coroutines
apiSurface: source-clr
contracts:
  - project.inno-core-coroutines#execution-and-release-contract
---
# `CoroutineHandle`

This reference describes `CoroutineHandle` in `Inno.Core.Coroutines`. Read the [shared contract](../../projects/inno-core-coroutines.md#execution-and-release-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.ValueType`.

## Members

| Member | Kind |
| --- | --- |
| [`isValid`](#api-462163c64e2891a6) | Property |

## Type declaration

<a id="api-9c47ff402c5c8640"></a>
<!-- api: T:Inno.Core.Coroutines.CoroutineHandle 075c1cead38fad98e070e57d2bd6f9c1a2aec62bbf815698865f38f771e1dfa5 -->

```csharp
public readonly struct Inno.Core.Coroutines.CoroutineHandle
```

Opaque handle returned by
`Inno.Core.Coroutines.CoroutineScheduler.StartCoroutine(System.Collections.IEnumerator)`
or `Inno.Core.Coroutines.CoroutineScheduler.StartCoroutine(System.Object,System.Collections.IEnumerator)`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0a857166e14c83e44feb557768cb9d01d4383135/src/foundation/core/Inno.Core.Coroutines/CoroutineHandle.cs#L10).

## `isValid`

<a id="api-462163c64e2891a6"></a>
<!-- api: P:Inno.Core.Coroutines.CoroutineHandle.isValid 3770c2b952c6ed20f2e31111a7bf9b7f908132e32371ac60bc883c1a30ff56c4 -->

```csharp
public bool Inno.Core.Coroutines.CoroutineHandle.isValid { get; }
```

Gets whether this handle currently points to a live coroutine
in a still-alive scheduler.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0a857166e14c83e44feb557768cb9d01d4383135/src/foundation/core/Inno.Core.Coroutines/CoroutineHandle.cs#L29).
