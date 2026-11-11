---
title: "EditorPalette — Method: GetHovered"
description: "Exact Method: GetHovered contracts in EditorPalette."
uid: api.inno.editor.imgui.11c1b89fd9704d53
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: source-clr
contracts:
  - project.inno-editor-imgui
  - api.inno.editor.imgui.7230ca01354096de#type-declaration
---
# `EditorPalette`: Method: GetHovered

Read these exact member contracts together with the [containing type](editorpalette.md) and its [shared ownership contract](../../../projects/inno-editor-imgui.md).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetHovered`

<a id="api-ae63f0c115745720"></a>
<!-- api: M:Inno.Editor.ImGui.EditorPalette.GetHovered(System.Numerics.Vector4) 786579a9452d1179b416fbb9b185e39bdda045724130eb40f529dae7440e0f7a -->

```csharp
public static System.Numerics.Vector4 Inno.Editor.ImGui.EditorPalette.GetHovered(System.Numerics.Vector4 color)
```

Gets a hover treatment derived from a base theme color.

**Returns:** The base color blended toward the palette text color using the standard hover amount.

**Parameter `color`:** The color consumed by get hovered; ownership remains with the caller unless explicitly stated otherwise.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Styling/EditorPalette.cs#L387).
