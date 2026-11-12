---
title: "ImGui — Method: IsMouseReleased"
description: "Exact Method: IsMouseReleased contracts in ImGui."
uid: api.inno.editor.imgui.editor-script.c71805d6a8ad9d5c
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: editor-script
contracts:
  - project.inno-editor-imgui
  - manual.scripting.use-script-api
  - api.inno.editor.imgui.editor-script.00baca154a6f58ab#type-declaration
---
# `ImGui`: Method: IsMouseReleased

Read these exact member contracts together with the [containing type](innoeditor.imgui.imgui.md) and its [shared ownership contract](../../projects/inno-editor-imgui.md).

**Source context:** `editor-script`, configuration `Debug`. This page does not certify execution on other platforms.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

## `IsMouseReleased`

<a id="api-dc8df22acd8d87af"></a>
<!-- api: M:InnoEditor.ImGui.ImGui.IsMouseReleased(InnoEditor.ImGui.ImGuiMouseButton) 7237a53adbb783beed55bbdb9476e1fce0686fd92ed198bd69082ad1d9c76fdc -->

```csharp
public static bool InnoEditor.ImGui.ImGui.IsMouseReleased(InnoEditor.ImGui.ImGuiMouseButton button)
```

Checks a pointer-button release in the current frame.

**Parameter `button`:** The pointer button to inspect.

**Returns:** True when the documented control event or condition is present; otherwise false.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/ImGui.Input.cs#L52).
