---
title: "GeometrySection"
description: "Reference for GeometrySection in Inno.Rendering.Assets."
uid: api.inno.rendering.assets.f082ad8cdae2f4d7
kind: api
owners:
  - Inno.Rendering.Assets
apiSurface: source-clr
contracts:
  - project.inno-rendering-assets
---
# `GeometrySection`

This reference describes `GeometrySection` in `Inno.Rendering.Assets`. Read the [shared contract](../../../projects/inno-rendering-assets.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.ValueType`.

**Direct interfaces:** `System.IEquatable<Inno.Rendering.Assets.GeometrySection>`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-abb469343c0cbf5f) | Method |
| [`Equals`](#api-c5fba3642479004d) | Method |
| [`Equals`](#api-ba5a186729b79124) | Method |
| [`GetHashCode`](#api-37b198bd8224ce41) | Method |
| [`op_Equality`](#api-f8a3bdf61eef8713) | Method |
| [`op_Inequality`](#api-69581340ae7fefe3) | Method |
| [`ToString`](#api-a048eb5825acc259) | Method |
| [`firstIndex`](#api-aa2ee12a482c17b8) | Property |
| [`indexCount`](#api-45de23e154d1b2ba) | Property |

## Type declaration

<a id="api-f082ad8cdae2f4d7"></a>
<!-- api: T:Inno.Rendering.Assets.GeometrySection 412ee0440a57b67f25c4b9ddd4f17518e165b9c5acf664ef7c5711ee0d3d4014 -->

```csharp
public readonly record struct Inno.Rendering.Assets.GeometrySection : System.IEquatable<Inno.Rendering.Assets.GeometrySection>
```

Identifies a contiguous triangle-index range.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets/Geometry/GeometrySection.cs#L13).

## `#ctor`

<a id="api-abb469343c0cbf5f"></a>
<!-- api: M:Inno.Rendering.Assets.GeometrySection.#ctor(System.Int32,System.Int32) f4d1c0e91cc0cff8f9a5cd5fc76e62a0ad500e1fd89e91096d44ceecddc1aafd -->

```csharp
public Inno.Rendering.Assets.GeometrySection.GeometrySection(int firstIndex, int indexCount)
```

Creates a submesh range.

**Parameter `firstIndex`:** First index in the shared index buffer.

**Parameter `indexCount`:** Number of indices in the range.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets/Geometry/GeometrySection.cs#L24).

## `Equals`

<a id="api-c5fba3642479004d"></a>
<!-- api: M:Inno.Rendering.Assets.GeometrySection.Equals(Inno.Rendering.Assets.GeometrySection) 1c5d7b6ccbe50622630ec86952ed554d230da7709b490da72b5339da57fcee74 -->

```csharp
public bool Inno.Rendering.Assets.GeometrySection.Equals(Inno.Rendering.Assets.GeometrySection other)
```

Indicates whether the current object is equal to another object of the same type.

**Parameter `other`:** An object to compare with this object.

**Returns:** `true` if the current object is equal to the `other` parameter; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets/Geometry/GeometrySection.cs#L13).

## `Equals`

<a id="api-ba5a186729b79124"></a>
<!-- api: M:Inno.Rendering.Assets.GeometrySection.Equals(System.Object) ef1ac11acd825d50aef221cb13af4a9cefb6c6189f3a6a0def99564def02dab5 -->

```csharp
public override bool Inno.Rendering.Assets.GeometrySection.Equals(object obj)
```

Indicates whether this instance and a specified object are equal.

**Parameter `obj`:** The object to compare with the current instance.

**Returns:** `true` if `obj` and this instance are the same type and represent the same value; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets/Geometry/GeometrySection.cs#L13).

## `GetHashCode`

<a id="api-37b198bd8224ce41"></a>
<!-- api: M:Inno.Rendering.Assets.GeometrySection.GetHashCode bb6ac6f61f7c3ff58b0b5df8ba4962c4add26784faa5abf62b52a0f991506f6b -->

```csharp
public override int Inno.Rendering.Assets.GeometrySection.GetHashCode()
```

Returns the hash code for this instance.

**Returns:** A 32-bit signed integer that is the hash code for this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets/Geometry/GeometrySection.cs#L13).

## `op_Equality`

<a id="api-f8a3bdf61eef8713"></a>
<!-- api: M:Inno.Rendering.Assets.GeometrySection.op_Equality(Inno.Rendering.Assets.GeometrySection,Inno.Rendering.Assets.GeometrySection) 6b31317b4705ab69b68a6113d7a607045cd2554464431c2f08bd6245927444b0 -->

```csharp
public static bool Inno.Rendering.Assets.GeometrySection.operator ==(Inno.Rendering.Assets.GeometrySection left, Inno.Rendering.Assets.GeometrySection right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets/Geometry/GeometrySection.cs#L13).

## `op_Inequality`

<a id="api-69581340ae7fefe3"></a>
<!-- api: M:Inno.Rendering.Assets.GeometrySection.op_Inequality(Inno.Rendering.Assets.GeometrySection,Inno.Rendering.Assets.GeometrySection) 5411337fcf9589abcce252ed4b7d8bc74e8626dfae9384ebe8a48b2089705bee -->

```csharp
public static bool Inno.Rendering.Assets.GeometrySection.operator !=(Inno.Rendering.Assets.GeometrySection left, Inno.Rendering.Assets.GeometrySection right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets/Geometry/GeometrySection.cs#L13).

## `ToString`

<a id="api-a048eb5825acc259"></a>
<!-- api: M:Inno.Rendering.Assets.GeometrySection.ToString 211b214ea29e042f7bf53e4fb69a09145b4dd763d3e68c655f3dc30d3570b3f9 -->

```csharp
public override string Inno.Rendering.Assets.GeometrySection.ToString()
```

Returns the fully qualified type name of this instance.

**Returns:** The fully qualified type name.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets/Geometry/GeometrySection.cs#L13).

## `firstIndex`

<a id="api-aa2ee12a482c17b8"></a>
<!-- api: P:Inno.Rendering.Assets.GeometrySection.firstIndex 1a9557c71ba1b8f86ccd407e3fbb996e06bcaa017f4f7c0d9d34f61d6e9f2904 -->

```csharp
public int Inno.Rendering.Assets.GeometrySection.firstIndex { get; }
```

Gets the first index in the shared index buffer.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets/Geometry/GeometrySection.cs#L37).

## `indexCount`

<a id="api-45de23e154d1b2ba"></a>
<!-- api: P:Inno.Rendering.Assets.GeometrySection.indexCount bfa8af88c4bf6df08d379a34a415c8a20a8e0268e827952a96a4e73304738909 -->

```csharp
public int Inno.Rendering.Assets.GeometrySection.indexCount { get; }
```

Gets the number of indices in the range.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets/Geometry/GeometrySection.cs#L42).
