---
title: "RenderViewport"
description: "Reference for RenderViewport in Inno.Rendering."
uid: api.inno.rendering.runtime-script.899771529aae312d
kind: api
owners:
  - Inno.Rendering
apiSurface: runtime-script
contracts:
  - project.inno-rendering
  - manual.scripting.use-script-api
---
# `RenderViewport`

This reference describes `RenderViewport` in `Inno.Rendering`. Read the [shared contract](../../projects/inno-rendering.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `System.ValueType`.

**Direct interfaces:** `System.IEquatable<InnoEngine.Rendering.RenderViewport>`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-bbf3bb16a4723043) | Method |
| [`Equals`](#api-6a042aaa5972f130) | Method |
| [`Equals`](#api-68c8d4ba5c286a7d) | Method |
| [`GetHashCode`](#api-ef738e8e0d69cfcb) | Method |
| [`op_Equality`](#api-62ec22158e8e128b) | Method |
| [`op_Inequality`](#api-fa1b4f635e2c9e64) | Method |
| [`ToString`](#api-d8783c9b702bebf0) | Method |
| [`height`](#api-f6f986baae79c62f) | Property |
| [`width`](#api-1f36d74ca89158e6) | Property |
| [`x`](#api-2adec8928ee6c1e1) | Property |
| [`y`](#api-071f8f891c7b6645) | Property |

## Type declaration

<a id="api-899771529aae312d"></a>
<!-- api: T:InnoEngine.Rendering.RenderViewport ac301f630ff4b9170c7192534e48e50e64154aa1f831835713fd877812d5a9d0 -->

```csharp
public readonly struct InnoEngine.Rendering.RenderViewport : System.IEquatable<InnoEngine.Rendering.RenderViewport>
```

Defines a destination pixel rectangle without assuming producer or rendering semantics.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Views/RenderViewport.cs#L9).

## `#ctor`

<a id="api-bbf3bb16a4723043"></a>
<!-- api: M:InnoEngine.Rendering.RenderViewport.#ctor(System.Int32,System.Int32,System.Int32,System.Int32) 71c880c7af5684f0b37f2ec90f369b779a848166046eada3a92d31add2d4612b -->

```csharp
public InnoEngine.Rendering.RenderViewport.RenderViewport(int x, int y, int width, int height)
```

Creates a render viewport.

**Parameter `x`:** Left pixel offset in the destination.

**Parameter `y`:** Top pixel offset in the destination.

**Parameter `width`:** Positive viewport width.

**Parameter `height`:** Positive viewport height.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Views/RenderViewport.cs#L26).

## `Equals`

<a id="api-6a042aaa5972f130"></a>
<!-- api: M:InnoEngine.Rendering.RenderViewport.Equals(InnoEngine.Rendering.RenderViewport) 7335a3fb806d15abbcd2065c6655b5900fa6f35cd2cda52e98d20e8607386417 -->

```csharp
public bool InnoEngine.Rendering.RenderViewport.Equals(InnoEngine.Rendering.RenderViewport other)
```

Indicates whether the current object is equal to another object of the same type.

**Parameter `other`:** An object to compare with this object.

**Returns:** `true` if the current object is equal to the `other` parameter; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Views/RenderViewport.cs#L9).

## `Equals`

<a id="api-68c8d4ba5c286a7d"></a>
<!-- api: M:InnoEngine.Rendering.RenderViewport.Equals(System.Object) 88f8fd8c329821abc83feb4ea259a336a6d3165afcfc7b5a4f819d863c63682f -->

```csharp
public override bool InnoEngine.Rendering.RenderViewport.Equals(object obj)
```

Indicates whether this instance and a specified object are equal.

**Parameter `obj`:** The object to compare with the current instance.

**Returns:** `true` if `obj` and this instance are the same type and represent the same value; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Views/RenderViewport.cs#L9).

## `GetHashCode`

<a id="api-ef738e8e0d69cfcb"></a>
<!-- api: M:InnoEngine.Rendering.RenderViewport.GetHashCode 26c827452b93a675a34abae593d78811de07d9fdbc2f9729e549af3d47161774 -->

```csharp
public override int InnoEngine.Rendering.RenderViewport.GetHashCode()
```

Returns the hash code for this instance.

**Returns:** A 32-bit signed integer that is the hash code for this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Views/RenderViewport.cs#L9).

## `op_Equality`

<a id="api-62ec22158e8e128b"></a>
<!-- api: M:InnoEngine.Rendering.RenderViewport.op_Equality(InnoEngine.Rendering.RenderViewport,InnoEngine.Rendering.RenderViewport) 53d5131ee52dbc48b93eab3e5005425befece4d4f2dc5687e33d75c860d1948f -->

```csharp
public static bool InnoEngine.Rendering.RenderViewport.operator ==(InnoEngine.Rendering.RenderViewport left, InnoEngine.Rendering.RenderViewport right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Views/RenderViewport.cs#L9).

## `op_Inequality`

<a id="api-fa1b4f635e2c9e64"></a>
<!-- api: M:InnoEngine.Rendering.RenderViewport.op_Inequality(InnoEngine.Rendering.RenderViewport,InnoEngine.Rendering.RenderViewport) ba2f67595c9e069c2b14bfa00c8890344517731533edbbe0cdf565735157e1c9 -->

```csharp
public static bool InnoEngine.Rendering.RenderViewport.operator !=(InnoEngine.Rendering.RenderViewport left, InnoEngine.Rendering.RenderViewport right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Views/RenderViewport.cs#L9).

## `ToString`

<a id="api-d8783c9b702bebf0"></a>
<!-- api: M:InnoEngine.Rendering.RenderViewport.ToString 244405f4bb60fead15e847882e7003f2f87f2b2b9f6b7d7b75bd73c5be637c72 -->

```csharp
public override string InnoEngine.Rendering.RenderViewport.ToString()
```

Returns the fully qualified type name of this instance.

**Returns:** The fully qualified type name.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Views/RenderViewport.cs#L9).

## `height`

<a id="api-f6f986baae79c62f"></a>
<!-- api: P:InnoEngine.Rendering.RenderViewport.height 81465cd2e16c4224454922ed4bd10f1e2484b2a8277dc8f7d96bed211ef3807f -->

```csharp
public int InnoEngine.Rendering.RenderViewport.height { get; }
```

Gets the viewport height.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Views/RenderViewport.cs#L60).

## `width`

<a id="api-1f36d74ca89158e6"></a>
<!-- api: P:InnoEngine.Rendering.RenderViewport.width 324f62b70ca057dc0b847e670ce7e28f95c1e8e829adfa2ebea8068663ed5ecf -->

```csharp
public int InnoEngine.Rendering.RenderViewport.width { get; }
```

Gets the viewport width.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Views/RenderViewport.cs#L55).

## `x`

<a id="api-2adec8928ee6c1e1"></a>
<!-- api: P:InnoEngine.Rendering.RenderViewport.x fad933f2cb713b952337c932b55b8e7d5bb49f7eaecb60a74da833d28119ae97 -->

```csharp
public int InnoEngine.Rendering.RenderViewport.x { get; }
```

Gets the left pixel offset.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Views/RenderViewport.cs#L45).

## `y`

<a id="api-071f8f891c7b6645"></a>
<!-- api: P:InnoEngine.Rendering.RenderViewport.y 5090a13efa2c5227bb686cb91631ef4ad2a9ac2712ed59d160ca522e2e88c31f -->

```csharp
public int InnoEngine.Rendering.RenderViewport.y { get; }
```

Gets the top pixel offset.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Views/RenderViewport.cs#L50).
