---
title: "ImGuiWidget — Method: HelpBox"
description: "Exact Method: HelpBox contracts in ImGuiWidget."
uid: api.inno.editor.imgui.editor-script.3b93a98453073461
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: editor-script
contracts:
  - project.inno-editor-imgui
  - manual.scripting.use-script-api
  - api.inno.editor.imgui.editor-script.7b683e110163fdd5#type-declaration
---
# `ImGuiWidget`: Method: HelpBox

Read these exact member contracts together with the [containing type](innoeditor.imgui.imguiwidget.md) and its [shared ownership contract](../../projects/inno-editor-imgui.md).

**Source context:** `editor-script`, configuration `Debug`. This page does not certify execution on other platforms.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

## `HelpBox`

<a id="api-2a244f8564b9f85d"></a>
<!-- api: M:InnoEditor.ImGui.ImGuiWidget.HelpBox(System.String,System.String,System.Numerics.Vector4) 9c3f5c6bb3a6cee217327deae105e0ab11a623f5d210756e01e997e3049e3452 -->

```csharp
public void InnoEditor.ImGui.ImGuiWidget.HelpBox(string text, string icon, System.Numerics.Vector4 color)
```

Draws a wrapped contextual message with a semantic icon and a subdued status surface.

**Parameter `text`:** Literal message shown within the current content width.

**Parameter `icon`:** Icon-font glyph identifying the message severity.

**Parameter `color`:** Semantic accent for the icon, outline, and leading stripe.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.HelpBox.cs#L25).
