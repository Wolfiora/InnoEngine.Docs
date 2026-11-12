---
title: "ImGui — Method: GetScrollMaxY"
description: "Exact Method: GetScrollMaxY contracts in ImGui."
uid: api.inno.editor.imgui.editor-script.a1996a8c86cbf8ac
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: editor-script
contracts:
  - project.inno-editor-imgui
  - manual.scripting.use-script-api
  - api.inno.editor.imgui.editor-script.00baca154a6f58ab#type-declaration
---
# `ImGui`: Method: GetScrollMaxY

Read these exact member contracts together with the [containing type](innoeditor.imgui.imgui.md) and its [shared ownership contract](../../projects/inno-editor-imgui.md).

**Source context:** `editor-script`, configuration `Debug`. This page does not certify execution on other platforms.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

## `GetScrollMaxY`

<a id="api-12c6cec11396f706"></a>
<!-- api: M:InnoEditor.ImGui.ImGui.GetScrollMaxY d1ff160c30beb1cb3f9577f67c9c38ffd9f6d2ceddf68d7de0ec665dcfba71e3 -->

```csharp
public static float InnoEditor.ImGui.ImGui.GetScrollMaxY()
```

Gets the current vertical scroll range.

**Returns:** A copied value from the active presentation context.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/ImGui.Layout.cs#L265).
