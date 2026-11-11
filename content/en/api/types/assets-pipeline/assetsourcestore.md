---
title: "AssetSourceStore"
description: "Reference for AssetSourceStore in Inno.Assets.Pipeline."
uid: api.inno.assets.pipeline.a33418a14588c1c3
kind: api
owners:
  - Inno.Assets.Pipeline
apiSurface: source-clr
contracts:
  - project.inno-assets-pipeline
---
# `AssetSourceStore`

This reference describes `AssetSourceStore` in `Inno.Assets.Pipeline`. Read the [shared contract](../../projects/inno-assets-pipeline.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [```Decode``1```](#api-24c7e181be5ac48e) | Method |
| [```Encode``1```](#api-9c2eca484f2c1920) | Method |
| [`Read`](#api-5246b4709d3496f2) | Method |
| [`Save`](#api-d7de51b4163b9d8f) | Method |

## Type declaration

<a id="api-a33418a14588c1c3"></a>
<!-- api: T:Inno.Assets.Pipeline.AssetSourceStore 966c7be7e177036804a0c54f0916397d736110a1751080767177a0a1dc14ccca -->

```csharp
public sealed class Inno.Assets.Pipeline.AssetSourceStore
```

Reads detached authoring bytes and saves them independently of successful import.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets.Pipeline/Editing/AssetSourceStore.cs#L12).

## ```Decode``1```

<a id="api-24c7e181be5ac48e"></a>
<!-- api: M:Inno.Assets.Pipeline.AssetSourceStore.Decode``1(System.ReadOnlySpan{System.Byte}) 0455284e10580edc2e788aab2b8381efdabfcb075a96097986ee66454f3c8bea -->

```csharp
public TAsset Inno.Assets.Pipeline.AssetSourceStore.Decode<TAsset>(System.ReadOnlySpan<byte> bytes) where TAsset : Inno.Assets.AssetObject
```

Restores a detached native value using current-generation asset references.

**Type parameter `TAsset`:** Native asset source type.

**Parameter `bytes`:** Native source bytes.

**Returns:** A detached value; referenced assets remain canonical read-only inputs.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets.Pipeline/Editing/AssetSourceStore.cs#L67).

## ```Encode``1```

<a id="api-9c2eca484f2c1920"></a>
<!-- api: M:Inno.Assets.Pipeline.AssetSourceStore.Encode``1(``0) bcddd91acbc2da8330e9fc62b458f890b7e1f47ac110f8d28b740c762e6fe618 -->

```csharp
public byte[] Inno.Assets.Pipeline.AssetSourceStore.Encode<TAsset>(TAsset asset) where TAsset : Inno.Assets.AssetObject
```

Encodes native asset properties with the owner's reference context and dependency capture.

**Type parameter `TAsset`:** Native asset source type.

**Parameter `asset`:** Detached editable value.

**Returns:** Native source bytes, with no canonical asset mutation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets.Pipeline/Editing/AssetSourceStore.cs#L53).

## `Read`

<a id="api-5246b4709d3496f2"></a>
<!-- api: M:Inno.Assets.Pipeline.AssetSourceStore.Read(Inno.Assets.AssetPath) 55a1ceb7e55b64f65ca4e4ec4380eff71effce153cc86c2ba22d8b24dae9b55a -->

```csharp
public Inno.Assets.Pipeline.AssetSourceSnapshot Inno.Assets.Pipeline.AssetSourceStore.Read(Inno.Assets.AssetPath path)
```

Reads a mounted source without modifying its canonical asset or compiled artifacts.

**Parameter `path`:** Exact mounted source identity.

**Returns:** A detached source and optimistic concurrency fingerprint.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets.Pipeline/Editing/AssetSourceStore.cs#L34).

## `Save`

<a id="api-d7de51b4163b9d8f"></a>
<!-- api: M:Inno.Assets.Pipeline.AssetSourceStore.Save(Inno.Assets.AssetPath,System.Byte[],System.String) 11e7bfde360448b506403ad4f5247a18a34389cca80f66d67aa59ea137c58411 -->

```csharp
public string Inno.Assets.Pipeline.AssetSourceStore.Save(Inno.Assets.AssetPath path, byte[] bytes, string? expectedHash)
```

Atomically saves bytes after checking the source fingerprint; import is a separate operation.

**Parameter `path`:** Writable mounted destination.

**Parameter `bytes`:** Complete serializable source, including invalid authoring states.

**Parameter `expectedHash`:** Last read/save fingerprint; null requires a nonexistent destination.

**Returns:** The saved fingerprint.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets.Pipeline/Editing/AssetSourceStore.cs#L85).
