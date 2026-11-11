---
title: "RenderViewport"
description: "Reference for RenderViewport in Inno.Rendering."
uid: api.inno.rendering.c6c6bbeac7b9630d
kind: api
owners:
  - Inno.Rendering
apiSurface: source-clr
contracts:
  - project.inno-rendering
---
# `RenderViewport`

This reference describes `RenderViewport` in `Inno.Rendering`. Read the [shared contract](../../../projects/inno-rendering.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.ValueType`.

**Direct interfaces:** `System.IEquatable<Inno.Rendering.RenderViewport>`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-136ab2122fa6eeb3) | Method |
| [`Equals`](#api-b5d72e9629416264) | Method |
| [`Equals`](#api-a48a9de9ad0cf91c) | Method |
| [`GetHashCode`](#api-fa8f2e36ecec0317) | Method |
| [`op_Equality`](#api-c9184822398a8a82) | Method |
| [`op_Inequality`](#api-6af9ce782f16c340) | Method |
| [`ToString`](#api-3151db6b24c40ec4) | Method |
| [`height`](#api-7d9eaca4f45def17) | Property |
| [`width`](#api-f0af76a49da1d694) | Property |
| [`x`](#api-20f2840864d248f2) | Property |
| [`y`](#api-baaa2c2122d14e94) | Property |

## Type declaration

<a id="api-c6c6bbeac7b9630d"></a>
<!-- api: T:Inno.Rendering.RenderViewport 327289cf2a187e9e7f75a5fbd5ee2086ad535653ccb1d4aa58f6166d07e527ce -->

```csharp
public readonly record struct Inno.Rendering.RenderViewport : System.IEquatable<Inno.Rendering.RenderViewport>
```

Defines a destination pixel rectangle without assuming producer or rendering semantics.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Views/RenderViewport.cs#L9).

## `#ctor`

<a id="api-136ab2122fa6eeb3"></a>
<!-- api: M:Inno.Rendering.RenderViewport.#ctor(System.Int32,System.Int32,System.Int32,System.Int32) c2dce93b3ef0f7468e00d001c5ff68054db73cffcc30c00c418f915a0a3639cc -->

```csharp
public Inno.Rendering.RenderViewport.RenderViewport(int x, int y, int width, int height)
```

Creates a render viewport.

**Parameter `x`:** Left pixel offset in the destination.

**Parameter `y`:** Top pixel offset in the destination.

**Parameter `width`:** Positive viewport width.

**Parameter `height`:** Positive viewport height.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Views/RenderViewport.cs#L26).

## `Equals`

<a id="api-b5d72e9629416264"></a>
<!-- api: M:Inno.Rendering.RenderViewport.Equals(Inno.Rendering.RenderViewport) 8f5409cb3af36bbc0cd10aaa79b00127d1bb2b4f9b2fe53cc5525ad8acce2fa0 -->

```csharp
public bool Inno.Rendering.RenderViewport.Equals(Inno.Rendering.RenderViewport other)
```

Indicates whether the current object is equal to another object of the same type.

**Parameter `other`:** An object to compare with this object.

**Returns:** `true` if the current object is equal to the `other` parameter; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Views/RenderViewport.cs#L9).

## `Equals`

<a id="api-a48a9de9ad0cf91c"></a>
<!-- api: M:Inno.Rendering.RenderViewport.Equals(System.Object) f8814ea7c01b9e8285001f8ee34906665ddaf7b86b453386ee14571155687243 -->

```csharp
public override bool Inno.Rendering.RenderViewport.Equals(object obj)
```

Indicates whether this instance and a specified object are equal.

**Parameter `obj`:** The object to compare with the current instance.

**Returns:** `true` if `obj` and this instance are the same type and represent the same value; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Views/RenderViewport.cs#L9).

## `GetHashCode`

<a id="api-fa8f2e36ecec0317"></a>
<!-- api: M:Inno.Rendering.RenderViewport.GetHashCode e0642b512e00dea27a9534889e57439d32dc3c8c735829aa8478287740b4f1c7 -->

```csharp
public override int Inno.Rendering.RenderViewport.GetHashCode()
```

Returns the hash code for this instance.

**Returns:** A 32-bit signed integer that is the hash code for this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Views/RenderViewport.cs#L9).

## `op_Equality`

<a id="api-c9184822398a8a82"></a>
<!-- api: M:Inno.Rendering.RenderViewport.op_Equality(Inno.Rendering.RenderViewport,Inno.Rendering.RenderViewport) 6ccca674edc8b72f78a785a0ae795ab6b80f2b762c72cc0b8129015654c32d16 -->

```csharp
public static bool Inno.Rendering.RenderViewport.operator ==(Inno.Rendering.RenderViewport left, Inno.Rendering.RenderViewport right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Views/RenderViewport.cs#L9).

## `op_Inequality`

<a id="api-6af9ce782f16c340"></a>
<!-- api: M:Inno.Rendering.RenderViewport.op_Inequality(Inno.Rendering.RenderViewport,Inno.Rendering.RenderViewport) 58dc6cfeb7da6a2fb1ad3f600a631c1d02e682d2d4a1d4745b9b00cefc0053f9 -->

```csharp
public static bool Inno.Rendering.RenderViewport.operator !=(Inno.Rendering.RenderViewport left, Inno.Rendering.RenderViewport right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Views/RenderViewport.cs#L9).

## `ToString`

<a id="api-3151db6b24c40ec4"></a>
<!-- api: M:Inno.Rendering.RenderViewport.ToString 6262c8089ec26ee5a151b6c5492a8196527abfd5316eba155268be28507ae1ea -->

```csharp
public override string Inno.Rendering.RenderViewport.ToString()
```

Returns the fully qualified type name of this instance.

**Returns:** The fully qualified type name.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Views/RenderViewport.cs#L9).

## `height`

<a id="api-7d9eaca4f45def17"></a>
<!-- api: P:Inno.Rendering.RenderViewport.height 0daba231c39108fb9a1c1aa91a42d4585b8188680b7acb45b1bbfc181485eb28 -->

```csharp
public int Inno.Rendering.RenderViewport.height { get; }
```

Gets the viewport height.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Views/RenderViewport.cs#L60).

## `width`

<a id="api-f0af76a49da1d694"></a>
<!-- api: P:Inno.Rendering.RenderViewport.width 43179876dd85d21388bcaffe7e2388baa18dca8c87f658c02b1be8eab198480a -->

```csharp
public int Inno.Rendering.RenderViewport.width { get; }
```

Gets the viewport width.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Views/RenderViewport.cs#L55).

## `x`

<a id="api-20f2840864d248f2"></a>
<!-- api: P:Inno.Rendering.RenderViewport.x 4af7fefc11d20b2027c2b7b772c057109fc372d8c4e8d893fcb8d6e6b04cc728 -->

```csharp
public int Inno.Rendering.RenderViewport.x { get; }
```

Gets the left pixel offset.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Views/RenderViewport.cs#L45).

## `y`

<a id="api-baaa2c2122d14e94"></a>
<!-- api: P:Inno.Rendering.RenderViewport.y 88020337822f15092aca87e534bc42c169b1d2b05266a58d7006ff1be55e5054 -->

```csharp
public int Inno.Rendering.RenderViewport.y { get; }
```

Gets the top pixel offset.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Views/RenderViewport.cs#L50).
