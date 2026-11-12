---
title: "EditorViewportManipulationSpace"
description: "Reference for EditorViewportManipulationSpace in Inno.Editor.Rendering."
uid: api.inno.editor.rendering.editor-script.bca4218cd453c1f4
kind: api
owners:
  - Inno.Editor.Rendering
apiSurface: editor-script
contracts:
  - project.inno-editor-rendering
  - manual.scripting.use-script-api
---
# `EditorViewportManipulationSpace`

This reference describes `EditorViewportManipulationSpace` in `Inno.Editor.Rendering`. Read the [shared contract](../../projects/inno-editor-rendering.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `editor-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `System.ValueType`.

**Direct interfaces:** `System.IEquatable<InnoEditor.Rendering.EditorViewportManipulationSpace>`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-98fd99f9c4eac89b) | Method |
| [`Equals`](#api-4fb549115702b67a) | Method |
| [`Equals`](#api-427b7343d917be04) | Method |
| [`GetHashCode`](#api-6485d635f1e7620d) | Method |
| [`op_Equality`](#api-3940d2437fa22f34) | Method |
| [`op_Inequality`](#api-7d90a80c68e10e77) | Method |
| [`ToString`](#api-9e0bfb0547c7aac5) | Method |
| [`isOrthographic`](#api-402f178defcafc9e) | Property |
| [`plane`](#api-0cb6b3fc801516ee) | Property |
| [`projectionMatrix`](#api-476a33df4d8cf821) | Property |
| [`viewMatrix`](#api-82bcb3e7d5f520b0) | Property |

## Type declaration

<a id="api-bca4218cd453c1f4"></a>
<!-- api: T:InnoEditor.Rendering.EditorViewportManipulationSpace c0bc4f7249d380df47aaa5878c3361631496ed2d6194b751c46c13765138b823 -->

```csharp
public readonly struct InnoEditor.Rendering.EditorViewportManipulationSpace : System.IEquatable<InnoEditor.Rendering.EditorViewportManipulationSpace>
```

Describes the exact backend-neutral view and projection used to draw a viewport so host tools can manipulate
selected scene transforms without knowing the controller's camera model.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Rendering/EditorViewportContributor.cs#L271).

## `#ctor`

<a id="api-98fd99f9c4eac89b"></a>
<!-- api: M:InnoEditor.Rendering.EditorViewportManipulationSpace.#ctor(InnoEngine.Mathematics.Matrix,InnoEngine.Mathematics.Matrix,System.Boolean,InnoEditor.Rendering.EditorViewportManipulationPlane) fb46754ec4173bdb39d40b90434c418fc8f5fd20c29268a04274df5129765761 -->

```csharp
public InnoEditor.Rendering.EditorViewportManipulationSpace.EditorViewportManipulationSpace(InnoEngine.Mathematics.Matrix viewMatrix, InnoEngine.Mathematics.Matrix projectionMatrix, bool isOrthographic, InnoEditor.Rendering.EditorViewportManipulationPlane plane = InnoEditor.Rendering.EditorViewportManipulationPlane.Spatial)
```

Creates a manipulation space matching one rendered viewport frame.

**Parameter `viewMatrix`:** World-to-view matrix used by the submitted frame.

**Parameter `projectionMatrix`:** View-to-clip matrix used by the submitted frame.

**Parameter `isOrthographic`:** Whether the projection is orthographic; this does not imply planar manipulation.

**Parameter `plane`:** The contributor-selected transform handle orientation, independent of projection.

**Throws `System.ArgumentOutOfRangeException`:** The plane is not one of the defined neutral manipulation orientations.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Rendering/EditorViewportContributor.cs#L291).

## `Equals`

<a id="api-4fb549115702b67a"></a>
<!-- api: M:InnoEditor.Rendering.EditorViewportManipulationSpace.Equals(InnoEditor.Rendering.EditorViewportManipulationSpace) fc2bbd24ce496c79b8c252a1ac3bb571be259d232c1c7d53dc97fd384f973c29 -->

```csharp
public bool InnoEditor.Rendering.EditorViewportManipulationSpace.Equals(InnoEditor.Rendering.EditorViewportManipulationSpace other)
```

Indicates whether the current object is equal to another object of the same type.

**Parameter `other`:** An object to compare with this object.

**Returns:** `true` if the current object is equal to the `other` parameter; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Rendering/EditorViewportContributor.cs#L271).

## `Equals`

<a id="api-427b7343d917be04"></a>
<!-- api: M:InnoEditor.Rendering.EditorViewportManipulationSpace.Equals(System.Object) 2694e692c22b188121dc622bfe71c0a650e2af864016cb82973dda7a546166f8 -->

```csharp
public override bool InnoEditor.Rendering.EditorViewportManipulationSpace.Equals(object obj)
```

Indicates whether this instance and a specified object are equal.

**Parameter `obj`:** The object to compare with the current instance.

**Returns:** `true` if `obj` and this instance are the same type and represent the same value; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Rendering/EditorViewportContributor.cs#L271).

## `GetHashCode`

<a id="api-6485d635f1e7620d"></a>
<!-- api: M:InnoEditor.Rendering.EditorViewportManipulationSpace.GetHashCode beecdb3a56bfa6bdf8805b92b41837ef5d19f9a99813e20bb05faa107ff5108c -->

```csharp
public override int InnoEditor.Rendering.EditorViewportManipulationSpace.GetHashCode()
```

Returns the hash code for this instance.

**Returns:** A 32-bit signed integer that is the hash code for this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Rendering/EditorViewportContributor.cs#L271).

## `op_Equality`

<a id="api-3940d2437fa22f34"></a>
<!-- api: M:InnoEditor.Rendering.EditorViewportManipulationSpace.op_Equality(InnoEditor.Rendering.EditorViewportManipulationSpace,InnoEditor.Rendering.EditorViewportManipulationSpace) 4a5a154011089001626926bdf1e07cb25413d0205fa8135c008297d107e86277 -->

```csharp
public static bool InnoEditor.Rendering.EditorViewportManipulationSpace.operator ==(InnoEditor.Rendering.EditorViewportManipulationSpace left, InnoEditor.Rendering.EditorViewportManipulationSpace right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Rendering/EditorViewportContributor.cs#L271).

## `op_Inequality`

<a id="api-7d90a80c68e10e77"></a>
<!-- api: M:InnoEditor.Rendering.EditorViewportManipulationSpace.op_Inequality(InnoEditor.Rendering.EditorViewportManipulationSpace,InnoEditor.Rendering.EditorViewportManipulationSpace) 1b89248974d7536ccd80fdf295d1b9c37c935c01cc96c014ff69ea092ecfb70f -->

```csharp
public static bool InnoEditor.Rendering.EditorViewportManipulationSpace.operator !=(InnoEditor.Rendering.EditorViewportManipulationSpace left, InnoEditor.Rendering.EditorViewportManipulationSpace right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Rendering/EditorViewportContributor.cs#L271).

## `ToString`

<a id="api-9e0bfb0547c7aac5"></a>
<!-- api: M:InnoEditor.Rendering.EditorViewportManipulationSpace.ToString 781520564cbd7f8eb4121742b04ff9a3b43c06f83492aaad39f0f35edf0332f2 -->

```csharp
public override string InnoEditor.Rendering.EditorViewportManipulationSpace.ToString()
```

Returns the fully qualified type name of this instance.

**Returns:** The fully qualified type name.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Rendering/EditorViewportContributor.cs#L271).

## `isOrthographic`

<a id="api-402f178defcafc9e"></a>
<!-- api: P:InnoEditor.Rendering.EditorViewportManipulationSpace.isOrthographic 169cd784daf2c8d0479ce0b7a730ef79d5b5e52a67e094014d622d7d485eb0e9 -->

```csharp
public bool InnoEditor.Rendering.EditorViewportManipulationSpace.isOrthographic { get; }
```

Gets whether the submitted frame used an orthographic projection.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Rendering/EditorViewportContributor.cs#L318).

## `plane`

<a id="api-0cb6b3fc801516ee"></a>
<!-- api: P:InnoEditor.Rendering.EditorViewportManipulationSpace.plane a5a460ca73ccc36094ea2c34f4d52e200b1bfadf67ddea3ca74bc4d4cff67485 -->

```csharp
public InnoEditor.Rendering.EditorViewportManipulationPlane InnoEditor.Rendering.EditorViewportManipulationSpace.plane { get; }
```

Gets the contributor-declared neutral manipulation plane, or Spatial for all axes.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Rendering/EditorViewportContributor.cs#L323).

## `projectionMatrix`

<a id="api-476a33df4d8cf821"></a>
<!-- api: P:InnoEditor.Rendering.EditorViewportManipulationSpace.projectionMatrix f8670c5b7d35007d9b2cb89786bd583512226df59ec502e6d60ed6efb3d44253 -->

```csharp
public InnoEngine.Mathematics.Matrix InnoEditor.Rendering.EditorViewportManipulationSpace.projectionMatrix { get; }
```

Gets the view-to-clip matrix used by the submitted frame.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Rendering/EditorViewportContributor.cs#L313).

## `viewMatrix`

<a id="api-82bcb3e7d5f520b0"></a>
<!-- api: P:InnoEditor.Rendering.EditorViewportManipulationSpace.viewMatrix 7dc56b68ac385c76b5f8cbd04e20c10822aafb13f8a1cd7b9257f822c957af8b -->

```csharp
public InnoEngine.Mathematics.Matrix InnoEditor.Rendering.EditorViewportManipulationSpace.viewMatrix { get; }
```

Gets the world-to-view matrix used by the submitted frame.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Rendering/EditorViewportContributor.cs#L308).
