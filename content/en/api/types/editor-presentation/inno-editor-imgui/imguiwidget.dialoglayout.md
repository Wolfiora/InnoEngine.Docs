---
title: "ImGuiWidget.DialogLayout"
description: "Reference for ImGuiWidget.DialogLayout in Inno.Editor.ImGui."
uid: api.inno.editor.imgui.58156fdfb4d5c7f1
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: source-clr
contracts:
  - project.inno-editor-imgui
---
# `ImGuiWidget.DialogLayout`

This reference describes `ImGuiWidget.DialogLayout` in `Inno.Editor.ImGui`. Read the [shared contract](../../../projects/inno-editor-imgui.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.ValueType`.

## Members

| Member | Kind |
| --- | --- |
| [`size`](#api-4bce6b6db71a4a03) | Property |

## Type declaration

<a id="api-58156fdfb4d5c7f1"></a>
<!-- api: T:Inno.Editor.ImGui.ImGuiWidget.DialogLayout db7d741b4f7c62a4ba72557e3eb8042d79fd47852dea472708d36f4748d2f115 -->

```csharp
public readonly struct Inno.Editor.ImGui.ImGuiWidget.DialogLayout
```

Carries a measured dialog layout. Only its required extent is public; drawing mechanics remain owned by the widget.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.Dialog.cs#L46).

## `size`

<a id="api-4bce6b6db71a4a03"></a>
<!-- api: P:Inno.Editor.ImGui.ImGuiWidget.DialogLayout.size ee0327587d10beb625bd506886a788939558dab1d90bac0967199ff72286c757 -->

```csharp
public System.Numerics.Vector2 Inno.Editor.ImGui.ImGuiWidget.DialogLayout.size { get; }
```

Gets the content extent, excluding the window title, border and padding.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.Dialog.cs#L69).
