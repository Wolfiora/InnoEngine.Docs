---
title: "AssetLease`1"
description: "Reference for AssetLease`1 in Inno.Assets."
uid: api.inno.assets.runtime-script.64b31119a2d0381e
kind: api
owners:
  - Inno.Assets
apiSurface: runtime-script
contracts:
  - project.inno-assets
  - manual.scripting.use-script-api
---
# ``AssetLease`1``

This reference describes ``AssetLease`1`` in `Inno.Assets`. Read the [shared contract](../../projects/inno-assets.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `object`.

**Direct interfaces:** `System.IDisposable`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-62fc1602d736d84b) | Method |
| [`Dispose`](#api-a4f58f1a4ccc142d) | Method |
| [`asset`](#api-7e4173550dc4c475) | Property |

## Type declaration

<a id="api-64b31119a2d0381e"></a>
<!-- api: T:InnoEngine.Assets.AssetLease`1 89f6ee0b1ad3dd219601a75aa5cd6272710b617935be8712cdf922f7ef594b21 -->

```csharp
public sealed class InnoEngine.Assets.AssetLease<TAsset> where TAsset : InnoEngine.Assets.AssetObject : System.IDisposable
```

Keeps one canonical asset generation resident for an explicit lifetime.

**Type parameter `TAsset`:** Concrete retained asset type.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/assets/Inno.Assets/Runtime/AssetResidency.cs#L132).

## `#ctor`

<a id="api-62fc1602d736d84b"></a>
<!-- api: M:InnoEngine.Assets.AssetLease`1.#ctor a981daba0f4ce2840170c4c6e2aeb90878dd055534fdb72e4dea47cac851f20a -->

```csharp
public InnoEngine.Assets.AssetLease<TAsset>.AssetLease()
```

Appears in the generated script reference without a matching public or protected engine constructor.

**Constraints:** This is an IDE projection artifact, not a supported construction path. Do not call this constructor from scripts; obtain the instance through the containing type's documented owner or factory.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/assets/Inno.Assets/Runtime/AssetResidency.cs#L132).

## `Dispose`

<a id="api-a4f58f1a4ccc142d"></a>
<!-- api: M:InnoEngine.Assets.AssetLease`1.Dispose 31d81f802ede24eda592bf5a62c9711416e8251a4006d7a0b32693288e3f6060 -->

```csharp
public void InnoEngine.Assets.AssetLease<TAsset>.Dispose()
```

Releases this caller's residency ownership, retaining its value and callback while the provider reports Pending.

**Constraints:** Pending may be wrapped in another exception; classify the complete failure with RetirementPendingException.Find.
Ordinary sibling failures remain observable after a later release attempt succeeds.

**Throws `Inno.Core.Execution.RetirementPendingException`:** Provider retirement is unfinished or a concurrent release is in progress; retain this lease and retry at a safe point.

**Throws `System.AggregateException`:** The provider reports a wrapped failure, or release completes with ordinary errors retained from earlier pending attempts.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/assets/Inno.Assets/Runtime/AssetResidency.cs#L165).

## `asset`

<a id="api-7e4173550dc4c475"></a>
<!-- api: P:InnoEngine.Assets.AssetLease`1.asset 972dbf169aba8b1d0b31a654f209af88c9dd62ff8770a3fb2edf000d6819c432 -->

```csharp
public TAsset InnoEngine.Assets.AssetLease<TAsset>.asset { get; }
```

Gets the retained canonical asset while this lease is active.

**Throws `System.ObjectDisposedException`:** Thrown after the lease has been released.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/assets/Inno.Assets/Runtime/AssetResidency.cs#L150).
