---
title: "ImGuiWidget.TransformGizmoResult"
description: "Reference for ImGuiWidget.TransformGizmoResult in Inno.Editor.ImGui."
uid: api.inno.editor.imgui.7edcecb10221ed24
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: source-clr
contracts:
  - project.inno-editor-imgui
---
# `ImGuiWidget.TransformGizmoResult`

This reference describes `ImGuiWidget.TransformGizmoResult` in `Inno.Editor.ImGui`. Read the [shared contract](../../../projects/inno-editor-imgui.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.ValueType`.

**Direct interfaces:** `System.IEquatable<Inno.Editor.ImGui.ImGuiWidget.TransformGizmoResult>`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-864462f08fa9c1b9) | Method |
| [`Deconstruct`](#api-771a7b9950bfc56f) | Method |
| [`Equals`](#api-27c126b183164318) | Method |
| [`Equals`](#api-3afa9e3d011c764a) | Method |
| [`GetHashCode`](#api-5eca0fa7c7c31db1) | Method |
| [`op_Equality`](#api-1d8a2528640698cd) | Method |
| [`op_Inequality`](#api-27335556b9b73acd) | Method |
| [`ToString`](#api-f4a7c5b64e224d5e) | Method |
| [`changed`](#api-8fe9987ce573881e) | Property |
| [`isOver`](#api-e2a267f59a3e32ae) | Property |
| [`isUsing`](#api-e3a3be5a6142b469) | Property |
| [`matrix`](#api-97000660e3d1e2d5) | Property |

## Type declaration

<a id="api-7edcecb10221ed24"></a>
<!-- api: T:Inno.Editor.ImGui.ImGuiWidget.TransformGizmoResult 505ee5eed21dd60bf645fa04808be5c43381dcbe8ec1bc18774a1c6b184f911f -->

```csharp
public readonly record struct Inno.Editor.ImGui.ImGuiWidget.TransformGizmoResult : System.IEquatable<Inno.Editor.ImGui.ImGuiWidget.TransformGizmoResult>
```

Returns copied manipulation output; the domain owner decides how to apply and record it.

**Parameter `matrix`:** The resulting world matrix.

**Parameter `changed`:** Whether the native presenter reported an edited value.

**Parameter `isUsing`:** Whether the handle currently captures the pointer.

**Parameter `isOver`:** Whether the pointer is over a handle.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.Gizmo.cs#L123).

## `#ctor`

<a id="api-864462f08fa9c1b9"></a>
<!-- api: M:Inno.Editor.ImGui.ImGuiWidget.TransformGizmoResult.#ctor(Inno.Core.Mathematics.Matrix,System.Boolean,System.Boolean,System.Boolean) b4fd5a792fd81265fb823ee19749e518825ffa4276980c280a339e4b157d4c4c -->

```csharp
public Inno.Editor.ImGui.ImGuiWidget.TransformGizmoResult.TransformGizmoResult(Inno.Core.Mathematics.Matrix matrix, bool changed, bool isUsing, bool isOver)
```

Returns copied manipulation output; the domain owner decides how to apply and record it.

**Parameter `matrix`:** The resulting world matrix.

**Parameter `changed`:** Whether the native presenter reported an edited value.

**Parameter `isUsing`:** Whether the handle currently captures the pointer.

**Parameter `isOver`:** Whether the pointer is over a handle.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.Gizmo.cs#L123).

## `Deconstruct`

<a id="api-771a7b9950bfc56f"></a>
<!-- api: M:Inno.Editor.ImGui.ImGuiWidget.TransformGizmoResult.Deconstruct(Inno.Core.Mathematics.Matrix@,System.Boolean@,System.Boolean@,System.Boolean@) 9561284061adf2492682a1b0aec04a1cc688db699c25781fe5002c6f04f20c4f -->

```csharp
public void Inno.Editor.ImGui.ImGuiWidget.TransformGizmoResult.Deconstruct(out Inno.Core.Mathematics.Matrix matrix, out bool changed, out bool isUsing, out bool isOver)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.Gizmo.cs#L123).

## `Equals`

<a id="api-27c126b183164318"></a>
<!-- api: M:Inno.Editor.ImGui.ImGuiWidget.TransformGizmoResult.Equals(Inno.Editor.ImGui.ImGuiWidget.TransformGizmoResult) 16a5634b333e5588fee1555e37467f0b96f7464d287ed47288fed702d8f48a33 -->

```csharp
public bool Inno.Editor.ImGui.ImGuiWidget.TransformGizmoResult.Equals(Inno.Editor.ImGui.ImGuiWidget.TransformGizmoResult other)
```

Indicates whether the current object is equal to another object of the same type.

**Parameter `other`:** An object to compare with this object.

**Returns:** `true` if the current object is equal to the `other` parameter; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.Gizmo.cs#L123).

## `Equals`

<a id="api-3afa9e3d011c764a"></a>
<!-- api: M:Inno.Editor.ImGui.ImGuiWidget.TransformGizmoResult.Equals(System.Object) cb3b983a9a60eed59c2ff3695d7428f6fd1c86b789fd6165abaaaf84c16686f4 -->

```csharp
public override bool Inno.Editor.ImGui.ImGuiWidget.TransformGizmoResult.Equals(object obj)
```

Indicates whether this instance and a specified object are equal.

**Parameter `obj`:** The object to compare with the current instance.

**Returns:** `true` if `obj` and this instance are the same type and represent the same value; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.Gizmo.cs#L123).

## `GetHashCode`

<a id="api-5eca0fa7c7c31db1"></a>
<!-- api: M:Inno.Editor.ImGui.ImGuiWidget.TransformGizmoResult.GetHashCode ee2005a7410b5374306611ea8ed080d6b4d09261a1c21fcf0ecb1a13340dc3dd -->

```csharp
public override int Inno.Editor.ImGui.ImGuiWidget.TransformGizmoResult.GetHashCode()
```

Returns the hash code for this instance.

**Returns:** A 32-bit signed integer that is the hash code for this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.Gizmo.cs#L123).

## `op_Equality`

<a id="api-1d8a2528640698cd"></a>
<!-- api: M:Inno.Editor.ImGui.ImGuiWidget.TransformGizmoResult.op_Equality(Inno.Editor.ImGui.ImGuiWidget.TransformGizmoResult,Inno.Editor.ImGui.ImGuiWidget.TransformGizmoResult) dd65d237878821eb7baf333f14ea84943d7da8492511d00de96bb7a65fbcae20 -->

```csharp
public static bool Inno.Editor.ImGui.ImGuiWidget.TransformGizmoResult.operator ==(Inno.Editor.ImGui.ImGuiWidget.TransformGizmoResult left, Inno.Editor.ImGui.ImGuiWidget.TransformGizmoResult right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.Gizmo.cs#L123).

## `op_Inequality`

<a id="api-27335556b9b73acd"></a>
<!-- api: M:Inno.Editor.ImGui.ImGuiWidget.TransformGizmoResult.op_Inequality(Inno.Editor.ImGui.ImGuiWidget.TransformGizmoResult,Inno.Editor.ImGui.ImGuiWidget.TransformGizmoResult) cfb3f1ee3a48b3dcc8e75024c2d490a523d1a51889cd860a163c6bdb84bbad98 -->

```csharp
public static bool Inno.Editor.ImGui.ImGuiWidget.TransformGizmoResult.operator !=(Inno.Editor.ImGui.ImGuiWidget.TransformGizmoResult left, Inno.Editor.ImGui.ImGuiWidget.TransformGizmoResult right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.Gizmo.cs#L123).

## `ToString`

<a id="api-f4a7c5b64e224d5e"></a>
<!-- api: M:Inno.Editor.ImGui.ImGuiWidget.TransformGizmoResult.ToString 5510738070b1d53d3d74a76de959eb2c61c2c3a80a2a388fccd890d51d6685cb -->

```csharp
public override string Inno.Editor.ImGui.ImGuiWidget.TransformGizmoResult.ToString()
```

Returns the fully qualified type name of this instance.

**Returns:** The fully qualified type name.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.Gizmo.cs#L123).

## `changed`

<a id="api-8fe9987ce573881e"></a>
<!-- api: P:Inno.Editor.ImGui.ImGuiWidget.TransformGizmoResult.changed b0725d688c37dbcd77ae765334b093bf20cbad038d6da8f95d759f2e9aef7c75 -->

```csharp
public bool Inno.Editor.ImGui.ImGuiWidget.TransformGizmoResult.changed { get; init; }
```

Whether the native presenter reported an edited value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.Gizmo.cs#L125).

## `isOver`

<a id="api-e2a267f59a3e32ae"></a>
<!-- api: P:Inno.Editor.ImGui.ImGuiWidget.TransformGizmoResult.isOver 6ff04ca2cab1bcd5c3514c56b84e4aa812ce5517ea9bf95049418bdaa73b9c77 -->

```csharp
public bool Inno.Editor.ImGui.ImGuiWidget.TransformGizmoResult.isOver { get; init; }
```

Whether the pointer is over a handle.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.Gizmo.cs#L127).

## `isUsing`

<a id="api-e3a3be5a6142b469"></a>
<!-- api: P:Inno.Editor.ImGui.ImGuiWidget.TransformGizmoResult.isUsing cd2e5343cafc2a028d413f3b175290275cdf655b2bb82fc061ea93e4709e27df -->

```csharp
public bool Inno.Editor.ImGui.ImGuiWidget.TransformGizmoResult.isUsing { get; init; }
```

Whether the handle currently captures the pointer.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.Gizmo.cs#L126).

## `matrix`

<a id="api-97000660e3d1e2d5"></a>
<!-- api: P:Inno.Editor.ImGui.ImGuiWidget.TransformGizmoResult.matrix 3598680bbf778f36ac03ed10a5143ca384c12405cddb6b43721fd957f4a85282 -->

```csharp
public Inno.Core.Mathematics.Matrix Inno.Editor.ImGui.ImGuiWidget.TransformGizmoResult.matrix { get; init; }
```

The resulting world matrix.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.Gizmo.cs#L124).
