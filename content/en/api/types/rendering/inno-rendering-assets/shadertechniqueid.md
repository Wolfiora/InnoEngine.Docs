---
title: "ShaderTechniqueId"
description: "Reference for ShaderTechniqueId in Inno.Rendering.Assets."
uid: api.inno.rendering.assets.a54df9f2d59b467b
kind: api
owners:
  - Inno.Rendering.Assets
apiSurface: source-clr
contracts:
  - project.inno-rendering-assets
---
# `ShaderTechniqueId`

This reference describes `ShaderTechniqueId` in `Inno.Rendering.Assets`. Read the [shared contract](../../../projects/inno-rendering-assets.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.ValueType`.

**Direct interfaces:** `System.IEquatable<Inno.Rendering.Assets.ShaderTechniqueId>`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-298f255c6e7ad2d7) | Method |
| [`Equals`](#api-bec46bf9e8b52c23) | Method |
| [`Equals`](#api-78ed36117ad9290d) | Method |
| [`GetHashCode`](#api-6cd86c3354a84640) | Method |
| [`op_Equality`](#api-32e591b2102795e7) | Method |
| [`op_Inequality`](#api-4ec8a2e1da9e9cdd) | Method |
| [`ToString`](#api-34f21b5a8699e299) | Method |
| [`isValid`](#api-2d79da3274dfa9a1) | Property |
| [`value`](#api-c8d3039dd39b279a) | Property |

## Type declaration

<a id="api-a54df9f2d59b467b"></a>
<!-- api: T:Inno.Rendering.Assets.ShaderTechniqueId 706770a088ac072b6d31309800fd37ab5f5150c865d9a3bd7b99324385472cdd -->

```csharp
public record struct Inno.Rendering.Assets.ShaderTechniqueId : System.IEquatable<Inno.Rendering.Assets.ShaderTechniqueId>
```

Identifies one material-selectable technique in a shader.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets/Shaders/ShaderTechniqueId.cs#L17).

## `#ctor`

<a id="api-298f255c6e7ad2d7"></a>
<!-- api: M:Inno.Rendering.Assets.ShaderTechniqueId.#ctor(System.String) 8b8283e3972f192396cf5f6828aac254ecea9f9030ea15c37dc6542808d9f7f5 -->

```csharp
public Inno.Rendering.Assets.ShaderTechniqueId.ShaderTechniqueId(string value)
```

Creates a shader technique identifier.

**Parameter `value`:** Stable technique value within a shader.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets/Shaders/ShaderTechniqueId.cs#L25).

## `Equals`

<a id="api-bec46bf9e8b52c23"></a>
<!-- api: M:Inno.Rendering.Assets.ShaderTechniqueId.Equals(Inno.Rendering.Assets.ShaderTechniqueId) 3c21927f259d4d58df577c630124efc284e08b5bf9755428f61d8c33357df716 -->

```csharp
public readonly bool Inno.Rendering.Assets.ShaderTechniqueId.Equals(Inno.Rendering.Assets.ShaderTechniqueId other)
```

Indicates whether the current object is equal to another object of the same type.

**Parameter `other`:** An object to compare with this object.

**Returns:** `true` if the current object is equal to the `other` parameter; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets/Shaders/ShaderTechniqueId.cs#L17).

## `Equals`

<a id="api-78ed36117ad9290d"></a>
<!-- api: M:Inno.Rendering.Assets.ShaderTechniqueId.Equals(System.Object) f0b93e9d4e346ba99932230a6794008bcc7f67d30892eb47fd2ac286b3a0f02c -->

```csharp
public override readonly bool Inno.Rendering.Assets.ShaderTechniqueId.Equals(object obj)
```

Indicates whether this instance and a specified object are equal.

**Parameter `obj`:** The object to compare with the current instance.

**Returns:** `true` if `obj` and this instance are the same type and represent the same value; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets/Shaders/ShaderTechniqueId.cs#L17).

## `GetHashCode`

<a id="api-6cd86c3354a84640"></a>
<!-- api: M:Inno.Rendering.Assets.ShaderTechniqueId.GetHashCode 08a830ec3c4e7f91a19fedc8c7671b0bef01ba9fea7ef04f01e94ed8094a5e8f -->

```csharp
public override readonly int Inno.Rendering.Assets.ShaderTechniqueId.GetHashCode()
```

Returns the hash code for this instance.

**Returns:** A 32-bit signed integer that is the hash code for this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets/Shaders/ShaderTechniqueId.cs#L17).

## `op_Equality`

<a id="api-32e591b2102795e7"></a>
<!-- api: M:Inno.Rendering.Assets.ShaderTechniqueId.op_Equality(Inno.Rendering.Assets.ShaderTechniqueId,Inno.Rendering.Assets.ShaderTechniqueId) 99e796affc88d521062a795a1987c65ce98cdbab6694a724f9725eaba644ea98 -->

```csharp
public static bool Inno.Rendering.Assets.ShaderTechniqueId.operator ==(Inno.Rendering.Assets.ShaderTechniqueId left, Inno.Rendering.Assets.ShaderTechniqueId right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets/Shaders/ShaderTechniqueId.cs#L17).

## `op_Inequality`

<a id="api-4ec8a2e1da9e9cdd"></a>
<!-- api: M:Inno.Rendering.Assets.ShaderTechniqueId.op_Inequality(Inno.Rendering.Assets.ShaderTechniqueId,Inno.Rendering.Assets.ShaderTechniqueId) b061178e6e57addb8ee96d7590c34ae4651f397e622f4c2b578f1346e39b752f -->

```csharp
public static bool Inno.Rendering.Assets.ShaderTechniqueId.operator !=(Inno.Rendering.Assets.ShaderTechniqueId left, Inno.Rendering.Assets.ShaderTechniqueId right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets/Shaders/ShaderTechniqueId.cs#L17).

## `ToString`

<a id="api-34f21b5a8699e299"></a>
<!-- api: M:Inno.Rendering.Assets.ShaderTechniqueId.ToString abf9a30e67aae2a959ae7707ed6e3b2d632447e9de878342195fae3bc7227a82 -->

```csharp
public override readonly string Inno.Rendering.Assets.ShaderTechniqueId.ToString()
```

Formats this value as a human-readable representation.

**Returns:** The human-readable representation of this value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets/Shaders/ShaderTechniqueId.cs#L47).

## `isValid`

<a id="api-2d79da3274dfa9a1"></a>
<!-- api: P:Inno.Rendering.Assets.ShaderTechniqueId.isValid a1df7ca87dc5a99fc8a47c520ac415268ced7988dd037fca332501afdc3010e2 -->

```csharp
public readonly bool Inno.Rendering.Assets.ShaderTechniqueId.isValid { get; }
```

Gets whether the identifier has a usable value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets/Shaders/ShaderTechniqueId.cs#L39).

## `value`

<a id="api-c8d3039dd39b279a"></a>
<!-- api: P:Inno.Rendering.Assets.ShaderTechniqueId.value ff16c3de45b6f9e59ca5d28199287001805b42ea9561a3934c5cfa6b62444b96 -->

```csharp
public string Inno.Rendering.Assets.ShaderTechniqueId.value { get; set; }
```

Gets or sets the stable technique value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets/Shaders/ShaderTechniqueId.cs#L34).
