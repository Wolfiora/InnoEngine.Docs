---
title: "AssetSourceSnapshot"
description: "Reference for AssetSourceSnapshot in Inno.Assets.Pipeline."
uid: api.inno.assets.pipeline.181319a4eb68b925
kind: api
owners:
  - Inno.Assets.Pipeline
apiSurface: source-clr
contracts:
  - project.inno-assets-pipeline
---
# `AssetSourceSnapshot`

This reference describes `AssetSourceSnapshot` in `Inno.Assets.Pipeline`. Read the [shared contract](../../projects/inno-assets-pipeline.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`bytes`](#api-15912cfd4921ace3) | Property |
| [`contentHash`](#api-9019f22e64a1404d) | Property |
| [`isReadOnly`](#api-bc72fc79999e6e52) | Property |

## Type declaration

<a id="api-181319a4eb68b925"></a>
<!-- api: T:Inno.Assets.Pipeline.AssetSourceSnapshot 8c402dc379df52f3beea62074034a2682a0592e399b9a654da3c2ba5b32c3162 -->

```csharp
public sealed class Inno.Assets.Pipeline.AssetSourceSnapshot
```

Contains detached authoring bytes and conflict-detection state.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets.Pipeline/Editing/AssetSourceStore.cs#L146).

## `bytes`

<a id="api-15912cfd4921ace3"></a>
<!-- api: P:Inno.Assets.Pipeline.AssetSourceSnapshot.bytes 47fc8663a1bec740c61f138de618918f88cc5e7a8b588bf882d819d5fffca81d -->

```csharp
public byte[] Inno.Assets.Pipeline.AssetSourceSnapshot.bytes { get; }
```

Gets a copy of the captured native source bytes.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets.Pipeline/Editing/AssetSourceStore.cs#L161).

## `contentHash`

<a id="api-9019f22e64a1404d"></a>
<!-- api: P:Inno.Assets.Pipeline.AssetSourceSnapshot.contentHash 4e97cda3d306f07dde54a773932f7f668e3cc5285317cf0a06c2c2e87c566aaa -->

```csharp
public string Inno.Assets.Pipeline.AssetSourceSnapshot.contentHash { get; }
```

Gets the source fingerprint required by a subsequent save.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets.Pipeline/Editing/AssetSourceStore.cs#L165).

## `isReadOnly`

<a id="api-bc72fc79999e6e52"></a>
<!-- api: P:Inno.Assets.Pipeline.AssetSourceSnapshot.isReadOnly 9b5fd8845482186e84e4e09784385bd5e9685e264c24a38951b9decaf85d0a25 -->

```csharp
public bool Inno.Assets.Pipeline.AssetSourceSnapshot.isReadOnly { get; }
```

Gets whether the installation source cannot be edited in place.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets.Pipeline/Editing/AssetSourceStore.cs#L169).
