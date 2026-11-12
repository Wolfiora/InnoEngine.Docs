---
title: "EditorPalette — Property: contentAccent"
description: "Exact Property: contentAccent contracts in EditorPalette."
uid: api.inno.editor.imgui.editor-script.a1dd4354aff8764d
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: editor-script
contracts:
  - project.inno-editor-imgui
  - manual.scripting.use-script-api
  - api.inno.editor.imgui.editor-script.e2d7e0515aa16b0b#type-declaration
---
# `EditorPalette`: Property: contentAccent

Read these exact member contracts together with the [containing type](innoeditor.imgui.editorpalette.md) and its [shared ownership contract](../../projects/inno-editor-imgui.md).

**Source context:** `editor-script`, configuration `Debug`. This page does not certify execution on other platforms.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

## `contentAccent`

<a id="api-ec4d0f62b5b8344b"></a>
<!-- api: P:InnoEditor.ImGui.EditorPalette.contentAccent 39c355e5bb74b3342fb27a4eaee5370de3d8a6294a4acc517558077888c47ede -->

```csharp
public static System.Numerics.Vector4 InnoEditor.ImGui.EditorPalette.contentAccent { get; }
```

Gets the opaque content accent.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Styling/EditorPalette.cs#L376).
