---
title: "EditorStyleMetrics — Method: ZoomOut"
description: "Exact Method: ZoomOut contracts in EditorStyleMetrics."
uid: api.inno.editor.imgui.editor-script.de79f7d1fd5a7727
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: editor-script
contracts:
  - project.inno-editor-imgui
  - manual.scripting.use-script-api
  - api.inno.editor.imgui.editor-script.933382d010c02cca#type-declaration
---
# `EditorStyleMetrics`: Method: ZoomOut

Read these exact member contracts together with the [containing type](innoeditor.imgui.editorstylemetrics.md) and its [shared ownership contract](../../projects/inno-editor-imgui.md).

**Source context:** `editor-script`, configuration `Debug`. This page does not certify execution on other platforms.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

## `ZoomOut`

<a id="api-4aa7d587ae506d88"></a>
<!-- api: M:InnoEditor.ImGui.EditorStyleMetrics.ZoomOut f6bf511eacf6207e464638d6a36f9740427ee5b0da7b52974905fa9a493005d9 -->

```csharp
public bool InnoEditor.ImGui.EditorStyleMetrics.ZoomOut()
```

Decreases editor UI zoom by one bounded increment.

**Returns:** `true` when the requested zoom changed.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Styling/EditorStyleMetrics.cs#L133).
