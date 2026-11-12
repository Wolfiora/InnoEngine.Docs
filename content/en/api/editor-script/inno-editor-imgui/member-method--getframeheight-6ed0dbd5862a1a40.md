---
title: "ImGui — Method: GetFrameHeight"
description: "Exact Method: GetFrameHeight contracts in ImGui."
uid: api.inno.editor.imgui.editor-script.6ed0dbd5862a1a40
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: editor-script
contracts:
  - project.inno-editor-imgui
  - manual.scripting.use-script-api
  - api.inno.editor.imgui.editor-script.00baca154a6f58ab#type-declaration
---
# `ImGui`: Method: GetFrameHeight

Read these exact member contracts together with the [containing type](innoeditor.imgui.imgui.md) and its [shared ownership contract](../../projects/inno-editor-imgui.md).

**Source context:** `editor-script`, configuration `Debug`. This page does not certify execution on other platforms.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

## `GetFrameHeight`

<a id="api-b13d56aa401c371c"></a>
<!-- api: M:InnoEditor.ImGui.ImGui.GetFrameHeight 948130a61ef420e2ac2397931ac7adf6d7c01f093eed597f1f36cffa17bc9185 -->

```csharp
public static float InnoEditor.ImGui.ImGui.GetFrameHeight()
```

Gets the standard control height including frame padding.

**Returns:** A copied value from the active presentation context.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/ImGui.Layout.cs#L113).
