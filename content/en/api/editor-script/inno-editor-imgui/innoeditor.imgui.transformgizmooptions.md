---
title: "TransformGizmoOptions"
description: "Reference for TransformGizmoOptions in Inno.Editor.ImGui."
uid: api.inno.editor.imgui.editor-script.de517fce984569a4
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: editor-script
contracts:
  - project.inno-editor-imgui
  - manual.scripting.use-script-api
---
# `TransformGizmoOptions`

This reference describes `TransformGizmoOptions` in `Inno.Editor.ImGui`. Read the [shared contract](../../projects/inno-editor-imgui.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `editor-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `System.ValueType`.

**Direct interfaces:** `System.IEquatable<InnoEditor.ImGui.TransformGizmoOptions>`.

## Members

| Member | Kind |
| --- | --- |
| [`Equals`](#api-c149d359e2cb0755) | Method |
| [`Equals`](#api-d0111dcbb36aae0d) | Method |
| [`GetHashCode`](#api-25c889d8b8fc516f) | Method |
| [`op_Equality`](#api-7d9903c01f0ae126) | Method |
| [`op_Inequality`](#api-ca2e94257b3d2bc9) | Method |
| [`ToString`](#api-fb37727a06916034) | Method |
| [`enabled`](#api-67406f4e59cf2d6b) | Property |
| [`maskX`](#api-11c1395bcd2cca5c) | Property |
| [`maskY`](#api-147b70bbfbbe1bdd) | Property |
| [`maskZ`](#api-bf619a3df760663f) | Property |
| [`maximum`](#api-ec354c6abd374892) | Property |
| [`minimum`](#api-5cdda6cea1b18f36) | Property |
| [`operation`](#api-b5c7c2373b964198) | Property |
| [`orthographic`](#api-cb68d802b24a8a53) | Property |
| [`projection`](#api-df4c39be9054d3ad) | Property |
| [`space`](#api-d1169e556e487e7c) | Property |
| [`view`](#api-84774af1206963ae) | Property |

## Type declaration

<a id="api-de517fce984569a4"></a>
<!-- api: T:InnoEditor.ImGui.TransformGizmoOptions 07aac34de5dd85a859f8c1d74c57ebe39d8ee7b52cb30d42cb0c4ccfd31a63ca -->

```csharp
public readonly struct InnoEditor.ImGui.TransformGizmoOptions : System.IEquatable<InnoEditor.ImGui.TransformGizmoOptions>
```

Supplies frame-local matrices and interaction policy without native handles.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.Gizmo.cs#L60).

## `Equals`

<a id="api-c149d359e2cb0755"></a>
<!-- api: M:InnoEditor.ImGui.TransformGizmoOptions.Equals(InnoEditor.ImGui.TransformGizmoOptions) 68ca4f4d81d06dbbd81292a49f9471d986968c00169a0a80b0aeed34893e4fb0 -->

```csharp
public bool InnoEditor.ImGui.TransformGizmoOptions.Equals(InnoEditor.ImGui.TransformGizmoOptions other)
```

Indicates whether the current object is equal to another object of the same type.

**Parameter `other`:** An object to compare with this object.

**Returns:** `true` if the current object is equal to the `other` parameter; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.Gizmo.cs#L60).

## `Equals`

<a id="api-d0111dcbb36aae0d"></a>
<!-- api: M:InnoEditor.ImGui.TransformGizmoOptions.Equals(System.Object) 42e0d167fc061c25f6c1bb078e785233c23b60fa14f8d20530185ed3b79b257c -->

```csharp
public override bool InnoEditor.ImGui.TransformGizmoOptions.Equals(object obj)
```

Indicates whether this instance and a specified object are equal.

**Parameter `obj`:** The object to compare with the current instance.

**Returns:** `true` if `obj` and this instance are the same type and represent the same value; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.Gizmo.cs#L60).

## `GetHashCode`

<a id="api-25c889d8b8fc516f"></a>
<!-- api: M:InnoEditor.ImGui.TransformGizmoOptions.GetHashCode 9dd661e57efe0efb4c3c4305fbc75f9f8c8b9ccd632a2b2f65108799070195d5 -->

```csharp
public override int InnoEditor.ImGui.TransformGizmoOptions.GetHashCode()
```

Returns the hash code for this instance.

**Returns:** A 32-bit signed integer that is the hash code for this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.Gizmo.cs#L60).

## `op_Equality`

<a id="api-7d9903c01f0ae126"></a>
<!-- api: M:InnoEditor.ImGui.TransformGizmoOptions.op_Equality(InnoEditor.ImGui.TransformGizmoOptions,InnoEditor.ImGui.TransformGizmoOptions) ec35f299f95a05fbcea0a85c378ebc8d3b491c7049ff33c1207af9679541c304 -->

```csharp
public static bool InnoEditor.ImGui.TransformGizmoOptions.operator ==(InnoEditor.ImGui.TransformGizmoOptions left, InnoEditor.ImGui.TransformGizmoOptions right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.Gizmo.cs#L60).

## `op_Inequality`

<a id="api-ca2e94257b3d2bc9"></a>
<!-- api: M:InnoEditor.ImGui.TransformGizmoOptions.op_Inequality(InnoEditor.ImGui.TransformGizmoOptions,InnoEditor.ImGui.TransformGizmoOptions) 0445e6cd4a95c8d82bf05786334048ebcf575641bee967a5cc502087b694a25f -->

```csharp
public static bool InnoEditor.ImGui.TransformGizmoOptions.operator !=(InnoEditor.ImGui.TransformGizmoOptions left, InnoEditor.ImGui.TransformGizmoOptions right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.Gizmo.cs#L60).

## `ToString`

<a id="api-fb37727a06916034"></a>
<!-- api: M:InnoEditor.ImGui.TransformGizmoOptions.ToString 7181b0073eaf0b880fc2ab448f2477377ba86c6b34bfd35273b12c68d272fd80 -->

```csharp
public override string InnoEditor.ImGui.TransformGizmoOptions.ToString()
```

Returns the fully qualified type name of this instance.

**Returns:** The fully qualified type name.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.Gizmo.cs#L60).

## `enabled`

<a id="api-67406f4e59cf2d6b"></a>
<!-- api: P:InnoEditor.ImGui.TransformGizmoOptions.enabled 43983800990b55fd5f08e0f5bd382ef81e648152fa9b2b623afec076849afdec -->

```csharp
public bool InnoEditor.ImGui.TransformGizmoOptions.enabled { get; set; }
```

Gets whether manipulation can consume pointer input.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.Gizmo.cs#L85).

## `maskX`

<a id="api-11c1395bcd2cca5c"></a>
<!-- api: P:InnoEditor.ImGui.TransformGizmoOptions.maskX fe6b5a13140da99fd94ff974b725e0e6cd77c03e4f529ab718420110598b7b8b -->

```csharp
public bool InnoEditor.ImGui.TransformGizmoOptions.maskX { get; set; }
```

Gets whether the X translation axis is excluded by the viewport plane.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.Gizmo.cs#L97).

## `maskY`

<a id="api-147b70bbfbbe1bdd"></a>
<!-- api: P:InnoEditor.ImGui.TransformGizmoOptions.maskY fe272975214cf55c356929a0e73b97f5e4cf26eabd8583f926e1d158e3a8db34 -->

```csharp
public bool InnoEditor.ImGui.TransformGizmoOptions.maskY { get; set; }
```

Gets whether the Y translation axis is excluded by the viewport plane.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.Gizmo.cs#L101).

## `maskZ`

<a id="api-bf619a3df760663f"></a>
<!-- api: P:InnoEditor.ImGui.TransformGizmoOptions.maskZ b60f7a7745d58463b954f8ee4d96f47269b43ff16d618167b3e093215482dc99 -->

```csharp
public bool InnoEditor.ImGui.TransformGizmoOptions.maskZ { get; set; }
```

Gets whether the Z translation axis is excluded by the viewport plane.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.Gizmo.cs#L105).

## `maximum`

<a id="api-ec354c6abd374892"></a>
<!-- api: P:InnoEditor.ImGui.TransformGizmoOptions.maximum 8aba750e3d4430c64b2c2d8bc0cb06cef2ca64f64209d017261bbe1901688d35 -->

```csharp
public System.Numerics.Vector2 InnoEditor.ImGui.TransformGizmoOptions.maximum { get; set; }
```

Gets the viewport's screen-space maximum.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.Gizmo.cs#L69).

## `minimum`

<a id="api-5cdda6cea1b18f36"></a>
<!-- api: P:InnoEditor.ImGui.TransformGizmoOptions.minimum b0ab1a1d4427139a4e302fcd4b4a4dcb490d4bf632f1b4a36802614bf647c619 -->

```csharp
public System.Numerics.Vector2 InnoEditor.ImGui.TransformGizmoOptions.minimum { get; set; }
```

Gets the viewport's screen-space minimum.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.Gizmo.cs#L65).

## `operation`

<a id="api-b5c7c2373b964198"></a>
<!-- api: P:InnoEditor.ImGui.TransformGizmoOptions.operation 9d1862ee24b51aef74fec3d07a55c60839ce07a6a89be0e6907164d3a06b23c3 -->

```csharp
public InnoEditor.ImGui.TransformGizmoOperation InnoEditor.ImGui.TransformGizmoOptions.operation { get; set; }
```

Gets the requested handles.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.Gizmo.cs#L89).

## `orthographic`

<a id="api-cb68d802b24a8a53"></a>
<!-- api: P:InnoEditor.ImGui.TransformGizmoOptions.orthographic 99dae77ee90a6fec291f8d9fe34b3bf04b12ca54930bb07592ade0ac6cc0940a -->

```csharp
public bool InnoEditor.ImGui.TransformGizmoOptions.orthographic { get; set; }
```

Gets whether this viewport uses an orthographic projection.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.Gizmo.cs#L81).

## `projection`

<a id="api-df4c39be9054d3ad"></a>
<!-- api: P:InnoEditor.ImGui.TransformGizmoOptions.projection da9506a22973acde999db00b52e004f6651b3d599e1b4c7b277a9aac5594ba00 -->

```csharp
public InnoEngine.Mathematics.Matrix InnoEditor.ImGui.TransformGizmoOptions.projection { get; set; }
```

Gets the projection matrix supplied by the viewport owner.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.Gizmo.cs#L77).

## `space`

<a id="api-d1169e556e487e7c"></a>
<!-- api: P:InnoEditor.ImGui.TransformGizmoOptions.space 636c7c681207103effe29c748e85074ff2b7815d5424b58b5434a24dd9397572 -->

```csharp
public InnoEditor.ImGui.TransformGizmoSpace InnoEditor.ImGui.TransformGizmoOptions.space { get; set; }
```

Gets the handle coordinate space.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.Gizmo.cs#L93).

## `view`

<a id="api-84774af1206963ae"></a>
<!-- api: P:InnoEditor.ImGui.TransformGizmoOptions.view 2b759b74ebd26941429a9b960a285d2aa0b78f39fb31ee28bee9bb90d5737f81 -->

```csharp
public InnoEngine.Mathematics.Matrix InnoEditor.ImGui.TransformGizmoOptions.view { get; set; }
```

Gets the column-vector view matrix.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.Gizmo.cs#L73).
