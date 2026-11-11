---
title: "ImGuiWidget.ImGuiWidget — Method: CollapsingCard"
description: "Exact Method: CollapsingCard contracts in ImGuiWidget.ImGuiWidget."
uid: api.inno.editor.imgui.3611ef369a6813dd
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: source-clr
contracts:
  - project.inno-editor-imgui
  - api.inno.editor.imgui.d7feaecdd475b63f#type-declaration
---
# `ImGuiWidget.ImGuiWidget`: Method: CollapsingCard

Read these exact member contracts together with the [containing type](imguiwidget.imguiwidget.md) and its [shared ownership contract](../../../projects/inno-editor-imgui.md).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `CollapsingCard`

<a id="api-783bea996c356736"></a>
<!-- api: M:Inno.Editor.ImGui.ImGuiWidget.ImGuiWidget.CollapsingCard(System.String,System.String,System.Action,System.Action,System.Boolean,System.Boolean,System.Single,System.Action) 5ffc2679a6fb959c4a291ca70e57038b4b2c5b65ae30a3b60b84782e2db02d47 -->

```csharp
public bool Inno.Editor.ImGui.ImGuiWidget.ImGuiWidget.CollapsingCard(string id, string title, System.Action? drawLeadingControl = null, System.Action? drawTrailingControl = null, bool defaultOpen = true, bool dimmed = false, float trailingControlWidth = 0, System.Action? drawContextMenu = null)
```

Draws a component-style collapsible card header.

**Parameter `id`:** The stable card identifier.

**Parameter `title`:** The visible card title.

**Parameter `drawLeadingControl`:** An optional control drawn before the title.

**Parameter `drawTrailingControl`:** An optional control aligned to the right edge.

**Parameter `defaultOpen`:** Whether the card starts expanded.

**Parameter `dimmed`:** Whether header controls and title use the inactive text color.

**Parameter `trailingControlWidth`:** The optional width reserved for the trailing control group.

**Parameter `drawContextMenu`:** An optional callback that binds a context menu to the complete header item.

**Returns:** `true` when card content should be drawn; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.Card.cs#L42).
