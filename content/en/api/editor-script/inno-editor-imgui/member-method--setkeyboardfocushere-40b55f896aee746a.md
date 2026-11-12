---
title: "ImGui — Method: SetKeyboardFocusHere"
description: "Exact Method: SetKeyboardFocusHere contracts in ImGui."
uid: api.inno.editor.imgui.editor-script.40b55f896aee746a
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: editor-script
contracts:
  - project.inno-editor-imgui
  - manual.scripting.use-script-api
  - api.inno.editor.imgui.editor-script.00baca154a6f58ab#type-declaration
---
# `ImGui`: Method: SetKeyboardFocusHere

Read these exact member contracts together with the [containing type](innoeditor.imgui.imgui.md) and its [shared ownership contract](../../projects/inno-editor-imgui.md).

**Source context:** `editor-script`, configuration `Debug`. This page does not certify execution on other platforms.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

## `SetKeyboardFocusHere`

<a id="api-1ef9e1bc7c708a29"></a>
<!-- api: M:InnoEditor.ImGui.ImGui.SetKeyboardFocusHere(System.Int32) 2b29ae3085d48dee6edcc4f817cc320f962de1b85eb74e72131174ed7199c1cf -->

```csharp
public static void InnoEditor.ImGui.ImGui.SetKeyboardFocusHere(int offset = 0)
```

Requests focus for a relative control position.

**Parameter `offset`:** The relative focus offset from the next submitted control.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/ImGui.Input.cs#L240).
