---
title: "ImGui — Method: GetDrawList"
description: "Exact Method: GetDrawList contracts in ImGui."
uid: api.inno.editor.imgui.editor-script.a5a9a47589e8651f
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: editor-script
contracts:
  - project.inno-editor-imgui
  - manual.scripting.use-script-api
  - api.inno.editor.imgui.editor-script.00baca154a6f58ab#type-declaration
---
# `ImGui`: Method: GetDrawList

Read these exact member contracts together with the [containing type](innoeditor.imgui.imgui.md) and its [shared ownership contract](../../projects/inno-editor-imgui.md).

**Source context:** `editor-script`, configuration `Debug`. This page does not certify execution on other platforms.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

## `GetDrawList`

<a id="api-b54e60ddb00743c7"></a>
<!-- api: M:InnoEditor.ImGui.ImGui.GetDrawList 76445d8a72eb17c68783bec3147e95ccd7148567b91488493827d2059b77ddbc -->

```csharp
public static InnoEditor.ImGui.EditorDrawList InnoEditor.ImGui.ImGui.GetDrawList()
```

Borrows drawing commands for the current window and frame without exposing native memory.

**Returns:** A value that rejects use after a window, frame, context or session change.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Drawing/ImGui.Drawing.cs#L118).
