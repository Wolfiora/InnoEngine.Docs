---
title: "ImGui — Method: IsItemDeactivatedAfterEdit"
description: "Exact Method: IsItemDeactivatedAfterEdit contracts in ImGui."
uid: api.inno.editor.imgui.editor-script.740eee64d34844b5
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: editor-script
contracts:
  - project.inno-editor-imgui
  - manual.scripting.use-script-api
  - api.inno.editor.imgui.editor-script.00baca154a6f58ab#type-declaration
---
# `ImGui`: Method: IsItemDeactivatedAfterEdit

Read these exact member contracts together with the [containing type](innoeditor.imgui.imgui.md) and its [shared ownership contract](../../projects/inno-editor-imgui.md).

**Source context:** `editor-script`, configuration `Debug`. This page does not certify execution on other platforms.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

## `IsItemDeactivatedAfterEdit`

<a id="api-649781aa1772d5bc"></a>
<!-- api: M:InnoEditor.ImGui.ImGui.IsItemDeactivatedAfterEdit 3146fdd8748b26a52297ee39d4be8bda0a17aa281f6ca45ecce12328858f27ee -->

```csharp
public static bool InnoEditor.ImGui.ImGui.IsItemDeactivatedAfterEdit()
```

Checks the completion frame of an edited control.

**Returns:** True when the documented control event or condition is present; otherwise false.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/ImGui.Input.cs#L228).
