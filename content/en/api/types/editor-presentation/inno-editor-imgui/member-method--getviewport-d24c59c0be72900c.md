---
title: "ImGui — Method: GetViewport"
description: "Exact Method: GetViewport contracts in ImGui."
uid: api.inno.editor.imgui.d24c59c0be72900c
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: source-clr
contracts:
  - project.inno-editor-imgui
  - api.inno.editor.imgui.e0d3ffa7c449fd75#type-declaration
---
# `ImGui`: Method: GetViewport

Read these exact member contracts together with the [containing type](imgui.md) and its [shared ownership contract](../../../projects/inno-editor-imgui.md).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetViewport`

<a id="api-0559a201c22c24f4"></a>
<!-- api: M:Inno.Editor.ImGui.ImGui.GetViewport d3c0325137de1bd9140a9e32a5475b93b51dee99fc5f297d1ea5c35e5f1e9a0b -->

```csharp
public static (uint id, System.Numerics.Vector2 position) Inno.Editor.ImGui.ImGui.GetViewport()
```

Gets the logical viewport identity and copied position for the current window.

**Returns:** The viewport ID and its screen-space origin.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Drawing/ImGui.Drawing.cs#L55).
