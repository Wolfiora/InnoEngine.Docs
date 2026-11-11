---
title: "GeometryVertex"
description: "Reference for GeometryVertex in Inno.Rendering.Assets."
uid: api.inno.rendering.assets.cff4979a11211b91
kind: api
owners:
  - Inno.Rendering.Assets
apiSurface: source-clr
contracts:
  - project.inno-rendering-assets
---
# `GeometryVertex`

This reference describes `GeometryVertex` in `Inno.Rendering.Assets`. Read the [shared contract](../../../projects/inno-rendering-assets.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.ValueType`.

**Direct interfaces:** `System.IEquatable<Inno.Rendering.Assets.GeometryVertex>`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-e09c7e9cf60c984e) | Method |
| [`Equals`](#api-751dbd476e84a1aa) | Method |
| [`Equals`](#api-5547e9d81f3623e5) | Method |
| [`GetHashCode`](#api-49cc6716debdf970) | Method |
| [`op_Equality`](#api-ff710522ec93ad26) | Method |
| [`op_Inequality`](#api-2c838286f79f9864) | Method |
| [`ToString`](#api-d854fe8496703a8f) | Method |
| [`normal`](#api-47850b00d4901b68) | Property |
| [`position`](#api-78efc4ce176c64eb) | Property |
| [`tangent`](#api-c6d95fe98d147446) | Property |
| [`textureCoordinate`](#api-2519cb582e82398d) | Property |

## Type declaration

<a id="api-cff4979a11211b91"></a>
<!-- api: T:Inno.Rendering.Assets.GeometryVertex 81726ba3c4bcce9bac0b711a887f1b0d49a32a0c81238fcbee5f4e525fb6120c -->

```csharp
public readonly record struct Inno.Rendering.Assets.GeometryVertex : System.IEquatable<Inno.Rendering.Assets.GeometryVertex>
```

Stores one normalized vertex shared by all rendering backends.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets/Geometry/GeometryVertex.cs#L13).

## `#ctor`

<a id="api-e09c7e9cf60c984e"></a>
<!-- api: M:Inno.Rendering.Assets.GeometryVertex.#ctor(Inno.Core.Mathematics.Vector3,Inno.Core.Mathematics.Vector3,Inno.Core.Mathematics.Vector4,Inno.Core.Mathematics.Vector2) f8dea7cf96dfd2d008f762d999f44c4b1db212cb6697b79e03b15da736051fdc -->

```csharp
public Inno.Rendering.Assets.GeometryVertex.GeometryVertex(Inno.Core.Mathematics.Vector3 position, Inno.Core.Mathematics.Vector3 normal, Inno.Core.Mathematics.Vector4 tangent, Inno.Core.Mathematics.Vector2 textureCoordinate)
```

Creates a normalized mesh vertex.

**Parameter `position`:** Object-space position.

**Parameter `normal`:** Object-space unit normal.

**Parameter `tangent`:** Object-space tangent and handedness.

**Parameter `textureCoordinate`:** Primary texture coordinate.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets/Geometry/GeometryVertex.cs#L30).

## `Equals`

<a id="api-751dbd476e84a1aa"></a>
<!-- api: M:Inno.Rendering.Assets.GeometryVertex.Equals(Inno.Rendering.Assets.GeometryVertex) ce654fa7abb2558673b497d56f0761747460eff5b85f3cb8345ed6484edc207c -->

```csharp
public bool Inno.Rendering.Assets.GeometryVertex.Equals(Inno.Rendering.Assets.GeometryVertex other)
```

Indicates whether the current object is equal to another object of the same type.

**Parameter `other`:** An object to compare with this object.

**Returns:** `true` if the current object is equal to the `other` parameter; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets/Geometry/GeometryVertex.cs#L13).

## `Equals`

<a id="api-5547e9d81f3623e5"></a>
<!-- api: M:Inno.Rendering.Assets.GeometryVertex.Equals(System.Object) 0930cf55cd701ff08c4fb6510aa93d93a1b055ca92e2d23bcb9a5e70eb888323 -->

```csharp
public override bool Inno.Rendering.Assets.GeometryVertex.Equals(object obj)
```

Indicates whether this instance and a specified object are equal.

**Parameter `obj`:** The object to compare with the current instance.

**Returns:** `true` if `obj` and this instance are the same type and represent the same value; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets/Geometry/GeometryVertex.cs#L13).

## `GetHashCode`

<a id="api-49cc6716debdf970"></a>
<!-- api: M:Inno.Rendering.Assets.GeometryVertex.GetHashCode 25602715ff504fb90e896c73d3ebba4b4e8f426c70d8c05579bdfef75d5bc2d7 -->

```csharp
public override int Inno.Rendering.Assets.GeometryVertex.GetHashCode()
```

Returns the hash code for this instance.

**Returns:** A 32-bit signed integer that is the hash code for this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets/Geometry/GeometryVertex.cs#L13).

## `op_Equality`

<a id="api-ff710522ec93ad26"></a>
<!-- api: M:Inno.Rendering.Assets.GeometryVertex.op_Equality(Inno.Rendering.Assets.GeometryVertex,Inno.Rendering.Assets.GeometryVertex) ccebeae5bf196173ccae8a006853584485b30380333b092d904a7ea87d23965b -->

```csharp
public static bool Inno.Rendering.Assets.GeometryVertex.operator ==(Inno.Rendering.Assets.GeometryVertex left, Inno.Rendering.Assets.GeometryVertex right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets/Geometry/GeometryVertex.cs#L13).

## `op_Inequality`

<a id="api-2c838286f79f9864"></a>
<!-- api: M:Inno.Rendering.Assets.GeometryVertex.op_Inequality(Inno.Rendering.Assets.GeometryVertex,Inno.Rendering.Assets.GeometryVertex) afd8e26a5eec1c58bd655d6bf31b0f756308d541a91fd62a18421d632bdd94d6 -->

```csharp
public static bool Inno.Rendering.Assets.GeometryVertex.operator !=(Inno.Rendering.Assets.GeometryVertex left, Inno.Rendering.Assets.GeometryVertex right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets/Geometry/GeometryVertex.cs#L13).

## `ToString`

<a id="api-d854fe8496703a8f"></a>
<!-- api: M:Inno.Rendering.Assets.GeometryVertex.ToString 70ea408c9e8156c59ea00acb928b8afd0ce3bbf8ebca7e4069f80062daa334fc -->

```csharp
public override string Inno.Rendering.Assets.GeometryVertex.ToString()
```

Returns the fully qualified type name of this instance.

**Returns:** The fully qualified type name.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets/Geometry/GeometryVertex.cs#L13).

## `normal`

<a id="api-47850b00d4901b68"></a>
<!-- api: P:Inno.Rendering.Assets.GeometryVertex.normal 4973b5da2767151e59e91d9c392cc8dd51b3041ea11d594e275f63dd6c6154d4 -->

```csharp
public Inno.Core.Mathematics.Vector3 Inno.Rendering.Assets.GeometryVertex.normal { get; }
```

Gets the object-space unit normal.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets/Geometry/GeometryVertex.cs#L50).

## `position`

<a id="api-78efc4ce176c64eb"></a>
<!-- api: P:Inno.Rendering.Assets.GeometryVertex.position 3cbd98dd463bc775c9941030a59a04f985aafdc0f1628236ff876555ea070055 -->

```csharp
public Inno.Core.Mathematics.Vector3 Inno.Rendering.Assets.GeometryVertex.position { get; }
```

Gets the object-space position.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets/Geometry/GeometryVertex.cs#L45).

## `tangent`

<a id="api-c6d95fe98d147446"></a>
<!-- api: P:Inno.Rendering.Assets.GeometryVertex.tangent 48d56993c9c5609871dccf59b7fd94cdb0f8e8c7cfddcdc780db8044c4241cb1 -->

```csharp
public Inno.Core.Mathematics.Vector4 Inno.Rendering.Assets.GeometryVertex.tangent { get; }
```

Gets the object-space tangent and handedness.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets/Geometry/GeometryVertex.cs#L55).

## `textureCoordinate`

<a id="api-2519cb582e82398d"></a>
<!-- api: P:Inno.Rendering.Assets.GeometryVertex.textureCoordinate 7027f74ba2228a40acd351aeb2a1008d9f35f5f5a1977153a109356d9e522c06 -->

```csharp
public Inno.Core.Mathematics.Vector2 Inno.Rendering.Assets.GeometryVertex.textureCoordinate { get; }
```

Gets the primary texture coordinate.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets/Geometry/GeometryVertex.cs#L60).
