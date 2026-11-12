---
title: "ImGui — Method: GetMouseDragDelta"
description: "Exact Method: GetMouseDragDelta contracts in ImGui."
uid: api.inno.editor.imgui.editor-script.74948268e1b14c0f
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: editor-script
contracts:
  - project.inno-editor-imgui
  - manual.scripting.use-script-api
  - api.inno.editor.imgui.editor-script.00baca154a6f58ab#type-declaration
---
# `ImGui`: Method: GetMouseDragDelta

Read these exact member contracts together with the [containing type](innoeditor.imgui.imgui.md) and its [shared ownership contract](../../projects/inno-editor-imgui.md).

**Source context:** `editor-script`, configuration `Debug`. This page does not certify execution on other platforms.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

## `GetMouseDragDelta`

<a id="api-56ae490290a6014c"></a>
<!-- api: M:InnoEditor.ImGui.ImGui.GetMouseDragDelta(InnoEditor.ImGui.ImGuiMouseButton,System.Single) ee67dcc430e99432bc868812bc828acecf1162329f3bcc7622e5cac92723940b -->

```csharp
public static System.Numerics.Vector2 InnoEditor.ImGui.ImGui.GetMouseDragDelta(InnoEditor.ImGui.ImGuiMouseButton button = InnoEditor.ImGui.ImGuiMouseButton.Left, float threshold = -1)
```

Gets accumulated pointer displacement from the current UI drag's starting position for timeline and canvas controls.

**Parameter `button`:** The button that owns the drag.

**Parameter `threshold`:** Movement required to start dragging, or a negative value to use the Editor's configured threshold.

**Returns:** Displacement in UI coordinates, or zero before the drag threshold is crossed or when no drag is available.
The value is cumulative; it must be applied to a captured starting value, not added again each frame.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/ImGui.cs#L1154).
