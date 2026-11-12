---
title: "EditorPalette — Property: error"
description: "Exact Property: error contracts in EditorPalette."
uid: api.inno.editor.imgui.editor-script.a5c7d51cf8f13cc9
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: editor-script
contracts:
  - project.inno-editor-imgui
  - manual.scripting.use-script-api
  - api.inno.editor.imgui.editor-script.e2d7e0515aa16b0b#type-declaration
---
# `EditorPalette`: Property: error

Read these exact member contracts together with the [containing type](innoeditor.imgui.editorpalette.md) and its [shared ownership contract](../../projects/inno-editor-imgui.md).

**Source context:** `editor-script`, configuration `Debug`. This page does not certify execution on other platforms.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

## `error`

<a id="api-2b5286086b7ca881"></a>
<!-- api: P:InnoEditor.ImGui.EditorPalette.error f2dc1ea500bb437b2edc9c84999d60d40f34b4fd3dcc01c679f2fa982574ba27 -->

```csharp
public static System.Numerics.Vector4 InnoEditor.ImGui.EditorPalette.error { get; }
```

Gets the standard error color.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Styling/EditorPalette.cs#L96).
