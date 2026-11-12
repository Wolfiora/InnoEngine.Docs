---
title: "EditorViewportPresentation"
description: "Reference for EditorViewportPresentation in Inno.Editor.Rendering."
uid: api.inno.editor.rendering.editor-script.e14fa05e866dde80
kind: api
owners:
  - Inno.Editor.Rendering
apiSurface: editor-script
contracts:
  - project.inno-editor-rendering
  - manual.scripting.use-script-api
---
# `EditorViewportPresentation`

This reference describes `EditorViewportPresentation` in `Inno.Editor.Rendering`. Read the [shared contract](../../projects/inno-editor-rendering.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `editor-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `System.ValueType`.

**Direct interfaces:** `System.IEquatable<InnoEditor.Rendering.EditorViewportPresentation>`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-e2a6c8a54ebd5c32) | Method |
| [`Equals`](#api-d212aa436550fa92) | Method |
| [`Equals`](#api-a27e3646319ab2e3) | Method |
| [`GetHashCode`](#api-b41bf6dfa1815196) | Method |
| [`op_Equality`](#api-284906cff451b931) | Method |
| [`op_Inequality`](#api-31d3451c05fca96e) | Method |
| [`ToString`](#api-547b252bbb1dbaab) | Method |
| [`backgroundColor`](#api-23c4c8f5d8b213f0) | Property |
| [`pixelDensity`](#api-1b91930e50ded5bd) | Property |

## Type declaration

<a id="api-e14fa05e866dde80"></a>
<!-- api: T:InnoEditor.Rendering.EditorViewportPresentation c2ac17f94b4fd41e74b06549668ae247370d6a11bf5b792fde85867e77d13703 -->

```csharp
public readonly struct InnoEditor.Rendering.EditorViewportPresentation : System.IEquatable<InnoEditor.Rendering.EditorViewportPresentation>
```

Describes host-selected presentation preferences without prescribing rendering behavior.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Rendering/EditorViewportContributor.cs#L209).

## `#ctor`

<a id="api-e2a6c8a54ebd5c32"></a>
<!-- api: M:InnoEditor.Rendering.EditorViewportPresentation.#ctor(InnoEngine.Mathematics.Color,System.Single) b01966d53d06acb0e4e96d2b0f1882eca3da4c956684f40f9684317086fba5e4 -->

```csharp
public InnoEditor.Rendering.EditorViewportPresentation.EditorViewportPresentation(InnoEngine.Mathematics.Color backgroundColor, float pixelDensity = 1)
```

Creates presentation preferences for one Editor viewport.

**Parameter `backgroundColor`:** Linear clear color preferred by the host panel.

**Parameter `pixelDensity`:** Physical render pixels per logical presentation unit.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Rendering/EditorViewportContributor.cs#L220).

## `Equals`

<a id="api-d212aa436550fa92"></a>
<!-- api: M:InnoEditor.Rendering.EditorViewportPresentation.Equals(InnoEditor.Rendering.EditorViewportPresentation) 89fd701917ba00e9e0b1b7598edda1bf853a91a85197cb568b9d94730ea182dd -->

```csharp
public bool InnoEditor.Rendering.EditorViewportPresentation.Equals(InnoEditor.Rendering.EditorViewportPresentation other)
```

Indicates whether the current object is equal to another object of the same type.

**Parameter `other`:** An object to compare with this object.

**Returns:** `true` if the current object is equal to the `other` parameter; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Rendering/EditorViewportContributor.cs#L209).

## `Equals`

<a id="api-a27e3646319ab2e3"></a>
<!-- api: M:InnoEditor.Rendering.EditorViewportPresentation.Equals(System.Object) 7b3a8a9202e847edf83f8a7731721e4252cdf556700392c0a8e59729895dbf7c -->

```csharp
public override bool InnoEditor.Rendering.EditorViewportPresentation.Equals(object obj)
```

Indicates whether this instance and a specified object are equal.

**Parameter `obj`:** The object to compare with the current instance.

**Returns:** `true` if `obj` and this instance are the same type and represent the same value; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Rendering/EditorViewportContributor.cs#L209).

## `GetHashCode`

<a id="api-b41bf6dfa1815196"></a>
<!-- api: M:InnoEditor.Rendering.EditorViewportPresentation.GetHashCode 7a23a005e462e5045eb9ba76ba54f278ffac82d30c58711f1383131d8bb8511b -->

```csharp
public override int InnoEditor.Rendering.EditorViewportPresentation.GetHashCode()
```

Returns the hash code for this instance.

**Returns:** A 32-bit signed integer that is the hash code for this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Rendering/EditorViewportContributor.cs#L209).

## `op_Equality`

<a id="api-284906cff451b931"></a>
<!-- api: M:InnoEditor.Rendering.EditorViewportPresentation.op_Equality(InnoEditor.Rendering.EditorViewportPresentation,InnoEditor.Rendering.EditorViewportPresentation) ed2a8448a5ad603bc01f86f306904481742c08b73642c97a154183e68b571465 -->

```csharp
public static bool InnoEditor.Rendering.EditorViewportPresentation.operator ==(InnoEditor.Rendering.EditorViewportPresentation left, InnoEditor.Rendering.EditorViewportPresentation right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Rendering/EditorViewportContributor.cs#L209).

## `op_Inequality`

<a id="api-31d3451c05fca96e"></a>
<!-- api: M:InnoEditor.Rendering.EditorViewportPresentation.op_Inequality(InnoEditor.Rendering.EditorViewportPresentation,InnoEditor.Rendering.EditorViewportPresentation) 67c84c6dbe0de9a74f08ad97777cdfcca3de99327466704dbc1c57efa2403d3c -->

```csharp
public static bool InnoEditor.Rendering.EditorViewportPresentation.operator !=(InnoEditor.Rendering.EditorViewportPresentation left, InnoEditor.Rendering.EditorViewportPresentation right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Rendering/EditorViewportContributor.cs#L209).

## `ToString`

<a id="api-547b252bbb1dbaab"></a>
<!-- api: M:InnoEditor.Rendering.EditorViewportPresentation.ToString f0fd0a2c6902e9d4952efdbe178b747c856f93f7de116bada9c8595606d8eb69 -->

```csharp
public override string InnoEditor.Rendering.EditorViewportPresentation.ToString()
```

Returns the fully qualified type name of this instance.

**Returns:** The fully qualified type name.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Rendering/EditorViewportContributor.cs#L209).

## `backgroundColor`

<a id="api-23c4c8f5d8b213f0"></a>
<!-- api: P:InnoEditor.Rendering.EditorViewportPresentation.backgroundColor c54bf0972a1f16487f53ffc326eb49c4568793c53ce0580f8943d837a5211eb4 -->

```csharp
public InnoEngine.Mathematics.Color InnoEditor.Rendering.EditorViewportPresentation.backgroundColor { get; }
```

Gets the linear clear color preferred by the host panel.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Rendering/EditorViewportContributor.cs#L233).

## `pixelDensity`

<a id="api-1b91930e50ded5bd"></a>
<!-- api: P:InnoEditor.Rendering.EditorViewportPresentation.pixelDensity bc409d6e91845c62524c4706aefdc4da52cc14162794aa907f566601d32a8e05 -->

```csharp
public float InnoEditor.Rendering.EditorViewportPresentation.pixelDensity { get; }
```

Gets physical render pixels per logical presentation unit.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Rendering/EditorViewportContributor.cs#L238).
