---
title: "ImGuiWidget — Method: SectionLayout"
description: "Exact Method: SectionLayout contracts in ImGuiWidget."
uid: api.inno.editor.imgui.editor-script.56e43b8a520d91b9
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: editor-script
contracts:
  - project.inno-editor-imgui
  - manual.scripting.use-script-api
  - api.inno.editor.imgui.editor-script.7b683e110163fdd5#type-declaration
---
# `ImGuiWidget`: Method: SectionLayout

Read these exact member contracts together with the [containing type](innoeditor.imgui.imguiwidget.md) and its [shared ownership contract](../../projects/inno-editor-imgui.md).

**Source context:** `editor-script`, configuration `Debug`. This page does not certify execution on other platforms.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

## `SectionLayout`

<a id="api-15af20283ea1762d"></a>
<!-- api: M:InnoEditor.ImGui.ImGuiWidget.SectionLayout(System.Action) b9f308165ebe27a5ca408208e76cfd7edb5f3b1cfc603e0c5f7533699288193d -->

```csharp
public void InnoEditor.ImGui.ImGuiWidget.SectionLayout(System.Action drawContent)
```

Draws content in a scope where consecutive section headers become framed fieldsets.

**Parameter `drawContent`:** Callback that draws all content participating in the section layout.

**Throws `System.ArgumentNullException`:** Thrown when `drawContent` is `null`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.HelpBox.cs#L110).
