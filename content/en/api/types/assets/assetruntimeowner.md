---
title: "AssetRuntimeOwner"
description: "Reference for AssetRuntimeOwner in Inno.Assets."
uid: api.inno.assets.9c5b677450cbad79
kind: api
owners:
  - Inno.Assets
apiSurface: source-clr
contracts:
  - project.inno-assets
---
# `AssetRuntimeOwner`

This reference describes `AssetRuntimeOwner` in `Inno.Assets`. Read the [shared contract](../../projects/inno-assets.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-55f958777a359103) | Method |
| [`GetSourceHash`](#api-b1093c1341bff2f4) | Method |
| [`Initialize`](#api-c982685b9a72e6f3) | Method |
| [`Release`](#api-b0c21d407b5dafcd) | Method |
| [`UpdateAssetPath`](#api-e8ac71847515294a) | Method |

## Type declaration

<a id="api-9c5b677450cbad79"></a>
<!-- api: T:Inno.Assets.AssetRuntimeOwner 323a487e9205d2cf7b8d83678fe84b279b33ba833748fffc05401ae9cb40bc15 -->

```csharp
public sealed class Inno.Assets.AssetRuntimeOwner
```

Grants one database exclusive mutation authority over the asset instances it initializes.

**Constraints:** This capability is not a global mutation bridge and is not exported to scripts. A database keeps
its owner private and explicitly releases canonical assets; the capability itself retains no assets.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets/Runtime/AssetRuntimeOwner.cs#L13).

## `#ctor`

<a id="api-55f958777a359103"></a>
<!-- api: M:Inno.Assets.AssetRuntimeOwner.#ctor(Inno.Assets.IAssetPropertyStateResolver) 9cbfd9548033f256215258c54e8bf846f1f73cf6d1164430a3e1c6cf6ccff612 -->

```csharp
public Inno.Assets.AssetRuntimeOwner.AssetRuntimeOwner(Inno.Assets.IAssetPropertyStateResolver? properties = null)
```

Creates exclusive mutation authority with optional owner-bound extension state restoration.

**Parameter `properties`:** Owner resolver, weakly referenced so stale assets cannot retain a retired database.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets/Runtime/AssetRuntimeOwner.cs#L24).

## `GetSourceHash`

<a id="api-b1093c1341bff2f4"></a>
<!-- api: M:Inno.Assets.AssetRuntimeOwner.GetSourceHash(Inno.Assets.AssetObject) 6342332e250dbc34c9f46bb109e2c75d15a356c5bd1b6d896ce0d03a9018a055 -->

```csharp
public string Inno.Assets.AssetRuntimeOwner.GetSourceHash(Inno.Assets.AssetObject asset)
```

Reads the source fingerprint of an asset claimed by this owner.

**Parameter `asset`:** The owned asset.

**Returns:** The fingerprint currently committed to the asset.

**Throws `System.InvalidOperationException`:** The asset belongs to a different owner.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets/Runtime/AssetRuntimeOwner.cs#L38).

## `Initialize`

<a id="api-c982685b9a72e6f3"></a>
<!-- api: M:Inno.Assets.AssetRuntimeOwner.Initialize(Inno.Assets.AssetObject,Inno.Assets.AssetPath,System.String,System.ReadOnlyMemory{System.Byte},System.Boolean,System.Int64) 2be7fd83673d4f70ca96744a942dcb141f4124d22dc396a3cd8a961cea628adb -->

```csharp
public void Inno.Assets.AssetRuntimeOwner.Initialize(Inno.Assets.AssetObject asset, Inno.Assets.AssetPath assetPath, string sourceHash, System.ReadOnlyMemory<byte> payload, bool isMissing, long version)
```

Claims an unowned asset or commits new runtime state to an already owned instance.

**Parameter `asset`:** The instance to initialize; ownership cannot be transferred between databases.

**Parameter `assetPath`:** The current mount-qualified source path.

**Parameter `sourceHash`:** The immutable source fingerprint.

**Parameter `payload`:** Runtime bytes copied before publication.

**Parameter `isMissing`:** Whether the preserved reference is currently unavailable.

**Parameter `version`:** The current content revision used to invalidate runtime caches.

**Throws `System.InvalidOperationException`:** The asset belongs to a different owner.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets/Runtime/AssetRuntimeOwner.cs#L68).

## `Release`

<a id="api-b0c21d407b5dafcd"></a>
<!-- api: M:Inno.Assets.AssetRuntimeOwner.Release(Inno.Assets.AssetObject) b10ba8ac9dde543f6c91c0a525c345f6d0cee8868c8c9751ba47a1d8cfb12a42 -->

```csharp
public void Inno.Assets.AssetRuntimeOwner.Release(Inno.Assets.AssetObject asset)
```

Releases an owned instance after quiescence, without relinquishing its mutation authority.

**Parameter `asset`:** The canonical instance or uncommitted candidate to retire.

**Throws `System.InvalidOperationException`:** The asset belongs to a different owner.

**Throws `Inno.Core.Execution.RetirementPendingException`:** Owned work remains active. Retain the instance and retry at the owner's retirement safe point.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets/Runtime/AssetRuntimeOwner.cs#L112).

## `UpdateAssetPath`

<a id="api-e8ac71847515294a"></a>
<!-- api: M:Inno.Assets.AssetRuntimeOwner.UpdateAssetPath(Inno.Assets.AssetObject,Inno.Assets.AssetPath) 5d45a2894ddd4828761ebc2f8e846793a29f0ca9379e7fcef940a725b2f4004c -->

```csharp
public void Inno.Assets.AssetRuntimeOwner.UpdateAssetPath(Inno.Assets.AssetObject asset, Inno.Assets.AssetPath assetPath)
```

Updates source location without replacing committed runtime content.

**Parameter `asset`:** The owned canonical instance.

**Parameter `assetPath`:** The new mount-qualified location.

**Throws `System.InvalidOperationException`:** The asset belongs to a different owner.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets/Runtime/AssetRuntimeOwner.cs#L92).
