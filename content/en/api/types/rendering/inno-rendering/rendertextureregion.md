---
title: "RenderTextureRegion"
description: "Reference for RenderTextureRegion in Inno.Rendering."
uid: api.inno.rendering.411c165c2889191f
kind: api
owners:
  - Inno.Rendering
apiSurface: source-clr
contracts:
  - project.inno-rendering
---
# `RenderTextureRegion`

This reference describes `RenderTextureRegion` in `Inno.Rendering`. Read the [shared contract](../../../projects/inno-rendering.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.ValueType`.

**Direct interfaces:** `System.IEquatable<Inno.Rendering.RenderTextureRegion>`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-f02208f2629ce25c) | Method |
| [`Equals`](#api-af01e8cbac8b7213) | Method |
| [`Equals`](#api-701faa4918facd99) | Method |
| [`GetHashCode`](#api-29a74af6a25d0789) | Method |
| [`op_Equality`](#api-693bf7c85bb09f90) | Method |
| [`op_Inequality`](#api-de711042e1f89f30) | Method |
| [`ToString`](#api-0517fd7b2e491ea2) | Method |
| [`depth`](#api-cac4dabe01cc384f) | Property |
| [`height`](#api-0f3e3d89305678a0) | Property |
| [`layer`](#api-1c54f5aabf8d6c6c) | Property |
| [`mip`](#api-794ffeb5b32ff85e) | Property |
| [`width`](#api-7e6f0398efd3bb1f) | Property |
| [`x`](#api-ebbf5ab68262ca30) | Property |
| [`y`](#api-ab92292fffd92222) | Property |

## Type declaration

<a id="api-411c165c2889191f"></a>
<!-- api: T:Inno.Rendering.RenderTextureRegion 7697df3508ca6bfcaab9515f3919ff0d414725c76a609d8423f1ad30d3f9b6fc -->

```csharp
public readonly record struct Inno.Rendering.RenderTextureRegion : System.IEquatable<Inno.Rendering.RenderTextureRegion>
```

Describes one texture subresource box for copy and blit commands.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderCommands.cs#L80).

## `#ctor`

<a id="api-f02208f2629ce25c"></a>
<!-- api: M:Inno.Rendering.RenderTextureRegion.#ctor(System.Int32,System.Int32,System.Int32,System.Int32,System.Int32,System.Int32,System.Int32) 2ec0d8895bf0a2f9563efd27bd0f864d92ebbfb0606ddc6733459d4081aac233 -->

```csharp
public Inno.Rendering.RenderTextureRegion.RenderTextureRegion(int mip, int x, int y, int layer, int width, int height, int depth = 1)
```

Creates a texture subresource box.

**Parameter `mip`:** Zero-based mip level.

**Parameter `x`:** Horizontal texel origin.

**Parameter `y`:** Vertical texel origin.

**Parameter `layer`:** Array layer or depth-slice origin.

**Parameter `width`:** Positive texel width.

**Parameter `height`:** Positive texel height.

**Parameter `depth`:** Positive layer or depth-slice count.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderCommands.cs#L106).

## `Equals`

<a id="api-af01e8cbac8b7213"></a>
<!-- api: M:Inno.Rendering.RenderTextureRegion.Equals(Inno.Rendering.RenderTextureRegion) eb5602c448224650f6c6a8136802704a36316560553388b9bf83917bec343f4e -->

```csharp
public bool Inno.Rendering.RenderTextureRegion.Equals(Inno.Rendering.RenderTextureRegion other)
```

Indicates whether the current object is equal to another object of the same type.

**Parameter `other`:** An object to compare with this object.

**Returns:** `true` if the current object is equal to the `other` parameter; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderCommands.cs#L80).

## `Equals`

<a id="api-701faa4918facd99"></a>
<!-- api: M:Inno.Rendering.RenderTextureRegion.Equals(System.Object) 5933382a8b13230ab8d9f2d2289544ce297c13ef5d8f81a3cca691afa3a8167f -->

```csharp
public override bool Inno.Rendering.RenderTextureRegion.Equals(object obj)
```

Indicates whether this instance and a specified object are equal.

**Parameter `obj`:** The object to compare with the current instance.

**Returns:** `true` if `obj` and this instance are the same type and represent the same value; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderCommands.cs#L80).

## `GetHashCode`

<a id="api-29a74af6a25d0789"></a>
<!-- api: M:Inno.Rendering.RenderTextureRegion.GetHashCode d135e27b33cdf46194422c2a59f9602a211cae228575244c3c2c3febce9692e9 -->

```csharp
public override int Inno.Rendering.RenderTextureRegion.GetHashCode()
```

Returns the hash code for this instance.

**Returns:** A 32-bit signed integer that is the hash code for this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderCommands.cs#L80).

## `op_Equality`

<a id="api-693bf7c85bb09f90"></a>
<!-- api: M:Inno.Rendering.RenderTextureRegion.op_Equality(Inno.Rendering.RenderTextureRegion,Inno.Rendering.RenderTextureRegion) 89d8b8efefc5a0a51a7d3a501d49e2cc6d9c19ba762a051355173d0f5c63ffd7 -->

```csharp
public static bool Inno.Rendering.RenderTextureRegion.operator ==(Inno.Rendering.RenderTextureRegion left, Inno.Rendering.RenderTextureRegion right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderCommands.cs#L80).

## `op_Inequality`

<a id="api-de711042e1f89f30"></a>
<!-- api: M:Inno.Rendering.RenderTextureRegion.op_Inequality(Inno.Rendering.RenderTextureRegion,Inno.Rendering.RenderTextureRegion) 7dc7a0b3a9927d4742072952f611227ac33b65c4ea8eefce5d49507cb831eef7 -->

```csharp
public static bool Inno.Rendering.RenderTextureRegion.operator !=(Inno.Rendering.RenderTextureRegion left, Inno.Rendering.RenderTextureRegion right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderCommands.cs#L80).

## `ToString`

<a id="api-0517fd7b2e491ea2"></a>
<!-- api: M:Inno.Rendering.RenderTextureRegion.ToString 047ec5fa60db8afa643126128f3a5fe5aafb1ff617dbaf687199de017030fe28 -->

```csharp
public override string Inno.Rendering.RenderTextureRegion.ToString()
```

Returns the fully qualified type name of this instance.

**Returns:** The fully qualified type name.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderCommands.cs#L80).

## `depth`

<a id="api-cac4dabe01cc384f"></a>
<!-- api: P:Inno.Rendering.RenderTextureRegion.depth 78320544c1f8b60671d368ce1507dcf818a984bd3ac234f835aba3595bde938a -->

```csharp
public int Inno.Rendering.RenderTextureRegion.depth { get; }
```

Gets the layer or depth-slice count.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderCommands.cs#L164).

## `height`

<a id="api-0f3e3d89305678a0"></a>
<!-- api: P:Inno.Rendering.RenderTextureRegion.height 8e3307074b7ad31d1ec08c4d487c1a9ceb93979b95616e9014c61be8c02edd51 -->

```csharp
public int Inno.Rendering.RenderTextureRegion.height { get; }
```

Gets the texel height.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderCommands.cs#L159).

## `layer`

<a id="api-1c54f5aabf8d6c6c"></a>
<!-- api: P:Inno.Rendering.RenderTextureRegion.layer f3e2bc1c3fbf7aacf85bcb0e10a40b9083bd3db77276859807f584ed98fb88b1 -->

```csharp
public int Inno.Rendering.RenderTextureRegion.layer { get; }
```

Gets the array layer or depth-slice origin.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderCommands.cs#L149).

## `mip`

<a id="api-794ffeb5b32ff85e"></a>
<!-- api: P:Inno.Rendering.RenderTextureRegion.mip e76f5ac8e6d54be8f91409bdb271cdbea91b8c831768c5bad62bb38db48a4bf2 -->

```csharp
public int Inno.Rendering.RenderTextureRegion.mip { get; }
```

Gets the zero-based mip level.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderCommands.cs#L134).

## `width`

<a id="api-7e6f0398efd3bb1f"></a>
<!-- api: P:Inno.Rendering.RenderTextureRegion.width 18e73d0066ccdf89088f0caa90afed3693d2abc6c2c7f27d17f65f561ea2ec4d -->

```csharp
public int Inno.Rendering.RenderTextureRegion.width { get; }
```

Gets the texel width.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderCommands.cs#L154).

## `x`

<a id="api-ebbf5ab68262ca30"></a>
<!-- api: P:Inno.Rendering.RenderTextureRegion.x d9b68fbd940907569e6d522ab5986549cc359f4f608331d01f2c55a89af4246d -->

```csharp
public int Inno.Rendering.RenderTextureRegion.x { get; }
```

Gets the horizontal texel origin.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderCommands.cs#L139).

## `y`

<a id="api-ab92292fffd92222"></a>
<!-- api: P:Inno.Rendering.RenderTextureRegion.y a8a5c91c8b7be54b568a895676acb46586e969cd5010cd54ee353d0c5773c17e -->

```csharp
public int Inno.Rendering.RenderTextureRegion.y { get; }
```

Gets the vertical texel origin.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderCommands.cs#L144).
