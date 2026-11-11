---
title: "ImGui — Method: GetDrawList"
description: "Exact Method: GetDrawList contracts in ImGui."
uid: api.inno.editor.imgui.3eb7565897334eb6
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: source-clr
contracts:
  - project.inno-editor-imgui
  - api.inno.editor.imgui.e0d3ffa7c449fd75#type-declaration
---
# `ImGui`: Method: GetDrawList

Read these exact member contracts together with the [containing type](imgui.md) and its [shared ownership contract](../../../projects/inno-editor-imgui.md).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetDrawList`

<a id="api-723f186f8a6c9a38"></a>
<!-- api: M:Inno.Editor.ImGui.ImGui.GetDrawList 65157ea4cc3c3df6ef38ed0ea8100c7fec2ab856cdfa6c3906720799f5a4c9be -->

```csharp
public static Inno.Editor.ImGui.EditorDrawList Inno.Editor.ImGui.ImGui.GetDrawList()
```

Borrows drawing commands for the current window and frame without exposing native memory.

**Returns:** A value that rejects use after a window, frame, context or session change.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Drawing/ImGui.Drawing.cs#L118).
