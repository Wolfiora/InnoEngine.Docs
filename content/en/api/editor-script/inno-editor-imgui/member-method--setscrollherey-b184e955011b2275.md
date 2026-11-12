---
title: "ImGui — Method: SetScrollHereY"
description: "Exact Method: SetScrollHereY contracts in ImGui."
uid: api.inno.editor.imgui.editor-script.b184e955011b2275
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: editor-script
contracts:
  - project.inno-editor-imgui
  - manual.scripting.use-script-api
  - api.inno.editor.imgui.editor-script.00baca154a6f58ab#type-declaration
---
# `ImGui`: Method: SetScrollHereY

Read these exact member contracts together with the [containing type](innoeditor.imgui.imgui.md) and its [shared ownership contract](../../projects/inno-editor-imgui.md).

**Source context:** `editor-script`, configuration `Debug`. This page does not certify execution on other platforms.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

## `SetScrollHereY`

<a id="api-0cdb0f9b2d83d8cd"></a>
<!-- api: M:InnoEditor.ImGui.ImGui.SetScrollHereY(System.Single) be4037a60098a106fe87fd229e7d5ceb8e0f1f6dac07b5d63e668217345e7153 -->

```csharp
public static void InnoEditor.ImGui.ImGui.SetScrollHereY(float ratio = 0.5)
```

Scrolls the most recently submitted control into the requested relative position.

**Parameter `ratio`:** The relative alignment from zero through one.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/ImGui.Layout.cs#L277).
