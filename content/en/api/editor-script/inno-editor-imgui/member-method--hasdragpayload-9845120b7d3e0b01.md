---
title: "ImGui — Method: HasDragPayload"
description: "Exact Method: HasDragPayload contracts in ImGui."
uid: api.inno.editor.imgui.editor-script.9845120b7d3e0b01
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: editor-script
contracts:
  - project.inno-editor-imgui
  - manual.scripting.use-script-api
  - api.inno.editor.imgui.editor-script.00baca154a6f58ab#type-declaration
---
# `ImGui`: Method: HasDragPayload

Read these exact member contracts together with the [containing type](innoeditor.imgui.imgui.md) and its [shared ownership contract](../../projects/inno-editor-imgui.md).

**Source context:** `editor-script`, configuration `Debug`. This page does not certify execution on other platforms.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

## `HasDragPayload`

<a id="api-6cf3188583beb7d2"></a>
<!-- api: M:InnoEditor.ImGui.ImGui.HasDragPayload(System.String) 64077279de63cb6a38afb5f759886bd58a2203bbd50692c81511b92c45f478ee -->

```csharp
public static bool InnoEditor.ImGui.ImGui.HasDragPayload(string protocol)
```

Checks the active payload's logical protocol without exposing its native buffer.

**Parameter `protocol`:** The exact drag protocol name.

**Returns:** True when a drag of that protocol is currently active.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Drawing/ImGui.Drawing.cs#L128).
