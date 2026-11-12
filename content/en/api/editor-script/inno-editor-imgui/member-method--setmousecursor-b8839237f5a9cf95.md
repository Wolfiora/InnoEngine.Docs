---
title: "ImGui — Method: SetMouseCursor"
description: "Exact Method: SetMouseCursor contracts in ImGui."
uid: api.inno.editor.imgui.editor-script.b8839237f5a9cf95
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: editor-script
contracts:
  - project.inno-editor-imgui
  - manual.scripting.use-script-api
  - api.inno.editor.imgui.editor-script.00baca154a6f58ab#type-declaration
---
# `ImGui`: Method: SetMouseCursor

Read these exact member contracts together with the [containing type](innoeditor.imgui.imgui.md) and its [shared ownership contract](../../projects/inno-editor-imgui.md).

**Source context:** `editor-script`, configuration `Debug`. This page does not certify execution on other platforms.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

## `SetMouseCursor`

<a id="api-40d134e069c5a432"></a>
<!-- api: M:InnoEditor.ImGui.ImGui.SetMouseCursor(InnoEditor.ImGui.ImGuiMouseCursor) 85cffd43b05886960506b92bdee80666a42e8f662e26d663bdb8069c4d63a0cb -->

```csharp
public static void InnoEditor.ImGui.ImGui.SetMouseCursor(InnoEditor.ImGui.ImGuiMouseCursor cursor)
```

Requests the semantic cursor for the hovered control.

**Parameter `cursor`:** The semantic pointer shape.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/ImGui.Input.cs#L126).
