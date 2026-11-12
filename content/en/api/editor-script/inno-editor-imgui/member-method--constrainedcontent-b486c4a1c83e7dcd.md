---
title: "ImGuiWidget — Method: ConstrainedContent"
description: "Exact Method: ConstrainedContent contracts in ImGuiWidget."
uid: api.inno.editor.imgui.editor-script.b486c4a1c83e7dcd
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: editor-script
contracts:
  - project.inno-editor-imgui
  - manual.scripting.use-script-api
  - api.inno.editor.imgui.editor-script.7b683e110163fdd5#type-declaration
---
# `ImGuiWidget`: Method: ConstrainedContent

Read these exact member contracts together with the [containing type](innoeditor.imgui.imguiwidget.md) and its [shared ownership contract](../../projects/inno-editor-imgui.md).

**Source context:** `editor-script`, configuration `Debug`. This page does not certify execution on other platforms.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

## `ConstrainedContent`

<a id="api-1baefbae4fb2f32f"></a>
<!-- api: M:InnoEditor.ImGui.ImGuiWidget.ConstrainedContent(System.String,System.Action,System.Boolean) f4cae6e3b227794eaaf852e79330eb1a3b8a61cc201cf9265d0d534747e55b7e -->

```csharp
public void InnoEditor.ImGui.ImGuiWidget.ConstrainedContent(string id, System.Action drawContent, bool useWindowPadding = true)
```

Draws a vertically auto-sized content region that is constrained to the current available
width and cannot create an independent scroll range.

**Parameter `id`:** Stable identifier used by ImGui to track the content region.

**Parameter `drawContent`:** Callback that draws the complete region contents.

**Parameter `useWindowPadding`:** Whether the region should apply the centralized standard window padding exactly once.

**Throws `System.ArgumentException`:** Thrown when `id` is empty.

**Throws `System.ArgumentNullException`:** Thrown when `drawContent` is `null`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.Panel.cs#L112).
