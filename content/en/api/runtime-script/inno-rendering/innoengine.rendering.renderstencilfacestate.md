---
title: "RenderStencilFaceState"
description: "Reference for RenderStencilFaceState in Inno.Rendering."
uid: api.inno.rendering.runtime-script.3be0704c09a02c4f
kind: api
owners:
  - Inno.Rendering
apiSurface: runtime-script
contracts:
  - project.inno-rendering
  - manual.scripting.use-script-api
---
# `RenderStencilFaceState`

This reference describes `RenderStencilFaceState` in `Inno.Rendering`. Read the [shared contract](../../projects/inno-rendering.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `System.ValueType`.

**Direct interfaces:** `System.IEquatable<InnoEngine.Rendering.RenderStencilFaceState>`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-3b143b5dbb57f3e3) | Method |
| [`Equals`](#api-4964a725816a7d5c) | Method |
| [`Equals`](#api-340ca9450643888b) | Method |
| [`GetHashCode`](#api-25b9e25459f91f06) | Method |
| [`op_Equality`](#api-7031d105c77a94e1) | Method |
| [`op_Inequality`](#api-20f5c438187a337c) | Method |
| [`ToString`](#api-7a797b00b3573730) | Method |
| [`compare`](#api-33102166b50d052c) | Property |
| [`depthFail`](#api-abb37d1d3c1abb3c) | Property |
| [`fail`](#api-d6ce54afad4841df) | Property |
| [`pass`](#api-96f1fc23e7f14576) | Property |

## Type declaration

<a id="api-3be0704c09a02c4f"></a>
<!-- api: T:InnoEngine.Rendering.RenderStencilFaceState 39a888e481738c63cdaa9bb87ef1b5d10393846eca894d7a55530a9b087254b3 -->

```csharp
public readonly struct InnoEngine.Rendering.RenderStencilFaceState : System.IEquatable<InnoEngine.Rendering.RenderStencilFaceState>
```

Describes stencil behavior for one triangle face orientation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderStencilState.cs#L88).

## `#ctor`

<a id="api-3b143b5dbb57f3e3"></a>
<!-- api: M:InnoEngine.Rendering.RenderStencilFaceState.#ctor(InnoEngine.Rendering.RenderStencilCompare,InnoEngine.Rendering.RenderStencilOperation,InnoEngine.Rendering.RenderStencilOperation,InnoEngine.Rendering.RenderStencilOperation) 034683b19da445a9c0af70ef82dd541fe9e894ed9a97af3b8a37f2e1fc57c5c7 -->

```csharp
public InnoEngine.Rendering.RenderStencilFaceState.RenderStencilFaceState(InnoEngine.Rendering.RenderStencilCompare compare, InnoEngine.Rendering.RenderStencilOperation fail, InnoEngine.Rendering.RenderStencilOperation depthFail, InnoEngine.Rendering.RenderStencilOperation pass)
```

Creates one face stencil state.

**Parameter `compare`:** Stencil comparison.

**Parameter `fail`:** Operation after stencil comparison failure.

**Parameter `depthFail`:** Operation after stencil success and depth failure.

**Parameter `pass`:** Operation after stencil and depth success.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderStencilState.cs#L105).

## `Equals`

<a id="api-4964a725816a7d5c"></a>
<!-- api: M:InnoEngine.Rendering.RenderStencilFaceState.Equals(InnoEngine.Rendering.RenderStencilFaceState) 994346ce6ac663479010d43f11e5c8d7ea55e4fe09128c5285ce02bc01ce6cb4 -->

```csharp
public bool InnoEngine.Rendering.RenderStencilFaceState.Equals(InnoEngine.Rendering.RenderStencilFaceState other)
```

Indicates whether the current object is equal to another object of the same type.

**Parameter `other`:** An object to compare with this object.

**Returns:** `true` if the current object is equal to the `other` parameter; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderStencilState.cs#L88).

## `Equals`

<a id="api-340ca9450643888b"></a>
<!-- api: M:InnoEngine.Rendering.RenderStencilFaceState.Equals(System.Object) 80b14a61f3b05b2dae7985831314eda570257ee3e52d239dcdbe6d949e4c72fa -->

```csharp
public override bool InnoEngine.Rendering.RenderStencilFaceState.Equals(object obj)
```

Indicates whether this instance and a specified object are equal.

**Parameter `obj`:** The object to compare with the current instance.

**Returns:** `true` if `obj` and this instance are the same type and represent the same value; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderStencilState.cs#L88).

## `GetHashCode`

<a id="api-25b9e25459f91f06"></a>
<!-- api: M:InnoEngine.Rendering.RenderStencilFaceState.GetHashCode 5a9c92ed9277667ab01667445b22499407799d85062eda16319e051e458fa763 -->

```csharp
public override int InnoEngine.Rendering.RenderStencilFaceState.GetHashCode()
```

Returns the hash code for this instance.

**Returns:** A 32-bit signed integer that is the hash code for this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderStencilState.cs#L88).

## `op_Equality`

<a id="api-7031d105c77a94e1"></a>
<!-- api: M:InnoEngine.Rendering.RenderStencilFaceState.op_Equality(InnoEngine.Rendering.RenderStencilFaceState,InnoEngine.Rendering.RenderStencilFaceState) 9b33c0dc71fcbb29a7726001836ee7d48866e0d3aa46902499bc814c3349bf44 -->

```csharp
public static bool InnoEngine.Rendering.RenderStencilFaceState.operator ==(InnoEngine.Rendering.RenderStencilFaceState left, InnoEngine.Rendering.RenderStencilFaceState right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderStencilState.cs#L88).

## `op_Inequality`

<a id="api-20f5c438187a337c"></a>
<!-- api: M:InnoEngine.Rendering.RenderStencilFaceState.op_Inequality(InnoEngine.Rendering.RenderStencilFaceState,InnoEngine.Rendering.RenderStencilFaceState) 0c08dfa07beb2b7fec28794513d97546f021bc7f70643eea3329ec5d316a0cc5 -->

```csharp
public static bool InnoEngine.Rendering.RenderStencilFaceState.operator !=(InnoEngine.Rendering.RenderStencilFaceState left, InnoEngine.Rendering.RenderStencilFaceState right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderStencilState.cs#L88).

## `ToString`

<a id="api-7a797b00b3573730"></a>
<!-- api: M:InnoEngine.Rendering.RenderStencilFaceState.ToString 40386dbdd54da19b1bded8ace96758097b39a73dcb916f5bdc9ea74f95364a5c -->

```csharp
public override string InnoEngine.Rendering.RenderStencilFaceState.ToString()
```

Returns the fully qualified type name of this instance.

**Returns:** The fully qualified type name.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderStencilState.cs#L88).

## `compare`

<a id="api-33102166b50d052c"></a>
<!-- api: P:InnoEngine.Rendering.RenderStencilFaceState.compare 49b75022af5d9d5990ed326165ebfec72ec1c4b97636e80d98614df48c47df8b -->

```csharp
public InnoEngine.Rendering.RenderStencilCompare InnoEngine.Rendering.RenderStencilFaceState.compare { get; }
```

Gets stencil comparison.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderStencilState.cs#L120).

## `depthFail`

<a id="api-abb37d1d3c1abb3c"></a>
<!-- api: P:InnoEngine.Rendering.RenderStencilFaceState.depthFail fe45ca2733975a4483590c3c9fb5dc02b76c6dbedee3e0a16c4a1ac2e361bfcf -->

```csharp
public InnoEngine.Rendering.RenderStencilOperation InnoEngine.Rendering.RenderStencilFaceState.depthFail { get; }
```

Gets the depth-failure operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderStencilState.cs#L130).

## `fail`

<a id="api-d6ce54afad4841df"></a>
<!-- api: P:InnoEngine.Rendering.RenderStencilFaceState.fail 013713cff41005303ee7fcd6004db3a2b4a59235f57d60b1d6df84f47fa95900 -->

```csharp
public InnoEngine.Rendering.RenderStencilOperation InnoEngine.Rendering.RenderStencilFaceState.fail { get; }
```

Gets the stencil-failure operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderStencilState.cs#L125).

## `pass`

<a id="api-96f1fc23e7f14576"></a>
<!-- api: P:InnoEngine.Rendering.RenderStencilFaceState.pass 8e3ed24a0a3d7468f88d54ac1ca66cdbc078d2dc7714b55206453347a792f325 -->

```csharp
public InnoEngine.Rendering.RenderStencilOperation InnoEngine.Rendering.RenderStencilFaceState.pass { get; }
```

Gets the complete-pass operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderStencilState.cs#L135).
