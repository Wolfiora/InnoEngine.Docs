---
title: "ImGui — Method: HasDragPayload"
description: "Exact Method: HasDragPayload contracts in ImGui."
uid: api.inno.editor.imgui.4dcdcaf23ba72dca
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: source-clr
contracts:
  - project.inno-editor-imgui
  - api.inno.editor.imgui.e0d3ffa7c449fd75#type-declaration
---
# `ImGui`: Method: HasDragPayload

Read these exact member contracts together with the [containing type](imgui.md) and its [shared ownership contract](../../../projects/inno-editor-imgui.md).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `HasDragPayload`

<a id="api-b4b383aea47c36a0"></a>
<!-- api: M:Inno.Editor.ImGui.ImGui.HasDragPayload(System.String) 59e3c818c6e517fd8a89864641cf7058650275a2a224f59253c882a73835bb5f -->

```csharp
public static bool Inno.Editor.ImGui.ImGui.HasDragPayload(string protocol)
```

Checks the active payload's logical protocol without exposing its native buffer.

**Parameter `protocol`:** The exact drag protocol name.

**Returns:** True when a drag of that protocol is currently active.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Drawing/ImGui.Drawing.cs#L128).
