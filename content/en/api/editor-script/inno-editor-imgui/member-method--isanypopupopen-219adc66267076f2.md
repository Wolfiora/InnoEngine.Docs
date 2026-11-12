---
title: "ImGui — Method: IsAnyPopupOpen"
description: "Exact Method: IsAnyPopupOpen contracts in ImGui."
uid: api.inno.editor.imgui.editor-script.219adc66267076f2
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: editor-script
contracts:
  - project.inno-editor-imgui
  - manual.scripting.use-script-api
  - api.inno.editor.imgui.editor-script.00baca154a6f58ab#type-declaration
---
# `ImGui`: Method: IsAnyPopupOpen

Read these exact member contracts together with the [containing type](innoeditor.imgui.imgui.md) and its [shared ownership contract](../../projects/inno-editor-imgui.md).

**Source context:** `editor-script`, configuration `Debug`. This page does not certify execution on other platforms.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

## `IsAnyPopupOpen`

<a id="api-d044de39a593f50f"></a>
<!-- api: M:InnoEditor.ImGui.ImGui.IsAnyPopupOpen 453f130a2903c107eeab941a74d04edbfa1f747805868037eef62d5a97340277 -->

```csharp
public static bool InnoEditor.ImGui.ImGui.IsAnyPopupOpen()
```

Reads whether an open popup or modal currently prevents underlying canvas and list input.

**Returns:** True when any popup is open in this native context, independently of its identifier or nesting.

**Throws `System.InvalidOperationException`:** No valid drawing session or native frame is active.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/ImGui.cs#L720).
