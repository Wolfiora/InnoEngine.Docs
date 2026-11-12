---
title: "EditorPalette — Property: dragDropTarget"
description: "Exact Property: dragDropTarget contracts in EditorPalette."
uid: api.inno.editor.imgui.editor-script.4d4a98314ebe25b3
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: editor-script
contracts:
  - project.inno-editor-imgui
  - manual.scripting.use-script-api
  - api.inno.editor.imgui.editor-script.e2d7e0515aa16b0b#type-declaration
---
# `EditorPalette`: Property: dragDropTarget

Read these exact member contracts together with the [containing type](innoeditor.imgui.editorpalette.md) and its [shared ownership contract](../../projects/inno-editor-imgui.md).

**Source context:** `editor-script`, configuration `Debug`. This page does not certify execution on other platforms.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

## `dragDropTarget`

<a id="api-bbfe3e3ea8983923"></a>
<!-- api: P:InnoEditor.ImGui.EditorPalette.dragDropTarget b5fb698e6c52e6d58b6399bafbb65e4c0768797732c60c21a89236374a4f0295 -->

```csharp
public static System.Numerics.Vector4 InnoEditor.ImGui.EditorPalette.dragDropTarget { get; }
```

Gets the standard drag target color.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Styling/EditorPalette.cs#L266).
