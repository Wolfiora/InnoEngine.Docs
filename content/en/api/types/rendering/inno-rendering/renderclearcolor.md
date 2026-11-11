---
title: "RenderClearColor"
description: "Reference for RenderClearColor in Inno.Rendering."
uid: api.inno.rendering.3bda127f956177d7
kind: api
owners:
  - Inno.Rendering
apiSurface: source-clr
contracts:
  - project.inno-rendering
---
# `RenderClearColor`

This reference describes `RenderClearColor` in `Inno.Rendering`. Read the [shared contract](../../../projects/inno-rendering.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.ValueType`.

**Direct interfaces:** `System.IEquatable<Inno.Rendering.RenderClearColor>`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-4fd4b9eef2cb3190) | Method |
| [`Equals`](#api-9ed93c60f6886bd3) | Method |
| [`Equals`](#api-c5f3c81c7cc28de9) | Method |
| [`GetHashCode`](#api-bbfc4352aa5203f2) | Method |
| [`op_Equality`](#api-0b9bafba488ab4eb) | Method |
| [`op_Inequality`](#api-2634e028184392af) | Method |
| [`ToString`](#api-ae0393e8ecb89fc3) | Method |
| [`a`](#api-d75826bd3207b6a7) | Property |
| [`b`](#api-eb54bbb7f032b044) | Property |
| [`g`](#api-5a49def58c519088) | Property |
| [`r`](#api-2c551cb9790a9d75) | Property |

## Type declaration

<a id="api-3bda127f956177d7"></a>
<!-- api: T:Inno.Rendering.RenderClearColor 5b06440fcad010360ae6ce6d48ce22997b0387fef7a5e2d986c432cb62b72053 -->

```csharp
public readonly record struct Inno.Rendering.RenderClearColor : System.IEquatable<Inno.Rendering.RenderClearColor>
```

Stores a linear clear color without depending on an engine math assembly.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Graph/RenderGraphTypes.cs#L109).

## `#ctor`

<a id="api-4fd4b9eef2cb3190"></a>
<!-- api: M:Inno.Rendering.RenderClearColor.#ctor(System.Single,System.Single,System.Single,System.Single) 6eb46c9e16ae224519c37891bb4007a2760e437a43d844c35d53bf8934294977 -->

```csharp
public Inno.Rendering.RenderClearColor.RenderClearColor(float r, float g, float b, float a = 1)
```

Creates a linear clear color.

**Parameter `r`:** Red channel.

**Parameter `g`:** Green channel.

**Parameter `b`:** Blue channel.

**Parameter `a`:** Alpha channel.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Graph/RenderGraphTypes.cs#L126).

## `Equals`

<a id="api-9ed93c60f6886bd3"></a>
<!-- api: M:Inno.Rendering.RenderClearColor.Equals(Inno.Rendering.RenderClearColor) 12b0c7b76d3db88e63ec6b39bdd5121bf72a761e30bda4287930c6b0695e85e9 -->

```csharp
public bool Inno.Rendering.RenderClearColor.Equals(Inno.Rendering.RenderClearColor other)
```

Indicates whether the current object is equal to another object of the same type.

**Parameter `other`:** An object to compare with this object.

**Returns:** `true` if the current object is equal to the `other` parameter; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Graph/RenderGraphTypes.cs#L109).

## `Equals`

<a id="api-c5f3c81c7cc28de9"></a>
<!-- api: M:Inno.Rendering.RenderClearColor.Equals(System.Object) 79f721371feacfd48bf7ae46b53f4b388523ff0c8587701304a41db59cadb606 -->

```csharp
public override bool Inno.Rendering.RenderClearColor.Equals(object obj)
```

Indicates whether this instance and a specified object are equal.

**Parameter `obj`:** The object to compare with the current instance.

**Returns:** `true` if `obj` and this instance are the same type and represent the same value; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Graph/RenderGraphTypes.cs#L109).

## `GetHashCode`

<a id="api-bbfc4352aa5203f2"></a>
<!-- api: M:Inno.Rendering.RenderClearColor.GetHashCode 6ae14c2fbe63dc1a95c36eb085e14cc839d522a4ef4b0a94508219f18c776dd3 -->

```csharp
public override int Inno.Rendering.RenderClearColor.GetHashCode()
```

Returns the hash code for this instance.

**Returns:** A 32-bit signed integer that is the hash code for this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Graph/RenderGraphTypes.cs#L109).

## `op_Equality`

<a id="api-0b9bafba488ab4eb"></a>
<!-- api: M:Inno.Rendering.RenderClearColor.op_Equality(Inno.Rendering.RenderClearColor,Inno.Rendering.RenderClearColor) 58195017b91745edb2d7dc1bce2a3685299ccdacd063b6eaf7e90f441a4526fc -->

```csharp
public static bool Inno.Rendering.RenderClearColor.operator ==(Inno.Rendering.RenderClearColor left, Inno.Rendering.RenderClearColor right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Graph/RenderGraphTypes.cs#L109).

## `op_Inequality`

<a id="api-2634e028184392af"></a>
<!-- api: M:Inno.Rendering.RenderClearColor.op_Inequality(Inno.Rendering.RenderClearColor,Inno.Rendering.RenderClearColor) c4fe26cd23ec0074bbdfdb7ecfb3e6e163facdc40b55408353dd55f796ef7534 -->

```csharp
public static bool Inno.Rendering.RenderClearColor.operator !=(Inno.Rendering.RenderClearColor left, Inno.Rendering.RenderClearColor right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Graph/RenderGraphTypes.cs#L109).

## `ToString`

<a id="api-ae0393e8ecb89fc3"></a>
<!-- api: M:Inno.Rendering.RenderClearColor.ToString a73535a36e178e607e38979330448b09077de0c47ca99f40370840260cb5f576 -->

```csharp
public override string Inno.Rendering.RenderClearColor.ToString()
```

Returns the fully qualified type name of this instance.

**Returns:** The fully qualified type name.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Graph/RenderGraphTypes.cs#L109).

## `a`

<a id="api-d75826bd3207b6a7"></a>
<!-- api: P:Inno.Rendering.RenderClearColor.a 2a2745dfa559d69e9071aa3d6d9ca4eab8452e456f78b6f85d2ec8de4f735c5b -->

```csharp
public float Inno.Rendering.RenderClearColor.a { get; }
```

Gets the alpha channel.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Graph/RenderGraphTypes.cs#L156).

## `b`

<a id="api-eb54bbb7f032b044"></a>
<!-- api: P:Inno.Rendering.RenderClearColor.b a7eb2d546660a52053f0c026e87e19e553efb883dedb307e8d44d749d3c8210e -->

```csharp
public float Inno.Rendering.RenderClearColor.b { get; }
```

Gets the blue channel.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Graph/RenderGraphTypes.cs#L151).

## `g`

<a id="api-5a49def58c519088"></a>
<!-- api: P:Inno.Rendering.RenderClearColor.g 67b5077226524ad4b92e75a034a92e04bf1dff9f541895ecca8e41e211d0c2d7 -->

```csharp
public float Inno.Rendering.RenderClearColor.g { get; }
```

Gets the green channel.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Graph/RenderGraphTypes.cs#L146).

## `r`

<a id="api-2c551cb9790a9d75"></a>
<!-- api: P:Inno.Rendering.RenderClearColor.r 1e3208755c28dc60f1959cc9a3aaab0fafe717c33e558d7e9465fe1956375021 -->

```csharp
public float Inno.Rendering.RenderClearColor.r { get; }
```

Gets the red channel.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Graph/RenderGraphTypes.cs#L141).
