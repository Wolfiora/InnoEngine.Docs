---
title: "ShaderContractId"
description: "Reference for ShaderContractId in Inno.Rendering.Assets."
uid: api.inno.rendering.assets.5198559cdbe56865
kind: api
owners:
  - Inno.Rendering.Assets
apiSurface: source-clr
contracts:
  - project.inno-rendering-assets
---
# `ShaderContractId`

This reference describes `ShaderContractId` in `Inno.Rendering.Assets`. Read the [shared contract](../../../projects/inno-rendering-assets.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.ValueType`.

**Direct interfaces:** `System.IEquatable<Inno.Rendering.Assets.ShaderContractId>`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-67178a5ac6b65dd6) | Method |
| [`Equals`](#api-2e85545e14663f92) | Method |
| [`Equals`](#api-e50aa0894752dd64) | Method |
| [`GetHashCode`](#api-e103f8d9252f9eed) | Method |
| [`op_Equality`](#api-b22913ff9b07fce9) | Method |
| [`op_Inequality`](#api-e5a2b338728c43fc) | Method |
| [`ToString`](#api-8bc8df432a522ec2) | Method |
| [`isValid`](#api-2e3f59d54b408fe6) | Property |
| [`value`](#api-4bdd564ed4c1b9fb) | Property |

## Type declaration

<a id="api-5198559cdbe56865"></a>
<!-- api: T:Inno.Rendering.Assets.ShaderContractId 64e256b4e5381960e7bfaf434f300644e38c4e505845391970bfa78ca7816269 -->

```csharp
public record struct Inno.Rendering.Assets.ShaderContractId : System.IEquatable<Inno.Rendering.Assets.ShaderContractId>
```

Identifies an open shader and pipeline compatibility contract.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets/Shaders/ShaderContractId.cs#L17).

## `#ctor`

<a id="api-67178a5ac6b65dd6"></a>
<!-- api: M:Inno.Rendering.Assets.ShaderContractId.#ctor(System.String) bd7cb769bb48c1a513a9fa7a790d25722c40acebe6fc73c8a360ee5d66f75511 -->

```csharp
public Inno.Rendering.Assets.ShaderContractId.ShaderContractId(string value)
```

Creates a shader contract identifier.

**Parameter `value`:** Globally stable contract value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets/Shaders/ShaderContractId.cs#L25).

## `Equals`

<a id="api-2e85545e14663f92"></a>
<!-- api: M:Inno.Rendering.Assets.ShaderContractId.Equals(Inno.Rendering.Assets.ShaderContractId) 1150e7450d41176738c758fc43d671b51b99deac6ba83dc78088f9201d0a602a -->

```csharp
public readonly bool Inno.Rendering.Assets.ShaderContractId.Equals(Inno.Rendering.Assets.ShaderContractId other)
```

Indicates whether the current object is equal to another object of the same type.

**Parameter `other`:** An object to compare with this object.

**Returns:** `true` if the current object is equal to the `other` parameter; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets/Shaders/ShaderContractId.cs#L17).

## `Equals`

<a id="api-e50aa0894752dd64"></a>
<!-- api: M:Inno.Rendering.Assets.ShaderContractId.Equals(System.Object) 35a1f7ddbc9e37a52f28a91c09b459110607ae6c5f3653fdf79394fbac2fdb23 -->

```csharp
public override readonly bool Inno.Rendering.Assets.ShaderContractId.Equals(object obj)
```

Indicates whether this instance and a specified object are equal.

**Parameter `obj`:** The object to compare with the current instance.

**Returns:** `true` if `obj` and this instance are the same type and represent the same value; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets/Shaders/ShaderContractId.cs#L17).

## `GetHashCode`

<a id="api-e103f8d9252f9eed"></a>
<!-- api: M:Inno.Rendering.Assets.ShaderContractId.GetHashCode 8bbcd969e46fd9dbe148e78f40fbee5ac2eeddd8812ad73a5340bbda483ebf58 -->

```csharp
public override readonly int Inno.Rendering.Assets.ShaderContractId.GetHashCode()
```

Returns the hash code for this instance.

**Returns:** A 32-bit signed integer that is the hash code for this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets/Shaders/ShaderContractId.cs#L17).

## `op_Equality`

<a id="api-b22913ff9b07fce9"></a>
<!-- api: M:Inno.Rendering.Assets.ShaderContractId.op_Equality(Inno.Rendering.Assets.ShaderContractId,Inno.Rendering.Assets.ShaderContractId) 52d212c61e487b88cffbcf9ada37dc4988e5089ecd8a8a37a76dedfbd181bbcf -->

```csharp
public static bool Inno.Rendering.Assets.ShaderContractId.operator ==(Inno.Rendering.Assets.ShaderContractId left, Inno.Rendering.Assets.ShaderContractId right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets/Shaders/ShaderContractId.cs#L17).

## `op_Inequality`

<a id="api-e5a2b338728c43fc"></a>
<!-- api: M:Inno.Rendering.Assets.ShaderContractId.op_Inequality(Inno.Rendering.Assets.ShaderContractId,Inno.Rendering.Assets.ShaderContractId) ec8fbf3c4d47fffe75c847f83c820be75c951976095979ee9594dff1cdd60c69 -->

```csharp
public static bool Inno.Rendering.Assets.ShaderContractId.operator !=(Inno.Rendering.Assets.ShaderContractId left, Inno.Rendering.Assets.ShaderContractId right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets/Shaders/ShaderContractId.cs#L17).

## `ToString`

<a id="api-8bc8df432a522ec2"></a>
<!-- api: M:Inno.Rendering.Assets.ShaderContractId.ToString 2095453995fb67c896af2560fd781832b73375ff943e70479b41547b2ace2b26 -->

```csharp
public override readonly string Inno.Rendering.Assets.ShaderContractId.ToString()
```

Formats this value as a human-readable representation.

**Returns:** The human-readable representation of this value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets/Shaders/ShaderContractId.cs#L47).

## `isValid`

<a id="api-2e3f59d54b408fe6"></a>
<!-- api: P:Inno.Rendering.Assets.ShaderContractId.isValid 1ccd79dfe48cd25094b1033907e1f9843a2c5a98c8a295af38e094a5c224e4e7 -->

```csharp
public readonly bool Inno.Rendering.Assets.ShaderContractId.isValid { get; }
```

Gets whether the identifier has a usable value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets/Shaders/ShaderContractId.cs#L39).

## `value`

<a id="api-4bdd564ed4c1b9fb"></a>
<!-- api: P:Inno.Rendering.Assets.ShaderContractId.value e54c46ac230ae8bd66c25e54d7ff0365574affa07f88cec4bf96424fa3f016b0 -->

```csharp
public string Inno.Rendering.Assets.ShaderContractId.value { get; set; }
```

Gets or sets the globally stable contract value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets/Shaders/ShaderContractId.cs#L34).
