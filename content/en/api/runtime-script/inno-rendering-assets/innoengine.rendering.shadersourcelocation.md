---
title: "ShaderSourceLocation"
description: "Reference for ShaderSourceLocation in Inno.Rendering.Assets."
uid: api.inno.rendering.assets.runtime-script.36cd94167dced9bb
kind: api
owners:
  - Inno.Rendering.Assets
apiSurface: runtime-script
contracts:
  - project.inno-rendering-assets
  - manual.scripting.use-script-api
---
# `ShaderSourceLocation`

This reference describes `ShaderSourceLocation` in `Inno.Rendering.Assets`. Read the [shared contract](../../projects/inno-rendering-assets.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `System.ValueType`.

**Direct interfaces:** `System.IEquatable<InnoEngine.Rendering.ShaderSourceLocation>`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-33c7bb33f4d52c8d) | Method |
| [`Equals`](#api-53679d292c6668db) | Method |
| [`Equals`](#api-b04aaac2b3a2fa1f) | Method |
| [`GetHashCode`](#api-49bc084c73424109) | Method |
| [`op_Equality`](#api-19b0cbddd35367c0) | Method |
| [`op_Inequality`](#api-8c51463f0321c7d3) | Method |
| [`ToString`](#api-415069e0e9caf793) | Method |
| [`assetPath`](#api-f6642f9df0c0ef32) | Property |
| [`column`](#api-91a12f8e4338627f) | Property |
| [`line`](#api-14420bf4cfd63675) | Property |
| [`passName`](#api-33102538941ab55c) | Property |
| [`stage`](#api-966de05e40f81353) | Property |

## Type declaration

<a id="api-36cd94167dced9bb"></a>
<!-- api: T:InnoEngine.Rendering.ShaderSourceLocation 1fa4908efa0d2165240c6c0ddb762469b4cce611d8c77a95e620438134b71c0b -->

```csharp
public readonly struct InnoEngine.Rendering.ShaderSourceLocation : System.IEquatable<InnoEngine.Rendering.ShaderSourceLocation>
```

Maps a shader diagnostic back to an asset, pass, stage, and source position.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Assets/Shaders/ShaderSourceLocation.cs#L13).

## `#ctor`

<a id="api-33c7bb33f4d52c8d"></a>
<!-- api: M:InnoEngine.Rendering.ShaderSourceLocation.#ctor(System.String,System.String,InnoEngine.Rendering.ShaderStage,System.Int32,System.Int32) 7b936816839041cbe437b6603064725ee78d3a8ccbe11be480b7bb093ab8b1ba -->

```csharp
public InnoEngine.Rendering.ShaderSourceLocation.ShaderSourceLocation(string assetPath, string passName, InnoEngine.Rendering.ShaderStage stage, int line = 0, int column = 0)
```

Creates a shader source location.

**Parameter `assetPath`:** Project-relative source asset path.

**Parameter `passName`:** Stable pass name.

**Parameter `stage`:** Shader stage.

**Parameter `line`:** One-based source line, or zero when unavailable.

**Parameter `column`:** One-based source column, or zero when unavailable.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Assets/Shaders/ShaderSourceLocation.cs#L33).

## `Equals`

<a id="api-53679d292c6668db"></a>
<!-- api: M:InnoEngine.Rendering.ShaderSourceLocation.Equals(InnoEngine.Rendering.ShaderSourceLocation) 227673949180f62b190ed67b4bbdda1456745ecc4be89795797a1f4ffcffaa52 -->

```csharp
public bool InnoEngine.Rendering.ShaderSourceLocation.Equals(InnoEngine.Rendering.ShaderSourceLocation other)
```

Indicates whether the current object is equal to another object of the same type.

**Parameter `other`:** An object to compare with this object.

**Returns:** `true` if the current object is equal to the `other` parameter; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Assets/Shaders/ShaderSourceLocation.cs#L13).

## `Equals`

<a id="api-b04aaac2b3a2fa1f"></a>
<!-- api: M:InnoEngine.Rendering.ShaderSourceLocation.Equals(System.Object) 2becb80ccbc63c46507f9563e1f89d95495d0a2b960496aea7b917423ae5fc0f -->

```csharp
public override bool InnoEngine.Rendering.ShaderSourceLocation.Equals(object obj)
```

Indicates whether this instance and a specified object are equal.

**Parameter `obj`:** The object to compare with the current instance.

**Returns:** `true` if `obj` and this instance are the same type and represent the same value; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Assets/Shaders/ShaderSourceLocation.cs#L13).

## `GetHashCode`

<a id="api-49bc084c73424109"></a>
<!-- api: M:InnoEngine.Rendering.ShaderSourceLocation.GetHashCode b947a30de3111bb7c998d8a5ec48f22d474c8dd0a2c0e393612778bc31a3dc08 -->

```csharp
public override int InnoEngine.Rendering.ShaderSourceLocation.GetHashCode()
```

Returns the hash code for this instance.

**Returns:** A 32-bit signed integer that is the hash code for this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Assets/Shaders/ShaderSourceLocation.cs#L13).

## `op_Equality`

<a id="api-19b0cbddd35367c0"></a>
<!-- api: M:InnoEngine.Rendering.ShaderSourceLocation.op_Equality(InnoEngine.Rendering.ShaderSourceLocation,InnoEngine.Rendering.ShaderSourceLocation) b99e9287b3dc6b2e9c40ccb575c5cfccbbfb8054612e93e1265cc75cdf7299d9 -->

```csharp
public static bool InnoEngine.Rendering.ShaderSourceLocation.operator ==(InnoEngine.Rendering.ShaderSourceLocation left, InnoEngine.Rendering.ShaderSourceLocation right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Assets/Shaders/ShaderSourceLocation.cs#L13).

## `op_Inequality`

<a id="api-8c51463f0321c7d3"></a>
<!-- api: M:InnoEngine.Rendering.ShaderSourceLocation.op_Inequality(InnoEngine.Rendering.ShaderSourceLocation,InnoEngine.Rendering.ShaderSourceLocation) 9c6fcf29b6165c1718fd254a1b3138fe21047f16f713dab8c88e77c9542f72f7 -->

```csharp
public static bool InnoEngine.Rendering.ShaderSourceLocation.operator !=(InnoEngine.Rendering.ShaderSourceLocation left, InnoEngine.Rendering.ShaderSourceLocation right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Assets/Shaders/ShaderSourceLocation.cs#L13).

## `ToString`

<a id="api-415069e0e9caf793"></a>
<!-- api: M:InnoEngine.Rendering.ShaderSourceLocation.ToString 6d2058e2cee70cbd27896c1cbb38ea23cf7cf0009827d968312377e8f68267f1 -->

```csharp
public override string InnoEngine.Rendering.ShaderSourceLocation.ToString()
```

Returns the fully qualified type name of this instance.

**Returns:** The fully qualified type name.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Assets/Shaders/ShaderSourceLocation.cs#L13).

## `assetPath`

<a id="api-f6642f9df0c0ef32"></a>
<!-- api: P:InnoEngine.Rendering.ShaderSourceLocation.assetPath 215ba1f702866bff5b857fc045e934a588a0ff643bfe87403e19e5e6db221a5d -->

```csharp
public string InnoEngine.Rendering.ShaderSourceLocation.assetPath { get; }
```

Gets the project-relative source asset path.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Assets/Shaders/ShaderSourceLocation.cs#L54).

## `column`

<a id="api-91a12f8e4338627f"></a>
<!-- api: P:InnoEngine.Rendering.ShaderSourceLocation.column 1213b74c96a7db85af9805d76924190f826704d75a5f4b027288127d21ac25aa -->

```csharp
public int InnoEngine.Rendering.ShaderSourceLocation.column { get; }
```

Gets the one-based column, or zero when unavailable.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Assets/Shaders/ShaderSourceLocation.cs#L74).

## `line`

<a id="api-14420bf4cfd63675"></a>
<!-- api: P:InnoEngine.Rendering.ShaderSourceLocation.line 8ae4544a8168392a3ef5b669a6ca387ec56ecd722c8a0328f46393debe382521 -->

```csharp
public int InnoEngine.Rendering.ShaderSourceLocation.line { get; }
```

Gets the one-based line, or zero when unavailable.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Assets/Shaders/ShaderSourceLocation.cs#L69).

## `passName`

<a id="api-33102538941ab55c"></a>
<!-- api: P:InnoEngine.Rendering.ShaderSourceLocation.passName 69734ac8f367ac6f42e5625d306f1687534119f318867b8e8c29cfeeccd40f0e -->

```csharp
public string InnoEngine.Rendering.ShaderSourceLocation.passName { get; }
```

Gets the stable pass name.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Assets/Shaders/ShaderSourceLocation.cs#L59).

## `stage`

<a id="api-966de05e40f81353"></a>
<!-- api: P:InnoEngine.Rendering.ShaderSourceLocation.stage 22e5f6ac6f34dd9b555ac9c6586f79790861950edb840570cab633b823802609 -->

```csharp
public InnoEngine.Rendering.ShaderStage InnoEngine.Rendering.ShaderSourceLocation.stage { get; }
```

Gets the shader stage.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Assets/Shaders/ShaderSourceLocation.cs#L64).
