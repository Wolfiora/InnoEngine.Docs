---
title: "ImGuiWidget — Method: CardBody"
description: "Exact Method: CardBody contracts in ImGuiWidget."
uid: api.inno.editor.imgui.editor-script.923743f92da29a97
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: editor-script
contracts:
  - project.inno-editor-imgui
  - manual.scripting.use-script-api
  - api.inno.editor.imgui.editor-script.7b683e110163fdd5#type-declaration
---
# `ImGuiWidget`: Method: CardBody

Read these exact member contracts together with the [containing type](innoeditor.imgui.imguiwidget.md) and its [shared ownership contract](../../projects/inno-editor-imgui.md).

**Source context:** `editor-script`, configuration `Debug`. This page does not certify execution on other platforms.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

## `CardBody`

<a id="api-cbb930581cebc1e1"></a>
<!-- api: M:InnoEditor.ImGui.ImGuiWidget.CardBody(System.String,System.Action,System.Boolean) e22c3653015d646e54590f5582763836b3ca4c436adbf5fff372a7baa367e3d0 -->

```csharp
public void InnoEditor.ImGui.ImGuiWidget.CardBody(string id, System.Action drawContent, bool dimmed = false)
```

Draws expanded collapsible-card content inside a framed body.

**Parameter `id`:** The stable card identifier.

**Parameter `drawContent`:** The callback that draws card content.

**Parameter `dimmed`:** Whether content is visually disabled and non-interactive.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.Card.cs#L238).
