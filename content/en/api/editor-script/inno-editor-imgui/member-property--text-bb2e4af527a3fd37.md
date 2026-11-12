---
title: "EditorPalette — Property: text"
description: "Exact Property: text contracts in EditorPalette."
uid: api.inno.editor.imgui.editor-script.bb2e4af527a3fd37
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: editor-script
contracts:
  - project.inno-editor-imgui
  - manual.scripting.use-script-api
  - api.inno.editor.imgui.editor-script.e2d7e0515aa16b0b#type-declaration
---
# `EditorPalette`: Property: text

Read these exact member contracts together with the [containing type](innoeditor.imgui.editorpalette.md) and its [shared ownership contract](../../projects/inno-editor-imgui.md).

**Source context:** `editor-script`, configuration `Debug`. This page does not certify execution on other platforms.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

## `text`

<a id="api-057456d26009a5b9"></a>
<!-- api: P:InnoEditor.ImGui.EditorPalette.text 40c301aab23f549084e944e59f04331f61febe67bba116291f948f54ab92b13a -->

```csharp
public static System.Numerics.Vector4 InnoEditor.ImGui.EditorPalette.text { get; }
```

Gets the primary text color.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Styling/EditorPalette.cs#L86).
