---
title: "ShaderPassRoleId"
description: "Reference for ShaderPassRoleId in Inno.Rendering.Assets."
uid: api.inno.rendering.assets.62d1b9229ee2dc65
kind: api
owners:
  - Inno.Rendering.Assets
apiSurface: source-clr
contracts:
  - project.inno-rendering-assets
---
# `ShaderPassRoleId`

This reference describes `ShaderPassRoleId` in `Inno.Rendering.Assets`. Read the [shared contract](../../../projects/inno-rendering-assets.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.ValueType`.

**Direct interfaces:** `System.IEquatable<Inno.Rendering.Assets.ShaderPassRoleId>`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-88d5e20b1f4f1cc1) | Method |
| [`Equals`](#api-1868ce1d8c5c1aec) | Method |
| [`Equals`](#api-d8c6b92e32683f22) | Method |
| [`GetHashCode`](#api-57b0c2f8a83b2fdb) | Method |
| [`op_Equality`](#api-bb14ba52b42eb808) | Method |
| [`op_Inequality`](#api-222e5a53e50b509e) | Method |
| [`ToString`](#api-415ff84993d8e7a6) | Method |
| [`isValid`](#api-ffcff8a9804b1011) | Property |
| [`value`](#api-2f8b2aa2611ab94f) | Property |

## Type declaration

<a id="api-62d1b9229ee2dc65"></a>
<!-- api: T:Inno.Rendering.Assets.ShaderPassRoleId 5a5b6923ab397ebcc258c433924df1aa281bb580a44cd39e3afd73e76b5fcc29 -->

```csharp
public record struct Inno.Rendering.Assets.ShaderPassRoleId : System.IEquatable<Inno.Rendering.Assets.ShaderPassRoleId>
```

Identifies an open pass purpose defined by a rendering provider.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets/Shaders/ShaderPassRoleId.cs#L17).

## `#ctor`

<a id="api-88d5e20b1f4f1cc1"></a>
<!-- api: M:Inno.Rendering.Assets.ShaderPassRoleId.#ctor(System.String) 902f2478b79285f4f4974340aac9140d84954c820b892fe3e0e0d1dd892c2022 -->

```csharp
public Inno.Rendering.Assets.ShaderPassRoleId.ShaderPassRoleId(string value)
```

Creates a shader pass role identifier.

**Parameter `value`:** Stable role value within a contract.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets/Shaders/ShaderPassRoleId.cs#L25).

## `Equals`

<a id="api-1868ce1d8c5c1aec"></a>
<!-- api: M:Inno.Rendering.Assets.ShaderPassRoleId.Equals(Inno.Rendering.Assets.ShaderPassRoleId) c6ddf14bf94cb8d412accc0ef950b7cdbcc404ff6e8edcd7cfc8891614cfa6e5 -->

```csharp
public readonly bool Inno.Rendering.Assets.ShaderPassRoleId.Equals(Inno.Rendering.Assets.ShaderPassRoleId other)
```

Indicates whether the current object is equal to another object of the same type.

**Parameter `other`:** An object to compare with this object.

**Returns:** `true` if the current object is equal to the `other` parameter; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets/Shaders/ShaderPassRoleId.cs#L17).

## `Equals`

<a id="api-d8c6b92e32683f22"></a>
<!-- api: M:Inno.Rendering.Assets.ShaderPassRoleId.Equals(System.Object) 1cf8a9e086742531fb9835082ae8a092e7874ab51701d0ee0eba03ff6520c92d -->

```csharp
public override readonly bool Inno.Rendering.Assets.ShaderPassRoleId.Equals(object obj)
```

Indicates whether this instance and a specified object are equal.

**Parameter `obj`:** The object to compare with the current instance.

**Returns:** `true` if `obj` and this instance are the same type and represent the same value; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets/Shaders/ShaderPassRoleId.cs#L17).

## `GetHashCode`

<a id="api-57b0c2f8a83b2fdb"></a>
<!-- api: M:Inno.Rendering.Assets.ShaderPassRoleId.GetHashCode b5d7753c9e395ed8b1f62eb97645ee86f4ba3d4db7703fa0cbd82f8dade214a1 -->

```csharp
public override readonly int Inno.Rendering.Assets.ShaderPassRoleId.GetHashCode()
```

Returns the hash code for this instance.

**Returns:** A 32-bit signed integer that is the hash code for this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets/Shaders/ShaderPassRoleId.cs#L17).

## `op_Equality`

<a id="api-bb14ba52b42eb808"></a>
<!-- api: M:Inno.Rendering.Assets.ShaderPassRoleId.op_Equality(Inno.Rendering.Assets.ShaderPassRoleId,Inno.Rendering.Assets.ShaderPassRoleId) afcc2d99b1541df52eb7103814198d334048304828b11c9c90a09710811dfa21 -->

```csharp
public static bool Inno.Rendering.Assets.ShaderPassRoleId.operator ==(Inno.Rendering.Assets.ShaderPassRoleId left, Inno.Rendering.Assets.ShaderPassRoleId right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets/Shaders/ShaderPassRoleId.cs#L17).

## `op_Inequality`

<a id="api-222e5a53e50b509e"></a>
<!-- api: M:Inno.Rendering.Assets.ShaderPassRoleId.op_Inequality(Inno.Rendering.Assets.ShaderPassRoleId,Inno.Rendering.Assets.ShaderPassRoleId) e3c07ad9e11096c8a2339751407dbeae78d80f69ff6f98314d388b2e15b5e78a -->

```csharp
public static bool Inno.Rendering.Assets.ShaderPassRoleId.operator !=(Inno.Rendering.Assets.ShaderPassRoleId left, Inno.Rendering.Assets.ShaderPassRoleId right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets/Shaders/ShaderPassRoleId.cs#L17).

## `ToString`

<a id="api-415ff84993d8e7a6"></a>
<!-- api: M:Inno.Rendering.Assets.ShaderPassRoleId.ToString 37c69bf24fe5bfdd7ca28143cf4f730ff2e6eff7c9d3481129c948f88dfa3bb7 -->

```csharp
public override readonly string Inno.Rendering.Assets.ShaderPassRoleId.ToString()
```

Formats this value as a human-readable representation.

**Returns:** The human-readable representation of this value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets/Shaders/ShaderPassRoleId.cs#L47).

## `isValid`

<a id="api-ffcff8a9804b1011"></a>
<!-- api: P:Inno.Rendering.Assets.ShaderPassRoleId.isValid d6d7f258279f04e11243692c69420e4c7fb3c4a6524155b6feea8784165cdb9e -->

```csharp
public readonly bool Inno.Rendering.Assets.ShaderPassRoleId.isValid { get; }
```

Gets whether the identifier has a usable value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets/Shaders/ShaderPassRoleId.cs#L39).

## `value`

<a id="api-2f8b2aa2611ab94f"></a>
<!-- api: P:Inno.Rendering.Assets.ShaderPassRoleId.value 69c0077a2e41297a325916a21fbf1c3990a3d383218faae1e720834bdb5c265f -->

```csharp
public string Inno.Rendering.Assets.ShaderPassRoleId.value { get; set; }
```

Gets or sets the stable role value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets/Shaders/ShaderPassRoleId.cs#L34).
