---
title: "EditorStyleMetrics — Method: ZoomIn"
description: "Exact Method: ZoomIn contracts in EditorStyleMetrics."
uid: api.inno.editor.imgui.editor-script.a7747f04ad5385e5
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: editor-script
contracts:
  - project.inno-editor-imgui
  - manual.scripting.use-script-api
  - api.inno.editor.imgui.editor-script.933382d010c02cca#type-declaration
---
# `EditorStyleMetrics`: Method: ZoomIn

Read these exact member contracts together with the [containing type](innoeditor.imgui.editorstylemetrics.md) and its [shared ownership contract](../../projects/inno-editor-imgui.md).

**Source context:** `editor-script`, configuration `Debug`. This page does not certify execution on other platforms.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

## `ZoomIn`

<a id="api-71f438e49fbd9c63"></a>
<!-- api: M:InnoEditor.ImGui.EditorStyleMetrics.ZoomIn 87670b973ace6007c506dd47d3a92cc308d526d7c6b281c9c5505abe73ea7f3a -->

```csharp
public bool InnoEditor.ImGui.EditorStyleMetrics.ZoomIn()
```

Increases editor UI zoom by one bounded increment.

**Returns:** `true` when the requested zoom changed.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Styling/EditorStyleMetrics.cs#L125).
