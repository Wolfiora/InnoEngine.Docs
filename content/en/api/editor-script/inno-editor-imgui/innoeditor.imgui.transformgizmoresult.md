---
title: "TransformGizmoResult"
description: "Reference for TransformGizmoResult in Inno.Editor.ImGui."
uid: api.inno.editor.imgui.editor-script.274b62e05be48da1
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: editor-script
contracts:
  - project.inno-editor-imgui
  - manual.scripting.use-script-api
---
# `TransformGizmoResult`

This reference describes `TransformGizmoResult` in `Inno.Editor.ImGui`. Read the [shared contract](../../projects/inno-editor-imgui.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `editor-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `System.ValueType`.

**Direct interfaces:** `System.IEquatable<InnoEditor.ImGui.TransformGizmoResult>`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-613b14f0f39dbb3e) | Method |
| [`Deconstruct`](#api-8846d9fef0db745a) | Method |
| [`Equals`](#api-22cf47e8e9ec75bc) | Method |
| [`Equals`](#api-fbc12991e6dca357) | Method |
| [`GetHashCode`](#api-4809cb19c22ed169) | Method |
| [`op_Equality`](#api-5362dbca29f8724a) | Method |
| [`op_Inequality`](#api-5f51b83bf70ab045) | Method |
| [`ToString`](#api-c52868b482c63d03) | Method |
| [`changed`](#api-b70a8c29123f889f) | Property |
| [`isOver`](#api-24f6aa96b11cdbf1) | Property |
| [`isUsing`](#api-51802e78abac2338) | Property |
| [`matrix`](#api-ec79abb18180fb47) | Property |

## Type declaration

<a id="api-274b62e05be48da1"></a>
<!-- api: T:InnoEditor.ImGui.TransformGizmoResult 8ff81b999994da6614421fac0b4255745298a5a3889b81a04ca32342c4329f0b -->

```csharp
public readonly struct InnoEditor.ImGui.TransformGizmoResult : System.IEquatable<InnoEditor.ImGui.TransformGizmoResult>
```

Returns copied manipulation output; the domain owner decides how to apply and record it.

**Parameter `matrix`:** The resulting world matrix.

**Parameter `changed`:** Whether the native presenter reported an edited value.

**Parameter `isUsing`:** Whether the handle currently captures the pointer.

**Parameter `isOver`:** Whether the pointer is over a handle.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.Gizmo.cs#L123).

## `#ctor`

<a id="api-613b14f0f39dbb3e"></a>
<!-- api: M:InnoEditor.ImGui.TransformGizmoResult.#ctor(InnoEngine.Mathematics.Matrix,System.Boolean,System.Boolean,System.Boolean) e913420f8bfe9e35fa5d9ad25f056f76067fc2d31625292233ab8aa660dd69bc -->

```csharp
public InnoEditor.ImGui.TransformGizmoResult.TransformGizmoResult(InnoEngine.Mathematics.Matrix matrix, bool changed, bool isUsing, bool isOver)
```

Returns copied manipulation output; the domain owner decides how to apply and record it.

**Parameter `matrix`:** The resulting world matrix.

**Parameter `changed`:** Whether the native presenter reported an edited value.

**Parameter `isUsing`:** Whether the handle currently captures the pointer.

**Parameter `isOver`:** Whether the pointer is over a handle.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.Gizmo.cs#L123).

## `Deconstruct`

<a id="api-8846d9fef0db745a"></a>
<!-- api: M:InnoEditor.ImGui.TransformGizmoResult.Deconstruct(InnoEngine.Mathematics.Matrix@,System.Boolean@,System.Boolean@,System.Boolean@) db63b4ec80ee551d5255d74706f10ba9daa829f94dc79fc4e701b04eac8fb5a6 -->

```csharp
public void InnoEditor.ImGui.TransformGizmoResult.Deconstruct(out InnoEngine.Mathematics.Matrix matrix, out bool changed, out bool isUsing, out bool isOver)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.Gizmo.cs#L123).

## `Equals`

<a id="api-22cf47e8e9ec75bc"></a>
<!-- api: M:InnoEditor.ImGui.TransformGizmoResult.Equals(InnoEditor.ImGui.TransformGizmoResult) a91d65f08bf7334f398b92b5f5c237f1ebeb58b4d809f1ad04d1eeca1e807c28 -->

```csharp
public bool InnoEditor.ImGui.TransformGizmoResult.Equals(InnoEditor.ImGui.TransformGizmoResult other)
```

Indicates whether the current object is equal to another object of the same type.

**Parameter `other`:** An object to compare with this object.

**Returns:** `true` if the current object is equal to the `other` parameter; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.Gizmo.cs#L123).

## `Equals`

<a id="api-fbc12991e6dca357"></a>
<!-- api: M:InnoEditor.ImGui.TransformGizmoResult.Equals(System.Object) 3b900114cc1b067f2b254e69ae6ff33464d29f230a98dde1c5a4c8a790afc4f1 -->

```csharp
public override bool InnoEditor.ImGui.TransformGizmoResult.Equals(object obj)
```

Indicates whether this instance and a specified object are equal.

**Parameter `obj`:** The object to compare with the current instance.

**Returns:** `true` if `obj` and this instance are the same type and represent the same value; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.Gizmo.cs#L123).

## `GetHashCode`

<a id="api-4809cb19c22ed169"></a>
<!-- api: M:InnoEditor.ImGui.TransformGizmoResult.GetHashCode 6b536bcb50886c008942678d56a987daac08a497c7bc7bfee4e2885691a71391 -->

```csharp
public override int InnoEditor.ImGui.TransformGizmoResult.GetHashCode()
```

Returns the hash code for this instance.

**Returns:** A 32-bit signed integer that is the hash code for this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.Gizmo.cs#L123).

## `op_Equality`

<a id="api-5362dbca29f8724a"></a>
<!-- api: M:InnoEditor.ImGui.TransformGizmoResult.op_Equality(InnoEditor.ImGui.TransformGizmoResult,InnoEditor.ImGui.TransformGizmoResult) ab7b742f188a1b365a01090bb2f7d6d6ba17e7403f56b6ab995063ed73bca137 -->

```csharp
public static bool InnoEditor.ImGui.TransformGizmoResult.operator ==(InnoEditor.ImGui.TransformGizmoResult left, InnoEditor.ImGui.TransformGizmoResult right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.Gizmo.cs#L123).

## `op_Inequality`

<a id="api-5f51b83bf70ab045"></a>
<!-- api: M:InnoEditor.ImGui.TransformGizmoResult.op_Inequality(InnoEditor.ImGui.TransformGizmoResult,InnoEditor.ImGui.TransformGizmoResult) 1713028fc9c38e4495bd0cff2d17e8492ad6b984df77039a113ee8f0e8d3202e -->

```csharp
public static bool InnoEditor.ImGui.TransformGizmoResult.operator !=(InnoEditor.ImGui.TransformGizmoResult left, InnoEditor.ImGui.TransformGizmoResult right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.Gizmo.cs#L123).

## `ToString`

<a id="api-c52868b482c63d03"></a>
<!-- api: M:InnoEditor.ImGui.TransformGizmoResult.ToString 95d602be80296e5bb8b832c3eafa21322e91c94d88f5232ccf64d3e9c11438b8 -->

```csharp
public override string InnoEditor.ImGui.TransformGizmoResult.ToString()
```

Returns the fully qualified type name of this instance.

**Returns:** The fully qualified type name.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.Gizmo.cs#L123).

## `changed`

<a id="api-b70a8c29123f889f"></a>
<!-- api: P:InnoEditor.ImGui.TransformGizmoResult.changed 737ada6b77103166fb29eb776c83e48f1029b823e0046ae8715f14c37eab1702 -->

```csharp
public bool InnoEditor.ImGui.TransformGizmoResult.changed { get; set; }
```

Whether the native presenter reported an edited value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.Gizmo.cs#L125).

## `isOver`

<a id="api-24f6aa96b11cdbf1"></a>
<!-- api: P:InnoEditor.ImGui.TransformGizmoResult.isOver 0b158c4c86ecbfeb9253d6aee9a07ea006d2bed586dcc2a08149e893b31e28cf -->

```csharp
public bool InnoEditor.ImGui.TransformGizmoResult.isOver { get; set; }
```

Whether the pointer is over a handle.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.Gizmo.cs#L127).

## `isUsing`

<a id="api-51802e78abac2338"></a>
<!-- api: P:InnoEditor.ImGui.TransformGizmoResult.isUsing 879a39961d1e925fb063c440f63af137c8f7fca6c45250a5a5550ec578cb48b6 -->

```csharp
public bool InnoEditor.ImGui.TransformGizmoResult.isUsing { get; set; }
```

Whether the handle currently captures the pointer.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.Gizmo.cs#L126).

## `matrix`

<a id="api-ec79abb18180fb47"></a>
<!-- api: P:InnoEditor.ImGui.TransformGizmoResult.matrix f838491108337c88b985c5f96805b51af388b01f2755aac85a221e881141d573 -->

```csharp
public InnoEngine.Mathematics.Matrix InnoEditor.ImGui.TransformGizmoResult.matrix { get; set; }
```

The resulting world matrix.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.Gizmo.cs#L124).
