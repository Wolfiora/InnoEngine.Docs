---
title: "ImGui — Method: GetTableBounds"
description: "Exact Method: GetTableBounds contracts in ImGui."
uid: api.inno.editor.imgui.editor-script.f01592cb98ebbc21
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: editor-script
contracts:
  - project.inno-editor-imgui
  - manual.scripting.use-script-api
  - api.inno.editor.imgui.editor-script.00baca154a6f58ab#type-declaration
---
# `ImGui`: Method: GetTableBounds

Read these exact member contracts together with the [containing type](innoeditor.imgui.imgui.md) and its [shared ownership contract](../../projects/inno-editor-imgui.md).

**Source context:** `editor-script`, configuration `Debug`. This page does not certify execution on other platforms.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

## `GetTableBounds`

<a id="api-1d4d41d870d7a8bb"></a>
<!-- api: M:InnoEditor.ImGui.ImGui.GetTableBounds b3a7bd57abd2ae7049a79ceee757a34d437ba730ea9484238eadd0c1f9cad2c7 -->

```csharp
public static (float, float, float, float) InnoEditor.ImGui.ImGui.GetTableBounds()
```

Gets the table and current row bounds needed by row overlays.

**Returns:** The table's horizontal bounds and current row's vertical bounds.

**Throws `System.InvalidOperationException`:** No valid drawing frame or active table exists.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Drawing/ImGui.Drawing.cs#L71).
