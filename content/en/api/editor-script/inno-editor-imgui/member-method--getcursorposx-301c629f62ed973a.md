---
title: "ImGui — Method: GetCursorPosX"
description: "Exact Method: GetCursorPosX contracts in ImGui."
uid: api.inno.editor.imgui.editor-script.301c629f62ed973a
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: editor-script
contracts:
  - project.inno-editor-imgui
  - manual.scripting.use-script-api
  - api.inno.editor.imgui.editor-script.00baca154a6f58ab#type-declaration
---
# `ImGui`: Method: GetCursorPosX

Read these exact member contracts together with the [containing type](innoeditor.imgui.imgui.md) and its [shared ownership contract](../../projects/inno-editor-imgui.md).

**Source context:** `editor-script`, configuration `Debug`. This page does not certify execution on other platforms.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

## `GetCursorPosX`

<a id="api-d0c554184eea1fca"></a>
<!-- api: M:InnoEditor.ImGui.ImGui.GetCursorPosX 07f929794fc0bc8e6115b4868fa08103f37f913826168059e1a3e3404a81b635 -->

```csharp
public static float InnoEditor.ImGui.ImGui.GetCursorPosX()
```

Gets the local horizontal layout cursor.

**Returns:** A copied value from the active presentation context.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/ImGui.Layout.cs#L53).
