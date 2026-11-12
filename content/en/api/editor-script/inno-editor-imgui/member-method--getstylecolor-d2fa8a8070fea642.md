---
title: "ImGui — Method: GetStyleColor"
description: "Exact Method: GetStyleColor contracts in ImGui."
uid: api.inno.editor.imgui.editor-script.d2fa8a8070fea642
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: editor-script
contracts:
  - project.inno-editor-imgui
  - manual.scripting.use-script-api
  - api.inno.editor.imgui.editor-script.00baca154a6f58ab#type-declaration
---
# `ImGui`: Method: GetStyleColor

Read these exact member contracts together with the [containing type](innoeditor.imgui.imgui.md) and its [shared ownership contract](../../projects/inno-editor-imgui.md).

**Source context:** `editor-script`, configuration `Debug`. This page does not certify execution on other platforms.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

## `GetStyleColor`

<a id="api-3d72f44a84e6ec0e"></a>
<!-- api: M:InnoEditor.ImGui.ImGui.GetStyleColor(InnoEditor.ImGui.ImGuiCol) de0cad3a897b73d3de6ad4655ec76b332f3d7a6e40668a30e2d9b5ca54aeee01 -->

```csharp
public static uint InnoEditor.ImGui.ImGui.GetStyleColor(InnoEditor.ImGui.ImGuiCol color)
```

Gets the current style color including the active alpha.

**Parameter `color`:** The packed RGBA color or semantic style slot.

**Returns:** A copied value from the active presentation context.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/ImGui.Drawing.cs#L20).
