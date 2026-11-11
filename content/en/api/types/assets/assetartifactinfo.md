---
title: "AssetArtifactInfo"
description: "Reference for AssetArtifactInfo in Inno.Assets."
uid: api.inno.assets.a83da64c5ca875fe
kind: api
owners:
  - Inno.Assets
apiSurface: source-clr
contracts:
  - project.inno-assets
---
# `AssetArtifactInfo`

This reference describes `AssetArtifactInfo` in `Inno.Assets`. Read the [shared contract](../../projects/inno-assets.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-df41d16040083810) | Method |
| [`contentHash`](#api-4ce3defb362615cb) | Property |
| [`key`](#api-4728bb31d1e00a9e) | Property |
| [`length`](#api-d010df966d2b5637) | Property |
| [`outputName`](#api-71856a582ec7d21e) | Property |

## Type declaration

<a id="api-a83da64c5ca875fe"></a>
<!-- api: T:Inno.Assets.AssetArtifactInfo f891b9d9035cd59d9f2a14c2fc81466af6213f03ba2bcd260be6da64cddc8858 -->

```csharp
public sealed class Inno.Assets.AssetArtifactInfo
```

Describes one named output in an immutable artifact bundle.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets/Artifacts/AssetArtifactInfo.cs#L6).

## `#ctor`

<a id="api-df41d16040083810"></a>
<!-- api: M:Inno.Assets.AssetArtifactInfo.#ctor(Inno.Assets.AssetArtifactKey,System.String,System.String,System.Int64) f244d7bb3b19d4f99120c599f5c524448747213be3aec1bc1e277daf371c5e55 -->

```csharp
public Inno.Assets.AssetArtifactInfo.AssetArtifactInfo(Inno.Assets.AssetArtifactKey key, string outputName, string contentHash, long length)
```

Creates an artifact output descriptor.

**Parameter `key`:** The immutable bundle identity that owns this output.

**Parameter `outputName`:** The stable output name used for artifact lookup.

**Parameter `contentHash`:** The normalized content fingerprint used for integrity verification.

**Parameter `length`:** The exact artifact length in bytes.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets/Artifacts/AssetArtifactInfo.cs#L23).

## `contentHash`

<a id="api-4ce3defb362615cb"></a>
<!-- api: P:Inno.Assets.AssetArtifactInfo.contentHash e16bf3550ef41028f206047b1222705c18a69eaf36a0eb13c352b72a393bcce2 -->

```csharp
public string Inno.Assets.AssetArtifactInfo.contentHash { get; }
```

Gets the output content fingerprint.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets/Artifacts/AssetArtifactInfo.cs#L48).

## `key`

<a id="api-4728bb31d1e00a9e"></a>
<!-- api: P:Inno.Assets.AssetArtifactInfo.key e6104b05bb331b7988945d8d0bb7f43aa0c2042ef9203e8d2394d668f05c7463 -->

```csharp
public Inno.Assets.AssetArtifactKey Inno.Assets.AssetArtifactInfo.key { get; }
```

Gets the owning artifact bundle key.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets/Artifacts/AssetArtifactInfo.cs#L38).

## `length`

<a id="api-d010df966d2b5637"></a>
<!-- api: P:Inno.Assets.AssetArtifactInfo.length 10225b234ff845c41f6c8a6d5bbd5b18e291539319269b2cb9da33540a5c969b -->

```csharp
public long Inno.Assets.AssetArtifactInfo.length { get; }
```

Gets the output length in bytes.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets/Artifacts/AssetArtifactInfo.cs#L53).

## `outputName`

<a id="api-71856a582ec7d21e"></a>
<!-- api: P:Inno.Assets.AssetArtifactInfo.outputName bbc7ab0439c7ef25bca97a14c706e56036f04d89564ca137abe930faa639928e -->

```csharp
public string Inno.Assets.AssetArtifactInfo.outputName { get; }
```

Gets the stable output name.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets/Artifacts/AssetArtifactInfo.cs#L43).
