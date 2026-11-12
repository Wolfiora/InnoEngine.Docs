---
title: "EditorPreviewHandle"
description: "Reference for EditorPreviewHandle in Inno.Editor.Rendering."
uid: api.inno.editor.rendering.editor-script.d21cafc72c7cfef2
kind: api
owners:
  - Inno.Editor.Rendering
apiSurface: editor-script
contracts:
  - project.inno-editor-rendering
  - manual.scripting.use-script-api
---
# `EditorPreviewHandle`

This reference describes `EditorPreviewHandle` in `Inno.Editor.Rendering`. Read the [shared contract](../../projects/inno-editor-rendering.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `editor-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `System.ValueType`.

**Direct interfaces:** `System.IEquatable<InnoEditor.Rendering.EditorPreviewHandle>`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-a7e855e8995f5451) | Method |
| [`Equals`](#api-1e530748ae3248c2) | Method |
| [`Equals`](#api-ae3079ca323d58a6) | Method |
| [`GetHashCode`](#api-afcdb524e8ea45fd) | Method |
| [`op_Equality`](#api-e6e49fef6771fbfb) | Method |
| [`op_Inequality`](#api-0b7ca8b21e6dd6ef) | Method |
| [`ToString`](#api-97319f64a0adda0a) | Method |
| [`deviceGeneration`](#api-6b84420ecfac0e6a) | Property |
| [`isValid`](#api-3fc77f1788a94385) | Property |
| [`pixelHeight`](#api-e4861afb8643d511) | Property |
| [`pixelWidth`](#api-8bad14f9d845a03a) | Property |
| [`value`](#api-f4238acb6af3def5) | Property |

## Type declaration

<a id="api-d21cafc72c7cfef2"></a>
<!-- api: T:InnoEditor.Rendering.EditorPreviewHandle 2670e888664272ba0a8f527d38ff7c8438a2ba1dc318b2c70f39b6474663d483 -->

```csharp
public readonly struct InnoEditor.Rendering.EditorPreviewHandle : System.IEquatable<InnoEditor.Rendering.EditorPreviewHandle>
```

Identifies one preview texture owned by a specific rendering-device generation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Rendering/EditorPreviewService.cs#L11).

## `#ctor`

<a id="api-a7e855e8995f5451"></a>
<!-- api: M:InnoEditor.Rendering.EditorPreviewHandle.#ctor(System.UInt64,System.UInt32,System.Int32,System.Int32) 856cc80af24a9a6264fe850232c9829330d2aa204c7337e23d7596e1a7450501 -->

```csharp
public InnoEditor.Rendering.EditorPreviewHandle.EditorPreviewHandle(ulong value, uint deviceGeneration, int pixelWidth, int pixelHeight)
```

Creates one generation-scoped preview handle.

**Parameter `value`:** Non-zero preview identity.

**Parameter `deviceGeneration`:** Non-zero rendering-device generation.

**Parameter `pixelWidth`:** Positive source width.

**Parameter `pixelHeight`:** Positive source height.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Rendering/EditorPreviewService.cs#L28).

## `Equals`

<a id="api-1e530748ae3248c2"></a>
<!-- api: M:InnoEditor.Rendering.EditorPreviewHandle.Equals(InnoEditor.Rendering.EditorPreviewHandle) 46adf52baa0d3443a6cee145c946b588ca8e1fcb6e47574eb86fda98e65d669a -->

```csharp
public bool InnoEditor.Rendering.EditorPreviewHandle.Equals(InnoEditor.Rendering.EditorPreviewHandle other)
```

Indicates whether the current object is equal to another object of the same type.

**Parameter `other`:** An object to compare with this object.

**Returns:** `true` if the current object is equal to the `other` parameter; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Rendering/EditorPreviewService.cs#L11).

## `Equals`

<a id="api-ae3079ca323d58a6"></a>
<!-- api: M:InnoEditor.Rendering.EditorPreviewHandle.Equals(System.Object) ee81a3d08878244848d8498da23badb3924e047dec55909d250b8a96f5c38624 -->

```csharp
public override bool InnoEditor.Rendering.EditorPreviewHandle.Equals(object obj)
```

Indicates whether this instance and a specified object are equal.

**Parameter `obj`:** The object to compare with the current instance.

**Returns:** `true` if `obj` and this instance are the same type and represent the same value; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Rendering/EditorPreviewService.cs#L11).

## `GetHashCode`

<a id="api-afcdb524e8ea45fd"></a>
<!-- api: M:InnoEditor.Rendering.EditorPreviewHandle.GetHashCode 7b3f324c1521dafff80830709e13f878d679a3d5b834df32bdb0fbfbd921353b -->

```csharp
public override int InnoEditor.Rendering.EditorPreviewHandle.GetHashCode()
```

Returns the hash code for this instance.

**Returns:** A 32-bit signed integer that is the hash code for this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Rendering/EditorPreviewService.cs#L11).

## `op_Equality`

<a id="api-e6e49fef6771fbfb"></a>
<!-- api: M:InnoEditor.Rendering.EditorPreviewHandle.op_Equality(InnoEditor.Rendering.EditorPreviewHandle,InnoEditor.Rendering.EditorPreviewHandle) 0d95cbfe7a7b2f7c30d8404656a8b1fd9e6dc46fbae5bceefbc2e355db4c9655 -->

```csharp
public static bool InnoEditor.Rendering.EditorPreviewHandle.operator ==(InnoEditor.Rendering.EditorPreviewHandle left, InnoEditor.Rendering.EditorPreviewHandle right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Rendering/EditorPreviewService.cs#L11).

## `op_Inequality`

<a id="api-0b7ca8b21e6dd6ef"></a>
<!-- api: M:InnoEditor.Rendering.EditorPreviewHandle.op_Inequality(InnoEditor.Rendering.EditorPreviewHandle,InnoEditor.Rendering.EditorPreviewHandle) 9a8fa195cff4602919dbd327baae9009f1fbbe6b8caf6a6915e0bd736e774938 -->

```csharp
public static bool InnoEditor.Rendering.EditorPreviewHandle.operator !=(InnoEditor.Rendering.EditorPreviewHandle left, InnoEditor.Rendering.EditorPreviewHandle right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Rendering/EditorPreviewService.cs#L11).

## `ToString`

<a id="api-97319f64a0adda0a"></a>
<!-- api: M:InnoEditor.Rendering.EditorPreviewHandle.ToString 3944ee30d5f2a50fd880556ace66af8ebe36af7ed9988bf6e79eac1eed30ebde -->

```csharp
public override string InnoEditor.Rendering.EditorPreviewHandle.ToString()
```

Returns the fully qualified type name of this instance.

**Returns:** The fully qualified type name.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Rendering/EditorPreviewService.cs#L11).

## `deviceGeneration`

<a id="api-6b84420ecfac0e6a"></a>
<!-- api: P:InnoEditor.Rendering.EditorPreviewHandle.deviceGeneration eda28da74bd7cebe9ad9fe3fb2dc73194ef1be6ad8400f8c6b918e4494ccf687 -->

```csharp
public uint InnoEditor.Rendering.EditorPreviewHandle.deviceGeneration { get; }
```

Gets the rendering-device generation that owns this handle.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Rendering/EditorPreviewService.cs#L52).

## `isValid`

<a id="api-3fc77f1788a94385"></a>
<!-- api: P:InnoEditor.Rendering.EditorPreviewHandle.isValid d152632a90cd5a1a5734c0acb647f5d41a91fb16660f769882bdbf8d8bc45277 -->

```csharp
public bool InnoEditor.Rendering.EditorPreviewHandle.isValid { get; }
```

Gets whether this handle identifies a usable generation-scoped preview.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Rendering/EditorPreviewService.cs#L67).

## `pixelHeight`

<a id="api-e4861afb8643d511"></a>
<!-- api: P:InnoEditor.Rendering.EditorPreviewHandle.pixelHeight 85e8791f8623233887865341ee7e5439f81e642c8bdf907029f35f0d24952cb3 -->

```csharp
public int InnoEditor.Rendering.EditorPreviewHandle.pixelHeight { get; }
```

Gets source height in pixels.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Rendering/EditorPreviewService.cs#L62).

## `pixelWidth`

<a id="api-8bad14f9d845a03a"></a>
<!-- api: P:InnoEditor.Rendering.EditorPreviewHandle.pixelWidth 906d50a7a240c5247583016ff214f2da812675dfec19d0097228ca9ebd0ae689 -->

```csharp
public int InnoEditor.Rendering.EditorPreviewHandle.pixelWidth { get; }
```

Gets source width in pixels.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Rendering/EditorPreviewService.cs#L57).

## `value`

<a id="api-f4238acb6af3def5"></a>
<!-- api: P:InnoEditor.Rendering.EditorPreviewHandle.value f98ccc4fdf3cb38fb74f0863e3895cf1e39c1a5cb3a444919680f92f7c1303a2 -->

```csharp
public ulong InnoEditor.Rendering.EditorPreviewHandle.value { get; }
```

Gets the opaque preview identity.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Rendering/EditorPreviewService.cs#L47).
