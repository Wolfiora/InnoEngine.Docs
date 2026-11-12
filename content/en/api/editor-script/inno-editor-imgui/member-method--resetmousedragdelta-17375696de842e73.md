---
title: "ImGui — Method: ResetMouseDragDelta"
description: "Exact Method: ResetMouseDragDelta contracts in ImGui."
uid: api.inno.editor.imgui.editor-script.17375696de842e73
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: editor-script
contracts:
  - project.inno-editor-imgui
  - manual.scripting.use-script-api
  - api.inno.editor.imgui.editor-script.00baca154a6f58ab#type-declaration
---
# `ImGui`: Method: ResetMouseDragDelta

Read these exact member contracts together with the [containing type](innoeditor.imgui.imgui.md) and its [shared ownership contract](../../projects/inno-editor-imgui.md).

**Source context:** `editor-script`, configuration `Debug`. This page does not certify execution on other platforms.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

## `ResetMouseDragDelta`

<a id="api-f553e127235a6d5e"></a>
<!-- api: M:InnoEditor.ImGui.ImGui.ResetMouseDragDelta(InnoEditor.ImGui.ImGuiMouseButton) f3c17bfb38d6e2c095ce05317374157a16a48b5615d2b92eb390cbe2d134161e -->

```csharp
public static void InnoEditor.ImGui.ImGui.ResetMouseDragDelta(InnoEditor.ImGui.ImGuiMouseButton button)
```

Resets the consumed pointer-drag distance.

**Parameter `button`:** The pointer button to inspect.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/ImGui.Input.cs#L114).
