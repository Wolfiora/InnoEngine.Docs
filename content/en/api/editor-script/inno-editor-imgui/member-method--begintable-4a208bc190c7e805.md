---
title: "ImGui — Method: BeginTable"
description: "Exact Method: BeginTable contracts in ImGui."
uid: api.inno.editor.imgui.editor-script.4a208bc190c7e805
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: editor-script
contracts:
  - project.inno-editor-imgui
  - manual.scripting.use-script-api
  - api.inno.editor.imgui.editor-script.00baca154a6f58ab#type-declaration
---
# `ImGui`: Method: BeginTable

Read these exact member contracts together with the [containing type](innoeditor.imgui.imgui.md) and its [shared ownership contract](../../projects/inno-editor-imgui.md).

**Source context:** `editor-script`, configuration `Debug`. This page does not certify execution on other platforms.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

## `BeginTable`

<a id="api-e610d8e6dc16e206"></a>
<!-- api: M:InnoEditor.ImGui.ImGui.BeginTable(System.String,System.Int32,InnoEditor.ImGui.ImGuiTableFlags,System.Numerics.Vector2,System.Single) 1e64923d51ae7554a3a7b69bf5688b0c23b23b99dba6a5d712e2c497322a57ec -->

```csharp
public static bool InnoEditor.ImGui.ImGui.BeginTable(string id, int columns, InnoEditor.ImGui.ImGuiTableFlags flags = InnoEditor.ImGui.ImGuiTableFlags.None, System.Numerics.Vector2 size = default(System.Numerics.Vector2), float innerWidth = 0)
```

Begins a table.

**Parameter `id`:** The table identity.

**Parameter `columns`:** The positive column count.

**Parameter `flags`:** Table behavior.

**Parameter `size`:** The requested outer size.

**Returns:** `true` when table contents should be submitted.

**Parameter `innerWidth`:** Optional inner scrolling width; zero uses the outer size.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/ImGui.cs#L386).
