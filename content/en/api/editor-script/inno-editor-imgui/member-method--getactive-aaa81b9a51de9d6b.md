---
title: "EditorPalette — Method: GetActive"
description: "Exact Method: GetActive contracts in EditorPalette."
uid: api.inno.editor.imgui.editor-script.aaa81b9a51de9d6b
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: editor-script
contracts:
  - project.inno-editor-imgui
  - manual.scripting.use-script-api
  - api.inno.editor.imgui.editor-script.e2d7e0515aa16b0b#type-declaration
---
# `EditorPalette`: Method: GetActive

Read these exact member contracts together with the [containing type](innoeditor.imgui.editorpalette.md) and its [shared ownership contract](../../projects/inno-editor-imgui.md).

**Source context:** `editor-script`, configuration `Debug`. This page does not certify execution on other platforms.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

## `GetActive`

<a id="api-b14b93793766033e"></a>
<!-- api: M:InnoEditor.ImGui.EditorPalette.GetActive(System.Numerics.Vector4) 8d42a93daabf63e8be2536e9aaa22c37722acef1e169b5efe43bc9f9a27fd090 -->

```csharp
public static System.Numerics.Vector4 InnoEditor.ImGui.EditorPalette.GetActive(System.Numerics.Vector4 color)
```

Gets an active treatment derived from a base theme color.

**Returns:** The base color blended toward the palette text color using the standard active amount.

**Parameter `color`:** The color consumed by get active; ownership remains with the caller unless explicitly stated otherwise.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Styling/EditorPalette.cs#L398).
