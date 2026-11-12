---
title: "EditorPalette — Property: warning"
description: "Exact Property: warning contracts in EditorPalette."
uid: api.inno.editor.imgui.editor-script.1be4ff97ac15f882
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: editor-script
contracts:
  - project.inno-editor-imgui
  - manual.scripting.use-script-api
  - api.inno.editor.imgui.editor-script.e2d7e0515aa16b0b#type-declaration
---
# `EditorPalette`: Property: warning

Read these exact member contracts together with the [containing type](innoeditor.imgui.editorpalette.md) and its [shared ownership contract](../../projects/inno-editor-imgui.md).

**Source context:** `editor-script`, configuration `Debug`. This page does not certify execution on other platforms.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

## `warning`

<a id="api-1d80f71b195e1f0e"></a>
<!-- api: P:InnoEditor.ImGui.EditorPalette.warning d67c80c06ba3e4552e9766e340c230b77cef5d0e5b5671c8a5c537f06c6d342a -->

```csharp
public static System.Numerics.Vector4 InnoEditor.ImGui.EditorPalette.warning { get; }
```

Gets the standard warning color.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Styling/EditorPalette.cs#L101).
