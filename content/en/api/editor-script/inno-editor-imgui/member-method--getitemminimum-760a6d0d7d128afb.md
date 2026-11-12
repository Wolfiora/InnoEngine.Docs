---
title: "ImGui — Method: GetItemMinimum"
description: "Exact Method: GetItemMinimum contracts in ImGui."
uid: api.inno.editor.imgui.editor-script.760a6d0d7d128afb
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: editor-script
contracts:
  - project.inno-editor-imgui
  - manual.scripting.use-script-api
  - api.inno.editor.imgui.editor-script.00baca154a6f58ab#type-declaration
---
# `ImGui`: Method: GetItemMinimum

Read these exact member contracts together with the [containing type](innoeditor.imgui.imgui.md) and its [shared ownership contract](../../projects/inno-editor-imgui.md).

**Source context:** `editor-script`, configuration `Debug`. This page does not certify execution on other platforms.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

## `GetItemMinimum`

<a id="api-2c3cf1bdd399740e"></a>
<!-- api: M:InnoEditor.ImGui.ImGui.GetItemMinimum 0fd0946890c1b18daf814c7acc8f169ab75225217fcf4e3e20a32b9faaf83bde -->

```csharp
public static System.Numerics.Vector2 InnoEditor.ImGui.ImGui.GetItemMinimum()
```

Gets the minimum screen-space corner of the previous item.

**Returns:** The item minimum corner.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/ImGui.cs#L1010).
