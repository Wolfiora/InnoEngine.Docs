---
title: "ImGui — Method: GetWindowBounds"
description: "Exact Method: GetWindowBounds contracts in ImGui."
uid: api.inno.editor.imgui.editor-script.db2241e4466efec7
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: editor-script
contracts:
  - project.inno-editor-imgui
  - manual.scripting.use-script-api
  - api.inno.editor.imgui.editor-script.00baca154a6f58ab#type-declaration
---
# `ImGui`: Method: GetWindowBounds

Read these exact member contracts together with the [containing type](innoeditor.imgui.imgui.md) and its [shared ownership contract](../../projects/inno-editor-imgui.md).

**Source context:** `editor-script`, configuration `Debug`. This page does not certify execution on other platforms.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

## `GetWindowBounds`

<a id="api-f3bd9ee2fad787fe"></a>
<!-- api: M:InnoEditor.ImGui.ImGui.GetWindowBounds 45b990727248f9d560bd9ee1befefac0c4fd6e34ebab3706b5d403d321273bde -->

```csharp
public static (float, float, System.Numerics.Vector2, System.Numerics.Vector2) InnoEditor.ImGui.ImGui.GetWindowBounds()
```

Gets copied inner and work bounds for the current window.

**Returns:** Screen-space horizontal bounds and work maximum.

**Throws `System.InvalidOperationException`:** No valid drawing session or native frame is active.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Drawing/ImGui.Drawing.cs#L89).
