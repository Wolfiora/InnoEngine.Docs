---
title: "ShaderSourcePosition"
description: "Reference for ShaderSourcePosition in Inno.Rendering.Shaders."
uid: api.inno.rendering.shaders.a89fe68fccd0b248
kind: api
owners:
  - Inno.Rendering.Shaders
apiSurface: source-clr
contracts:
  - project.inno-rendering-shaders
---
# `ShaderSourcePosition`

This reference describes `ShaderSourcePosition` in `Inno.Rendering.Shaders`. Read the [shared contract](../../../projects/inno-rendering-shaders.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.ValueType`.

**Direct interfaces:** `System.IEquatable<Inno.Rendering.Shaders.ShaderSourcePosition>`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-b4edbc9f0a46edef) | Method |
| [`Deconstruct`](#api-bd1a1462a643e7f9) | Method |
| [`Equals`](#api-7582e84449ec1a1f) | Method |
| [`Equals`](#api-7d418c303285eec1) | Method |
| [`GetHashCode`](#api-7dbd46465a1b8254) | Method |
| [`op_Equality`](#api-8f1587baf71b6bf3) | Method |
| [`op_Inequality`](#api-49070013b14fae21) | Method |
| [`ToString`](#api-e86d1647614c08cb) | Method |
| [`assetPath`](#api-6a0fa649ba86e5cf) | Property |
| [`column`](#api-7f30623a61d6e5a6) | Property |
| [`line`](#api-c688553b67e5f3c2) | Property |

## Type declaration

<a id="api-a89fe68fccd0b248"></a>
<!-- api: T:Inno.Rendering.Shaders.ShaderSourcePosition 2f9795487dc79002049192791fbab8e187766740e633203f0eba4b8758b75606 -->

```csharp
public readonly record struct Inno.Rendering.Shaders.ShaderSourcePosition : System.IEquatable<Inno.Rendering.Shaders.ShaderSourcePosition>
```

Identifies an original source position, not a generated temporary compiler filename.

**Parameter `assetPath`:** Source path in the current asset mount.

**Parameter `line`:** One-based source line.

**Parameter `column`:** One-based source column.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Sources/IShaderSourceFrontend.cs#L20).

## `#ctor`

<a id="api-b4edbc9f0a46edef"></a>
<!-- api: M:Inno.Rendering.Shaders.ShaderSourcePosition.#ctor(System.String,System.Int32,System.Int32) db7a8e246ab909fcd83aff66997917ad7d85364977bb5a2a55fc16088260869f -->

```csharp
public Inno.Rendering.Shaders.ShaderSourcePosition.ShaderSourcePosition(string assetPath, int line, int column)
```

Identifies an original source position, not a generated temporary compiler filename.

**Parameter `assetPath`:** Source path in the current asset mount.

**Parameter `line`:** One-based source line.

**Parameter `column`:** One-based source column.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Sources/IShaderSourceFrontend.cs#L20).

## `Deconstruct`

<a id="api-bd1a1462a643e7f9"></a>
<!-- api: M:Inno.Rendering.Shaders.ShaderSourcePosition.Deconstruct(System.String@,System.Int32@,System.Int32@) 92b43c73f4e9f2b841334b95fcfebd0d3b26ee3d0beaee62e2f7661d667656fc -->

```csharp
public void Inno.Rendering.Shaders.ShaderSourcePosition.Deconstruct(out string assetPath, out int line, out int column)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Sources/IShaderSourceFrontend.cs#L20).

## `Equals`

<a id="api-7582e84449ec1a1f"></a>
<!-- api: M:Inno.Rendering.Shaders.ShaderSourcePosition.Equals(Inno.Rendering.Shaders.ShaderSourcePosition) c14548b8069f47fc397d09a8971c80cb8b2a5bc27bc7c416079ab9d9ff010d2a -->

```csharp
public bool Inno.Rendering.Shaders.ShaderSourcePosition.Equals(Inno.Rendering.Shaders.ShaderSourcePosition other)
```

Indicates whether the current object is equal to another object of the same type.

**Parameter `other`:** An object to compare with this object.

**Returns:** `true` if the current object is equal to the `other` parameter; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Sources/IShaderSourceFrontend.cs#L20).

## `Equals`

<a id="api-7d418c303285eec1"></a>
<!-- api: M:Inno.Rendering.Shaders.ShaderSourcePosition.Equals(System.Object) e5b221d494d18e05da8925a0bac12de4e4455226bf1b0e45593982dab47b25d0 -->

```csharp
public override bool Inno.Rendering.Shaders.ShaderSourcePosition.Equals(object obj)
```

Indicates whether this instance and a specified object are equal.

**Parameter `obj`:** The object to compare with the current instance.

**Returns:** `true` if `obj` and this instance are the same type and represent the same value; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Sources/IShaderSourceFrontend.cs#L20).

## `GetHashCode`

<a id="api-7dbd46465a1b8254"></a>
<!-- api: M:Inno.Rendering.Shaders.ShaderSourcePosition.GetHashCode 7640032bbf81b9b813e90325374405fc4e245de61748b36e5d5981e5b42d1a31 -->

```csharp
public override int Inno.Rendering.Shaders.ShaderSourcePosition.GetHashCode()
```

Returns the hash code for this instance.

**Returns:** A 32-bit signed integer that is the hash code for this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Sources/IShaderSourceFrontend.cs#L20).

## `op_Equality`

<a id="api-8f1587baf71b6bf3"></a>
<!-- api: M:Inno.Rendering.Shaders.ShaderSourcePosition.op_Equality(Inno.Rendering.Shaders.ShaderSourcePosition,Inno.Rendering.Shaders.ShaderSourcePosition) 71a2180d2b93c2f4948dc93952c9412023f653f99481a0fc363bb04ea7ccd830 -->

```csharp
public static bool Inno.Rendering.Shaders.ShaderSourcePosition.operator ==(Inno.Rendering.Shaders.ShaderSourcePosition left, Inno.Rendering.Shaders.ShaderSourcePosition right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Sources/IShaderSourceFrontend.cs#L20).

## `op_Inequality`

<a id="api-49070013b14fae21"></a>
<!-- api: M:Inno.Rendering.Shaders.ShaderSourcePosition.op_Inequality(Inno.Rendering.Shaders.ShaderSourcePosition,Inno.Rendering.Shaders.ShaderSourcePosition) 4b7111a255988c64d2b53a23ff494d0b8269948b6d2222ec371927c8234a2593 -->

```csharp
public static bool Inno.Rendering.Shaders.ShaderSourcePosition.operator !=(Inno.Rendering.Shaders.ShaderSourcePosition left, Inno.Rendering.Shaders.ShaderSourcePosition right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Sources/IShaderSourceFrontend.cs#L20).

## `ToString`

<a id="api-e86d1647614c08cb"></a>
<!-- api: M:Inno.Rendering.Shaders.ShaderSourcePosition.ToString 5cee25c321d333d9045f89133df70059b299fa232c1524b92d750e1c9b4e817f -->

```csharp
public override string Inno.Rendering.Shaders.ShaderSourcePosition.ToString()
```

Returns the fully qualified type name of this instance.

**Returns:** The fully qualified type name.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Sources/IShaderSourceFrontend.cs#L20).

## `assetPath`

<a id="api-6a0fa649ba86e5cf"></a>
<!-- api: P:Inno.Rendering.Shaders.ShaderSourcePosition.assetPath 025f2c16ab0ac00e884a4325c3d4449c18854c93cbcffd4068bc4f20a7463c28 -->

```csharp
public string Inno.Rendering.Shaders.ShaderSourcePosition.assetPath { get; init; }
```

Source path in the current asset mount.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Sources/IShaderSourceFrontend.cs#L21).

## `column`

<a id="api-7f30623a61d6e5a6"></a>
<!-- api: P:Inno.Rendering.Shaders.ShaderSourcePosition.column 2ce9f6cfeeec4b5867786364c93ff97fadf950ce8a90c23fc974f35c9e69ddb8 -->

```csharp
public int Inno.Rendering.Shaders.ShaderSourcePosition.column { get; init; }
```

One-based source column.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Sources/IShaderSourceFrontend.cs#L23).

## `line`

<a id="api-c688553b67e5f3c2"></a>
<!-- api: P:Inno.Rendering.Shaders.ShaderSourcePosition.line 84c3832bbb23b74597077a54a156af89ce12a26ba87f5387aaae176a4765f09e -->

```csharp
public int Inno.Rendering.Shaders.ShaderSourcePosition.line { get; init; }
```

One-based source line.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Sources/IShaderSourceFrontend.cs#L22).
