---
title: "ImGui — Method: GetViewport"
description: "Exact Method: GetViewport contracts in ImGui."
uid: api.inno.editor.imgui.editor-script.20f2b66110bd6a5c
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: editor-script
contracts:
  - project.inno-editor-imgui
  - manual.scripting.use-script-api
  - api.inno.editor.imgui.editor-script.00baca154a6f58ab#type-declaration
---
# `ImGui`: Method: GetViewport

Read these exact member contracts together with the [containing type](innoeditor.imgui.imgui.md) and its [shared ownership contract](../../projects/inno-editor-imgui.md).

**Source context:** `editor-script`, configuration `Debug`. This page does not certify execution on other platforms.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

## `GetViewport`

<a id="api-0512f8d9aa44eb50"></a>
<!-- api: M:InnoEditor.ImGui.ImGui.GetViewport df44435c1ff661366b5f3233ae16805e681e6f34bdd1e8734e03d81e917338c0 -->

```csharp
public static (uint, System.Numerics.Vector2) InnoEditor.ImGui.ImGui.GetViewport()
```

Gets the logical viewport identity and copied position for the current window.

**Returns:** The viewport ID and its screen-space origin.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Drawing/ImGui.Drawing.cs#L55).
