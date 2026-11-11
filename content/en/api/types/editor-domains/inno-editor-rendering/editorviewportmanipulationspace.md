---
title: "EditorViewportManipulationSpace"
description: "Reference for EditorViewportManipulationSpace in Inno.Editor.Rendering."
uid: api.inno.editor.rendering.abcc91f914cd6105
kind: api
owners:
  - Inno.Editor.Rendering
apiSurface: source-clr
contracts:
  - project.inno-editor-rendering
---
# `EditorViewportManipulationSpace`

This reference describes `EditorViewportManipulationSpace` in `Inno.Editor.Rendering`. Read the [shared contract](../../../projects/inno-editor-rendering.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.ValueType`.

**Direct interfaces:** `System.IEquatable<Inno.Editor.Rendering.EditorViewportManipulationSpace>`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-744a4cde0efb4323) | Method |
| [`Equals`](#api-e5e4bf7a17a0d99e) | Method |
| [`Equals`](#api-183f651b9801f8e5) | Method |
| [`GetHashCode`](#api-61b5824e2a97c66a) | Method |
| [`op_Equality`](#api-4439d48f5ba73c77) | Method |
| [`op_Inequality`](#api-bdb90db5e2fc7602) | Method |
| [`ToString`](#api-7cda99fd8413a364) | Method |
| [`isOrthographic`](#api-dab5ec0be415633f) | Property |
| [`plane`](#api-bd5414e51bc0c47d) | Property |
| [`projectionMatrix`](#api-9ead87fecce89405) | Property |
| [`viewMatrix`](#api-98e14ecc04305c2c) | Property |

## Type declaration

<a id="api-abcc91f914cd6105"></a>
<!-- api: T:Inno.Editor.Rendering.EditorViewportManipulationSpace 1cee44c5e0b18fcb0fa87264a73e1c49009471a510d8370a8722116a89c2a74d -->

```csharp
public readonly record struct Inno.Editor.Rendering.EditorViewportManipulationSpace : System.IEquatable<Inno.Editor.Rendering.EditorViewportManipulationSpace>
```

Describes the exact backend-neutral view and projection used to draw a viewport so host tools can manipulate
selected scene transforms without knowing the controller's camera model.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Rendering/EditorViewportContributor.cs#L271).

## `#ctor`

<a id="api-744a4cde0efb4323"></a>
<!-- api: M:Inno.Editor.Rendering.EditorViewportManipulationSpace.#ctor(Inno.Core.Mathematics.Matrix,Inno.Core.Mathematics.Matrix,System.Boolean,Inno.Editor.Rendering.EditorViewportManipulationPlane) b3ce66bf5149fcf2b07d91fd34ec3d1816ac421b79ca96ea2b01d58c3ffa2dde -->

```csharp
public Inno.Editor.Rendering.EditorViewportManipulationSpace.EditorViewportManipulationSpace(Inno.Core.Mathematics.Matrix viewMatrix, Inno.Core.Mathematics.Matrix projectionMatrix, bool isOrthographic, Inno.Editor.Rendering.EditorViewportManipulationPlane plane = Inno.Editor.Rendering.EditorViewportManipulationPlane.Spatial)
```

Creates a manipulation space matching one rendered viewport frame.

**Parameter `viewMatrix`:** World-to-view matrix used by the submitted frame.

**Parameter `projectionMatrix`:** View-to-clip matrix used by the submitted frame.

**Parameter `isOrthographic`:** Whether the projection is orthographic; this does not imply planar manipulation.

**Parameter `plane`:** The contributor-selected transform handle orientation, independent of projection.

**Throws `System.ArgumentOutOfRangeException`:** The plane is not one of the defined neutral manipulation orientations.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Rendering/EditorViewportContributor.cs#L291).

## `Equals`

<a id="api-e5e4bf7a17a0d99e"></a>
<!-- api: M:Inno.Editor.Rendering.EditorViewportManipulationSpace.Equals(Inno.Editor.Rendering.EditorViewportManipulationSpace) b133879d9405a1342e3e9414edc47f18c29547170703456c0b13aba081c7bf58 -->

```csharp
public bool Inno.Editor.Rendering.EditorViewportManipulationSpace.Equals(Inno.Editor.Rendering.EditorViewportManipulationSpace other)
```

Indicates whether the current object is equal to another object of the same type.

**Parameter `other`:** An object to compare with this object.

**Returns:** `true` if the current object is equal to the `other` parameter; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Rendering/EditorViewportContributor.cs#L271).

## `Equals`

<a id="api-183f651b9801f8e5"></a>
<!-- api: M:Inno.Editor.Rendering.EditorViewportManipulationSpace.Equals(System.Object) 4f6dbd0d1d20deb39299c20c0f174fe29b26e57826422873552be10e1148bf62 -->

```csharp
public override bool Inno.Editor.Rendering.EditorViewportManipulationSpace.Equals(object obj)
```

Indicates whether this instance and a specified object are equal.

**Parameter `obj`:** The object to compare with the current instance.

**Returns:** `true` if `obj` and this instance are the same type and represent the same value; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Rendering/EditorViewportContributor.cs#L271).

## `GetHashCode`

<a id="api-61b5824e2a97c66a"></a>
<!-- api: M:Inno.Editor.Rendering.EditorViewportManipulationSpace.GetHashCode 6a160e05b2120a0c59a3ecedf9df896eca7100be51379479cc2e3f4e4fa430e3 -->

```csharp
public override int Inno.Editor.Rendering.EditorViewportManipulationSpace.GetHashCode()
```

Returns the hash code for this instance.

**Returns:** A 32-bit signed integer that is the hash code for this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Rendering/EditorViewportContributor.cs#L271).

## `op_Equality`

<a id="api-4439d48f5ba73c77"></a>
<!-- api: M:Inno.Editor.Rendering.EditorViewportManipulationSpace.op_Equality(Inno.Editor.Rendering.EditorViewportManipulationSpace,Inno.Editor.Rendering.EditorViewportManipulationSpace) 293ecce51152c0a186e3c1ca4733b39a76a0910522c5d323d620eae895f1e574 -->

```csharp
public static bool Inno.Editor.Rendering.EditorViewportManipulationSpace.operator ==(Inno.Editor.Rendering.EditorViewportManipulationSpace left, Inno.Editor.Rendering.EditorViewportManipulationSpace right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Rendering/EditorViewportContributor.cs#L271).

## `op_Inequality`

<a id="api-bdb90db5e2fc7602"></a>
<!-- api: M:Inno.Editor.Rendering.EditorViewportManipulationSpace.op_Inequality(Inno.Editor.Rendering.EditorViewportManipulationSpace,Inno.Editor.Rendering.EditorViewportManipulationSpace) 51bd7cfcf59f878bbb8d7b68a84c3cdc5d741123207479838e49b785b54763d7 -->

```csharp
public static bool Inno.Editor.Rendering.EditorViewportManipulationSpace.operator !=(Inno.Editor.Rendering.EditorViewportManipulationSpace left, Inno.Editor.Rendering.EditorViewportManipulationSpace right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Rendering/EditorViewportContributor.cs#L271).

## `ToString`

<a id="api-7cda99fd8413a364"></a>
<!-- api: M:Inno.Editor.Rendering.EditorViewportManipulationSpace.ToString db1aa37277b54b6e537de367d935adbc95b58c13be80fbea74b1dfa73e546f2c -->

```csharp
public override string Inno.Editor.Rendering.EditorViewportManipulationSpace.ToString()
```

Returns the fully qualified type name of this instance.

**Returns:** The fully qualified type name.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Rendering/EditorViewportContributor.cs#L271).

## `isOrthographic`

<a id="api-dab5ec0be415633f"></a>
<!-- api: P:Inno.Editor.Rendering.EditorViewportManipulationSpace.isOrthographic ab679fe7363674cd35c41c093fb6f9a2a58afd9e18062e1a52cb4bb6b844713b -->

```csharp
public bool Inno.Editor.Rendering.EditorViewportManipulationSpace.isOrthographic { get; }
```

Gets whether the submitted frame used an orthographic projection.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Rendering/EditorViewportContributor.cs#L318).

## `plane`

<a id="api-bd5414e51bc0c47d"></a>
<!-- api: P:Inno.Editor.Rendering.EditorViewportManipulationSpace.plane 4f2c4504947647a34dc3485b3887283a21874cc54a945f146910a64d4e41bdf4 -->

```csharp
public Inno.Editor.Rendering.EditorViewportManipulationPlane Inno.Editor.Rendering.EditorViewportManipulationSpace.plane { get; }
```

Gets the contributor-declared neutral manipulation plane, or Spatial for all axes.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Rendering/EditorViewportContributor.cs#L323).

## `projectionMatrix`

<a id="api-9ead87fecce89405"></a>
<!-- api: P:Inno.Editor.Rendering.EditorViewportManipulationSpace.projectionMatrix 50b7e203b5a2f198b895960df431022158b2046338b222232faa29c066bd2a7c -->

```csharp
public Inno.Core.Mathematics.Matrix Inno.Editor.Rendering.EditorViewportManipulationSpace.projectionMatrix { get; }
```

Gets the view-to-clip matrix used by the submitted frame.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Rendering/EditorViewportContributor.cs#L313).

## `viewMatrix`

<a id="api-98e14ecc04305c2c"></a>
<!-- api: P:Inno.Editor.Rendering.EditorViewportManipulationSpace.viewMatrix 2e5f349562e7eee80c8abf457d2d096338e3b26a09049dbbe7512ba6701d1488 -->

```csharp
public Inno.Core.Mathematics.Matrix Inno.Editor.Rendering.EditorViewportManipulationSpace.viewMatrix { get; }
```

Gets the world-to-view matrix used by the submitted frame.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Rendering/EditorViewportContributor.cs#L308).
