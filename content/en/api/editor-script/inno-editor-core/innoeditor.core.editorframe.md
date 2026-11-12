---
title: "EditorFrame"
description: "Reference for EditorFrame in Inno.Editor.Core."
uid: api.inno.editor.core.editor-script.e6206739a08861ad
kind: api
owners:
  - Inno.Editor.Core
apiSurface: editor-script
contracts:
  - api.projects.inno-editor-core#lifecycle-and-failure-contracts
  - manual.scripting.use-script-api
---
# `EditorFrame`

This reference describes `EditorFrame` in `Inno.Editor.Core`. Read the [shared contract](../../projects/inno-editor-core.md#lifecycle-and-failure-contracts) for its ownership, availability and lifecycle boundaries.

**Source context:** `editor-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `System.ValueType`.

**Direct interfaces:** `System.IEquatable<InnoEditor.Core.EditorFrame>`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-beb1460a12420a05) | Method |
| [`Deconstruct`](#api-6aab0df5898bb79a) | Method |
| [`Equals`](#api-4c88e2658f6a2274) | Method |
| [`Equals`](#api-bcddde8253679bf8) | Method |
| [`GetHashCode`](#api-0f36aaf1f5a9acc0) | Method |
| [`op_Equality`](#api-9795a34ad1e7c533) | Method |
| [`op_Inequality`](#api-1db8282ecd1e3383) | Method |
| [`ToString`](#api-4a05c1c16cd94e79) | Method |
| [`deltaTime`](#api-9a200ef3a6c59d41) | Property |
| [`isFocused`](#api-c3c1688ec3f516bf) | Property |
| [`totalTime`](#api-408848274000c1c5) | Property |

## Type declaration

<a id="api-e6206739a08861ad"></a>
<!-- api: T:InnoEditor.Core.EditorFrame 909a9ef8a8bcc818d3efa42ecca93755f68fc6144bd44a89fa69536990968a08 -->

```csharp
public readonly struct InnoEditor.Core.EditorFrame : System.IEquatable<InnoEditor.Core.EditorFrame>
```

Describes one immutable editor frame.

**Parameter `deltaTime`:** The elapsed frame time in seconds.

**Parameter `totalTime`:** The absolute editor runtime in seconds.

**Parameter `isFocused`:** Whether an editor viewport owns application focus.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Core/Runtime/EditorFrame.cs#L15).

## `#ctor`

<a id="api-beb1460a12420a05"></a>
<!-- api: M:InnoEditor.Core.EditorFrame.#ctor(System.Single,System.Single,System.Boolean) 14d1223c0e3207c01880f4c6effbf8f7c83d210e56ea0a8ea64bceae26abc465 -->

```csharp
public InnoEditor.Core.EditorFrame.EditorFrame(float deltaTime, float totalTime, bool isFocused)
```

Describes one immutable editor frame.

**Parameter `deltaTime`:** The elapsed frame time in seconds.

**Parameter `totalTime`:** The absolute editor runtime in seconds.

**Parameter `isFocused`:** Whether an editor viewport owns application focus.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Core/Runtime/EditorFrame.cs#L15).

## `Deconstruct`

<a id="api-6aab0df5898bb79a"></a>
<!-- api: M:InnoEditor.Core.EditorFrame.Deconstruct(System.Single@,System.Single@,System.Boolean@) ac8a5de5680e66b0b00214cbdfb9e7389b94cfa66d07f6f3feb00ba3a9f85eb2 -->

```csharp
public void InnoEditor.Core.EditorFrame.Deconstruct(out float deltaTime, out float totalTime, out bool isFocused)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Core/Runtime/EditorFrame.cs#L15).

## `Equals`

<a id="api-4c88e2658f6a2274"></a>
<!-- api: M:InnoEditor.Core.EditorFrame.Equals(InnoEditor.Core.EditorFrame) 2ec1df1ae82a8a44c8c3a9889e2e3705317f24d40688630d488216c5c92c483d -->

```csharp
public bool InnoEditor.Core.EditorFrame.Equals(InnoEditor.Core.EditorFrame other)
```

Indicates whether the current object is equal to another object of the same type.

**Parameter `other`:** An object to compare with this object.

**Returns:** `true` if the current object is equal to the `other` parameter; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Core/Runtime/EditorFrame.cs#L15).

## `Equals`

<a id="api-bcddde8253679bf8"></a>
<!-- api: M:InnoEditor.Core.EditorFrame.Equals(System.Object) 4b107748d8f3afc10567c8deb6ce2539aa78b9421541ea7ca05fb7da28cf11b3 -->

```csharp
public override bool InnoEditor.Core.EditorFrame.Equals(object obj)
```

Indicates whether this instance and a specified object are equal.

**Parameter `obj`:** The object to compare with the current instance.

**Returns:** `true` if `obj` and this instance are the same type and represent the same value; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Core/Runtime/EditorFrame.cs#L15).

## `GetHashCode`

<a id="api-0f36aaf1f5a9acc0"></a>
<!-- api: M:InnoEditor.Core.EditorFrame.GetHashCode 9ff55ebd27a0eb1d68d723c6a88a5b2eab9eb1dcc930d662658eb18a70991fcf -->

```csharp
public override int InnoEditor.Core.EditorFrame.GetHashCode()
```

Returns the hash code for this instance.

**Returns:** A 32-bit signed integer that is the hash code for this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Core/Runtime/EditorFrame.cs#L15).

## `op_Equality`

<a id="api-9795a34ad1e7c533"></a>
<!-- api: M:InnoEditor.Core.EditorFrame.op_Equality(InnoEditor.Core.EditorFrame,InnoEditor.Core.EditorFrame) 8fa6b550a30744e5fd0cb96d0dcdc0f566a6dd20c948fffbd81692051973ac5b -->

```csharp
public static bool InnoEditor.Core.EditorFrame.operator ==(InnoEditor.Core.EditorFrame left, InnoEditor.Core.EditorFrame right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Core/Runtime/EditorFrame.cs#L15).

## `op_Inequality`

<a id="api-1db8282ecd1e3383"></a>
<!-- api: M:InnoEditor.Core.EditorFrame.op_Inequality(InnoEditor.Core.EditorFrame,InnoEditor.Core.EditorFrame) 9631e1f583a2ce59ad9c01f8101a70f64f284925f4ff4da4359aca0c9f3cf0b2 -->

```csharp
public static bool InnoEditor.Core.EditorFrame.operator !=(InnoEditor.Core.EditorFrame left, InnoEditor.Core.EditorFrame right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Core/Runtime/EditorFrame.cs#L15).

## `ToString`

<a id="api-4a05c1c16cd94e79"></a>
<!-- api: M:InnoEditor.Core.EditorFrame.ToString b8b8ad1d963cef6aa61861b8501edb7347805808b0ff12661f609a883c514871 -->

```csharp
public override string InnoEditor.Core.EditorFrame.ToString()
```

Returns the fully qualified type name of this instance.

**Returns:** The fully qualified type name.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Core/Runtime/EditorFrame.cs#L15).

## `deltaTime`

<a id="api-9a200ef3a6c59d41"></a>
<!-- api: P:InnoEditor.Core.EditorFrame.deltaTime 1dd13c02f1e0b50174a9349bf6bff8eafcdf1a14a5b6ab66661eccf997188c6c -->

```csharp
public float InnoEditor.Core.EditorFrame.deltaTime { get; set; }
```

The elapsed frame time in seconds.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Core/Runtime/EditorFrame.cs#L16).

## `isFocused`

<a id="api-c3c1688ec3f516bf"></a>
<!-- api: P:InnoEditor.Core.EditorFrame.isFocused 6f04d531f11fa0632f5cb485eacd0b9e233dff82c98e66cd2490d35318ebc020 -->

```csharp
public bool InnoEditor.Core.EditorFrame.isFocused { get; set; }
```

Whether an editor viewport owns application focus.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Core/Runtime/EditorFrame.cs#L18).

## `totalTime`

<a id="api-408848274000c1c5"></a>
<!-- api: P:InnoEditor.Core.EditorFrame.totalTime 808a6b33a93c2546f23df5bea0df6b9dffc725d140aae3eedbe2d6a99507a36d -->

```csharp
public float InnoEditor.Core.EditorFrame.totalTime { get; set; }
```

The absolute editor runtime in seconds.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Core/Runtime/EditorFrame.cs#L17).
