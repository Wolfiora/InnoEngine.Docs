---
title: "ShaderStorageType"
description: "Reference for ShaderStorageType in Inno.Rendering.Shaders."
uid: api.inno.rendering.shaders.9ea6b97956b3a422
kind: api
owners:
  - Inno.Rendering.Shaders
apiSurface: source-clr
contracts:
  - project.inno-rendering-shaders
---
# `ShaderStorageType`

This reference describes `ShaderStorageType` in `Inno.Rendering.Shaders`. Read the [shared contract](../../../projects/inno-rendering-shaders.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`Buffer`](#api-cb47966e53277588) | Method |
| [`Image`](#api-07b1f24a94d6700e) | Method |
| [`IsEquivalentTo`](#api-6c6141b0de4a5ad0) | Method |
| [`access`](#api-d8e3cbec152d42e1) | Property |
| [`array`](#api-f3ce6febda13908b) | Property |
| [`dimension`](#api-1ee1874908d9c06f) | Property |
| [`format`](#api-f4b4bf62ff50c952) | Property |
| [`isImage`](#api-7d36024aba2d756d) | Property |
| [`valueType`](#api-fa232ea1bcafd43c) | Property |

## Type declaration

<a id="api-9ea6b97956b3a422"></a>
<!-- api: T:Inno.Rendering.Shaders.ShaderStorageType 2590b619403790a315e1758a735eaaf8911c7f0a4a5b98dc810279be1000956d -->

```csharp
public sealed class Inno.Rendering.Shaders.ShaderStorageType
```

Describes typed storage without embedding a backend register, declaration or resource handle.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Intermediate/ShaderStorageType.cs#L9).

## `Buffer`

<a id="api-cb47966e53277588"></a>
<!-- api: M:Inno.Rendering.Shaders.ShaderStorageType.Buffer(Inno.Rendering.Shaders.ShaderSourceType,Inno.Rendering.RenderStorageAccess) 76dcf55d8859d55b506fc0c9165bf91cfbb5a47d6b18bd5cd61a6347e52a122b -->

```csharp
public static Inno.Rendering.Shaders.ShaderStorageType Inno.Rendering.Shaders.ShaderStorageType.Buffer(Inno.Rendering.Shaders.ShaderSourceType element, Inno.Rendering.RenderStorageAccess access)
```

Creates a structured storage buffer with an explicit element layout.

**Parameter `element`:** Non-void value layout; resources cannot be embedded in buffer elements.

**Parameter `access`:** Permitted memory operations.

**Returns:** An immutable storage buffer description.

**Throws `System.ArgumentException`:** The element contains void or resource handles.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Intermediate/ShaderStorageType.cs#L67).

## `Image`

<a id="api-07b1f24a94d6700e"></a>
<!-- api: M:Inno.Rendering.Shaders.ShaderStorageType.Image(Inno.Rendering.RenderTextureFormat,Inno.Rendering.RenderStorageAccess,Inno.Rendering.RenderTextureDimension,System.Boolean) 5856c31a0971d16b467b9ae96f2148119c01e00ca1ec578040171a34ea1c8efe -->

```csharp
public static Inno.Rendering.Shaders.ShaderStorageType Inno.Rendering.Shaders.ShaderStorageType.Image(Inno.Rendering.RenderTextureFormat format, Inno.Rendering.RenderStorageAccess access, Inno.Rendering.RenderTextureDimension dimension = Inno.Rendering.RenderTextureDimension.Texture2D, bool array = false)
```

Creates a formatted storage image; target capabilities must separately support its access and format.

**Parameter `format`:** Linear, non-depth image format supported by the rendering contract.

**Parameter `access`:** Permitted memory operations.

**Parameter `dimension`:** Two-dimensional or three-dimensional image shape.

**Parameter `array`:** Whether a two-dimensional image is an array.

**Returns:** An immutable image description with float4 load/store values.

**Throws `System.ArgumentException`:** The format or shape cannot represent storage image operations.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Intermediate/ShaderStorageType.cs#L97).

## `IsEquivalentTo`

<a id="api-6c6141b0de4a5ad0"></a>
<!-- api: M:Inno.Rendering.Shaders.ShaderStorageType.IsEquivalentTo(Inno.Rendering.Shaders.ShaderStorageType) b31f683a19b97c5aa465d886885991aeb119a5f0809d009dc523d265197fcf47 -->

```csharp
public bool Inno.Rendering.Shaders.ShaderStorageType.IsEquivalentTo(Inno.Rendering.Shaders.ShaderStorageType? other)
```

Compares complete access, format, shape and element layout contracts.

**Parameter `other`:** Candidate resource description.

**Returns:** True only when both bindings permit exactly the same operations and values.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Intermediate/ShaderStorageType.cs#L119).

## `access`

<a id="api-d8e3cbec152d42e1"></a>
<!-- api: P:Inno.Rendering.Shaders.ShaderStorageType.access f0643a8580229fde67c33794c3287f1308ded7c4a251105f946b6c5b0fcf5fa7 -->

```csharp
public Inno.Rendering.RenderStorageAccess Inno.Rendering.Shaders.ShaderStorageType.access { get; }
```

Gets the permitted memory access, independent of Render Graph scheduling.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Intermediate/ShaderStorageType.cs#L34).

## `array`

<a id="api-f3ce6febda13908b"></a>
<!-- api: P:Inno.Rendering.Shaders.ShaderStorageType.array d2f385596a332fe969f53d1beb8a4b5aa9f6c380544c7e998d91ba79bbfce506 -->

```csharp
public bool Inno.Rendering.Shaders.ShaderStorageType.array { get; }
```

Gets whether a two-dimensional storage image has array layers.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Intermediate/ShaderStorageType.cs#L46).

## `dimension`

<a id="api-1ee1874908d9c06f"></a>
<!-- api: P:Inno.Rendering.Shaders.ShaderStorageType.dimension e7c678c73fde4c91ef6b703c2e7ee3e1252c593d1c33ccba243a9c008d93b873 -->

```csharp
public Inno.Rendering.RenderTextureDimension Inno.Rendering.Shaders.ShaderStorageType.dimension { get; }
```

Gets the image dimension; ignored for buffers.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Intermediate/ShaderStorageType.cs#L42).

## `format`

<a id="api-f4b4bf62ff50c952"></a>
<!-- api: P:Inno.Rendering.Shaders.ShaderStorageType.format db3a8bf5308f830ccf271ba174addd1421a2d1d980834df1ad50129d8dc6b124 -->

```csharp
public Inno.Rendering.RenderTextureFormat? Inno.Rendering.Shaders.ShaderStorageType.format { get; }
```

Gets the exact storage image format, or null for a structured buffer.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Intermediate/ShaderStorageType.cs#L38).

## `isImage`

<a id="api-7d36024aba2d756d"></a>
<!-- api: P:Inno.Rendering.Shaders.ShaderStorageType.isImage 07712428fa49a82eee93f2696bdb7496166643ecd598a8c6958055fc793c9685 -->

```csharp
public bool Inno.Rendering.Shaders.ShaderStorageType.isImage { get; }
```

Gets whether this descriptor denotes an image rather than a structured buffer.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Intermediate/ShaderStorageType.cs#L50).

## `valueType`

<a id="api-fa232ea1bcafd43c"></a>
<!-- api: P:Inno.Rendering.Shaders.ShaderStorageType.valueType 560a03c9a0b219184b5c84b67eb8565bbcf54143ec5f7285410d1843e4091ff7 -->

```csharp
public Inno.Rendering.Shaders.ShaderSourceType Inno.Rendering.Shaders.ShaderStorageType.valueType { get; }
```

Gets the buffer element or image load/store value type; image operations use float4.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Intermediate/ShaderStorageType.cs#L30).
