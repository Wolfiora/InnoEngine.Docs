---
title: "RenderTextureRegion"
description: "Reference for RenderTextureRegion in Inno.Rendering."
uid: api.inno.rendering.runtime-script.86e1201399a1c360
kind: api
owners:
  - Inno.Rendering
apiSurface: runtime-script
contracts:
  - project.inno-rendering
  - manual.scripting.use-script-api
---
# `RenderTextureRegion`

This reference describes `RenderTextureRegion` in `Inno.Rendering`. Read the [shared contract](../../projects/inno-rendering.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `System.ValueType`.

**Direct interfaces:** `System.IEquatable<InnoEngine.Rendering.RenderTextureRegion>`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-d307fd7535b8aee6) | Method |
| [`Equals`](#api-080c3b5a805676c9) | Method |
| [`Equals`](#api-01e5433ac40f6277) | Method |
| [`GetHashCode`](#api-677913c0ffb44b9a) | Method |
| [`op_Equality`](#api-e3ccf0bcfc545a8d) | Method |
| [`op_Inequality`](#api-4f8c4cdb7cace008) | Method |
| [`ToString`](#api-6c7a2e1b034be1d1) | Method |
| [`depth`](#api-cad8f820e81349b2) | Property |
| [`height`](#api-391c2555ef80f37c) | Property |
| [`layer`](#api-f5338fe9170eb26e) | Property |
| [`mip`](#api-b77ade8b611b461f) | Property |
| [`width`](#api-120f8a76fe5bd9ee) | Property |
| [`x`](#api-276ade8a829b14c6) | Property |
| [`y`](#api-e3b04bf90bff81e9) | Property |

## Type declaration

<a id="api-86e1201399a1c360"></a>
<!-- api: T:InnoEngine.Rendering.RenderTextureRegion 4549b6051ab649c60a36eb33442f87e9f2f2a0cbb794dccb15e23a14441e1ab1 -->

```csharp
public readonly struct InnoEngine.Rendering.RenderTextureRegion : System.IEquatable<InnoEngine.Rendering.RenderTextureRegion>
```

Describes one texture subresource box for copy and blit commands.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderCommands.cs#L80).

## `#ctor`

<a id="api-d307fd7535b8aee6"></a>
<!-- api: M:InnoEngine.Rendering.RenderTextureRegion.#ctor(System.Int32,System.Int32,System.Int32,System.Int32,System.Int32,System.Int32,System.Int32) 21fb3b40dfaba1724b40d19c39afa090f2a6a3609bf99225e9ac4b47c13486b3 -->

```csharp
public InnoEngine.Rendering.RenderTextureRegion.RenderTextureRegion(int mip, int x, int y, int layer, int width, int height, int depth = 1)
```

Creates a texture subresource box.

**Parameter `mip`:** Zero-based mip level.

**Parameter `x`:** Horizontal texel origin.

**Parameter `y`:** Vertical texel origin.

**Parameter `layer`:** Array layer or depth-slice origin.

**Parameter `width`:** Positive texel width.

**Parameter `height`:** Positive texel height.

**Parameter `depth`:** Positive layer or depth-slice count.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderCommands.cs#L106).

## `Equals`

<a id="api-080c3b5a805676c9"></a>
<!-- api: M:InnoEngine.Rendering.RenderTextureRegion.Equals(InnoEngine.Rendering.RenderTextureRegion) 0e8eb8d6d2097eadc86a9515c0d967048401de0fe8405e874f94c875b660e25b -->

```csharp
public bool InnoEngine.Rendering.RenderTextureRegion.Equals(InnoEngine.Rendering.RenderTextureRegion other)
```

Indicates whether the current object is equal to another object of the same type.

**Parameter `other`:** An object to compare with this object.

**Returns:** `true` if the current object is equal to the `other` parameter; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderCommands.cs#L80).

## `Equals`

<a id="api-01e5433ac40f6277"></a>
<!-- api: M:InnoEngine.Rendering.RenderTextureRegion.Equals(System.Object) cea43442e95472daf1ea0150ef455e0160d0fefd3ffa517cf8d34e07fa9e9e56 -->

```csharp
public override bool InnoEngine.Rendering.RenderTextureRegion.Equals(object obj)
```

Indicates whether this instance and a specified object are equal.

**Parameter `obj`:** The object to compare with the current instance.

**Returns:** `true` if `obj` and this instance are the same type and represent the same value; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderCommands.cs#L80).

## `GetHashCode`

<a id="api-677913c0ffb44b9a"></a>
<!-- api: M:InnoEngine.Rendering.RenderTextureRegion.GetHashCode 51457c01236e8b574d7871c3beff6b31c996dbd46f8e9844716fbdf53d487b01 -->

```csharp
public override int InnoEngine.Rendering.RenderTextureRegion.GetHashCode()
```

Returns the hash code for this instance.

**Returns:** A 32-bit signed integer that is the hash code for this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderCommands.cs#L80).

## `op_Equality`

<a id="api-e3ccf0bcfc545a8d"></a>
<!-- api: M:InnoEngine.Rendering.RenderTextureRegion.op_Equality(InnoEngine.Rendering.RenderTextureRegion,InnoEngine.Rendering.RenderTextureRegion) 6820fbed2760c53952fedfdf79e021874b154cc413ceb222d5f043304ba2b544 -->

```csharp
public static bool InnoEngine.Rendering.RenderTextureRegion.operator ==(InnoEngine.Rendering.RenderTextureRegion left, InnoEngine.Rendering.RenderTextureRegion right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderCommands.cs#L80).

## `op_Inequality`

<a id="api-4f8c4cdb7cace008"></a>
<!-- api: M:InnoEngine.Rendering.RenderTextureRegion.op_Inequality(InnoEngine.Rendering.RenderTextureRegion,InnoEngine.Rendering.RenderTextureRegion) c629e5ddc306c60789f5abf74fffe535745eee5ef18efee5a3dc15c437f8227f -->

```csharp
public static bool InnoEngine.Rendering.RenderTextureRegion.operator !=(InnoEngine.Rendering.RenderTextureRegion left, InnoEngine.Rendering.RenderTextureRegion right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderCommands.cs#L80).

## `ToString`

<a id="api-6c7a2e1b034be1d1"></a>
<!-- api: M:InnoEngine.Rendering.RenderTextureRegion.ToString 535ec074bab0b08f8e62d609e8855b87e75136b93f51a3b438b3ba8ce684de51 -->

```csharp
public override string InnoEngine.Rendering.RenderTextureRegion.ToString()
```

Returns the fully qualified type name of this instance.

**Returns:** The fully qualified type name.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderCommands.cs#L80).

## `depth`

<a id="api-cad8f820e81349b2"></a>
<!-- api: P:InnoEngine.Rendering.RenderTextureRegion.depth de22f054a26ed79a2e3e1ce1e09e317cc61a765f1fa811591eac6e696c9f5057 -->

```csharp
public int InnoEngine.Rendering.RenderTextureRegion.depth { get; }
```

Gets the layer or depth-slice count.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderCommands.cs#L164).

## `height`

<a id="api-391c2555ef80f37c"></a>
<!-- api: P:InnoEngine.Rendering.RenderTextureRegion.height ff7bbd1530878e78819c0e72fd63653f742219a240d437bd7dcf76aca3cf1557 -->

```csharp
public int InnoEngine.Rendering.RenderTextureRegion.height { get; }
```

Gets the texel height.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderCommands.cs#L159).

## `layer`

<a id="api-f5338fe9170eb26e"></a>
<!-- api: P:InnoEngine.Rendering.RenderTextureRegion.layer ea057aed0e50f96e65150647f8b1ff8c9b8830136cdd07c90f79d8e5ea12ddf4 -->

```csharp
public int InnoEngine.Rendering.RenderTextureRegion.layer { get; }
```

Gets the array layer or depth-slice origin.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderCommands.cs#L149).

## `mip`

<a id="api-b77ade8b611b461f"></a>
<!-- api: P:InnoEngine.Rendering.RenderTextureRegion.mip 6eed300fc60622964fb43b75e62fe911ceec73f897246a3c032cde5cd256b101 -->

```csharp
public int InnoEngine.Rendering.RenderTextureRegion.mip { get; }
```

Gets the zero-based mip level.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderCommands.cs#L134).

## `width`

<a id="api-120f8a76fe5bd9ee"></a>
<!-- api: P:InnoEngine.Rendering.RenderTextureRegion.width a1abde8fb80161f103e6334e4487cfad913fc18ffdce527bcdb338c0453afad5 -->

```csharp
public int InnoEngine.Rendering.RenderTextureRegion.width { get; }
```

Gets the texel width.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderCommands.cs#L154).

## `x`

<a id="api-276ade8a829b14c6"></a>
<!-- api: P:InnoEngine.Rendering.RenderTextureRegion.x acf1fc34437d7aa5d077a1c3fe1c381488330169cfc3c88f8181a78c07a5bbeb -->

```csharp
public int InnoEngine.Rendering.RenderTextureRegion.x { get; }
```

Gets the horizontal texel origin.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderCommands.cs#L139).

## `y`

<a id="api-e3b04bf90bff81e9"></a>
<!-- api: P:InnoEngine.Rendering.RenderTextureRegion.y 8b9f01585fb63ce07e8160a22d0cf5b8cbb1dcb0d0a867fe4b8e4c210edadba2 -->

```csharp
public int InnoEngine.Rendering.RenderTextureRegion.y { get; }
```

Gets the vertical texel origin.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderCommands.cs#L144).
