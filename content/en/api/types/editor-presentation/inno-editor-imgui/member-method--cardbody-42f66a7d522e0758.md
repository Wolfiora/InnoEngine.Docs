---
title: "ImGuiWidget.ImGuiWidget — Method: CardBody"
description: "Exact Method: CardBody contracts in ImGuiWidget.ImGuiWidget."
uid: api.inno.editor.imgui.42f66a7d522e0758
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: source-clr
contracts:
  - project.inno-editor-imgui
  - api.inno.editor.imgui.d7feaecdd475b63f#type-declaration
---
# `ImGuiWidget.ImGuiWidget`: Method: CardBody

Read these exact member contracts together with the [containing type](imguiwidget.imguiwidget.md) and its [shared ownership contract](../../../projects/inno-editor-imgui.md).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `CardBody`

<a id="api-1a3d7611a699688d"></a>
<!-- api: M:Inno.Editor.ImGui.ImGuiWidget.ImGuiWidget.CardBody(System.String,System.Action,System.Boolean) 68607cf47f71b964256118fd07a022e65b34a86608b0a89e367a4d0764cfbf9b -->

```csharp
public void Inno.Editor.ImGui.ImGuiWidget.ImGuiWidget.CardBody(string id, System.Action drawContent, bool dimmed = false)
```

Draws expanded collapsible-card content inside a framed body.

**Parameter `id`:** The stable card identifier.

**Parameter `drawContent`:** The callback that draws card content.

**Parameter `dimmed`:** Whether content is visually disabled and non-interactive.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.Card.cs#L238).
