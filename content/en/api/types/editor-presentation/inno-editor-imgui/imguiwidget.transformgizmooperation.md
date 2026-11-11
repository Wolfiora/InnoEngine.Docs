---
title: "ImGuiWidget.TransformGizmoOperation"
description: "Reference for ImGuiWidget.TransformGizmoOperation in Inno.Editor.ImGui."
uid: api.inno.editor.imgui.f90231d925059f7e
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: source-clr
contracts:
  - project.inno-editor-imgui
---
# `ImGuiWidget.TransformGizmoOperation`

This reference describes `ImGuiWidget.TransformGizmoOperation` in `Inno.Editor.ImGui`. Read the [shared contract](../../../projects/inno-editor-imgui.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.Enum`.

## Members

| Member | Kind |
| --- | --- |
| [`Rotate`](#api-b5a0f2d15b4121a3) | Field |
| [`Scale`](#api-44378d14939a4c9d) | Field |
| [`ScaleX`](#api-62409e5ee3fdc033) | Field |
| [`ScaleY`](#api-3e5db29ca8de727f) | Field |
| [`ScaleZ`](#api-98cb82835fb9c596) | Field |
| [`Translate`](#api-f0a58d7dd77d35c8) | Field |

## Type declaration

<a id="api-f90231d925059f7e"></a>
<!-- api: T:Inno.Editor.ImGui.ImGuiWidget.TransformGizmoOperation 4374fc115283d33c508fb0e732025d8d6d1f352522c3170fc99892c3c0ef040b -->

```csharp
public enum Inno.Editor.ImGui.ImGuiWidget.TransformGizmoOperation : int
```

Chooses the transform handles rendered by the viewport presenter.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.Gizmo.cs#L14).

## `Rotate`

<a id="api-b5a0f2d15b4121a3"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiWidget.TransformGizmoOperation.Rotate b9d315545b92f1803f30b5e87a14cfe464e6abe4c39ee9764bb15a3529b403f0 -->

```csharp
Inno.Editor.ImGui.ImGuiWidget.TransformGizmoOperation.Rotate = 2
```

Renders rotation handles.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.Gizmo.cs#L23).

## `Scale`

<a id="api-44378d14939a4c9d"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiWidget.TransformGizmoOperation.Scale 9bdd5ac9f428e3916c1434b70db675a15c156f76e2b8c5d815fd38453a943976 -->

```csharp
Inno.Editor.ImGui.ImGuiWidget.TransformGizmoOperation.Scale = Inno.Editor.ImGui.ImGuiWidget.TransformGizmoOperation.ScaleX | Inno.Editor.ImGui.ImGuiWidget.TransformGizmoOperation.ScaleY | Inno.Editor.ImGui.ImGuiWidget.TransformGizmoOperation.ScaleZ
```

Renders all local scale handles.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.Gizmo.cs#L39).

## `ScaleX`

<a id="api-62409e5ee3fdc033"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiWidget.TransformGizmoOperation.ScaleX 4eafec130cb16df3338f2762dec45223ac8ff895d93ded2f434cecf13be21f03 -->

```csharp
Inno.Editor.ImGui.ImGuiWidget.TransformGizmoOperation.ScaleX = 4
```

Renders the X scale handle.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.Gizmo.cs#L27).

## `ScaleY`

<a id="api-3e5db29ca8de727f"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiWidget.TransformGizmoOperation.ScaleY 49de1841890f4b3129493688b0dc91c63246046de1987ce1cbb6a3b2d88309dd -->

```csharp
Inno.Editor.ImGui.ImGuiWidget.TransformGizmoOperation.ScaleY = 8
```

Renders the Y scale handle.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.Gizmo.cs#L31).

## `ScaleZ`

<a id="api-98cb82835fb9c596"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiWidget.TransformGizmoOperation.ScaleZ 515a4a3a8633a3bb5f50fa3f5e4090b49003de1dc1a33e16736879f511e9eae0 -->

```csharp
Inno.Editor.ImGui.ImGuiWidget.TransformGizmoOperation.ScaleZ = 16
```

Renders the Z scale handle.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.Gizmo.cs#L35).

## `Translate`

<a id="api-f0a58d7dd77d35c8"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiWidget.TransformGizmoOperation.Translate b1d8abb5da8e31ea39dc1f614c7cfe045d004bf936640af40cc4a666e25c9e21 -->

```csharp
Inno.Editor.ImGui.ImGuiWidget.TransformGizmoOperation.Translate = 1
```

Renders translation handles.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.Gizmo.cs#L19).
