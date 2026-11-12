---
title: "ImGui — Method: GetFrameHeightWithSpacing"
description: "Exact Method: GetFrameHeightWithSpacing contracts in ImGui."
uid: api.inno.editor.imgui.editor-script.ec725ef0d0f63601
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: editor-script
contracts:
  - project.inno-editor-imgui
  - manual.scripting.use-script-api
  - api.inno.editor.imgui.editor-script.00baca154a6f58ab#type-declaration
---
# `ImGui`: Method: GetFrameHeightWithSpacing

Read these exact member contracts together with the [containing type](innoeditor.imgui.imgui.md) and its [shared ownership contract](../../projects/inno-editor-imgui.md).

**Source context:** `editor-script`, configuration `Debug`. This page does not certify execution on other platforms.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

## `GetFrameHeightWithSpacing`

<a id="api-c1ea0dbcdd334a91"></a>
<!-- api: M:InnoEditor.ImGui.ImGui.GetFrameHeightWithSpacing 60acfee04485d0a8b31fb0e16483c61385f6b2f13233a7d07441a93d31270bfd -->

```csharp
public static float InnoEditor.ImGui.ImGui.GetFrameHeightWithSpacing()
```

Gets the standard control height and following vertical spacing.

**Returns:** A copied value from the active presentation context.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/ImGui.Layout.cs#L137).
