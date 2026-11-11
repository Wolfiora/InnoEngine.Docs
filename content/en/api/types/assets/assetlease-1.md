---
title: "AssetLease`1"
description: "Reference for AssetLease`1 in Inno.Assets."
uid: api.inno.assets.3702bf7480a2982a
kind: api
owners:
  - Inno.Assets
apiSurface: source-clr
contracts:
  - project.inno-assets
---
# ``AssetLease`1``

This reference describes ``AssetLease`1`` in `Inno.Assets`. Read the [shared contract](../../projects/inno-assets.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

**Direct interfaces:** `System.IDisposable`.

## Members

| Member | Kind |
| --- | --- |
| [`Dispose`](#api-f4a4c84c001f92ed) | Method |
| [`asset`](#api-65535079b2e42067) | Property |

## Type declaration

<a id="api-3702bf7480a2982a"></a>
<!-- api: T:Inno.Assets.AssetLease`1 02b6e81b4fc6175e74dfba3ea28bcf622796bc9fc3d08de552c5e4e45074d87b -->

```csharp
public sealed class Inno.Assets.AssetLease<TAsset> where TAsset : Inno.Assets.AssetObject : System.IDisposable
```

Keeps one canonical asset generation resident for an explicit lifetime.

**Type parameter `TAsset`:** Concrete retained asset type.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets/Runtime/AssetResidency.cs#L132).

## `Dispose`

<a id="api-f4a4c84c001f92ed"></a>
<!-- api: M:Inno.Assets.AssetLease`1.Dispose 92ce9a670c6d6595fa9bf1e38d1d8cffaea12970c53a6b67bcda10fcbce8f94a -->

```csharp
public void Inno.Assets.AssetLease<TAsset>.Dispose()
```

Releases this caller's residency ownership, retaining its value and callback while the provider reports Pending.

**Constraints:** Pending may be wrapped in another exception; classify the complete failure with RetirementPendingException.Find.
Ordinary sibling failures remain observable after a later release attempt succeeds.

**Throws `Inno.Core.Execution.RetirementPendingException`:** Provider retirement is unfinished or a concurrent release is in progress; retain this lease and retry at a safe point.

**Throws `System.AggregateException`:** The provider reports a wrapped failure, or release completes with ordinary errors retained from earlier pending attempts.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets/Runtime/AssetResidency.cs#L165).

## `asset`

<a id="api-65535079b2e42067"></a>
<!-- api: P:Inno.Assets.AssetLease`1.asset b20b767611ab1aba923ae846e80330056c38c06388e15623e9e948316bdca5ed -->

```csharp
public TAsset Inno.Assets.AssetLease<TAsset>.asset { get; }
```

Gets the retained canonical asset while this lease is active.

**Throws `System.ObjectDisposedException`:** Thrown after the lease has been released.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets/Runtime/AssetResidency.cs#L150).
