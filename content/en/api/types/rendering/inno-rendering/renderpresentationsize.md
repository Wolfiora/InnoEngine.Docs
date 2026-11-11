---
title: "RenderPresentationSize"
description: "Reference for RenderPresentationSize in Inno.Rendering."
uid: api.inno.rendering.7f3159dede05c259
kind: api
owners:
  - Inno.Rendering
apiSurface: source-clr
contracts:
  - project.inno-rendering
---
# `RenderPresentationSize`

This reference describes `RenderPresentationSize` in `Inno.Rendering`. Read the [shared contract](../../../projects/inno-rendering.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.ValueType`.

**Direct interfaces:** `System.IEquatable<Inno.Rendering.RenderPresentationSize>`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-423709b1ed845ef4) | Method |
| [`Equals`](#api-dd088f66e192b4e0) | Method |
| [`Equals`](#api-a028bc86090bc655) | Method |
| [`GetHashCode`](#api-371ef4e3ff748c5d) | Method |
| [`op_Equality`](#api-299e12a9dd2a29a7) | Method |
| [`op_Inequality`](#api-94f3859abb988ffb) | Method |
| [`ToString`](#api-ca91f84a76628463) | Method |
| [`height`](#api-ab21da63f775acc7) | Property |
| [`isValid`](#api-ab972d84b7d40105) | Property |
| [`width`](#api-45b9776ee3ed8ce9) | Property |

## Type declaration

<a id="api-7f3159dede05c259"></a>
<!-- api: T:Inno.Rendering.RenderPresentationSize 043a891565ca98f92cddbcb476c923417f0af2b08fb4e27ec313a8b00fefbead -->

```csharp
public readonly record struct Inno.Rendering.RenderPresentationSize : System.IEquatable<Inno.Rendering.RenderPresentationSize>
```

Stores one backend-neutral presentation extent in physical pixels.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderPresentationSize.cs#L8).

## `#ctor`

<a id="api-423709b1ed845ef4"></a>
<!-- api: M:Inno.Rendering.RenderPresentationSize.#ctor(System.Int32,System.Int32) 85bad9159533da5998a609f42447b824d31ba72c3bc5c2344d3570f08c7df837 -->

```csharp
public Inno.Rendering.RenderPresentationSize.RenderPresentationSize(int width, int height)
```

Creates a positive presentation extent.

**Parameter `width`:** Positive physical-pixel width.

**Parameter `height`:** Positive physical-pixel height.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderPresentationSize.cs#L19).

## `Equals`

<a id="api-dd088f66e192b4e0"></a>
<!-- api: M:Inno.Rendering.RenderPresentationSize.Equals(Inno.Rendering.RenderPresentationSize) bf1ffb60125ced393ab92d48e12ed0c9de2a79fc71db3e716ec1f93b129ce059 -->

```csharp
public bool Inno.Rendering.RenderPresentationSize.Equals(Inno.Rendering.RenderPresentationSize other)
```

Indicates whether the current object is equal to another object of the same type.

**Parameter `other`:** An object to compare with this object.

**Returns:** `true` if the current object is equal to the `other` parameter; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderPresentationSize.cs#L8).

## `Equals`

<a id="api-a028bc86090bc655"></a>
<!-- api: M:Inno.Rendering.RenderPresentationSize.Equals(System.Object) fd2c64353d5a99326c593ae72f2e61fea949708c0b794148efe500e549b18e48 -->

```csharp
public override bool Inno.Rendering.RenderPresentationSize.Equals(object obj)
```

Indicates whether this instance and a specified object are equal.

**Parameter `obj`:** The object to compare with the current instance.

**Returns:** `true` if `obj` and this instance are the same type and represent the same value; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderPresentationSize.cs#L8).

## `GetHashCode`

<a id="api-371ef4e3ff748c5d"></a>
<!-- api: M:Inno.Rendering.RenderPresentationSize.GetHashCode c6391a4270606815896a3cf53e3ff82daa0f78f58c301434056f0e305c114796 -->

```csharp
public override int Inno.Rendering.RenderPresentationSize.GetHashCode()
```

Returns the hash code for this instance.

**Returns:** A 32-bit signed integer that is the hash code for this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderPresentationSize.cs#L8).

## `op_Equality`

<a id="api-299e12a9dd2a29a7"></a>
<!-- api: M:Inno.Rendering.RenderPresentationSize.op_Equality(Inno.Rendering.RenderPresentationSize,Inno.Rendering.RenderPresentationSize) 3b4f513329775d2e8e8c94669d022cf7dd986755786f8878206dcc957bfb9cc1 -->

```csharp
public static bool Inno.Rendering.RenderPresentationSize.operator ==(Inno.Rendering.RenderPresentationSize left, Inno.Rendering.RenderPresentationSize right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderPresentationSize.cs#L8).

## `op_Inequality`

<a id="api-94f3859abb988ffb"></a>
<!-- api: M:Inno.Rendering.RenderPresentationSize.op_Inequality(Inno.Rendering.RenderPresentationSize,Inno.Rendering.RenderPresentationSize) 24cb1d9679a228620c795de9569a36a61b21f4c81ae52d1b7e5d236ae27c82e3 -->

```csharp
public static bool Inno.Rendering.RenderPresentationSize.operator !=(Inno.Rendering.RenderPresentationSize left, Inno.Rendering.RenderPresentationSize right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderPresentationSize.cs#L8).

## `ToString`

<a id="api-ca91f84a76628463"></a>
<!-- api: M:Inno.Rendering.RenderPresentationSize.ToString 5013b2b61a44c89397a42dc581983b50d744c0fa45a3b953247f16efc7384fd7 -->

```csharp
public override string Inno.Rendering.RenderPresentationSize.ToString()
```

Returns the fully qualified type name of this instance.

**Returns:** The fully qualified type name.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderPresentationSize.cs#L8).

## `height`

<a id="api-ab21da63f775acc7"></a>
<!-- api: P:Inno.Rendering.RenderPresentationSize.height cf012f1c2f930eef3ba86eaef950b5859837ba7f48d417b24b783a2a80963717 -->

```csharp
public int Inno.Rendering.RenderPresentationSize.height { get; }
```

Gets the physical-pixel height.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderPresentationSize.cs#L37).

## `isValid`

<a id="api-ab972d84b7d40105"></a>
<!-- api: P:Inno.Rendering.RenderPresentationSize.isValid a2b8d8fc7316b396eaae554b91020c24bedf781e32a757f8e900ebb3bdb56a95 -->

```csharp
public bool Inno.Rendering.RenderPresentationSize.isValid { get; }
```

Gets whether both dimensions describe a real drawable extent; a default struct is invalid.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderPresentationSize.cs#L42).

## `width`

<a id="api-45b9776ee3ed8ce9"></a>
<!-- api: P:Inno.Rendering.RenderPresentationSize.width 5f311a9984437f0c1aac6eb2f8e34b1e99bb68a4eb177038f03dbc2854b46f44 -->

```csharp
public int Inno.Rendering.RenderPresentationSize.width { get; }
```

Gets the physical-pixel width.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderPresentationSize.cs#L32).
