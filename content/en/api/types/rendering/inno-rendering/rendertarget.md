---
title: "RenderTarget"
description: "Reference for RenderTarget in Inno.Rendering."
uid: api.inno.rendering.07b702263e26627e
kind: api
owners:
  - Inno.Rendering
apiSurface: source-clr
contracts:
  - project.inno-rendering
---
# `RenderTarget`

This reference describes `RenderTarget` in `Inno.Rendering`. Read the [shared contract](../../../projects/inno-rendering.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.ValueType`.

**Direct interfaces:** `System.IEquatable<Inno.Rendering.RenderTarget>`.

## Members

| Member | Kind |
| --- | --- |
| [`Equals`](#api-c384920bdbbb3db6) | Method |
| [`Equals`](#api-6699d1b15ad4f16b) | Method |
| [`FromTexture`](#api-05dc4308e0a101f4) | Method |
| [`GetHashCode`](#api-f3b41b74afb63094) | Method |
| [`op_Equality`](#api-4a86fd74c03f3d64) | Method |
| [`op_Inequality`](#api-5d00fba3b21b7264) | Method |
| [`ToString`](#api-5826c308b864a70c) | Method |
| [`backbuffer`](#api-57cc5c4817ad1046) | Property |
| [`kind`](#api-ffc21e886c660b19) | Property |
| [`texture`](#api-63d886b2a09de16c) | Property |

## Type declaration

<a id="api-07b702263e26627e"></a>
<!-- api: T:Inno.Rendering.RenderTarget d5126d5fa71cc529a14041b35e06dc621ceffbde4f031d536a9a5c5b0e982df8 -->

```csharp
public readonly record struct Inno.Rendering.RenderTarget : System.IEquatable<Inno.Rendering.RenderTarget>
```

Selects one render destination without exposing a swapchain or framebuffer handle.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Targets/RenderTarget.cs#L23).

## `Equals`

<a id="api-c384920bdbbb3db6"></a>
<!-- api: M:Inno.Rendering.RenderTarget.Equals(Inno.Rendering.RenderTarget) 79af6ce62d8d613616ba57c88880db6f5df7083c8fb777561345364bdf67b2f4 -->

```csharp
public bool Inno.Rendering.RenderTarget.Equals(Inno.Rendering.RenderTarget other)
```

Indicates whether the current object is equal to another object of the same type.

**Parameter `other`:** An object to compare with this object.

**Returns:** `true` if the current object is equal to the `other` parameter; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Targets/RenderTarget.cs#L23).

## `Equals`

<a id="api-6699d1b15ad4f16b"></a>
<!-- api: M:Inno.Rendering.RenderTarget.Equals(System.Object) 42d44339486a62b7d4ab7df9f18d84cfb1a6f96b0ab69954ff0578ce80067520 -->

```csharp
public override bool Inno.Rendering.RenderTarget.Equals(object obj)
```

Indicates whether this instance and a specified object are equal.

**Parameter `obj`:** The object to compare with the current instance.

**Returns:** `true` if `obj` and this instance are the same type and represent the same value; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Targets/RenderTarget.cs#L23).

## `FromTexture`

<a id="api-05dc4308e0a101f4"></a>
<!-- api: M:Inno.Rendering.RenderTarget.FromTexture(Inno.Rendering.RenderTexture) 1e5a577d437a914d6ec7c34699e3f01c99795f22fe29725704fa1ea380f9b6a7 -->

```csharp
public static Inno.Rendering.RenderTarget Inno.Rendering.RenderTarget.FromTexture(Inno.Rendering.RenderTexture texture)
```

Creates an offscreen render target.

**Parameter `texture`:** Persistent offscreen texture description.

**Returns:** A target referencing `texture`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Targets/RenderTarget.cs#L57).

## `GetHashCode`

<a id="api-f3b41b74afb63094"></a>
<!-- api: M:Inno.Rendering.RenderTarget.GetHashCode bcc9ddf4d0c407479c59469c812e461ec0bdf856d8f4b83a6621690decd38239 -->

```csharp
public override int Inno.Rendering.RenderTarget.GetHashCode()
```

Returns the hash code for this instance.

**Returns:** A 32-bit signed integer that is the hash code for this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Targets/RenderTarget.cs#L23).

## `op_Equality`

<a id="api-4a86fd74c03f3d64"></a>
<!-- api: M:Inno.Rendering.RenderTarget.op_Equality(Inno.Rendering.RenderTarget,Inno.Rendering.RenderTarget) d6365bf782204113f80af07ed46610bb72a2367a2761bded54078b07265a5d8b -->

```csharp
public static bool Inno.Rendering.RenderTarget.operator ==(Inno.Rendering.RenderTarget left, Inno.Rendering.RenderTarget right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Targets/RenderTarget.cs#L23).

## `op_Inequality`

<a id="api-5d00fba3b21b7264"></a>
<!-- api: M:Inno.Rendering.RenderTarget.op_Inequality(Inno.Rendering.RenderTarget,Inno.Rendering.RenderTarget) 5fbf7f9a0a9329da9576351f666cbdab4a1a737efd354d66be6f6a1c9cfb39ff -->

```csharp
public static bool Inno.Rendering.RenderTarget.operator !=(Inno.Rendering.RenderTarget left, Inno.Rendering.RenderTarget right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Targets/RenderTarget.cs#L23).

## `ToString`

<a id="api-5826c308b864a70c"></a>
<!-- api: M:Inno.Rendering.RenderTarget.ToString b7ba07620988ff6a7c17beebf5f3070d2f8bd15bce3050f44e975e2085e8fb6b -->

```csharp
public override string Inno.Rendering.RenderTarget.ToString()
```

Returns the fully qualified type name of this instance.

**Returns:** The fully qualified type name.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Targets/RenderTarget.cs#L23).

## `backbuffer`

<a id="api-57cc5c4817ad1046"></a>
<!-- api: P:Inno.Rendering.RenderTarget.backbuffer b9c0ab0a8a91b5457ff6868a3c0d8aad5ecae158c6334209fa3b3adc06177376 -->

```csharp
public static Inno.Rendering.RenderTarget Inno.Rendering.RenderTarget.backbuffer { get; }
```

Gets a target representing the main application backbuffer.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Targets/RenderTarget.cs#L36).

## `kind`

<a id="api-ffc21e886c660b19"></a>
<!-- api: P:Inno.Rendering.RenderTarget.kind 7a18c57807e8ecfabe00481e7cbccf2f6aad4b1edd75de0582d60e9359d9238b -->

```csharp
public Inno.Rendering.RenderTargetKind Inno.Rendering.RenderTarget.kind { get; }
```

Gets the target kind.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Targets/RenderTarget.cs#L41).

## `texture`

<a id="api-63d886b2a09de16c"></a>
<!-- api: P:Inno.Rendering.RenderTarget.texture 43b0f901a1deef57b1095c41a02f6d0fcce3a2de8784b450d0283606c5b2d77e -->

```csharp
public Inno.Rendering.RenderTexture? Inno.Rendering.RenderTarget.texture { get; }
```

Gets the offscreen texture, or `null` for the backbuffer.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Targets/RenderTarget.cs#L46).
