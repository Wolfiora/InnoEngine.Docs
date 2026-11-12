---
title: "ImGui — Method: IsKeyDown"
description: "Exact Method: IsKeyDown contracts in ImGui."
uid: api.inno.editor.imgui.editor-script.effdde9608785117
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: editor-script
contracts:
  - project.inno-editor-imgui
  - manual.scripting.use-script-api
  - api.inno.editor.imgui.editor-script.00baca154a6f58ab#type-declaration
---
# `ImGui`: Method: IsKeyDown

Read these exact member contracts together with the [containing type](innoeditor.imgui.imgui.md) and its [shared ownership contract](../../projects/inno-editor-imgui.md).

**Source context:** `editor-script`, configuration `Debug`. This page does not certify execution on other platforms.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

## `IsKeyDown`

<a id="api-d4b91a96eb815f0b"></a>
<!-- api: M:InnoEditor.ImGui.ImGui.IsKeyDown(InnoEditor.ImGui.ImGuiKey) b6506071431eda4ae9d7a3f6fe34b2319fcb90aad86ff1405e69038416447801 -->

```csharp
public static bool InnoEditor.ImGui.ImGui.IsKeyDown(InnoEditor.ImGui.ImGuiKey key)
```

Checks whether a presentation key remains held.

**Parameter `key`:** The presentation key to inspect.

**Returns:** True when the documented control event or condition is present; otherwise false.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/ImGui.Input.cs#L82).
