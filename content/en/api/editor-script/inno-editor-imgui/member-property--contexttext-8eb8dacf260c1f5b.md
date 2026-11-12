---
title: "EditorPalette — Property: contextText"
description: "Exact Property: contextText contracts in EditorPalette."
uid: api.inno.editor.imgui.editor-script.8eb8dacf260c1f5b
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: editor-script
contracts:
  - project.inno-editor-imgui
  - manual.scripting.use-script-api
  - api.inno.editor.imgui.editor-script.e2d7e0515aa16b0b#type-declaration
---
# `EditorPalette`: Property: contextText

Read these exact member contracts together with the [containing type](innoeditor.imgui.editorpalette.md) and its [shared ownership contract](../../projects/inno-editor-imgui.md).

**Source context:** `editor-script`, configuration `Debug`. This page does not certify execution on other platforms.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

## `contextText`

<a id="api-70f9b3e6ed4b5b1f"></a>
<!-- api: P:InnoEditor.ImGui.EditorPalette.contextText 5803b4a1539744828f3e6bf7fcb5669668e1163a29e18ef1ba229a5aeabcc710 -->

```csharp
public static System.Numerics.Vector4 InnoEditor.ImGui.EditorPalette.contextText { get; }
```

Gets the subdued contextual text color used by paths and origin hints.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Styling/EditorPalette.cs#L371).
