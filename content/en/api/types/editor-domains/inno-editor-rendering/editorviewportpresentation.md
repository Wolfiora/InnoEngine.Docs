---
title: "EditorViewportPresentation"
description: "Reference for EditorViewportPresentation in Inno.Editor.Rendering."
uid: api.inno.editor.rendering.f5c554b3d1203362
kind: api
owners:
  - Inno.Editor.Rendering
apiSurface: source-clr
contracts:
  - project.inno-editor-rendering
---
# `EditorViewportPresentation`

This reference describes `EditorViewportPresentation` in `Inno.Editor.Rendering`. Read the [shared contract](../../../projects/inno-editor-rendering.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.ValueType`.

**Direct interfaces:** `System.IEquatable<Inno.Editor.Rendering.EditorViewportPresentation>`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-6e1cabc9522502df) | Method |
| [`Equals`](#api-add4e3c994568d22) | Method |
| [`Equals`](#api-2ad810d9fc589d28) | Method |
| [`GetHashCode`](#api-f3f63d400def0a8d) | Method |
| [`op_Equality`](#api-87128272ea0ffb74) | Method |
| [`op_Inequality`](#api-7ec37652fcbd4b85) | Method |
| [`ToString`](#api-691b88e3e5f79ba5) | Method |
| [`backgroundColor`](#api-ace22c32db0cb9bb) | Property |
| [`pixelDensity`](#api-47383a292c9aac66) | Property |

## Type declaration

<a id="api-f5c554b3d1203362"></a>
<!-- api: T:Inno.Editor.Rendering.EditorViewportPresentation 7923ce93eeeb5f8060688631385d3387fd1ce42a3f9123b77c3bd98ae67732d2 -->

```csharp
public readonly record struct Inno.Editor.Rendering.EditorViewportPresentation : System.IEquatable<Inno.Editor.Rendering.EditorViewportPresentation>
```

Describes host-selected presentation preferences without prescribing rendering behavior.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Rendering/EditorViewportContributor.cs#L209).

## `#ctor`

<a id="api-6e1cabc9522502df"></a>
<!-- api: M:Inno.Editor.Rendering.EditorViewportPresentation.#ctor(Inno.Core.Mathematics.Color,System.Single) 2a5e6e31c80379e8a28a865d381b4584431d293914cca057f01a2a2112a2dfa5 -->

```csharp
public Inno.Editor.Rendering.EditorViewportPresentation.EditorViewportPresentation(Inno.Core.Mathematics.Color backgroundColor, float pixelDensity = 1)
```

Creates presentation preferences for one Editor viewport.

**Parameter `backgroundColor`:** Linear clear color preferred by the host panel.

**Parameter `pixelDensity`:** Physical render pixels per logical presentation unit.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Rendering/EditorViewportContributor.cs#L220).

## `Equals`

<a id="api-add4e3c994568d22"></a>
<!-- api: M:Inno.Editor.Rendering.EditorViewportPresentation.Equals(Inno.Editor.Rendering.EditorViewportPresentation) 89b63ea3ff4e9d3edd0156e29864d1ac9a21e73989d4dcef08e46f6b12b0c9ea -->

```csharp
public bool Inno.Editor.Rendering.EditorViewportPresentation.Equals(Inno.Editor.Rendering.EditorViewportPresentation other)
```

Indicates whether the current object is equal to another object of the same type.

**Parameter `other`:** An object to compare with this object.

**Returns:** `true` if the current object is equal to the `other` parameter; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Rendering/EditorViewportContributor.cs#L209).

## `Equals`

<a id="api-2ad810d9fc589d28"></a>
<!-- api: M:Inno.Editor.Rendering.EditorViewportPresentation.Equals(System.Object) 61972409aa3bb402cec9e5ece283a60c57d7b672200d5925d4f612c198762c1f -->

```csharp
public override bool Inno.Editor.Rendering.EditorViewportPresentation.Equals(object obj)
```

Indicates whether this instance and a specified object are equal.

**Parameter `obj`:** The object to compare with the current instance.

**Returns:** `true` if `obj` and this instance are the same type and represent the same value; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Rendering/EditorViewportContributor.cs#L209).

## `GetHashCode`

<a id="api-f3f63d400def0a8d"></a>
<!-- api: M:Inno.Editor.Rendering.EditorViewportPresentation.GetHashCode cd63d9c4c55ced50f5724a2183cd8a99d628ca121f088fa34095880dbc1b009a -->

```csharp
public override int Inno.Editor.Rendering.EditorViewportPresentation.GetHashCode()
```

Returns the hash code for this instance.

**Returns:** A 32-bit signed integer that is the hash code for this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Rendering/EditorViewportContributor.cs#L209).

## `op_Equality`

<a id="api-87128272ea0ffb74"></a>
<!-- api: M:Inno.Editor.Rendering.EditorViewportPresentation.op_Equality(Inno.Editor.Rendering.EditorViewportPresentation,Inno.Editor.Rendering.EditorViewportPresentation) 3238c6a3df3a2843955133b78a1ade4fb89611e655a11cbe3538090a40cff708 -->

```csharp
public static bool Inno.Editor.Rendering.EditorViewportPresentation.operator ==(Inno.Editor.Rendering.EditorViewportPresentation left, Inno.Editor.Rendering.EditorViewportPresentation right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Rendering/EditorViewportContributor.cs#L209).

## `op_Inequality`

<a id="api-7ec37652fcbd4b85"></a>
<!-- api: M:Inno.Editor.Rendering.EditorViewportPresentation.op_Inequality(Inno.Editor.Rendering.EditorViewportPresentation,Inno.Editor.Rendering.EditorViewportPresentation) 6e5cc72db1ad5db7d5edab16d739ed9ddc4ac2c016694ef401311d416ccced0a -->

```csharp
public static bool Inno.Editor.Rendering.EditorViewportPresentation.operator !=(Inno.Editor.Rendering.EditorViewportPresentation left, Inno.Editor.Rendering.EditorViewportPresentation right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Rendering/EditorViewportContributor.cs#L209).

## `ToString`

<a id="api-691b88e3e5f79ba5"></a>
<!-- api: M:Inno.Editor.Rendering.EditorViewportPresentation.ToString 0b3045e66b3743f2ce8e6475e4945e61fb7abec1fafcfd1ed253d7bf978cc6af -->

```csharp
public override string Inno.Editor.Rendering.EditorViewportPresentation.ToString()
```

Returns the fully qualified type name of this instance.

**Returns:** The fully qualified type name.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Rendering/EditorViewportContributor.cs#L209).

## `backgroundColor`

<a id="api-ace22c32db0cb9bb"></a>
<!-- api: P:Inno.Editor.Rendering.EditorViewportPresentation.backgroundColor 47b99d67577a613d2110d8cb531b345061f48b6848c7ced8d54799a8f9d94c44 -->

```csharp
public Inno.Core.Mathematics.Color Inno.Editor.Rendering.EditorViewportPresentation.backgroundColor { get; }
```

Gets the linear clear color preferred by the host panel.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Rendering/EditorViewportContributor.cs#L233).

## `pixelDensity`

<a id="api-47383a292c9aac66"></a>
<!-- api: P:Inno.Editor.Rendering.EditorViewportPresentation.pixelDensity 29d69f612a3201a5dda3f19b0b0709da2d120356f572522fc1b1ce541dbe80f1 -->

```csharp
public float Inno.Editor.Rendering.EditorViewportPresentation.pixelDensity { get; }
```

Gets physical render pixels per logical presentation unit.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Rendering/EditorViewportContributor.cs#L238).
