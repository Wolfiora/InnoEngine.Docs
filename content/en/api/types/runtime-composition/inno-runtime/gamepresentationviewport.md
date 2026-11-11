---
title: "GamePresentationViewport"
description: "Reference for GamePresentationViewport in Inno.Runtime."
uid: api.inno.runtime.c912cfbcb90ac865
kind: api
owners:
  - Inno.Runtime
apiSurface: source-clr
contracts:
  - project.inno-runtime
---
# `GamePresentationViewport`

This reference describes `GamePresentationViewport` in `Inno.Runtime`. Read the [shared contract](../../../projects/inno-runtime.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.ValueType`.

**Direct interfaces:** `System.IEquatable<Inno.Runtime.GamePresentationViewport>`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-a18d6bccfed3350a) | Method |
| [`Equals`](#api-daf8809c83568db9) | Method |
| [`Equals`](#api-6492ccff69f3d702) | Method |
| [`GetHashCode`](#api-948fecd1c4b2dc4a) | Method |
| [`op_Equality`](#api-17114c33123fa55a) | Method |
| [`op_Inequality`](#api-9bfa52abe0c2a69f) | Method |
| [`ToString`](#api-34445be6524770ce) | Method |
| [`height`](#api-2d6892fa4e63d2d6) | Property |
| [`width`](#api-db3d6300482fbef3) | Property |
| [`x`](#api-a301b3f14291e6bc) | Property |
| [`y`](#api-b76c84c6970a6a0f) | Property |

## Type declaration

<a id="api-c912cfbcb90ac865"></a>
<!-- api: T:Inno.Runtime.GamePresentationViewport 831c200026047f17971c6d10993b74c27dffd1aa7d01f6a1065c75ec8729bd41 -->

```csharp
public readonly record struct Inno.Runtime.GamePresentationViewport : System.IEquatable<Inno.Runtime.GamePresentationViewport>
```

Stores one centered game-content region within a presentation surface.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/engine/Inno.Runtime/Presentation/GamePresentationSettings.cs#L91).

## `#ctor`

<a id="api-a18d6bccfed3350a"></a>
<!-- api: M:Inno.Runtime.GamePresentationViewport.#ctor(System.Int32,System.Int32,System.Int32,System.Int32) 005915cfec9020f1b05bbe2ae985b9a75d2b3219a0b1338103cf31804781ed82 -->

```csharp
public Inno.Runtime.GamePresentationViewport.GamePresentationViewport(int x, int y, int width, int height)
```

Creates a validated game presentation viewport.

**Parameter `x`:** Non-negative horizontal offset.

**Parameter `y`:** Non-negative vertical offset.

**Parameter `width`:** Positive content width.

**Parameter `height`:** Positive content height.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/engine/Inno.Runtime/Presentation/GamePresentationSettings.cs#L108).

## `Equals`

<a id="api-daf8809c83568db9"></a>
<!-- api: M:Inno.Runtime.GamePresentationViewport.Equals(Inno.Runtime.GamePresentationViewport) b08d0338d0e7b7540102d016e82519516406a82bd80622a701c4c2636159a0dd -->

```csharp
public bool Inno.Runtime.GamePresentationViewport.Equals(Inno.Runtime.GamePresentationViewport other)
```

Indicates whether the current object is equal to another object of the same type.

**Parameter `other`:** An object to compare with this object.

**Returns:** `true` if the current object is equal to the `other` parameter; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/engine/Inno.Runtime/Presentation/GamePresentationSettings.cs#L91).

## `Equals`

<a id="api-6492ccff69f3d702"></a>
<!-- api: M:Inno.Runtime.GamePresentationViewport.Equals(System.Object) ced2181adc0610057de465baa42ccb6e8bc247c8088e7d4c9422830703079671 -->

```csharp
public override bool Inno.Runtime.GamePresentationViewport.Equals(object obj)
```

Indicates whether this instance and a specified object are equal.

**Parameter `obj`:** The object to compare with the current instance.

**Returns:** `true` if `obj` and this instance are the same type and represent the same value; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/engine/Inno.Runtime/Presentation/GamePresentationSettings.cs#L91).

## `GetHashCode`

<a id="api-948fecd1c4b2dc4a"></a>
<!-- api: M:Inno.Runtime.GamePresentationViewport.GetHashCode 90099ce567fae7800a14002a5b895349e93e6fd21b922ccfcecd71148df726ec -->

```csharp
public override int Inno.Runtime.GamePresentationViewport.GetHashCode()
```

Returns the hash code for this instance.

**Returns:** A 32-bit signed integer that is the hash code for this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/engine/Inno.Runtime/Presentation/GamePresentationSettings.cs#L91).

## `op_Equality`

<a id="api-17114c33123fa55a"></a>
<!-- api: M:Inno.Runtime.GamePresentationViewport.op_Equality(Inno.Runtime.GamePresentationViewport,Inno.Runtime.GamePresentationViewport) 06bfddce8487e3c97a8e7d7fe63089cafde1bbb97fac39ddcae344a2c575f95f -->

```csharp
public static bool Inno.Runtime.GamePresentationViewport.operator ==(Inno.Runtime.GamePresentationViewport left, Inno.Runtime.GamePresentationViewport right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/engine/Inno.Runtime/Presentation/GamePresentationSettings.cs#L91).

## `op_Inequality`

<a id="api-9bfa52abe0c2a69f"></a>
<!-- api: M:Inno.Runtime.GamePresentationViewport.op_Inequality(Inno.Runtime.GamePresentationViewport,Inno.Runtime.GamePresentationViewport) 378589d7625cf6c200bdbb218ae4d3f4067bf6a1b164098041f270c9bb96f83f -->

```csharp
public static bool Inno.Runtime.GamePresentationViewport.operator !=(Inno.Runtime.GamePresentationViewport left, Inno.Runtime.GamePresentationViewport right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/engine/Inno.Runtime/Presentation/GamePresentationSettings.cs#L91).

## `ToString`

<a id="api-34445be6524770ce"></a>
<!-- api: M:Inno.Runtime.GamePresentationViewport.ToString 94efdd4f65bc9144182eeb993c046b888c225f428e78b2074c70db693b8e74e4 -->

```csharp
public override string Inno.Runtime.GamePresentationViewport.ToString()
```

Returns the fully qualified type name of this instance.

**Returns:** The fully qualified type name.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/engine/Inno.Runtime/Presentation/GamePresentationSettings.cs#L91).

## `height`

<a id="api-2d6892fa4e63d2d6"></a>
<!-- api: P:Inno.Runtime.GamePresentationViewport.height 3384888e12f8bb9670bf81afa4256bf8109e651d81596dc86a915cdf2616bcea -->

```csharp
public int Inno.Runtime.GamePresentationViewport.height { get; }
```

Gets the content height.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/engine/Inno.Runtime/Presentation/GamePresentationSettings.cs#L142).

## `width`

<a id="api-db3d6300482fbef3"></a>
<!-- api: P:Inno.Runtime.GamePresentationViewport.width c1e27291aadc1d29c2c194803dba1c39e6ce6c735ec22fb4d4a857658bb01012 -->

```csharp
public int Inno.Runtime.GamePresentationViewport.width { get; }
```

Gets the content width.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/engine/Inno.Runtime/Presentation/GamePresentationSettings.cs#L137).

## `x`

<a id="api-a301b3f14291e6bc"></a>
<!-- api: P:Inno.Runtime.GamePresentationViewport.x fa48075e06242882253f8a541e7c2919994c1790e678c17e1da9befba400f546 -->

```csharp
public int Inno.Runtime.GamePresentationViewport.x { get; }
```

Gets the horizontal content offset.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/engine/Inno.Runtime/Presentation/GamePresentationSettings.cs#L127).

## `y`

<a id="api-b76c84c6970a6a0f"></a>
<!-- api: P:Inno.Runtime.GamePresentationViewport.y 4c958263b5b6e30f11df619925e82f1b17bcb5c453c5d7f800359ecbbba74210 -->

```csharp
public int Inno.Runtime.GamePresentationViewport.y { get; }
```

Gets the vertical content offset.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/engine/Inno.Runtime/Presentation/GamePresentationSettings.cs#L132).
