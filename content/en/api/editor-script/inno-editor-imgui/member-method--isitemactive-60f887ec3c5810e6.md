---
title: "ImGui — Method: IsItemActive"
description: "Exact Method: IsItemActive contracts in ImGui."
uid: api.inno.editor.imgui.editor-script.60f887ec3c5810e6
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: editor-script
contracts:
  - project.inno-editor-imgui
  - manual.scripting.use-script-api
  - api.inno.editor.imgui.editor-script.00baca154a6f58ab#type-declaration
---
# `ImGui`: Method: IsItemActive

Read these exact member contracts together with the [containing type](innoeditor.imgui.imgui.md) and its [shared ownership contract](../../projects/inno-editor-imgui.md).

**Source context:** `editor-script`, configuration `Debug`. This page does not certify execution on other platforms.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

## `IsItemActive`

<a id="api-dcbb1f5ee4389f86"></a>
<!-- api: M:InnoEditor.ImGui.ImGui.IsItemActive e20cfe79a45ae54e24d6d3b9112a68abd2c44a401dd62425567c6bafc227da7e -->

```csharp
public static bool InnoEditor.ImGui.ImGui.IsItemActive()
```

Gets whether the previous item is active.

**Returns:** `true` while the item owns an active interaction.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/ImGui.cs#L1105).
