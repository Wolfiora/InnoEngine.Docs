---
title: "EditorPalette — Property: treeGuide"
description: "Exact Property: treeGuide contracts in EditorPalette."
uid: api.inno.editor.imgui.editor-script.9b7b0f535d5500d6
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: editor-script
contracts:
  - project.inno-editor-imgui
  - manual.scripting.use-script-api
  - api.inno.editor.imgui.editor-script.e2d7e0515aa16b0b#type-declaration
---
# `EditorPalette`: Property: treeGuide

Read these exact member contracts together with the [containing type](innoeditor.imgui.editorpalette.md) and its [shared ownership contract](../../projects/inno-editor-imgui.md).

**Source context:** `editor-script`, configuration `Debug`. This page does not certify execution on other platforms.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

## `treeGuide`

<a id="api-e2889bbf6ceae192"></a>
<!-- api: P:InnoEditor.ImGui.EditorPalette.treeGuide 94e96812a65b18662d4b41ee1e608a180432e16795b195edeb99f42a6ef25541 -->

```csharp
public static System.Numerics.Vector4 InnoEditor.ImGui.EditorPalette.treeGuide { get; }
```

Gets the guide color of reusable tree controls.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Styling/EditorPalette.cs#L403).
