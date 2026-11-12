---
title: "EditorPalette — Property: contentText"
description: "Exact Property: contentText contracts in EditorPalette."
uid: api.inno.editor.imgui.editor-script.c1f70485a7135424
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: editor-script
contracts:
  - project.inno-editor-imgui
  - manual.scripting.use-script-api
  - api.inno.editor.imgui.editor-script.e2d7e0515aa16b0b#type-declaration
---
# `EditorPalette`: Property: contentText

Read these exact member contracts together with the [containing type](innoeditor.imgui.editorpalette.md) and its [shared ownership contract](../../projects/inno-editor-imgui.md).

**Source context:** `editor-script`, configuration `Debug`. This page does not certify execution on other platforms.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

## `contentText`

<a id="api-d7c133359b9a7ba8"></a>
<!-- api: P:InnoEditor.ImGui.EditorPalette.contentText c60d9c40386d8f04ee4ad7bb33e7e3ffcdf8212328cf37c234c35569623233cb -->

```csharp
public static System.Numerics.Vector4 InnoEditor.ImGui.EditorPalette.contentText { get; }
```

Gets the content text color.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Styling/EditorPalette.cs#L361).
