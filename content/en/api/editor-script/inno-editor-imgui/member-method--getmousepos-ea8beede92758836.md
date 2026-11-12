---
title: "ImGui — Method: GetMousePos"
description: "Exact Method: GetMousePos contracts in ImGui."
uid: api.inno.editor.imgui.editor-script.ea8beede92758836
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: editor-script
contracts:
  - project.inno-editor-imgui
  - manual.scripting.use-script-api
  - api.inno.editor.imgui.editor-script.00baca154a6f58ab#type-declaration
---
# `ImGui`: Method: GetMousePos

Read these exact member contracts together with the [containing type](innoeditor.imgui.imgui.md) and its [shared ownership contract](../../projects/inno-editor-imgui.md).

**Source context:** `editor-script`, configuration `Debug`. This page does not certify execution on other platforms.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

## `GetMousePos`

<a id="api-c2a11ab5ae9e0675"></a>
<!-- api: M:InnoEditor.ImGui.ImGui.GetMousePos 0ece6763d422384d67ce911c3e0dbc755efeabb9d5040970c93317166b11087e -->

```csharp
public static System.Numerics.Vector2 InnoEditor.ImGui.ImGui.GetMousePos()
```

Gets the current pointer position in screen-space UI units.

**Returns:** A copied value from the active presentation context.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/ImGui.Input.cs#L17).
