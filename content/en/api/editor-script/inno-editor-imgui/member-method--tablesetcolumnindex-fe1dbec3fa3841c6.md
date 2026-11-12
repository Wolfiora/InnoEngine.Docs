---
title: "ImGui — Method: TableSetColumnIndex"
description: "Exact Method: TableSetColumnIndex contracts in ImGui."
uid: api.inno.editor.imgui.editor-script.fe1dbec3fa3841c6
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: editor-script
contracts:
  - project.inno-editor-imgui
  - manual.scripting.use-script-api
  - api.inno.editor.imgui.editor-script.00baca154a6f58ab#type-declaration
---
# `ImGui`: Method: TableSetColumnIndex

Read these exact member contracts together with the [containing type](innoeditor.imgui.imgui.md) and its [shared ownership contract](../../projects/inno-editor-imgui.md).

**Source context:** `editor-script`, configuration `Debug`. This page does not certify execution on other platforms.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

## `TableSetColumnIndex`

<a id="api-2f6197c4c941d55d"></a>
<!-- api: M:InnoEditor.ImGui.ImGui.TableSetColumnIndex(System.Int32) b32508b25074855ba2412d4ceaa54cbe093402e249f268476a03182a450ab1dc -->

```csharp
public static bool InnoEditor.ImGui.ImGui.TableSetColumnIndex(int index)
```

Selects a declared table column for subsequent controls.

**Parameter `index`:** The zero-based item index.

**Returns:** True when the documented control event or condition is present; otherwise false.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/ImGui.Tables.cs#L20).
