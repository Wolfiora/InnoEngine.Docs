---
title: "EditorPalette — Property: scrollbarGrab"
description: "Exact Property: scrollbarGrab contracts in EditorPalette."
uid: api.inno.editor.imgui.editor-script.4b5e125893e74011
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: editor-script
contracts:
  - project.inno-editor-imgui
  - manual.scripting.use-script-api
  - api.inno.editor.imgui.editor-script.e2d7e0515aa16b0b#type-declaration
---
# `EditorPalette`: Property: scrollbarGrab

Read these exact member contracts together with the [containing type](innoeditor.imgui.editorpalette.md) and its [shared ownership contract](../../projects/inno-editor-imgui.md).

**Source context:** `editor-script`, configuration `Debug`. This page does not certify execution on other platforms.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

## `scrollbarGrab`

<a id="api-3b141c416f07384f"></a>
<!-- api: P:InnoEditor.ImGui.EditorPalette.scrollbarGrab bb744e54ff4d3c273504cff122de2c7a2872440659097dd7b68dbd429d946951 -->

```csharp
public static System.Numerics.Vector4 InnoEditor.ImGui.EditorPalette.scrollbarGrab { get; }
```

Gets the standard scrollbar thumb.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Styling/EditorPalette.cs#L186).
