---
title: "ImGui — Method: GetContentRegionAvailable"
description: "Exact Method: GetContentRegionAvailable contracts in ImGui."
uid: api.inno.editor.imgui.editor-script.935e6d83b0af3053
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: editor-script
contracts:
  - project.inno-editor-imgui
  - manual.scripting.use-script-api
  - api.inno.editor.imgui.editor-script.00baca154a6f58ab#type-declaration
---
# `ImGui`: Method: GetContentRegionAvailable

Read these exact member contracts together with the [containing type](innoeditor.imgui.imgui.md) and its [shared ownership contract](../../projects/inno-editor-imgui.md).

**Source context:** `editor-script`, configuration `Debug`. This page does not certify execution on other platforms.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

## `GetContentRegionAvailable`

<a id="api-76e466cd39b1009d"></a>
<!-- api: M:InnoEditor.ImGui.ImGui.GetContentRegionAvailable 42a4003d1fd7750af08ca8bb60f8737b546a6dd45ed731105464768b214c9dca -->

```csharp
public static System.Numerics.Vector2 InnoEditor.ImGui.ImGui.GetContentRegionAvailable()
```

Gets the remaining content size in the current region.

**Returns:** The remaining local width and height.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/ImGui.cs#L962).
