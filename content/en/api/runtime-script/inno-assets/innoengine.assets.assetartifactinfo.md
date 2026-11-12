---
title: "AssetArtifactInfo"
description: "Reference for AssetArtifactInfo in Inno.Assets."
uid: api.inno.assets.runtime-script.3d450ccdc9e591c9
kind: api
owners:
  - Inno.Assets
apiSurface: runtime-script
contracts:
  - project.inno-assets
  - manual.scripting.use-script-api
---
# `AssetArtifactInfo`

This reference describes `AssetArtifactInfo` in `Inno.Assets`. Read the [shared contract](../../projects/inno-assets.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-4a93784bc157ab54) | Method |
| [`contentHash`](#api-9ecff288965b9ab2) | Property |
| [`key`](#api-61536cf776c8c8a3) | Property |
| [`length`](#api-4cd2843831597f7f) | Property |
| [`outputName`](#api-727be561e7b622d1) | Property |

## Type declaration

<a id="api-3d450ccdc9e591c9"></a>
<!-- api: T:InnoEngine.Assets.AssetArtifactInfo 5d888ca1717ce1b241de56565bbf7e1813588beb973f2218348a016ff4871315 -->

```csharp
public sealed class InnoEngine.Assets.AssetArtifactInfo
```

Describes one named output in an immutable artifact bundle.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/assets/Inno.Assets/Artifacts/AssetArtifactInfo.cs#L6).

## `#ctor`

<a id="api-4a93784bc157ab54"></a>
<!-- api: M:InnoEngine.Assets.AssetArtifactInfo.#ctor(InnoEngine.Assets.AssetArtifactKey,System.String,System.String,System.Int64) 6a492e3e36fbf14e29b07477165d8b70da68be6ae02ae1d8d7526018fbc0a34f -->

```csharp
public InnoEngine.Assets.AssetArtifactInfo.AssetArtifactInfo(InnoEngine.Assets.AssetArtifactKey key, string outputName, string contentHash, long length)
```

Creates an artifact output descriptor.

**Parameter `key`:** The immutable bundle identity that owns this output.

**Parameter `outputName`:** The stable output name used for artifact lookup.

**Parameter `contentHash`:** The normalized content fingerprint used for integrity verification.

**Parameter `length`:** The exact artifact length in bytes.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/assets/Inno.Assets/Artifacts/AssetArtifactInfo.cs#L23).

## `contentHash`

<a id="api-9ecff288965b9ab2"></a>
<!-- api: P:InnoEngine.Assets.AssetArtifactInfo.contentHash 7cf8ec710446ce2f69899b0c0265078b59baa8a676513c12dfc22b6e63f67b34 -->

```csharp
public string InnoEngine.Assets.AssetArtifactInfo.contentHash { get; }
```

Gets the output content fingerprint.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/assets/Inno.Assets/Artifacts/AssetArtifactInfo.cs#L48).

## `key`

<a id="api-61536cf776c8c8a3"></a>
<!-- api: P:InnoEngine.Assets.AssetArtifactInfo.key d28529a6b1dafa8e9b4f2162fbeef2d3b48c606aec163d9c6afeb0420879669f -->

```csharp
public InnoEngine.Assets.AssetArtifactKey InnoEngine.Assets.AssetArtifactInfo.key { get; }
```

Gets the owning artifact bundle key.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/assets/Inno.Assets/Artifacts/AssetArtifactInfo.cs#L38).

## `length`

<a id="api-4cd2843831597f7f"></a>
<!-- api: P:InnoEngine.Assets.AssetArtifactInfo.length c5aeaf08c2a38cd6c6c65899d4fb03844eb634572bd20b2662bf3a004f2fb8f7 -->

```csharp
public long InnoEngine.Assets.AssetArtifactInfo.length { get; }
```

Gets the output length in bytes.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/assets/Inno.Assets/Artifacts/AssetArtifactInfo.cs#L53).

## `outputName`

<a id="api-727be561e7b622d1"></a>
<!-- api: P:InnoEngine.Assets.AssetArtifactInfo.outputName b8a548ce882587afa20a611b22f5922190b01d1fc5d76a4dc39e65a35d369309 -->

```csharp
public string InnoEngine.Assets.AssetArtifactInfo.outputName { get; }
```

Gets the stable output name.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/assets/Inno.Assets/Artifacts/AssetArtifactInfo.cs#L43).
