---
title: "EditorPalette — Property: borderShadow"
description: "Exact Property: borderShadow contracts in EditorPalette."
uid: api.inno.editor.imgui.editor-script.b00cf40be75b9b59
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: editor-script
contracts:
  - project.inno-editor-imgui
  - manual.scripting.use-script-api
  - api.inno.editor.imgui.editor-script.e2d7e0515aa16b0b#type-declaration
---
# `EditorPalette`: Property: borderShadow

Read these exact member contracts together with the [containing type](innoeditor.imgui.editorpalette.md) and its [shared ownership contract](../../projects/inno-editor-imgui.md).

**Source context:** `editor-script`, configuration `Debug`. This page does not certify execution on other platforms.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

## `borderShadow`

<a id="api-966ae9c3a3b92907"></a>
<!-- api: P:InnoEditor.ImGui.EditorPalette.borderShadow 74d6bd8450d94473422284f028ed78277f830a3dcc4ab5def4a5dae27475049b -->

```csharp
public static System.Numerics.Vector4 InnoEditor.ImGui.EditorPalette.borderShadow { get; }
```

Gets the standard border shadow color.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Styling/EditorPalette.cs#L151).
