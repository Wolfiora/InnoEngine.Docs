---
title: "ShaderSourceFile"
description: "Reference for ShaderSourceFile in Inno.Rendering.Shaders."
uid: api.inno.rendering.shaders.128abf55f08d9050
kind: api
owners:
  - Inno.Rendering.Shaders
apiSurface: source-clr
contracts:
  - project.inno-rendering-shaders
---
# `ShaderSourceFile`

This reference describes `ShaderSourceFile` in `Inno.Rendering.Shaders`. Read the [shared contract](../../../projects/inno-rendering-shaders.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

**Direct interfaces:** `System.IEquatable<Inno.Rendering.Shaders.ShaderSourceFile>`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-55645f7086115fe6) | Method |
| [`Deconstruct`](#api-1475a17907cd0899) | Method |
| [`Equals`](#api-687e4a6f0beba0cf) | Method |
| [`Equals`](#api-9f28d089523b108a) | Method |
| [`GetHashCode`](#api-47dd599abe66c665) | Method |
| [`op_Equality`](#api-8146aad7da055ec2) | Method |
| [`op_Inequality`](#api-67c6052d96542cb7) | Method |
| [`ToString`](#api-2145c5a5d1b98a74) | Method |
| [`assetPath`](#api-6ecbb8a50f1f2bfd) | Property |
| [`text`](#api-0e7776db860cd242) | Property |

## Type declaration

<a id="api-128abf55f08d9050"></a>
<!-- api: T:Inno.Rendering.Shaders.ShaderSourceFile 46809e9acf49029502bc7feb47438049535597ba2931e6e3fd6a93fe74a4050e -->

```csharp
public sealed record Inno.Rendering.Shaders.ShaderSourceFile : System.IEquatable<Inno.Rendering.Shaders.ShaderSourceFile>
```

Contains immutable source text supplied by the asset candidate's controlled source resolver.

**Parameter `assetPath`:** Resolved asset mount path.

**Parameter `text`:** UTF-8 decoded immutable source text.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Sources/IShaderSourceFrontend.cs#L57).

## `#ctor`

<a id="api-55645f7086115fe6"></a>
<!-- api: M:Inno.Rendering.Shaders.ShaderSourceFile.#ctor(System.String,System.String) 0ba56cff07b448b796b2b1d01db9c2705d12bb6a6b1d7645611b3fca62f258d8 -->

```csharp
public Inno.Rendering.Shaders.ShaderSourceFile.ShaderSourceFile(string assetPath, string text)
```

Contains immutable source text supplied by the asset candidate's controlled source resolver.

**Parameter `assetPath`:** Resolved asset mount path.

**Parameter `text`:** UTF-8 decoded immutable source text.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Sources/IShaderSourceFrontend.cs#L57).

## `Deconstruct`

<a id="api-1475a17907cd0899"></a>
<!-- api: M:Inno.Rendering.Shaders.ShaderSourceFile.Deconstruct(System.String@,System.String@) dea2c9f31c9b076d94a1c8e84e0ecdea46fd89b352288d119380b3dc73b32e17 -->

```csharp
public void Inno.Rendering.Shaders.ShaderSourceFile.Deconstruct(out string assetPath, out string text)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Sources/IShaderSourceFrontend.cs#L57).

## `Equals`

<a id="api-687e4a6f0beba0cf"></a>
<!-- api: M:Inno.Rendering.Shaders.ShaderSourceFile.Equals(Inno.Rendering.Shaders.ShaderSourceFile) 3c73f7a0a3d7bb8a3b87fc8f6639d3f45b202a4d21818906520e666b514b32f7 -->

```csharp
public bool Inno.Rendering.Shaders.ShaderSourceFile.Equals(Inno.Rendering.Shaders.ShaderSourceFile? other)
```

Indicates whether the current object is equal to another object of the same type.

**Parameter `other`:** An object to compare with this object.

**Returns:** `true` if the current object is equal to the `other` parameter; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Sources/IShaderSourceFrontend.cs#L57).

## `Equals`

<a id="api-9f28d089523b108a"></a>
<!-- api: M:Inno.Rendering.Shaders.ShaderSourceFile.Equals(System.Object) 67e85889d77f0e3afee8c36fb172ad9b80027f9a03c8bde0d21db78d37efb8da -->

```csharp
public override bool Inno.Rendering.Shaders.ShaderSourceFile.Equals(object? obj)
```

Determines whether the specified object is equal to the current object.

**Parameter `obj`:** The object to compare with the current object.

**Returns:** `true` if the specified object  is equal to the current object; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Sources/IShaderSourceFrontend.cs#L57).

## `GetHashCode`

<a id="api-47dd599abe66c665"></a>
<!-- api: M:Inno.Rendering.Shaders.ShaderSourceFile.GetHashCode 1fda97bc2acab432cd2ed28c6b568953a1a1722c5272ec0247217603b361f3b6 -->

```csharp
public override int Inno.Rendering.Shaders.ShaderSourceFile.GetHashCode()
```

Serves as the default hash function.

**Returns:** A hash code for the current object.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Sources/IShaderSourceFrontend.cs#L57).

## `op_Equality`

<a id="api-8146aad7da055ec2"></a>
<!-- api: M:Inno.Rendering.Shaders.ShaderSourceFile.op_Equality(Inno.Rendering.Shaders.ShaderSourceFile,Inno.Rendering.Shaders.ShaderSourceFile) f0591e3fe53124533e50de625cf5e0bb41785b12e0e93afe36a9c10a7e06030e -->

```csharp
public static bool Inno.Rendering.Shaders.ShaderSourceFile.operator ==(Inno.Rendering.Shaders.ShaderSourceFile? left, Inno.Rendering.Shaders.ShaderSourceFile? right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Sources/IShaderSourceFrontend.cs#L57).

## `op_Inequality`

<a id="api-67c6052d96542cb7"></a>
<!-- api: M:Inno.Rendering.Shaders.ShaderSourceFile.op_Inequality(Inno.Rendering.Shaders.ShaderSourceFile,Inno.Rendering.Shaders.ShaderSourceFile) 6aab2a6166efbd2ac917169a10c330d34c3dbfd3e46e331b18784ec57a9327f9 -->

```csharp
public static bool Inno.Rendering.Shaders.ShaderSourceFile.operator !=(Inno.Rendering.Shaders.ShaderSourceFile? left, Inno.Rendering.Shaders.ShaderSourceFile? right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Sources/IShaderSourceFrontend.cs#L57).

## `ToString`

<a id="api-2145c5a5d1b98a74"></a>
<!-- api: M:Inno.Rendering.Shaders.ShaderSourceFile.ToString 04fad2c1f5d2afe7e143f936825657ade889cc0384fe52b2ab0b38a6362ff4cb -->

```csharp
public override string Inno.Rendering.Shaders.ShaderSourceFile.ToString()
```

Returns a string that represents the current object.

**Returns:** A string that represents the current object.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Sources/IShaderSourceFrontend.cs#L57).

## `assetPath`

<a id="api-6ecbb8a50f1f2bfd"></a>
<!-- api: P:Inno.Rendering.Shaders.ShaderSourceFile.assetPath 5a1b788cea9ed69f685de9b7c7bbd76bf347e38d87fbcfc2e5f605261f21b804 -->

```csharp
public string Inno.Rendering.Shaders.ShaderSourceFile.assetPath { get; init; }
```

Resolved asset mount path.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Sources/IShaderSourceFrontend.cs#L58).

## `text`

<a id="api-0e7776db860cd242"></a>
<!-- api: P:Inno.Rendering.Shaders.ShaderSourceFile.text c4bce54a48a18ca4f4426e53ba57f0633fd619f102cd42ecce8a601213c9bcf4 -->

```csharp
public string Inno.Rendering.Shaders.ShaderSourceFile.text { get; init; }
```

UTF-8 decoded immutable source text.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Sources/IShaderSourceFrontend.cs#L59).
