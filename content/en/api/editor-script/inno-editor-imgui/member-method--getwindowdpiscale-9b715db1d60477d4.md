---
title: "ImGui — Method: GetWindowDpiScale"
description: "Exact Method: GetWindowDpiScale contracts in ImGui."
uid: api.inno.editor.imgui.editor-script.9b715db1d60477d4
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: editor-script
contracts:
  - project.inno-editor-imgui
  - manual.scripting.use-script-api
  - api.inno.editor.imgui.editor-script.00baca154a6f58ab#type-declaration
---
# `ImGui`: Method: GetWindowDpiScale

Read these exact member contracts together with the [containing type](innoeditor.imgui.imgui.md) and its [shared ownership contract](../../projects/inno-editor-imgui.md).

**Source context:** `editor-script`, configuration `Debug`. This page does not certify execution on other platforms.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

## `GetWindowDpiScale`

<a id="api-9ae08c29db1631fa"></a>
<!-- api: M:InnoEditor.ImGui.ImGui.GetWindowDpiScale dc7b4b44da935252237ab8a85c669bfb7c799033e5048a4f50a2729df13f6ec0 -->

```csharp
public static float InnoEditor.ImGui.ImGui.GetWindowDpiScale()
```

Gets the native viewport scale for the current window.

**Returns:** A copied value from the active presentation context.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/ImGui.Layout.cs#L149).
