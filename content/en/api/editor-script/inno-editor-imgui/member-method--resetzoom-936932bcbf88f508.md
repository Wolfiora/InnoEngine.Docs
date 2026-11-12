---
title: "EditorStyleMetrics — Method: ResetZoom"
description: "Exact Method: ResetZoom contracts in EditorStyleMetrics."
uid: api.inno.editor.imgui.editor-script.936932bcbf88f508
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: editor-script
contracts:
  - project.inno-editor-imgui
  - manual.scripting.use-script-api
  - api.inno.editor.imgui.editor-script.933382d010c02cca#type-declaration
---
# `EditorStyleMetrics`: Method: ResetZoom

Read these exact member contracts together with the [containing type](innoeditor.imgui.editorstylemetrics.md) and its [shared ownership contract](../../projects/inno-editor-imgui.md).

**Source context:** `editor-script`, configuration `Debug`. This page does not certify execution on other platforms.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

## `ResetZoom`

<a id="api-0d5134506ae647c9"></a>
<!-- api: M:InnoEditor.ImGui.EditorStyleMetrics.ResetZoom d939521a98ac38e08e33327e6f7a2850628c5c54da17204ba899d2c44ff06119 -->

```csharp
public bool InnoEditor.ImGui.EditorStyleMetrics.ResetZoom()
```

Restores the baseline editor UI zoom.

**Returns:** `true` when the requested zoom changed.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Styling/EditorStyleMetrics.cs#L141).
