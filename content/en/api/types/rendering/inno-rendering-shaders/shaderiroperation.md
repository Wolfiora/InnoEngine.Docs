---
title: "ShaderIrOperation"
description: "Reference for ShaderIrOperation in Inno.Rendering.Shaders."
uid: api.inno.rendering.shaders.62cf819c139f48f7
kind: api
owners:
  - Inno.Rendering.Shaders
apiSurface: source-clr
contracts:
  - project.inno-rendering-shaders
---
# `ShaderIrOperation`

This reference describes `ShaderIrOperation` in `Inno.Rendering.Shaders`. Read the [shared contract](../../../projects/inno-rendering-shaders.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.Enum`.

## Members

| Member | Kind |
| --- | --- |
| [`Add`](#api-693ed5963efadb82) | Field |
| [`Branch`](#api-68f944c4cb05730a) | Field |
| [`Constant`](#api-9f042b8a7a171de3) | Field |
| [`Construct`](#api-3189bf20434b1f0b) | Field |
| [`Discard`](#api-991d04954aed8d37) | Field |
| [`Divide`](#api-194f46b14e9e339a) | Field |
| [`Equal`](#api-d6f81016f0a843c6) | Field |
| [`Extract`](#api-ef6f412c79d2a7e8) | Field |
| [`Input`](#api-72987cc351d41d43) | Field |
| [`LessThan`](#api-f4985e7c09d33aaf) | Field |
| [`Loop`](#api-c95799f6b0200f34) | Field |
| [`Maximum`](#api-5f3256d3880df8c9) | Field |
| [`Minimum`](#api-9dcc913c39b12cf7) | Field |
| [`Multiply`](#api-48dd518f66720392) | Field |
| [`RegionInput`](#api-722840ba25397f7c) | Field |
| [`Select`](#api-7cff16d2988da385) | Field |
| [`SourceCall`](#api-e91424bfafc19b0d) | Field |
| [`StorageAtomicAdd`](#api-930e54b3f8a485df) | Field |
| [`StorageLoad`](#api-e068efc6c9a52389) | Field |
| [`StorageStore`](#api-a38aa25c8d56404d) | Field |
| [`Subtract`](#api-27c8ad8256f5b37e) | Field |
| [`TextureSample`](#api-786e0bfcb282bd21) | Field |
| [`TextureSampleLevel`](#api-6d132011dd494c58) | Field |

## Type declaration

<a id="api-62cf819c139f48f7"></a>
<!-- api: T:Inno.Rendering.Shaders.ShaderIrOperation 2602d80d32631c8fa7d0c831ebd45270c4232321db38bf1d81e775baafa3626c -->

```csharp
public enum Inno.Rendering.Shaders.ShaderIrOperation : int
```

Defines backend-neutral value operations; graph node IDs are not instruction opcodes.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Intermediate/ShaderIrBlock.cs#L37).

## `Add`

<a id="api-693ed5963efadb82"></a>
<!-- api: F:Inno.Rendering.Shaders.ShaderIrOperation.Add 334a1b79acc20d85f406c6e8bd996814af1a12f38d5327f7503424cfffd7c273 -->

```csharp
Inno.Rendering.Shaders.ShaderIrOperation.Add = 4
```

Adds two equal numeric types component by component.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Intermediate/ShaderIrBlock.cs#L58).

## `Branch`

<a id="api-68f944c4cb05730a"></a>
<!-- api: F:Inno.Rendering.Shaders.ShaderIrOperation.Branch cd3fbfe386cc715f76e517565cf0f6ca21299a90f15a75499a8fb928ea25f46c -->

```csharp
Inno.Rendering.Shaders.ShaderIrOperation.Branch = 21
```

Executes exactly one nested region and merges its named output values.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Intermediate/ShaderIrBlock.cs#L126).

## `Constant`

<a id="api-9f042b8a7a171de3"></a>
<!-- api: F:Inno.Rendering.Shaders.ShaderIrOperation.Constant 1c442c17508cc96487c7b445f6dbc859608f1a7105baa325f994795116702c3a -->

```csharp
Inno.Rendering.Shaders.ShaderIrOperation.Constant = 1
```

Produces an exact scalar constant stored as bits, not source-language text.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Intermediate/ShaderIrBlock.cs#L46).

## `Construct`

<a id="api-3189bf20434b1f0b"></a>
<!-- api: F:Inno.Rendering.Shaders.ShaderIrOperation.Construct 8cdece5d335df978e5c65be6a7bc1dfb6aec9567ed1154622f4ce6d25f9b8f31 -->

```csharp
Inno.Rendering.Shaders.ShaderIrOperation.Construct = 2
```

Constructs an aggregate from typed scalar or member values.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Intermediate/ShaderIrBlock.cs#L50).

## `Discard`

<a id="api-991d04954aed8d37"></a>
<!-- api: F:Inno.Rendering.Shaders.ShaderIrOperation.Discard 9c07f1dbbb423c372f274d5dce34312153ae60d0132ba1b4dc6254f2f80394b3 -->

```csharp
Inno.Rendering.Shaders.ShaderIrOperation.Discard = 19
```

Discards the current fragment when the scalar condition is true.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Intermediate/ShaderIrBlock.cs#L118).

## `Divide`

<a id="api-194f46b14e9e339a"></a>
<!-- api: F:Inno.Rendering.Shaders.ShaderIrOperation.Divide f6579c998d58254d3c6437f1b033fc7cf7e3fa6e27f9b390fd8bb05205fe6c89 -->

```csharp
Inno.Rendering.Shaders.ShaderIrOperation.Divide = 7
```

Divides two equal numeric types component by component.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Intermediate/ShaderIrBlock.cs#L70).

## `Equal`

<a id="api-d6f81016f0a843c6"></a>
<!-- api: F:Inno.Rendering.Shaders.ShaderIrOperation.Equal da15f1fa25e89e6c593533447dbbf81ea99a07784ec2b2b4d866f6aa69f7dd10 -->

```csharp
Inno.Rendering.Shaders.ShaderIrOperation.Equal = 10
```

Tests equality of two scalar values and produces a scalar Boolean.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Intermediate/ShaderIrBlock.cs#L82).

## `Extract`

<a id="api-ef6f412c79d2a7e8"></a>
<!-- api: F:Inno.Rendering.Shaders.ShaderIrOperation.Extract da6529d070cafbb9114969700089d48c440248cf78f76f5bcdd351396da9b5b3 -->

```csharp
Inno.Rendering.Shaders.ShaderIrOperation.Extract = 3
```

Extracts one statically selected vector component, array element or structure field.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Intermediate/ShaderIrBlock.cs#L54).

## `Input`

<a id="api-72987cc351d41d43"></a>
<!-- api: F:Inno.Rendering.Shaders.ShaderIrOperation.Input 660ab7b150298cf5de5603de9863952cda5020f57a19aeb41338cae44a87cdea -->

```csharp
Inno.Rendering.Shaders.ShaderIrOperation.Input = 0
```

Reads a named input supplied by the enclosing function or stage.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Intermediate/ShaderIrBlock.cs#L42).

## `LessThan`

<a id="api-f4985e7c09d33aaf"></a>
<!-- api: F:Inno.Rendering.Shaders.ShaderIrOperation.LessThan 34f02149ddd906432c8a04b78a578f83666d0f22de3e15a38bdc7e4dc192ac40 -->

```csharp
Inno.Rendering.Shaders.ShaderIrOperation.LessThan = 11
```

Compares two equal numeric scalar types and produces a scalar Boolean.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Intermediate/ShaderIrBlock.cs#L86).

## `Loop`

<a id="api-c95799f6b0200f34"></a>
<!-- api: F:Inno.Rendering.Shaders.ShaderIrOperation.Loop d70443ad22dde93bf2808a846973ab2c59f7ef4bd9f5e805a3338c605ba73e8c -->

```csharp
Inno.Rendering.Shaders.ShaderIrOperation.Loop = 22
```

Executes a counted loop with explicit typed carried values and ordered body effects.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Intermediate/ShaderIrBlock.cs#L130).

## `Maximum`

<a id="api-5f3256d3880df8c9"></a>
<!-- api: F:Inno.Rendering.Shaders.ShaderIrOperation.Maximum 846ec0c4c7c6f96c4b0c00debbe8baca8014be0b3321dc3749bbde607b0e892b -->

```csharp
Inno.Rendering.Shaders.ShaderIrOperation.Maximum = 9
```

Selects the component-wise maximum of two equal numeric types.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Intermediate/ShaderIrBlock.cs#L78).

## `Minimum`

<a id="api-9dcc913c39b12cf7"></a>
<!-- api: F:Inno.Rendering.Shaders.ShaderIrOperation.Minimum 712ced7b1f39a80d1f097b5a77dafb31d4f1073c4194e25468b3095b2e255e7e -->

```csharp
Inno.Rendering.Shaders.ShaderIrOperation.Minimum = 8
```

Selects the component-wise minimum of two equal numeric types.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Intermediate/ShaderIrBlock.cs#L74).

## `Multiply`

<a id="api-48dd518f66720392"></a>
<!-- api: F:Inno.Rendering.Shaders.ShaderIrOperation.Multiply aba5c7429eff8e8aa162edde67ece6fcacf8d5b1d167138ab8e6778db4318554 -->

```csharp
Inno.Rendering.Shaders.ShaderIrOperation.Multiply = 6
```

Multiplies two equal numeric types component by component; this is not matrix multiplication.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Intermediate/ShaderIrBlock.cs#L66).

## `RegionInput`

<a id="api-722840ba25397f7c"></a>
<!-- api: F:Inno.Rendering.Shaders.ShaderIrOperation.RegionInput a70cdf240cb60d45ab95c9a359c3c7b1a92a426bc79e6f8b5f8449f8ef1e91c9 -->

```csharp
Inno.Rendering.Shaders.ShaderIrOperation.RegionInput = 20
```

Provides a typed iteration index or loop-carried value inside a nested region.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Intermediate/ShaderIrBlock.cs#L122).

## `Select`

<a id="api-7cff16d2988da385"></a>
<!-- api: F:Inno.Rendering.Shaders.ShaderIrOperation.Select 7e118a4cb7f901022aa0d5f3ec10b1eabd99b504f897853cf3a31ff0e0e84595 -->

```csharp
Inno.Rendering.Shaders.ShaderIrOperation.Select = 12
```

Selects between equal types using a scalar Boolean; it does not introduce control flow.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Intermediate/ShaderIrBlock.cs#L90).

## `SourceCall`

<a id="api-e91424bfafc19b0d"></a>
<!-- api: F:Inno.Rendering.Shaders.ShaderIrOperation.SourceCall e1706a171eb8cbe532587360f6e55a0a8547fdfd2cd933af08646bbc2ed7230a -->

```csharp
Inno.Rendering.Shaders.ShaderIrOperation.SourceCall = 13
```

Calls a parsed source function with named inputs and ordered multiple outputs.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Intermediate/ShaderIrBlock.cs#L94).

## `StorageAtomicAdd`

<a id="api-930e54b3f8a485df"></a>
<!-- api: F:Inno.Rendering.Shaders.ShaderIrOperation.StorageAtomicAdd f3a918687ff66d249964a42e9a6b64c9451c85c2dce5d81d6b7826da3412e260 -->

```csharp
Inno.Rendering.Shaders.ShaderIrOperation.StorageAtomicAdd = 18
```

Atomically adds to an integer buffer element and returns the original value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Intermediate/ShaderIrBlock.cs#L114).

## `StorageLoad`

<a id="api-e068efc6c9a52389"></a>
<!-- api: F:Inno.Rendering.Shaders.ShaderIrOperation.StorageLoad 51c01418b6c746b87b20da8daa0510ad42611fd6da22c1aa6b4aa7d01e0ab92d -->

```csharp
Inno.Rendering.Shaders.ShaderIrOperation.StorageLoad = 16
```

Loads one typed buffer element or formatted image texel in memory-effect order.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Intermediate/ShaderIrBlock.cs#L106).

## `StorageStore`

<a id="api-a38aa25c8d56404d"></a>
<!-- api: F:Inno.Rendering.Shaders.ShaderIrOperation.StorageStore 14a099e50b1d8f38ffb4f2f5cca5c8956c7af88b4e3e5055b4f055f05d9b8ebf -->

```csharp
Inno.Rendering.Shaders.ShaderIrOperation.StorageStore = 17
```

Stores one typed buffer element or formatted image texel in memory-effect order.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Intermediate/ShaderIrBlock.cs#L110).

## `Subtract`

<a id="api-27c8ad8256f5b37e"></a>
<!-- api: F:Inno.Rendering.Shaders.ShaderIrOperation.Subtract 2e66a201ad3891cd997f95553d67c917c9ae7ca8dab80b7bc31ad848c096a839 -->

```csharp
Inno.Rendering.Shaders.ShaderIrOperation.Subtract = 5
```

Subtracts two equal numeric types component by component.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Intermediate/ShaderIrBlock.cs#L62).

## `TextureSample`

<a id="api-786e0bfcb282bd21"></a>
<!-- api: F:Inno.Rendering.Shaders.ShaderIrOperation.TextureSample 1923933df40b03c8b2d64de37617fd814f78d195261db41ce33f08d4b0bf3ef3 -->

```csharp
Inno.Rendering.Shaders.ShaderIrOperation.TextureSample = 14
```

Samples a floating-point texture using implicit fragment derivatives.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Intermediate/ShaderIrBlock.cs#L98).

## `TextureSampleLevel`

<a id="api-6d132011dd494c58"></a>
<!-- api: F:Inno.Rendering.Shaders.ShaderIrOperation.TextureSampleLevel d1a7e0caa11c602a03259977b499da4b6217019fb645a41a236dbc06330b9f39 -->

```csharp
Inno.Rendering.Shaders.ShaderIrOperation.TextureSampleLevel = 15
```

Samples a floating-point texture at an explicit mip level.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Intermediate/ShaderIrBlock.cs#L102).
