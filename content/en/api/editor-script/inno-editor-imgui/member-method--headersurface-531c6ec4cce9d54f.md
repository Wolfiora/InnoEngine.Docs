---
title: "ImGuiWidget — Method: HeaderSurface"
description: "Exact Method: HeaderSurface contracts in ImGuiWidget."
uid: api.inno.editor.imgui.editor-script.531c6ec4cce9d54f
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: editor-script
contracts:
  - project.inno-editor-imgui
  - manual.scripting.use-script-api
  - api.inno.editor.imgui.editor-script.7b683e110163fdd5#type-declaration
---
# `ImGuiWidget`: Method: HeaderSurface

Read these exact member contracts together with the [containing type](innoeditor.imgui.imguiwidget.md) and its [shared ownership contract](../../projects/inno-editor-imgui.md).

**Source context:** `editor-script`, configuration `Debug`. This page does not certify execution on other platforms.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

## `HeaderSurface`

<a id="api-0ebcc2f2b7097b88"></a>
<!-- api: M:InnoEditor.ImGui.ImGuiWidget.HeaderSurface(System.String,System.Action,System.Boolean) 32cf71b1b816b616039c52bfdafb8228de3729002a944f1631e87c01c24fa58f -->

```csharp
public void InnoEditor.ImGui.ImGuiWidget.HeaderSurface(string id, System.Action drawContent, bool spanWindowPadding = false)
```

Draws a square-cornered editor header surface using the shared target-header palette,
border, and padding.

**Parameter `id`:** Stable identifier used by ImGui to track the header region.

**Parameter `drawContent`:** Callback that draws the complete header content.

**Parameter `spanWindowPadding`:** Whether the header should extend through the current parent window padding to both edges.

**Throws `System.ArgumentException`:** Thrown when `id` is empty.

**Throws `System.ArgumentNullException`:** Thrown when `drawContent` is `null`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.Panel.cs#L159).
