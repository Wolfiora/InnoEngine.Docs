---
title: "ImGui — Method: GetTableBounds"
description: "Exact Method: GetTableBounds contracts in ImGui."
uid: api.inno.editor.imgui.a9b01eccffbe016c
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: source-clr
contracts:
  - project.inno-editor-imgui
  - api.inno.editor.imgui.e0d3ffa7c449fd75#type-declaration
---
# `ImGui`: Method: GetTableBounds

Read these exact member contracts together with the [containing type](imgui.md) and its [shared ownership contract](../../../projects/inno-editor-imgui.md).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetTableBounds`

<a id="api-70112c74233aeaa3"></a>
<!-- api: M:Inno.Editor.ImGui.ImGui.GetTableBounds 92a68c5a8d4e57def1e7b87bc425c40cd8c934f8252c3a7b9bdc142ed4692671 -->

```csharp
public static (float minimumX, float maximumX, float rowMinimum, float rowMaximum) Inno.Editor.ImGui.ImGui.GetTableBounds()
```

Gets the table and current row bounds needed by row overlays.

**Returns:** The table's horizontal bounds and current row's vertical bounds.

**Throws `System.InvalidOperationException`:** No valid drawing frame or active table exists.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Drawing/ImGui.Drawing.cs#L71).
