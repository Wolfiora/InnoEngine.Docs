---
title: "ImGuiWidget — Method: Hint"
description: "Exact Method: Hint contracts in ImGuiWidget."
uid: api.inno.editor.imgui.editor-script.153c8d71e0eea74f
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: editor-script
contracts:
  - project.inno-editor-imgui
  - manual.scripting.use-script-api
  - api.inno.editor.imgui.editor-script.7b683e110163fdd5#type-declaration
---
# `ImGuiWidget`: Method: Hint

Read these exact member contracts together with the [containing type](innoeditor.imgui.imguiwidget.md) and its [shared ownership contract](../../projects/inno-editor-imgui.md).

**Source context:** `editor-script`, configuration `Debug`. This page does not certify execution on other platforms.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

## `Hint`

<a id="api-ecdcf9738bafe128"></a>
<!-- api: M:InnoEditor.ImGui.ImGuiWidget.Hint(System.String) c119fe38834cde016a9595b9bc42927d2f07f2e985f97a65c54d825c893878dc -->

```csharp
public void InnoEditor.ImGui.ImGuiWidget.Hint(string text)
```

Draws disabled hint text that wraps to the current content width.

**Parameter `text`:** Hint text.

**Throws `System.ArgumentNullException`:** Thrown when `text` is `null`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.Panel.cs#L331).
