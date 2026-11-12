---
title: "EditorPalette — Property: frameHovered"
description: "Exact Property: frameHovered contracts in EditorPalette."
uid: api.inno.editor.imgui.editor-script.546ab31c5d3e3202
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: editor-script
contracts:
  - project.inno-editor-imgui
  - manual.scripting.use-script-api
  - api.inno.editor.imgui.editor-script.e2d7e0515aa16b0b#type-declaration
---
# `EditorPalette`: Property: frameHovered

Read these exact member contracts together with the [containing type](innoeditor.imgui.editorpalette.md) and its [shared ownership contract](../../projects/inno-editor-imgui.md).

**Source context:** `editor-script`, configuration `Debug`. This page does not certify execution on other platforms.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

## `frameHovered`

<a id="api-9590e84379b85fff"></a>
<!-- api: P:InnoEditor.ImGui.EditorPalette.frameHovered 5090f453cda41abc3db92097f646596cbef4fbbdeefc8cf3e47cf3e13d9c3432 -->

```csharp
public static System.Numerics.Vector4 InnoEditor.ImGui.EditorPalette.frameHovered { get; }
```

Gets the hovered frame background.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Styling/EditorPalette.cs#L161).
