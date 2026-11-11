---
title: "ImGuiWidget.ImGuiWidget — Method: HelpBox"
description: "Exact Method: HelpBox contracts in ImGuiWidget.ImGuiWidget."
uid: api.inno.editor.imgui.6f13cf9ffd84834a
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: source-clr
contracts:
  - project.inno-editor-imgui
  - api.inno.editor.imgui.d7feaecdd475b63f#type-declaration
---
# `ImGuiWidget.ImGuiWidget`: Method: HelpBox

Read these exact member contracts together with the [containing type](imguiwidget.imguiwidget.md) and its [shared ownership contract](../../../projects/inno-editor-imgui.md).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `HelpBox`

<a id="api-2ffd4a5759d59795"></a>
<!-- api: M:Inno.Editor.ImGui.ImGuiWidget.ImGuiWidget.HelpBox(System.String,System.String,System.Numerics.Vector4) 6b1bbb90e0095f22aaf43ded7371586eff938ef0833322472f1b581f1fe1d310 -->

```csharp
public void Inno.Editor.ImGui.ImGuiWidget.ImGuiWidget.HelpBox(string text, string icon, System.Numerics.Vector4 color)
```

Draws a wrapped contextual message with a semantic icon and a subdued status surface.

**Parameter `text`:** Literal message shown within the current content width.

**Parameter `icon`:** Icon-font glyph identifying the message severity.

**Parameter `color`:** Semantic accent for the icon, outline, and leading stripe.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.HelpBox.cs#L25).
