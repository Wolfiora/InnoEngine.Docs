---
title: "EditorViewportKindId"
description: "Reference for EditorViewportKindId in Inno.Editor.Rendering."
uid: api.inno.editor.rendering.editor-script.c0e51417846d0e75
kind: api
owners:
  - Inno.Editor.Rendering
apiSurface: editor-script
contracts:
  - project.inno-editor-rendering
  - manual.scripting.use-script-api
---
# `EditorViewportKindId`

This reference describes `EditorViewportKindId` in `Inno.Editor.Rendering`. Read the [shared contract](../../projects/inno-editor-rendering.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `editor-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `System.ValueType`.

**Direct interfaces:** `System.IEquatable<InnoEditor.Rendering.EditorViewportKindId>`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-a8d3437f5d50e50e) | Method |
| [`Equals`](#api-0e7540c1af7aeef2) | Method |
| [`Equals`](#api-745981fb55b6331d) | Method |
| [`GetHashCode`](#api-7b4ec3b662df41eb) | Method |
| [`op_Equality`](#api-1cc290758410e5e0) | Method |
| [`op_Inequality`](#api-04ff37353796dfc5) | Method |
| [`ToString`](#api-ea30c0a6354a4495) | Method |
| [`isValid`](#api-5bfb11d904e7586b) | Property |
| [`value`](#api-6ccbe4a1ccb56fd5) | Property |

## Type declaration

<a id="api-c0e51417846d0e75"></a>
<!-- api: T:InnoEditor.Rendering.EditorViewportKindId 088797170295d95c67f03d9c0f45143dc15c060ca6c99bed597a9692bea36398 -->

```csharp
public readonly struct InnoEditor.Rendering.EditorViewportKindId : System.IEquatable<InnoEditor.Rendering.EditorViewportKindId>
```

Identifies one open Editor viewport purpose without prescribing rendering semantics.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Rendering/EditorViewportContributor.cs#L16).

## `#ctor`

<a id="api-a8d3437f5d50e50e"></a>
<!-- api: M:InnoEditor.Rendering.EditorViewportKindId.#ctor(System.String) 47afb56703cade92943e538838d3000b75fd59ce53848fd1557d3525277e8f1d -->

```csharp
public InnoEditor.Rendering.EditorViewportKindId.EditorViewportKindId(string value)
```

Creates a stable viewport purpose identifier.

**Parameter `value`:** Globally stable viewport purpose.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Rendering/EditorViewportContributor.cs#L24).

## `Equals`

<a id="api-0e7540c1af7aeef2"></a>
<!-- api: M:InnoEditor.Rendering.EditorViewportKindId.Equals(InnoEditor.Rendering.EditorViewportKindId) 3ab432fc5e82403890bea6a91abdd438d1ac3b3c1f195c10cd3318e64d97dcba -->

```csharp
public bool InnoEditor.Rendering.EditorViewportKindId.Equals(InnoEditor.Rendering.EditorViewportKindId other)
```

Indicates whether the current object is equal to another object of the same type.

**Parameter `other`:** An object to compare with this object.

**Returns:** `true` if the current object is equal to the `other` parameter; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Rendering/EditorViewportContributor.cs#L16).

## `Equals`

<a id="api-745981fb55b6331d"></a>
<!-- api: M:InnoEditor.Rendering.EditorViewportKindId.Equals(System.Object) dcccfa5327927cc3da29ac7c9e1555d1ac5ad16a6539c705b32e14bcc8b3bfec -->

```csharp
public override bool InnoEditor.Rendering.EditorViewportKindId.Equals(object obj)
```

Indicates whether this instance and a specified object are equal.

**Parameter `obj`:** The object to compare with the current instance.

**Returns:** `true` if `obj` and this instance are the same type and represent the same value; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Rendering/EditorViewportContributor.cs#L16).

## `GetHashCode`

<a id="api-7b4ec3b662df41eb"></a>
<!-- api: M:InnoEditor.Rendering.EditorViewportKindId.GetHashCode aeb9d59c95771070284209ff5f978d5b5d252426962723068b43de7ccb6889b9 -->

```csharp
public override int InnoEditor.Rendering.EditorViewportKindId.GetHashCode()
```

Returns the hash code for this instance.

**Returns:** A 32-bit signed integer that is the hash code for this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Rendering/EditorViewportContributor.cs#L16).

## `op_Equality`

<a id="api-1cc290758410e5e0"></a>
<!-- api: M:InnoEditor.Rendering.EditorViewportKindId.op_Equality(InnoEditor.Rendering.EditorViewportKindId,InnoEditor.Rendering.EditorViewportKindId) 020cc19a71fbdba5f6f4ee6c11491e83e020b93185c04cc1b5a267e5c46280d2 -->

```csharp
public static bool InnoEditor.Rendering.EditorViewportKindId.operator ==(InnoEditor.Rendering.EditorViewportKindId left, InnoEditor.Rendering.EditorViewportKindId right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Rendering/EditorViewportContributor.cs#L16).

## `op_Inequality`

<a id="api-04ff37353796dfc5"></a>
<!-- api: M:InnoEditor.Rendering.EditorViewportKindId.op_Inequality(InnoEditor.Rendering.EditorViewportKindId,InnoEditor.Rendering.EditorViewportKindId) 9aa7cbb5a13bc2c9d4e6b234629f3ffa525d65f9e327f0d5dabda8d054ccec4b -->

```csharp
public static bool InnoEditor.Rendering.EditorViewportKindId.operator !=(InnoEditor.Rendering.EditorViewportKindId left, InnoEditor.Rendering.EditorViewportKindId right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Rendering/EditorViewportContributor.cs#L16).

## `ToString`

<a id="api-ea30c0a6354a4495"></a>
<!-- api: M:InnoEditor.Rendering.EditorViewportKindId.ToString b0eaace390f7c30cadd76bfb4c9d870cd4d9a54d647e14453eaf205811b80451 -->

```csharp
public override string InnoEditor.Rendering.EditorViewportKindId.ToString()
```

Formats this value as a human-readable representation.

**Returns:** The human-readable representation of this value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Rendering/EditorViewportContributor.cs#L46).

## `isValid`

<a id="api-5bfb11d904e7586b"></a>
<!-- api: P:InnoEditor.Rendering.EditorViewportKindId.isValid 34b20494a00f47f575ecdd53c80ea1a23d0d3b1d8eae6b81af17dbb195b811a0 -->

```csharp
public bool InnoEditor.Rendering.EditorViewportKindId.isValid { get; }
```

Gets whether this identifier is usable.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Rendering/EditorViewportContributor.cs#L38).

## `value`

<a id="api-6ccbe4a1ccb56fd5"></a>
<!-- api: P:InnoEditor.Rendering.EditorViewportKindId.value 3a619a1e9571bc73118b447585f90b7a05c03cc436cd742242bfb741ba0dada2 -->

```csharp
public string InnoEditor.Rendering.EditorViewportKindId.value { get; }
```

Gets the stable viewport purpose.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Rendering/EditorViewportContributor.cs#L33).
