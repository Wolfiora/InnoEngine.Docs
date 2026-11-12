---
title: "ImGui — Method: TableNextColumn"
description: "Exact Method: TableNextColumn contracts in ImGui."
uid: api.inno.editor.imgui.editor-script.537c5bbb6bf995a0
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: editor-script
contracts:
  - project.inno-editor-imgui
  - manual.scripting.use-script-api
  - api.inno.editor.imgui.editor-script.00baca154a6f58ab#type-declaration
---
# `ImGui`: Method: TableNextColumn

Read these exact member contracts together with the [containing type](innoeditor.imgui.imgui.md) and its [shared ownership contract](../../projects/inno-editor-imgui.md).

**Source context:** `editor-script`, configuration `Debug`. This page does not certify execution on other platforms.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

## `TableNextColumn`

<a id="api-fe82122ccb6ba073"></a>
<!-- api: M:InnoEditor.ImGui.ImGui.TableNextColumn fa988db2cb2dd3ccfd678c2dc9c1cffb5e01fa9e565fd8b3ff633db5a89e8109 -->

```csharp
public static bool InnoEditor.ImGui.ImGui.TableNextColumn()
```

Advances to the next table column.

**Returns:** `true` when the column is visible.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/ImGui.cs#L459).
