---
title: "ImGuiWidget.ImGuiWidget — Method: GetTypeBadgeSize"
description: "Exact Method: GetTypeBadgeSize contracts in ImGuiWidget.ImGuiWidget."
uid: api.inno.editor.imgui.c91795e572e3b36d
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: source-clr
contracts:
  - project.inno-editor-imgui
  - api.inno.editor.imgui.d7feaecdd475b63f#type-declaration
---
# `ImGuiWidget.ImGuiWidget`: Method: GetTypeBadgeSize

Read these exact member contracts together with the [containing type](imguiwidget.imguiwidget.md) and its [shared ownership contract](../../../projects/inno-editor-imgui.md).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetTypeBadgeSize`

<a id="api-e3c39afe64fe8b12"></a>
<!-- api: M:Inno.Editor.ImGui.ImGuiWidget.ImGuiWidget.GetTypeBadgeSize(System.String) 6029202631e1754ff64cf91c451a86b090231caf250e124c79db41ba40d93d09 -->

```csharp
public System.Numerics.Vector2 Inno.Editor.ImGui.ImGuiWidget.ImGuiWidget.GetTypeBadgeSize(string label)
```

Gets the layout size of a compact outlined type badge.

**Parameter `label`:** Visible type name.

**Returns:** The size reserved by `Inno.Editor.ImGui.ImGuiWidget.ImGuiWidget.TypeBadge(System.String,System.Numerics.Vector4,System.String)`.

**Throws `System.ArgumentNullException`:** Thrown when `label` is `null`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.Controls.cs#L71).
