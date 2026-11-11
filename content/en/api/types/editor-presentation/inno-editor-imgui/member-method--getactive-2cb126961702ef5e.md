---
title: "EditorPalette — Method: GetActive"
description: "Exact Method: GetActive contracts in EditorPalette."
uid: api.inno.editor.imgui.2cb126961702ef5e
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: source-clr
contracts:
  - project.inno-editor-imgui
  - api.inno.editor.imgui.7230ca01354096de#type-declaration
---
# `EditorPalette`: Method: GetActive

Read these exact member contracts together with the [containing type](editorpalette.md) and its [shared ownership contract](../../../projects/inno-editor-imgui.md).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetActive`

<a id="api-676fb79fbc3ac365"></a>
<!-- api: M:Inno.Editor.ImGui.EditorPalette.GetActive(System.Numerics.Vector4) aae32461b011c61b4a71801a3a398ab90bf220bb042e6967811c04577159abea -->

```csharp
public static System.Numerics.Vector4 Inno.Editor.ImGui.EditorPalette.GetActive(System.Numerics.Vector4 color)
```

Gets an active treatment derived from a base theme color.

**Returns:** The base color blended toward the palette text color using the standard active amount.

**Parameter `color`:** The color consumed by get active; ownership remains with the caller unless explicitly stated otherwise.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Styling/EditorPalette.cs#L398).
