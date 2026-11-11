---
title: "ShaderSourceLocation"
description: "Reference for ShaderSourceLocation in Inno.Rendering.Assets."
uid: api.inno.rendering.assets.f3acaf56038532ea
kind: api
owners:
  - Inno.Rendering.Assets
apiSurface: source-clr
contracts:
  - project.inno-rendering-assets
---
# `ShaderSourceLocation`

This reference describes `ShaderSourceLocation` in `Inno.Rendering.Assets`. Read the [shared contract](../../../projects/inno-rendering-assets.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.ValueType`.

**Direct interfaces:** `System.IEquatable<Inno.Rendering.Assets.ShaderSourceLocation>`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-2fff81c9cfafb29b) | Method |
| [`Equals`](#api-cea8deac470a372c) | Method |
| [`Equals`](#api-9a72dd51a611ea52) | Method |
| [`GetHashCode`](#api-5b54d7956572fe2d) | Method |
| [`op_Equality`](#api-fabbb162a96fba05) | Method |
| [`op_Inequality`](#api-6c3764fbeae3d20b) | Method |
| [`ToString`](#api-6051383185bf9ea2) | Method |
| [`assetPath`](#api-51afbbc369e8273f) | Property |
| [`column`](#api-3e668be1887d8ee5) | Property |
| [`line`](#api-c6fddc3ee8956885) | Property |
| [`passName`](#api-f1ea8dd920efe745) | Property |
| [`stage`](#api-78ec00b5fd6dc436) | Property |

## Type declaration

<a id="api-f3acaf56038532ea"></a>
<!-- api: T:Inno.Rendering.Assets.ShaderSourceLocation 3358049c13c4331d1082a2c6a0168da0ee46dde4dc48039f4eb2b0b8ea08f766 -->

```csharp
public readonly record struct Inno.Rendering.Assets.ShaderSourceLocation : System.IEquatable<Inno.Rendering.Assets.ShaderSourceLocation>
```

Maps a shader diagnostic back to an asset, pass, stage, and source position.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets/Shaders/ShaderSourceLocation.cs#L13).

## `#ctor`

<a id="api-2fff81c9cfafb29b"></a>
<!-- api: M:Inno.Rendering.Assets.ShaderSourceLocation.#ctor(System.String,System.String,Inno.Rendering.ShaderStage,System.Int32,System.Int32) 5cba4af786f840508952b85de55541a1fb9591e07721f09be0184437ba096216 -->

```csharp
public Inno.Rendering.Assets.ShaderSourceLocation.ShaderSourceLocation(string assetPath, string passName, Inno.Rendering.ShaderStage stage, int line = 0, int column = 0)
```

Creates a shader source location.

**Parameter `assetPath`:** Project-relative source asset path.

**Parameter `passName`:** Stable pass name.

**Parameter `stage`:** Shader stage.

**Parameter `line`:** One-based source line, or zero when unavailable.

**Parameter `column`:** One-based source column, or zero when unavailable.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets/Shaders/ShaderSourceLocation.cs#L33).

## `Equals`

<a id="api-cea8deac470a372c"></a>
<!-- api: M:Inno.Rendering.Assets.ShaderSourceLocation.Equals(Inno.Rendering.Assets.ShaderSourceLocation) f99c6aeadceda4422887f12c0b886a0fa8e306597bc1fc66b68757caf7379751 -->

```csharp
public bool Inno.Rendering.Assets.ShaderSourceLocation.Equals(Inno.Rendering.Assets.ShaderSourceLocation other)
```

Indicates whether the current object is equal to another object of the same type.

**Parameter `other`:** An object to compare with this object.

**Returns:** `true` if the current object is equal to the `other` parameter; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets/Shaders/ShaderSourceLocation.cs#L13).

## `Equals`

<a id="api-9a72dd51a611ea52"></a>
<!-- api: M:Inno.Rendering.Assets.ShaderSourceLocation.Equals(System.Object) fdb96ec2f71113b9db972cff71c078a2755b544beb3cc3d98ea5e33aa842dc87 -->

```csharp
public override bool Inno.Rendering.Assets.ShaderSourceLocation.Equals(object obj)
```

Indicates whether this instance and a specified object are equal.

**Parameter `obj`:** The object to compare with the current instance.

**Returns:** `true` if `obj` and this instance are the same type and represent the same value; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets/Shaders/ShaderSourceLocation.cs#L13).

## `GetHashCode`

<a id="api-5b54d7956572fe2d"></a>
<!-- api: M:Inno.Rendering.Assets.ShaderSourceLocation.GetHashCode bf29949f26004a3632ed3c35c671b621ef55f55e0a06f5635a8292e2a620b223 -->

```csharp
public override int Inno.Rendering.Assets.ShaderSourceLocation.GetHashCode()
```

Returns the hash code for this instance.

**Returns:** A 32-bit signed integer that is the hash code for this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets/Shaders/ShaderSourceLocation.cs#L13).

## `op_Equality`

<a id="api-fabbb162a96fba05"></a>
<!-- api: M:Inno.Rendering.Assets.ShaderSourceLocation.op_Equality(Inno.Rendering.Assets.ShaderSourceLocation,Inno.Rendering.Assets.ShaderSourceLocation) 1d8c9456b55b7b07a80ec0b6aa7a62f024d38acc6fcd7d6c00f95dafff3acd14 -->

```csharp
public static bool Inno.Rendering.Assets.ShaderSourceLocation.operator ==(Inno.Rendering.Assets.ShaderSourceLocation left, Inno.Rendering.Assets.ShaderSourceLocation right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets/Shaders/ShaderSourceLocation.cs#L13).

## `op_Inequality`

<a id="api-6c3764fbeae3d20b"></a>
<!-- api: M:Inno.Rendering.Assets.ShaderSourceLocation.op_Inequality(Inno.Rendering.Assets.ShaderSourceLocation,Inno.Rendering.Assets.ShaderSourceLocation) df17031f7c181b2819c5ed103e32b1fa4fd4a685a8489cf19262a0f1680bdfc4 -->

```csharp
public static bool Inno.Rendering.Assets.ShaderSourceLocation.operator !=(Inno.Rendering.Assets.ShaderSourceLocation left, Inno.Rendering.Assets.ShaderSourceLocation right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets/Shaders/ShaderSourceLocation.cs#L13).

## `ToString`

<a id="api-6051383185bf9ea2"></a>
<!-- api: M:Inno.Rendering.Assets.ShaderSourceLocation.ToString 23571a099ae1fbb41253cca85db9c5ae6af872c121d332b1f50469b5f09bad33 -->

```csharp
public override string Inno.Rendering.Assets.ShaderSourceLocation.ToString()
```

Returns the fully qualified type name of this instance.

**Returns:** The fully qualified type name.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets/Shaders/ShaderSourceLocation.cs#L13).

## `assetPath`

<a id="api-51afbbc369e8273f"></a>
<!-- api: P:Inno.Rendering.Assets.ShaderSourceLocation.assetPath c986f1f9ef8e724e600e67da107807a6c461af5d1bd55311e34567cf71e82e0c -->

```csharp
public string Inno.Rendering.Assets.ShaderSourceLocation.assetPath { get; }
```

Gets the project-relative source asset path.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets/Shaders/ShaderSourceLocation.cs#L54).

## `column`

<a id="api-3e668be1887d8ee5"></a>
<!-- api: P:Inno.Rendering.Assets.ShaderSourceLocation.column f0fd25ae29a6c9ae35d0f32186e03db9c8211d110ca76354a1bed4fffd242cc4 -->

```csharp
public int Inno.Rendering.Assets.ShaderSourceLocation.column { get; }
```

Gets the one-based column, or zero when unavailable.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets/Shaders/ShaderSourceLocation.cs#L74).

## `line`

<a id="api-c6fddc3ee8956885"></a>
<!-- api: P:Inno.Rendering.Assets.ShaderSourceLocation.line 357f7802f53bef51e19a9ac67ec85af2ad6d2d6830b25b8d64797b74ace14ceb -->

```csharp
public int Inno.Rendering.Assets.ShaderSourceLocation.line { get; }
```

Gets the one-based line, or zero when unavailable.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets/Shaders/ShaderSourceLocation.cs#L69).

## `passName`

<a id="api-f1ea8dd920efe745"></a>
<!-- api: P:Inno.Rendering.Assets.ShaderSourceLocation.passName b3b23209bdcb896869f9113b7d413d447cb6319effd5dd02567ce9b6eee565e0 -->

```csharp
public string Inno.Rendering.Assets.ShaderSourceLocation.passName { get; }
```

Gets the stable pass name.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets/Shaders/ShaderSourceLocation.cs#L59).

## `stage`

<a id="api-78ec00b5fd6dc436"></a>
<!-- api: P:Inno.Rendering.Assets.ShaderSourceLocation.stage 91dddf13c94134f948304b5a1adf73830316c26dc90279fbfe21163b3f52ea4f -->

```csharp
public Inno.Rendering.ShaderStage Inno.Rendering.Assets.ShaderSourceLocation.stage { get; }
```

Gets the shader stage.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets/Shaders/ShaderSourceLocation.cs#L64).
