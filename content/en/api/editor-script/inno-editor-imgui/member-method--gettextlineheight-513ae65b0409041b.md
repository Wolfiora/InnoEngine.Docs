---
title: "ImGui — Method: GetTextLineHeight"
description: "Exact Method: GetTextLineHeight contracts in ImGui."
uid: api.inno.editor.imgui.editor-script.513ae65b0409041b
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: editor-script
contracts:
  - project.inno-editor-imgui
  - manual.scripting.use-script-api
  - api.inno.editor.imgui.editor-script.00baca154a6f58ab#type-declaration
---
# `ImGui`: Method: GetTextLineHeight

Read these exact member contracts together with the [containing type](innoeditor.imgui.imgui.md) and its [shared ownership contract](../../projects/inno-editor-imgui.md).

**Source context:** `editor-script`, configuration `Debug`. This page does not certify execution on other platforms.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

## `GetTextLineHeight`

<a id="api-28255a6c414c876c"></a>
<!-- api: M:InnoEditor.ImGui.ImGui.GetTextLineHeight 320ccd7a585c6016b1c38632f2f70eee9ac13b9e03dc41d0065b04d56bbd117f -->

```csharp
public static float InnoEditor.ImGui.ImGui.GetTextLineHeight()
```

Gets the active font line height without spacing.

**Returns:** A copied value from the active presentation context.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/ImGui.Layout.cs#L125).
