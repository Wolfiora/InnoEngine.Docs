---
title: "ImGuiWidget.ImGuiWidget — Method: GetLabelChipSize"
description: "Exact Method: GetLabelChipSize contracts in ImGuiWidget.ImGuiWidget."
uid: api.inno.editor.imgui.fb69c50f54e47ecd
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: source-clr
contracts:
  - project.inno-editor-imgui
  - api.inno.editor.imgui.d7feaecdd475b63f#type-declaration
---
# `ImGuiWidget.ImGuiWidget`: Method: GetLabelChipSize

Read these exact member contracts together with the [containing type](imguiwidget.imguiwidget.md) and its [shared ownership contract](../../../projects/inno-editor-imgui.md).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetLabelChipSize`

<a id="api-af66d2fa42aab144"></a>
<!-- api: M:Inno.Editor.ImGui.ImGuiWidget.ImGuiWidget.GetLabelChipSize(System.String) 0670a3fadf953cc94289d0da91ea98f4498ca3d4bb0793e091b3eada944ec2ec -->

```csharp
public System.Numerics.Vector2 Inno.Editor.ImGui.ImGuiWidget.ImGuiWidget.GetLabelChipSize(string label)
```

Gets the layout size of a compact colored label chip using the centralized editor style.

**Parameter `label`:** Visible label text.

**Returns:** The size reserved by `Inno.Editor.ImGui.ImGuiWidget.ImGuiWidget.LabelChip(System.String,System.Numerics.Vector4)` for the supplied text.

**Throws `System.ArgumentNullException`:** Thrown when `label` is `null`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.Controls.cs#L24).
