---
title: "ImGuiWidget — Method: IsTreeNodeOpen"
description: "Exact Method: IsTreeNodeOpen contracts in ImGuiWidget."
uid: api.inno.editor.imgui.editor-script.5f3e5d1f3cd93792
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: editor-script
contracts:
  - project.inno-editor-imgui
  - manual.scripting.use-script-api
  - api.inno.editor.imgui.editor-script.7b683e110163fdd5#type-declaration
---
# `ImGuiWidget`: Method: IsTreeNodeOpen

Read these exact member contracts together with the [containing type](innoeditor.imgui.imguiwidget.md) and its [shared ownership contract](../../projects/inno-editor-imgui.md).

**Source context:** `editor-script`, configuration `Debug`. This page does not certify execution on other platforms.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

## `IsTreeNodeOpen`

<a id="api-be7de1d304a5125a"></a>
<!-- api: M:InnoEditor.ImGui.ImGuiWidget.IsTreeNodeOpen(System.String) c35fb22ceba49f3094e29eca258c118fdc415a1ab5aa64590ca54e9bb3d1e5e9 -->

```csharp
public bool InnoEditor.ImGui.ImGuiWidget.IsTreeNodeOpen(string id)
```

Reads a retained expansion value without submitting a native row or retaining domain objects.

**Parameter `id`:** The stable row identifier within this window and owner.

**Returns:** True when the row was explicitly expanded; unknown rows are collapsed.

**Throws `System.ArgumentException`:** The row identifier is empty or whitespace.

**Throws `System.InvalidOperationException`:** No valid drawing session or native frame is active.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.Tree.cs#L94).
