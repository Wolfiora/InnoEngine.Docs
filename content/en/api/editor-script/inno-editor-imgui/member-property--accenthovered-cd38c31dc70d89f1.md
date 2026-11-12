---
title: "EditorPalette — Property: accentHovered"
description: "Exact Property: accentHovered contracts in EditorPalette."
uid: api.inno.editor.imgui.editor-script.cd38c31dc70d89f1
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: editor-script
contracts:
  - project.inno-editor-imgui
  - manual.scripting.use-script-api
  - api.inno.editor.imgui.editor-script.e2d7e0515aa16b0b#type-declaration
---
# `EditorPalette`: Property: accentHovered

Read these exact member contracts together with the [containing type](innoeditor.imgui.editorpalette.md) and its [shared ownership contract](../../projects/inno-editor-imgui.md).

**Source context:** `editor-script`, configuration `Debug`. This page does not certify execution on other platforms.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

## `accentHovered`

<a id="api-bf5aa621bc892038"></a>
<!-- api: P:InnoEditor.ImGui.EditorPalette.accentHovered b86858f736c28c471a7a0f784f1846d96055b94d4a002f27509d4fb4176f6879 -->

```csharp
public static System.Numerics.Vector4 InnoEditor.ImGui.EditorPalette.accentHovered { get; }
```

Gets the hovered accent color.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Styling/EditorPalette.cs#L206).
