---
title: "ImGuiWidget — Method: CollapsingCard"
description: "Exact Method: CollapsingCard contracts in ImGuiWidget."
uid: api.inno.editor.imgui.editor-script.b7dfc7f4687b812e
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: editor-script
contracts:
  - project.inno-editor-imgui
  - manual.scripting.use-script-api
  - api.inno.editor.imgui.editor-script.7b683e110163fdd5#type-declaration
---
# `ImGuiWidget`: Method: CollapsingCard

Read these exact member contracts together with the [containing type](innoeditor.imgui.imguiwidget.md) and its [shared ownership contract](../../projects/inno-editor-imgui.md).

**Source context:** `editor-script`, configuration `Debug`. This page does not certify execution on other platforms.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

## `CollapsingCard`

<a id="api-59b9117c9a6c186b"></a>
<!-- api: M:InnoEditor.ImGui.ImGuiWidget.CollapsingCard(System.String,System.String,System.Action,System.Action,System.Boolean,System.Boolean,System.Single,System.Action) 93cd64ba4fa79bed232c71e1347cc1089ca4ca84b207128e86fef72629e17371 -->

```csharp
public bool InnoEditor.ImGui.ImGuiWidget.CollapsingCard(string id, string title, System.Action? drawLeadingControl = null, System.Action? drawTrailingControl = null, bool defaultOpen = true, bool dimmed = false, float trailingControlWidth = 0, System.Action? drawContextMenu = null)
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


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.Card.cs#L42).
