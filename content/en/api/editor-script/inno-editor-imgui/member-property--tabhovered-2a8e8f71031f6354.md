---
title: "EditorPalette — Property: tabHovered"
description: "Exact Property: tabHovered contracts in EditorPalette."
uid: api.inno.editor.imgui.editor-script.2a8e8f71031f6354
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: editor-script
contracts:
  - project.inno-editor-imgui
  - manual.scripting.use-script-api
  - api.inno.editor.imgui.editor-script.e2d7e0515aa16b0b#type-declaration
---
# `EditorPalette`: Property: tabHovered

Read these exact member contracts together with the [containing type](innoeditor.imgui.editorpalette.md) and its [shared ownership contract](../../projects/inno-editor-imgui.md).

**Source context:** `editor-script`, configuration `Debug`. This page does not certify execution on other platforms.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

## `tabHovered`

<a id="api-0395aa7322434fa4"></a>
<!-- api: P:InnoEditor.ImGui.EditorPalette.tabHovered 2a8d9b42b5a43043825406da7ede2361707a932bb2a7d50484f95466406b9f0c -->

```csharp
public static System.Numerics.Vector4 InnoEditor.ImGui.EditorPalette.tabHovered { get; }
```

Gets the hovered tab color.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Styling/EditorPalette.cs#L221).
