---
title: "ImGui — Method: IsMouseButtonDown"
description: "Exact Method: IsMouseButtonDown contracts in ImGui."
uid: api.inno.editor.imgui.b9dba1e78919cbb4
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: source-clr
contracts:
  - project.inno-editor-imgui
  - api.inno.editor.imgui.e0d3ffa7c449fd75#type-declaration
---
# `ImGui`: Method: IsMouseButtonDown

Read these exact member contracts together with the [containing type](imgui.md) and its [shared ownership contract](../../../projects/inno-editor-imgui.md).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `IsMouseButtonDown`

<a id="api-112cda887197f7f7"></a>
<!-- api: M:Inno.Editor.ImGui.ImGui.IsMouseButtonDown(Inno.Editor.ImGui.ImGuiMouseButton) a0a7e33833ecc7932278105a0cceae4c0fef0fe0aa1f9a897a779160ec58c792 -->

```csharp
public static bool Inno.Editor.ImGui.ImGui.IsMouseButtonDown(Inno.Editor.ImGui.ImGuiMouseButton button = Inno.Editor.ImGui.ImGuiMouseButton.Left)
```

Gets whether a mouse button is held in the current Editor UI frame, including input consumed by UI controls.

**Parameter `button`:** The UI mouse button to query.

**Returns:** True while the button is held; callers must also check their item's active or hovered state before editing.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/ImGui.cs#L1135).
