---
title: "ImGui — Method: GetMouseDragDelta"
description: "Exact Method: GetMouseDragDelta contracts in ImGui."
uid: api.inno.editor.imgui.deb87b51e1fcc597
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: source-clr
contracts:
  - project.inno-editor-imgui
  - api.inno.editor.imgui.e0d3ffa7c449fd75#type-declaration
---
# `ImGui`: Method: GetMouseDragDelta

Read these exact member contracts together with the [containing type](imgui.md) and its [shared ownership contract](../../../projects/inno-editor-imgui.md).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetMouseDragDelta`

<a id="api-046828c7bd02e2f9"></a>
<!-- api: M:Inno.Editor.ImGui.ImGui.GetMouseDragDelta(Inno.Editor.ImGui.ImGuiMouseButton,System.Single) aa290c4f78184f4dcbaa11f0b92b0d6c90def2aefe6462dc6a0caaa9ade41b1e -->

```csharp
public static System.Numerics.Vector2 Inno.Editor.ImGui.ImGui.GetMouseDragDelta(Inno.Editor.ImGui.ImGuiMouseButton button = Inno.Editor.ImGui.ImGuiMouseButton.Left, float threshold = -1)
```

Gets accumulated pointer displacement from the current UI drag's starting position for timeline and canvas controls.

**Parameter `button`:** The button that owns the drag.

**Parameter `threshold`:** Movement required to start dragging, or a negative value to use the Editor's configured threshold.

**Returns:** Displacement in UI coordinates, or zero before the drag threshold is crossed or when no drag is available.
The value is cumulative; it must be applied to a captured starting value, not added again each frame.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/ImGui.cs#L1154).
