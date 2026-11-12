---
title: "ImGui — Method: IsWindowHovered"
description: "Exact Method: IsWindowHovered contracts in ImGui."
uid: api.inno.editor.imgui.editor-script.3b97f3009457e988
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: editor-script
contracts:
  - project.inno-editor-imgui
  - manual.scripting.use-script-api
  - api.inno.editor.imgui.editor-script.00baca154a6f58ab#type-declaration
---
# `ImGui`: Method: IsWindowHovered

Read these exact member contracts together with the [containing type](innoeditor.imgui.imgui.md) and its [shared ownership contract](../../projects/inno-editor-imgui.md).

**Source context:** `editor-script`, configuration `Debug`. This page does not certify execution on other platforms.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

## `IsWindowHovered`

<a id="api-d0681c42100c135a"></a>
<!-- api: M:InnoEditor.ImGui.ImGui.IsWindowHovered(InnoEditor.ImGui.ImGuiHoveredFlags) 82db3f5851c93d6776526cabf6e859cbc5e9a41fc8d002827eca93379f955d63 -->

```csharp
public static bool InnoEditor.ImGui.ImGui.IsWindowHovered(InnoEditor.ImGui.ImGuiHoveredFlags flags = InnoEditor.ImGui.ImGuiHoveredFlags.None)
```

Checks window hover under the declared interaction policy.

**Parameter `flags`:** The explicit control and interaction options.

**Returns:** True when the documented control event or condition is present; otherwise false.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/ImGui.Input.cs#L165).
