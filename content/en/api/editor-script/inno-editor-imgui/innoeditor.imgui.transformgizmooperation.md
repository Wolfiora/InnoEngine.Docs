---
title: "TransformGizmoOperation"
description: "Reference for TransformGizmoOperation in Inno.Editor.ImGui."
uid: api.inno.editor.imgui.editor-script.d6fb1bc0724fdc9b
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: editor-script
contracts:
  - project.inno-editor-imgui
  - manual.scripting.use-script-api
---
# `TransformGizmoOperation`

This reference describes `TransformGizmoOperation` in `Inno.Editor.ImGui`. Read the [shared contract](../../projects/inno-editor-imgui.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `editor-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `System.Enum`.

## Members

| Member | Kind |
| --- | --- |
| [`Rotate`](#api-2e2a4f0418473d28) | Field |
| [`Scale`](#api-a632c10aef37c113) | Field |
| [`ScaleX`](#api-bc193863df8fbb87) | Field |
| [`ScaleY`](#api-e1a0d1e98b2650ef) | Field |
| [`ScaleZ`](#api-5682988934cd89f7) | Field |
| [`Translate`](#api-5d523b9b0343d1c7) | Field |

## Type declaration

<a id="api-d6fb1bc0724fdc9b"></a>
<!-- api: T:InnoEditor.ImGui.TransformGizmoOperation 60299dc392a3b653b30b210ec733d336ae5f6930ee20dc37fcee006b2f6784ef -->

```csharp
public enum InnoEditor.ImGui.TransformGizmoOperation : int
```

Chooses the transform handles rendered by the viewport presenter.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.Gizmo.cs#L14).

## `Rotate`

<a id="api-2e2a4f0418473d28"></a>
<!-- api: F:InnoEditor.ImGui.TransformGizmoOperation.Rotate f8ca673d524e03778ae573b070d8304948ba318c43e9d78ad6fde0a9bc00e504 -->

```csharp
InnoEditor.ImGui.TransformGizmoOperation.Rotate = 2
```

Renders rotation handles.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.Gizmo.cs#L23).

## `Scale`

<a id="api-a632c10aef37c113"></a>
<!-- api: F:InnoEditor.ImGui.TransformGizmoOperation.Scale ab98fd38208f1c5eb618298b2cd362c94a3761c4440ea756c4b6892fdf696f74 -->

```csharp
InnoEditor.ImGui.TransformGizmoOperation.Scale = 28
```

Renders all local scale handles.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.Gizmo.cs#L39).

## `ScaleX`

<a id="api-bc193863df8fbb87"></a>
<!-- api: F:InnoEditor.ImGui.TransformGizmoOperation.ScaleX 924a932deecefddcd47e46ffd33bb7dba5290224c88223fd61ede61fde89d6e2 -->

```csharp
InnoEditor.ImGui.TransformGizmoOperation.ScaleX = 4
```

Renders the X scale handle.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.Gizmo.cs#L27).

## `ScaleY`

<a id="api-e1a0d1e98b2650ef"></a>
<!-- api: F:InnoEditor.ImGui.TransformGizmoOperation.ScaleY 2c4ad3a7ee1867c504eded69fa8b674e19f65df9d8bd32c48139374ff7b2df93 -->

```csharp
InnoEditor.ImGui.TransformGizmoOperation.ScaleY = 8
```

Renders the Y scale handle.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.Gizmo.cs#L31).

## `ScaleZ`

<a id="api-5682988934cd89f7"></a>
<!-- api: F:InnoEditor.ImGui.TransformGizmoOperation.ScaleZ 9670ac9e4b2d24c035e0ab990bfc929764750f3e31f3d50e5028fd5f69bd8d9f -->

```csharp
InnoEditor.ImGui.TransformGizmoOperation.ScaleZ = 16
```

Renders the Z scale handle.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.Gizmo.cs#L35).

## `Translate`

<a id="api-5d523b9b0343d1c7"></a>
<!-- api: F:InnoEditor.ImGui.TransformGizmoOperation.Translate 5c3192309ada3ec7d92e2c0215f8a6e97e272fe689e915ec71a9776b42e01215 -->

```csharp
InnoEditor.ImGui.TransformGizmoOperation.Translate = 1
```

Renders translation handles.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.Gizmo.cs#L19).
