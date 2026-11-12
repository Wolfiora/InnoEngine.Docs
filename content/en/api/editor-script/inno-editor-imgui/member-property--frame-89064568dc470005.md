---
title: "EditorPalette — Property: frame"
description: "Exact Property: frame contracts in EditorPalette."
uid: api.inno.editor.imgui.editor-script.89064568dc470005
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: editor-script
contracts:
  - project.inno-editor-imgui
  - manual.scripting.use-script-api
  - api.inno.editor.imgui.editor-script.e2d7e0515aa16b0b#type-declaration
---
# `EditorPalette`: Property: frame

Read these exact member contracts together with the [containing type](innoeditor.imgui.editorpalette.md) and its [shared ownership contract](../../projects/inno-editor-imgui.md).

**Source context:** `editor-script`, configuration `Debug`. This page does not certify execution on other platforms.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

## `frame`

<a id="api-0d597d56d835a71e"></a>
<!-- api: P:InnoEditor.ImGui.EditorPalette.frame bafa18f5e33de2605a6f17b75c890f6de09f0bad119e0a6da7f5fbc042731449 -->

```csharp
public static System.Numerics.Vector4 InnoEditor.ImGui.EditorPalette.frame { get; }
```

Gets the standard frame background.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Styling/EditorPalette.cs#L156).
