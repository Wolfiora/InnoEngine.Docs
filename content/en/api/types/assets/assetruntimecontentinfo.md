---
title: "AssetRuntimeContentInfo"
description: "Reference for AssetRuntimeContentInfo in Inno.Assets."
uid: api.inno.assets.117e7edb67f44d06
kind: api
owners:
  - Inno.Assets
apiSurface: source-clr
contracts:
  - project.inno-assets
---
# `AssetRuntimeContentInfo`

This reference describes `AssetRuntimeContentInfo` in `Inno.Assets`. Read the [shared contract](../../projects/inno-assets.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-8c89bf52e46ab353) | Method |
| [`artifactBundleCount`](#api-647ea0d4be067039) | Property |
| [`assetCount`](#api-1e06400babc22119) | Property |
| [`sources`](#api-dc93b21fde35e700) | Property |
| [`totalBytes`](#api-aaa246fbba2d66a3) | Property |

## Type declaration

<a id="api-117e7edb67f44d06"></a>
<!-- api: T:Inno.Assets.AssetRuntimeContentInfo ff0043fa539173adb658d1fa5b2fce3b534ff8942da00c8c1c14dbb06e9bd9eb -->

```csharp
public sealed class Inno.Assets.AssetRuntimeContentInfo
```

Describes one deployed runtime-only asset content snapshot.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets/Artifacts/AssetRuntimeContentInfo.cs#L10).

## `#ctor`

<a id="api-8c89bf52e46ab353"></a>
<!-- api: M:Inno.Assets.AssetRuntimeContentInfo.#ctor(System.Collections.Generic.IReadOnlyList{Inno.Assets.AssetSourceId},System.Int32,System.Int32,System.Int64) 94d352d46f22487bb7be5097c82738a3d6dabd7093e9572f663ac0ceeabfb2dd -->

```csharp
public Inno.Assets.AssetRuntimeContentInfo.AssetRuntimeContentInfo(System.Collections.Generic.IReadOnlyList<Inno.Assets.AssetSourceId> sources, int assetCount, int artifactBundleCount, long totalBytes)
```

Creates an immutable runtime content summary with its own frozen source inventory.

**Parameter `sources`:** Source identities represented by the deployed catalog; their values are copied during construction.

**Parameter `assetCount`:** Number of runtime-scoped assets in the deployed catalog.

**Parameter `artifactBundleCount`:** Number of unique content-addressed bundles.

**Parameter `totalBytes`:** Total bytes copied into the runtime content root.

**Throws `System.ArgumentNullException`:** The source inventory is absent.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets/Artifacts/AssetRuntimeContentInfo.cs#L30).

## `artifactBundleCount`

<a id="api-647ea0d4be067039"></a>
<!-- api: P:Inno.Assets.AssetRuntimeContentInfo.artifactBundleCount f83afc437a2d9c72b289359802dfff387d62e2f049bfd8ceffba829a5b93ea76 -->

```csharp
public int Inno.Assets.AssetRuntimeContentInfo.artifactBundleCount { get; }
```

Gets the number of unique content-addressed bundles.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets/Artifacts/AssetRuntimeContentInfo.cs#L56).

## `assetCount`

<a id="api-1e06400babc22119"></a>
<!-- api: P:Inno.Assets.AssetRuntimeContentInfo.assetCount eae9617e53528a7a55c7b53d4e92e0471e611e1f7ff7954aa2ec126e8df62535 -->

```csharp
public int Inno.Assets.AssetRuntimeContentInfo.assetCount { get; }
```

Gets the number of runtime-scoped assets in the deployed catalog.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets/Artifacts/AssetRuntimeContentInfo.cs#L51).

## `sources`

<a id="api-dc93b21fde35e700"></a>
<!-- api: P:Inno.Assets.AssetRuntimeContentInfo.sources f1dd6d6f5b13962592efadd76adf6466301b7dc1e17aae802e1496f739a951ae -->

```csharp
public System.Collections.Generic.IReadOnlyList<Inno.Assets.AssetSourceId> Inno.Assets.AssetRuntimeContentInfo.sources { get; }
```

Gets the source identities represented by the deployed catalog.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets/Artifacts/AssetRuntimeContentInfo.cs#L46).

## `totalBytes`

<a id="api-aaa246fbba2d66a3"></a>
<!-- api: P:Inno.Assets.AssetRuntimeContentInfo.totalBytes 16a8059bd4f95f332ea935cab84b7d9d1174086573279fef4d57ee4f4ff1b703 -->

```csharp
public long Inno.Assets.AssetRuntimeContentInfo.totalBytes { get; }
```

Gets the total bytes copied into the runtime content root.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets/Artifacts/AssetRuntimeContentInfo.cs#L61).
