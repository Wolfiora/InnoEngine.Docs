---
title: "AssetCreationContext"
description: "Reference for AssetCreationContext in Inno.Editor.Assets."
uid: api.inno.editor.assets.6e7e027cad6396ae
kind: api
owners:
  - Inno.Editor.Assets
apiSurface: source-clr
contracts:
  - project.inno-editor-assets
---
# `AssetCreationContext`

This reference describes `AssetCreationContext` in `Inno.Editor.Assets`. Read the [shared contract](../../../projects/inno-editor-assets.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-1d0b9bde8f5a28eb) | Method |
| [`EncodeNative`](#api-6663a476394cff08) | Method |

## Type declaration

<a id="api-6e7e027cad6396ae"></a>
<!-- api: T:Inno.Editor.Assets.AssetCreationContext 8372d15d0451f5c727ff15d1175b2b41275b2681333d41322715ff53d0583da5 -->

```csharp
public sealed class Inno.Editor.Assets.AssetCreationContext
```

Provides source encoding services to one detached Asset creation template invocation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Assets/Creation/AssetCreationTemplate.cs#L169).

## `#ctor`

<a id="api-1d0b9bde8f5a28eb"></a>
<!-- api: M:Inno.Editor.Assets.AssetCreationContext.#ctor(Inno.Assets.Pipeline.AssetSourceStore) fdf680f5ec63af4ac22383e9fc19b6926babaa74430148570354d54fc7e2c394 -->

```csharp
public Inno.Editor.Assets.AssetCreationContext.AssetCreationContext(Inno.Assets.Pipeline.AssetSourceStore sources)
```

Creates a context over the source serializer owned by the active Asset pipeline.

**Parameter `sources`:** Source serializer carrying the active reference context.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Assets/Creation/AssetCreationTemplate.cs#L180).

## `EncodeNative`

<a id="api-6663a476394cff08"></a>
<!-- api: M:Inno.Editor.Assets.AssetCreationContext.EncodeNative(Inno.Assets.AssetObject) bfc353e4b213cfb83dedf4df5449e0decb9b8b67669c4fec4735e6dedf99c2f3 -->

```csharp
public byte[] Inno.Editor.Assets.AssetCreationContext.EncodeNative(Inno.Assets.AssetObject asset)
```

Encodes an Asset value through the current native structured source serializer.

**Parameter `asset`:** Detached Asset value to encode.

**Returns:** Complete native source bytes, including the concrete serialized type identity.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Assets/Creation/AssetCreationTemplate.cs#L191).
