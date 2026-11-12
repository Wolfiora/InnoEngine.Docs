---
title: "ImGui — Method: GetLayout"
description: "Exact Method: GetLayout contracts in ImGui."
uid: api.inno.editor.imgui.editor-script.3496a8290dfca759
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: editor-script
contracts:
  - project.inno-editor-imgui
  - manual.scripting.use-script-api
  - api.inno.editor.imgui.editor-script.00baca154a6f58ab#type-declaration
---
# `ImGui`: Method: GetLayout

Read these exact member contracts together with the [containing type](innoeditor.imgui.imgui.md) and its [shared ownership contract](../../projects/inno-editor-imgui.md).

**Source context:** `editor-script`, configuration `Debug`. This page does not certify execution on other platforms.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

## `GetLayout`

<a id="api-6500ffa3831daf8e"></a>
<!-- api: M:InnoEditor.ImGui.ImGui.GetLayout 5673b2904d37500d995d2805bb691bf2ff29bcc3e14768ae2f4aa1f3357cb11e -->

```csharp
public static InnoEditor.ImGui.EditorUiLayout InnoEditor.ImGui.ImGui.GetLayout()
```

Copies the current UI layout metrics.

**Returns:** Value metrics valid independently from the native style pointer.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Drawing/ImGui.Drawing.cs#L16).
