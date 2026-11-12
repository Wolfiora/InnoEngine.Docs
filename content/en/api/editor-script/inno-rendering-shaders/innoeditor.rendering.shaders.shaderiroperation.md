---
title: "ShaderIrOperation"
description: "Reference for ShaderIrOperation in Inno.Rendering.Shaders."
uid: api.inno.rendering.shaders.editor-script.89bc0e8644d48554
kind: api
owners:
  - Inno.Rendering.Shaders
apiSurface: editor-script
contracts:
  - project.inno-rendering-shaders
  - manual.scripting.use-script-api
---
# `ShaderIrOperation`

This reference describes `ShaderIrOperation` in `Inno.Rendering.Shaders`. Read the [shared contract](../../projects/inno-rendering-shaders.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `editor-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `System.Enum`.

## Members

| Member | Kind |
| --- | --- |
| [`Add`](#api-272d349c4c6f62ca) | Field |
| [`Branch`](#api-401e22ab9463334f) | Field |
| [`Constant`](#api-fbc99be2750946c5) | Field |
| [`Construct`](#api-a9a6ffa9f755e8e7) | Field |
| [`Discard`](#api-6c66f618f0d6978e) | Field |
| [`Divide`](#api-9985f556202fd0fe) | Field |
| [`Equal`](#api-2f51bb7866b9d674) | Field |
| [`Extract`](#api-980ab358bcba2995) | Field |
| [`Input`](#api-c3db73934356dc2c) | Field |
| [`LessThan`](#api-2e0b307cd35fa025) | Field |
| [`Loop`](#api-8b9517089e09a5f5) | Field |
| [`Maximum`](#api-39e0831cc6637f5e) | Field |
| [`Minimum`](#api-59e42a086f1545df) | Field |
| [`Multiply`](#api-8a1441d990b9f2f4) | Field |
| [`RegionInput`](#api-8ec7769ed50389ff) | Field |
| [`Select`](#api-29ebc7027c544538) | Field |
| [`SourceCall`](#api-eaf191ff096d0c49) | Field |
| [`StorageAtomicAdd`](#api-fd193cd9544818e2) | Field |
| [`StorageLoad`](#api-00b5532cc7c823c3) | Field |
| [`StorageStore`](#api-eee9ba2ddc0cfee6) | Field |
| [`Subtract`](#api-aa67cc8421b970e6) | Field |
| [`TextureSample`](#api-aad695c3c97f627b) | Field |
| [`TextureSampleLevel`](#api-d9da5adb1ce9057c) | Field |

## Type declaration

<a id="api-89bc0e8644d48554"></a>
<!-- api: T:InnoEditor.Rendering.Shaders.ShaderIrOperation 1b061db537b5267b8b63947d46c04be85eba10dbb8ce101101539893cae82d09 -->

```csharp
public enum InnoEditor.Rendering.Shaders.ShaderIrOperation : int
```

Defines backend-neutral value operations; graph node IDs are not instruction opcodes.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Intermediate/ShaderIrBlock.cs#L37).

## `Add`

<a id="api-272d349c4c6f62ca"></a>
<!-- api: F:InnoEditor.Rendering.Shaders.ShaderIrOperation.Add 49cdca860f3adc60332884e9bf1ea36844210c06dceb48d0822c46789c3a0189 -->

```csharp
InnoEditor.Rendering.Shaders.ShaderIrOperation.Add = 4
```

Adds two equal numeric types component by component.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Intermediate/ShaderIrBlock.cs#L58).

## `Branch`

<a id="api-401e22ab9463334f"></a>
<!-- api: F:InnoEditor.Rendering.Shaders.ShaderIrOperation.Branch 231329a33cd7443fb1654ac8b4316754a13897c61a2a2d9096ec889877e8991a -->

```csharp
InnoEditor.Rendering.Shaders.ShaderIrOperation.Branch = 21
```

Executes exactly one nested region and merges its named output values.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Intermediate/ShaderIrBlock.cs#L126).

## `Constant`

<a id="api-fbc99be2750946c5"></a>
<!-- api: F:InnoEditor.Rendering.Shaders.ShaderIrOperation.Constant 9e2fe06827672292c81be6325fe8ea6f136723de10ba14129eb126fcc7e4456d -->

```csharp
InnoEditor.Rendering.Shaders.ShaderIrOperation.Constant = 1
```

Produces an exact scalar constant stored as bits, not source-language text.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Intermediate/ShaderIrBlock.cs#L46).

## `Construct`

<a id="api-a9a6ffa9f755e8e7"></a>
<!-- api: F:InnoEditor.Rendering.Shaders.ShaderIrOperation.Construct 9b1b8cd2d4d3374ce77fc0fba3425f5d36be9f12813bfb2a391165e2b3c81004 -->

```csharp
InnoEditor.Rendering.Shaders.ShaderIrOperation.Construct = 2
```

Constructs an aggregate from typed scalar or member values.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Intermediate/ShaderIrBlock.cs#L50).

## `Discard`

<a id="api-6c66f618f0d6978e"></a>
<!-- api: F:InnoEditor.Rendering.Shaders.ShaderIrOperation.Discard e2e8390f77c77350b334141570be21c1e955052703db8b69e281bf838b3f3a25 -->

```csharp
InnoEditor.Rendering.Shaders.ShaderIrOperation.Discard = 19
```

Discards the current fragment when the scalar condition is true.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Intermediate/ShaderIrBlock.cs#L118).

## `Divide`

<a id="api-9985f556202fd0fe"></a>
<!-- api: F:InnoEditor.Rendering.Shaders.ShaderIrOperation.Divide 35ecf2e1a6b382a0a1ec6bf70a7b087bdb2693e3b4a979220bd6f533cedfbb89 -->

```csharp
InnoEditor.Rendering.Shaders.ShaderIrOperation.Divide = 7
```

Divides two equal numeric types component by component.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Intermediate/ShaderIrBlock.cs#L70).

## `Equal`

<a id="api-2f51bb7866b9d674"></a>
<!-- api: F:InnoEditor.Rendering.Shaders.ShaderIrOperation.Equal 5383ec63fdf0bd03037bda602d28c1f198d23cd016b57ead769c3f67f1a2bc9e -->

```csharp
InnoEditor.Rendering.Shaders.ShaderIrOperation.Equal = 10
```

Tests equality of two scalar values and produces a scalar Boolean.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Intermediate/ShaderIrBlock.cs#L82).

## `Extract`

<a id="api-980ab358bcba2995"></a>
<!-- api: F:InnoEditor.Rendering.Shaders.ShaderIrOperation.Extract 778316aa157f219c089d598eaf1af233ddedda4ab924a837238facecd1d884e8 -->

```csharp
InnoEditor.Rendering.Shaders.ShaderIrOperation.Extract = 3
```

Extracts one statically selected vector component, array element or structure field.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Intermediate/ShaderIrBlock.cs#L54).

## `Input`

<a id="api-c3db73934356dc2c"></a>
<!-- api: F:InnoEditor.Rendering.Shaders.ShaderIrOperation.Input f338376f2c1b87930a99cdaaa1e71d9b53c3a686b506dbc3a6b34fbbde7178f1 -->

```csharp
InnoEditor.Rendering.Shaders.ShaderIrOperation.Input = 0
```

Reads a named input supplied by the enclosing function or stage.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Intermediate/ShaderIrBlock.cs#L42).

## `LessThan`

<a id="api-2e0b307cd35fa025"></a>
<!-- api: F:InnoEditor.Rendering.Shaders.ShaderIrOperation.LessThan f4682bfa2020407f3234cc6baebef4e88af62b76e4ec4e8c875744376a4f644e -->

```csharp
InnoEditor.Rendering.Shaders.ShaderIrOperation.LessThan = 11
```

Compares two equal numeric scalar types and produces a scalar Boolean.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Intermediate/ShaderIrBlock.cs#L86).

## `Loop`

<a id="api-8b9517089e09a5f5"></a>
<!-- api: F:InnoEditor.Rendering.Shaders.ShaderIrOperation.Loop fb7c22246e4f22a9205530c5850bd2d0aa33ee89b1dfdc024da21e1ff4fe9a75 -->

```csharp
InnoEditor.Rendering.Shaders.ShaderIrOperation.Loop = 22
```

Executes a counted loop with explicit typed carried values and ordered body effects.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Intermediate/ShaderIrBlock.cs#L130).

## `Maximum`

<a id="api-39e0831cc6637f5e"></a>
<!-- api: F:InnoEditor.Rendering.Shaders.ShaderIrOperation.Maximum 8d2cc4a20db3903e9124f9f55b359df0641154f621985cbddec3b39e8a2c4c77 -->

```csharp
InnoEditor.Rendering.Shaders.ShaderIrOperation.Maximum = 9
```

Selects the component-wise maximum of two equal numeric types.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Intermediate/ShaderIrBlock.cs#L78).

## `Minimum`

<a id="api-59e42a086f1545df"></a>
<!-- api: F:InnoEditor.Rendering.Shaders.ShaderIrOperation.Minimum 37c4ebfe85a01196104918c51efcf903f2ee103154bdc32c920997f7c98faec4 -->

```csharp
InnoEditor.Rendering.Shaders.ShaderIrOperation.Minimum = 8
```

Selects the component-wise minimum of two equal numeric types.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Intermediate/ShaderIrBlock.cs#L74).

## `Multiply`

<a id="api-8a1441d990b9f2f4"></a>
<!-- api: F:InnoEditor.Rendering.Shaders.ShaderIrOperation.Multiply 6c1c27393563f87c8c5fc62c23a1014461e905aed5ff24ac42d9caf03216f4db -->

```csharp
InnoEditor.Rendering.Shaders.ShaderIrOperation.Multiply = 6
```

Multiplies two equal numeric types component by component; this is not matrix multiplication.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Intermediate/ShaderIrBlock.cs#L66).

## `RegionInput`

<a id="api-8ec7769ed50389ff"></a>
<!-- api: F:InnoEditor.Rendering.Shaders.ShaderIrOperation.RegionInput c3aee04c052b9f3704b8a0fb435e637d1874ed8f778c2eba1ac55ec7891f9b46 -->

```csharp
InnoEditor.Rendering.Shaders.ShaderIrOperation.RegionInput = 20
```

Provides a typed iteration index or loop-carried value inside a nested region.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Intermediate/ShaderIrBlock.cs#L122).

## `Select`

<a id="api-29ebc7027c544538"></a>
<!-- api: F:InnoEditor.Rendering.Shaders.ShaderIrOperation.Select 077570c4d45d5950c43a0d2b43d44fd8cb79f8737ffe5c1ac9820f68477b11a0 -->

```csharp
InnoEditor.Rendering.Shaders.ShaderIrOperation.Select = 12
```

Selects between equal types using a scalar Boolean; it does not introduce control flow.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Intermediate/ShaderIrBlock.cs#L90).

## `SourceCall`

<a id="api-eaf191ff096d0c49"></a>
<!-- api: F:InnoEditor.Rendering.Shaders.ShaderIrOperation.SourceCall 19b73f20e328bf0fbd048a99310967d1ec53971b376c7d8be9c136c129b7854c -->

```csharp
InnoEditor.Rendering.Shaders.ShaderIrOperation.SourceCall = 13
```

Calls a parsed source function with named inputs and ordered multiple outputs.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Intermediate/ShaderIrBlock.cs#L94).

## `StorageAtomicAdd`

<a id="api-fd193cd9544818e2"></a>
<!-- api: F:InnoEditor.Rendering.Shaders.ShaderIrOperation.StorageAtomicAdd 7ba896c505a92bc154e736c9d6c28d06ccb75112bea42f1d04eb6a55c98bf8c9 -->

```csharp
InnoEditor.Rendering.Shaders.ShaderIrOperation.StorageAtomicAdd = 18
```

Atomically adds to an integer buffer element and returns the original value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Intermediate/ShaderIrBlock.cs#L114).

## `StorageLoad`

<a id="api-00b5532cc7c823c3"></a>
<!-- api: F:InnoEditor.Rendering.Shaders.ShaderIrOperation.StorageLoad f0d62306497a98fe100fbcc364e175d5054bd62074ddc9c1cd77d3890c88d90a -->

```csharp
InnoEditor.Rendering.Shaders.ShaderIrOperation.StorageLoad = 16
```

Loads one typed buffer element or formatted image texel in memory-effect order.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Intermediate/ShaderIrBlock.cs#L106).

## `StorageStore`

<a id="api-eee9ba2ddc0cfee6"></a>
<!-- api: F:InnoEditor.Rendering.Shaders.ShaderIrOperation.StorageStore 6b2cd0aac8989f19abc9b695d1e10a867aad6f1d5dd98374e2b51fd2f1122e04 -->

```csharp
InnoEditor.Rendering.Shaders.ShaderIrOperation.StorageStore = 17
```

Stores one typed buffer element or formatted image texel in memory-effect order.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Intermediate/ShaderIrBlock.cs#L110).

## `Subtract`

<a id="api-aa67cc8421b970e6"></a>
<!-- api: F:InnoEditor.Rendering.Shaders.ShaderIrOperation.Subtract 12d1ac1c85c6f290bdc70e7442151d7bd5568f21d780bb3e2823664436226950 -->

```csharp
InnoEditor.Rendering.Shaders.ShaderIrOperation.Subtract = 5
```

Subtracts two equal numeric types component by component.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Intermediate/ShaderIrBlock.cs#L62).

## `TextureSample`

<a id="api-aad695c3c97f627b"></a>
<!-- api: F:InnoEditor.Rendering.Shaders.ShaderIrOperation.TextureSample d30b41c1585468807e8f42ecf7ac5aaf9eac849e5741288b2e61a7074726ef00 -->

```csharp
InnoEditor.Rendering.Shaders.ShaderIrOperation.TextureSample = 14
```

Samples a floating-point texture using implicit fragment derivatives.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Intermediate/ShaderIrBlock.cs#L98).

## `TextureSampleLevel`

<a id="api-d9da5adb1ce9057c"></a>
<!-- api: F:InnoEditor.Rendering.Shaders.ShaderIrOperation.TextureSampleLevel 214b9dfca64a7e20c43b8a97635703fef1b9f5e892690255c1a01f495bd57b7c -->

```csharp
InnoEditor.Rendering.Shaders.ShaderIrOperation.TextureSampleLevel = 15
```

Samples a floating-point texture at an explicit mip level.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Intermediate/ShaderIrBlock.cs#L102).
