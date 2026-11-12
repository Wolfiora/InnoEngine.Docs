---
title: "EditorPalette — Property: textDisabled"
description: "Exact Property: textDisabled contracts in EditorPalette."
uid: api.inno.editor.imgui.editor-script.f6e6c89ad5100618
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: editor-script
contracts:
  - project.inno-editor-imgui
  - manual.scripting.use-script-api
  - api.inno.editor.imgui.editor-script.e2d7e0515aa16b0b#type-declaration
---
# `EditorPalette`: Property: textDisabled

Read these exact member contracts together with the [containing type](innoeditor.imgui.editorpalette.md) and its [shared ownership contract](../../projects/inno-editor-imgui.md).

**Source context:** `editor-script`, configuration `Debug`. This page does not certify execution on other platforms.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

## `textDisabled`

<a id="api-dd79b964b4d039e9"></a>
<!-- api: P:InnoEditor.ImGui.EditorPalette.textDisabled cd1e604728fec10df09ccafe7ae414b45b576f505e4c92d33ccbe3e86374152a -->

```csharp
public static System.Numerics.Vector4 InnoEditor.ImGui.EditorPalette.textDisabled { get; }
```

Gets disabled text color.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Styling/EditorPalette.cs#L91).
