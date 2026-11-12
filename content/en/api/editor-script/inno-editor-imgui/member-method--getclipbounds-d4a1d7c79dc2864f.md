---
title: "ImGui — Method: GetClipBounds"
description: "Exact Method: GetClipBounds contracts in ImGui."
uid: api.inno.editor.imgui.editor-script.d4a1d7c79dc2864f
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: editor-script
contracts:
  - project.inno-editor-imgui
  - manual.scripting.use-script-api
  - api.inno.editor.imgui.editor-script.00baca154a6f58ab#type-declaration
---
# `ImGui`: Method: GetClipBounds

Read these exact member contracts together with the [containing type](innoeditor.imgui.imgui.md) and its [shared ownership contract](../../projects/inno-editor-imgui.md).

**Source context:** `editor-script`, configuration `Debug`. This page does not certify execution on other platforms.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

## `GetClipBounds`

<a id="api-8486df673c2c3e1e"></a>
<!-- api: M:InnoEditor.ImGui.ImGui.GetClipBounds 726159f20d1fdcffb02899d71c3e09d654b26ebb712b0cf4e739e0f450679fc8 -->

```csharp
public static (System.Numerics.Vector2, System.Numerics.Vector2) InnoEditor.ImGui.ImGui.GetClipBounds()
```

Copies the current window's effective clip after parent and viewport clipping.

**Returns:** Screen-space minimum and maximum values for bounding frame-local submission work.

**Throws `System.InvalidOperationException`:** No valid drawing session or native frame is active.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Drawing/ImGui.Drawing.cs#L105).
