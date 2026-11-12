---
title: "RenderTextureSubresourceData"
description: "Reference for RenderTextureSubresourceData in Inno.Rendering.Runtime."
uid: api.inno.rendering.runtime.runtime-script.6ad2463891cc80c8
kind: api
owners:
  - Inno.Rendering.Runtime
apiSurface: runtime-script
contracts:
  - project.inno-rendering-runtime
  - manual.scripting.use-script-api
---
# `RenderTextureSubresourceData`

This reference describes `RenderTextureSubresourceData` in `Inno.Rendering.Runtime`. Read the [shared contract](../../projects/inno-rendering-runtime.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-a0738ae824072511) | Method |
| [`arrayLayer`](#api-afa76bea1154723f) | Property |
| [`data`](#api-1a7047a4e3a51fbf) | Property |
| [`mipLevel`](#api-3cc5e884d3188d83) | Property |

## Type declaration

<a id="api-6ad2463891cc80c8"></a>
<!-- api: T:InnoEngine.Rendering.RenderTextureSubresourceData 4710bfa955820bf3274d5981a82851e2d884b73dbaf5b9876c170a0819ef41a7 -->

```csharp
public sealed class InnoEngine.Rendering.RenderTextureSubresourceData
```

Stores one complete texture mip and addressable layer, slice, or cubemap-face upload.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Runtime/Resources/RenderTextureSubresourceData.cs#L16).

## `#ctor`

<a id="api-a0738ae824072511"></a>
<!-- api: M:InnoEngine.Rendering.RenderTextureSubresourceData.#ctor(System.Int32,System.Int32,System.ReadOnlySpan{System.Byte}) 606c021214291dc7d7556228969f1484d40f415148673963d647cb10d1208e78 -->

```csharp
public InnoEngine.Rendering.RenderTextureSubresourceData.RenderTextureSubresourceData(int mipLevel, int arrayLayer, System.ReadOnlySpan<byte> data)
```

Creates one immutable texture subresource upload.

**Parameter `mipLevel`:** Zero-based mip level.

**Parameter `arrayLayer`:** Zero-based 2D array layer, 3D Z slice, or flattened cubemap face using cube-layer * 6 + face.

**Parameter `data`:** Tightly packed complete subresource bytes.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Runtime/Resources/RenderTextureSubresourceData.cs#L32).

## `arrayLayer`

<a id="api-afa76bea1154723f"></a>
<!-- api: P:InnoEngine.Rendering.RenderTextureSubresourceData.arrayLayer 0e38e5f301a15d78bf030eb7fdc572b6c330fdd940aedf43bfd94d451af9b5c8 -->

```csharp
public int InnoEngine.Rendering.RenderTextureSubresourceData.arrayLayer { get; }
```

Gets the zero-based array layer, volume slice, or flattened cubemap face.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Runtime/Resources/RenderTextureSubresourceData.cs#L54).

## `data`

<a id="api-1a7047a4e3a51fbf"></a>
<!-- api: P:InnoEngine.Rendering.RenderTextureSubresourceData.data be8a3efe8e26aab41ef4c56faf801b38f556f70aff2e4b4cd4fdd5e1b5e71af9 -->

```csharp
public System.ReadOnlyMemory<byte> InnoEngine.Rendering.RenderTextureSubresourceData.data { get; }
```

Gets immutable tightly packed bytes.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Runtime/Resources/RenderTextureSubresourceData.cs#L59).

## `mipLevel`

<a id="api-3cc5e884d3188d83"></a>
<!-- api: P:InnoEngine.Rendering.RenderTextureSubresourceData.mipLevel 33f040d927ef9226d9149f484ae4d056ef959a8c717096659455193adf08cb99 -->

```csharp
public int InnoEngine.Rendering.RenderTextureSubresourceData.mipLevel { get; }
```

Gets the zero-based mip level.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Runtime/Resources/RenderTextureSubresourceData.cs#L49).
