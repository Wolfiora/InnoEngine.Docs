---
title: "EditorPalette — Property: accent"
description: "Exact Property: accent contracts in EditorPalette."
uid: api.inno.editor.imgui.editor-script.d6ad7c47eb0a7db6
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: editor-script
contracts:
  - project.inno-editor-imgui
  - manual.scripting.use-script-api
  - api.inno.editor.imgui.editor-script.e2d7e0515aa16b0b#type-declaration
---
# `EditorPalette`: Property: accent

Read these exact member contracts together with the [containing type](innoeditor.imgui.editorpalette.md) and its [shared ownership contract](../../projects/inno-editor-imgui.md).

**Source context:** `editor-script`, configuration `Debug`. This page does not certify execution on other platforms.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

## `accent`

<a id="api-654565c7620ccaf8"></a>
<!-- api: P:InnoEditor.ImGui.EditorPalette.accent ad16fb5c16bb749a59f1607c8a877a34cf5b64bcf3a5a849dae199ecdf99e60e -->

```csharp
public static System.Numerics.Vector4 InnoEditor.ImGui.EditorPalette.accent { get; }
```

Gets the standard accent color.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Styling/EditorPalette.cs#L201).
