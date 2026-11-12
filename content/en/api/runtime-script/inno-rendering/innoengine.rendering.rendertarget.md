---
title: "RenderTarget"
description: "Reference for RenderTarget in Inno.Rendering."
uid: api.inno.rendering.runtime-script.875d155c05f349d1
kind: api
owners:
  - Inno.Rendering
apiSurface: runtime-script
contracts:
  - project.inno-rendering
  - manual.scripting.use-script-api
---
# `RenderTarget`

This reference describes `RenderTarget` in `Inno.Rendering`. Read the [shared contract](../../projects/inno-rendering.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `System.ValueType`.

**Direct interfaces:** `System.IEquatable<InnoEngine.Rendering.RenderTarget>`.

## Members

| Member | Kind |
| --- | --- |
| [`Equals`](#api-93b6dc19c970a540) | Method |
| [`Equals`](#api-8d3df42a6f33bf27) | Method |
| [`FromTexture`](#api-0cf6f21ea15d3c98) | Method |
| [`GetHashCode`](#api-10e4c9f5148c3c90) | Method |
| [`op_Equality`](#api-d403b1d7e503b4dd) | Method |
| [`op_Inequality`](#api-d6787996095a7486) | Method |
| [`ToString`](#api-a6d558071ed95b3f) | Method |
| [`backbuffer`](#api-1f56384c0338debf) | Property |
| [`kind`](#api-9b8fb48ceb402c8b) | Property |
| [`texture`](#api-fc461b5e21b7d202) | Property |

## Type declaration

<a id="api-875d155c05f349d1"></a>
<!-- api: T:InnoEngine.Rendering.RenderTarget 2765a5840f3e7a0892097d75d4f61d4d5e07caab61ba3513e3288b278aeb1085 -->

```csharp
public readonly struct InnoEngine.Rendering.RenderTarget : System.IEquatable<InnoEngine.Rendering.RenderTarget>
```

Selects one render destination without exposing a swapchain or framebuffer handle.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Targets/RenderTarget.cs#L23).

## `Equals`

<a id="api-93b6dc19c970a540"></a>
<!-- api: M:InnoEngine.Rendering.RenderTarget.Equals(InnoEngine.Rendering.RenderTarget) 95628933059065db0849d7a61ec7bb2774ab59f62ecfb9e73ae2c091ea3974ce -->

```csharp
public bool InnoEngine.Rendering.RenderTarget.Equals(InnoEngine.Rendering.RenderTarget other)
```

Indicates whether the current object is equal to another object of the same type.

**Parameter `other`:** An object to compare with this object.

**Returns:** `true` if the current object is equal to the `other` parameter; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Targets/RenderTarget.cs#L23).

## `Equals`

<a id="api-8d3df42a6f33bf27"></a>
<!-- api: M:InnoEngine.Rendering.RenderTarget.Equals(System.Object) ab7bf05ffc054d9c40b4a4f47bb04aab427738668c363c616866b14356a96576 -->

```csharp
public override bool InnoEngine.Rendering.RenderTarget.Equals(object obj)
```

Indicates whether this instance and a specified object are equal.

**Parameter `obj`:** The object to compare with the current instance.

**Returns:** `true` if `obj` and this instance are the same type and represent the same value; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Targets/RenderTarget.cs#L23).

## `FromTexture`

<a id="api-0cf6f21ea15d3c98"></a>
<!-- api: M:InnoEngine.Rendering.RenderTarget.FromTexture(InnoEngine.Rendering.RenderTexture) f1413ad8863e6f89ba219b87c8b4b677a4bb5cd720d750f708cc81270b0d599f -->

```csharp
public static InnoEngine.Rendering.RenderTarget InnoEngine.Rendering.RenderTarget.FromTexture(InnoEngine.Rendering.RenderTexture texture)
```

Creates an offscreen render target.

**Parameter `texture`:** Persistent offscreen texture description.

**Returns:** A target referencing `texture`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Targets/RenderTarget.cs#L57).

## `GetHashCode`

<a id="api-10e4c9f5148c3c90"></a>
<!-- api: M:InnoEngine.Rendering.RenderTarget.GetHashCode 97df4caf2cd87cd936791e1c75fd5dc1f8f2159b86af050c0e7dcaa4c82179b3 -->

```csharp
public override int InnoEngine.Rendering.RenderTarget.GetHashCode()
```

Returns the hash code for this instance.

**Returns:** A 32-bit signed integer that is the hash code for this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Targets/RenderTarget.cs#L23).

## `op_Equality`

<a id="api-d403b1d7e503b4dd"></a>
<!-- api: M:InnoEngine.Rendering.RenderTarget.op_Equality(InnoEngine.Rendering.RenderTarget,InnoEngine.Rendering.RenderTarget) 6c4a4223872a4d736c1c83242429f5577ffa577da977ceb375290f324a34ca3b -->

```csharp
public static bool InnoEngine.Rendering.RenderTarget.operator ==(InnoEngine.Rendering.RenderTarget left, InnoEngine.Rendering.RenderTarget right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Targets/RenderTarget.cs#L23).

## `op_Inequality`

<a id="api-d6787996095a7486"></a>
<!-- api: M:InnoEngine.Rendering.RenderTarget.op_Inequality(InnoEngine.Rendering.RenderTarget,InnoEngine.Rendering.RenderTarget) 3f6e3cdd5e48def64909c2e117813b3d27fe279d0b14418804a034bcff62b4ac -->

```csharp
public static bool InnoEngine.Rendering.RenderTarget.operator !=(InnoEngine.Rendering.RenderTarget left, InnoEngine.Rendering.RenderTarget right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Targets/RenderTarget.cs#L23).

## `ToString`

<a id="api-a6d558071ed95b3f"></a>
<!-- api: M:InnoEngine.Rendering.RenderTarget.ToString 45f679a9f9061795e13a1a9c71f520521f495d9ccafcbe6c73548850264275d6 -->

```csharp
public override string InnoEngine.Rendering.RenderTarget.ToString()
```

Returns the fully qualified type name of this instance.

**Returns:** The fully qualified type name.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Targets/RenderTarget.cs#L23).

## `backbuffer`

<a id="api-1f56384c0338debf"></a>
<!-- api: P:InnoEngine.Rendering.RenderTarget.backbuffer bd1c02c3d4a0b6f1a303f258b64381b77d95cb333d5da8b7a1a3d144c07dd42b -->

```csharp
public static InnoEngine.Rendering.RenderTarget InnoEngine.Rendering.RenderTarget.backbuffer { get; }
```

Gets a target representing the main application backbuffer.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Targets/RenderTarget.cs#L36).

## `kind`

<a id="api-9b8fb48ceb402c8b"></a>
<!-- api: P:InnoEngine.Rendering.RenderTarget.kind 723e4588336c87edb46c6264060b41bd214843478cd15c2bb32b335169209e63 -->

```csharp
public InnoEngine.Rendering.RenderTargetKind InnoEngine.Rendering.RenderTarget.kind { get; }
```

Gets the target kind.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Targets/RenderTarget.cs#L41).

## `texture`

<a id="api-fc461b5e21b7d202"></a>
<!-- api: P:InnoEngine.Rendering.RenderTarget.texture 70d81270e3a4b9a5885516d57f599cc05c23610c16f2c42864b67008e5121165 -->

```csharp
public InnoEngine.Rendering.RenderTexture? InnoEngine.Rendering.RenderTarget.texture { get; }
```

Gets the offscreen texture, or `null` for the backbuffer.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Targets/RenderTarget.cs#L46).
