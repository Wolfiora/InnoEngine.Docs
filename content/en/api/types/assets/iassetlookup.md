---
title: "IAssetLookup"
description: "Reference for IAssetLookup in Inno.Assets."
uid: api.inno.assets.8de5d384bb898514
kind: api
owners:
  - Inno.Assets
apiSurface: source-clr
contracts:
  - project.inno-assets
---
# `IAssetLookup`

This reference describes `IAssetLookup` in `Inno.Assets`. Read the [shared contract](../../projects/inno-assets.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

## Members

| Member | Kind |
| --- | --- |
| [```Load``1```](#api-0e22932d8991131b) | Method |
| [```Load``1```](#api-2fdfc82fed4e04b5) | Method |
| [```TryLoad``1```](#api-4174cacbefa3332e) | Method |
| [```TryLoad``1```](#api-19cb0269e8269f37) | Method |

## Type declaration

<a id="api-8de5d384bb898514"></a>
<!-- api: T:Inno.Assets.IAssetLookup 44f6df68c7f2ff620f1000ec2e18f6b0a68b0a96b02efc1adc8ce252b9200ab0 -->

```csharp
public interface Inno.Assets.IAssetLookup
```

Defines the read-only asset lookup boundary shared by authoring and deployed runtime databases.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets/Runtime/IAssetLookup.cs#L8).

## ```Load``1```

<a id="api-0e22932d8991131b"></a>
<!-- api: M:Inno.Assets.IAssetLookup.Load``1(Inno.Assets.AssetPath) 3a554bfc29d5e72870639118e3ae1d9d827f8ebfc77128c74c2becbf28d7b0fb -->

```csharp
TAsset Inno.Assets.IAssetLookup.Load<TAsset>(Inno.Assets.AssetPath path) where TAsset : Inno.Assets.AssetObject
```

Loads the canonical asset at a logical catalog path.

**Type parameter `TAsset`:** The required asset contract.

**Parameter `path`:** The mount-qualified logical catalog path.

**Returns:** The canonical compatible asset owned by this lookup.

**Throws `System.InvalidOperationException`:** Thrown when the asset does not exist or has an incompatible concrete type.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets/Runtime/IAssetLookup.cs#L25).

## ```Load``1```

<a id="api-2fdfc82fed4e04b5"></a>
<!-- api: M:Inno.Assets.IAssetLookup.Load``1(System.Guid) 78ac70fdc119109b19a966a6308c92348fb8cf1a6bf4987484e9ca98eaa92b54 -->

```csharp
TAsset Inno.Assets.IAssetLookup.Load<TAsset>(System.Guid persistentId) where TAsset : Inno.Assets.AssetObject
```

Loads the canonical asset with a persistent identity.

**Type parameter `TAsset`:** The required asset contract.

**Parameter `persistentId`:** The non-empty persistent asset identity.

**Returns:** The canonical compatible asset owned by this lookup.

**Throws `System.InvalidOperationException`:** Thrown when the asset does not exist or has an incompatible concrete type.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets/Runtime/IAssetLookup.cs#L43).

## ```TryLoad``1```

<a id="api-4174cacbefa3332e"></a>
<!-- api: M:Inno.Assets.IAssetLookup.TryLoad``1(Inno.Assets.AssetPath,``0@) c2867ea083b239fde22dc21038b86424c38266faec3bc169829674e67048c8a5 -->

```csharp
bool Inno.Assets.IAssetLookup.TryLoad<TAsset>(Inno.Assets.AssetPath path, out TAsset? asset) where TAsset : Inno.Assets.AssetObject
```

Tries to load the canonical asset at a logical catalog path.

**Type parameter `TAsset`:** The required asset contract.

**Parameter `path`:** The mount-qualified logical catalog path.

**Parameter `asset`:** Receives the canonical compatible asset when available.

**Returns:** `true` when the lookup contains a compatible asset; otherwise,
    `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets/Runtime/IAssetLookup.cs#L62).

## ```TryLoad``1```

<a id="api-19cb0269e8269f37"></a>
<!-- api: M:Inno.Assets.IAssetLookup.TryLoad``1(System.Guid,``0@) 97aa701a3021fe18ebc2f3d5f4bb90ffd8693b52c39d3590f89e91da4acbe746 -->

```csharp
bool Inno.Assets.IAssetLookup.TryLoad<TAsset>(System.Guid persistentId, out TAsset? asset) where TAsset : Inno.Assets.AssetObject
```

Tries to load the canonical asset with a persistent identity.

**Type parameter `TAsset`:** The required asset contract.

**Parameter `persistentId`:** The non-empty persistent asset identity.

**Parameter `asset`:** Receives the canonical compatible asset when available.

**Returns:** `true` when the lookup contains a compatible asset; otherwise,
    `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets/Runtime/IAssetLookup.cs#L84).
