---
title: "EditorPalette — Property: targetHeader"
description: "Exact Property: targetHeader contracts in EditorPalette."
uid: api.inno.editor.imgui.editor-script.a54469133893f37b
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: editor-script
contracts:
  - project.inno-editor-imgui
  - manual.scripting.use-script-api
  - api.inno.editor.imgui.editor-script.e2d7e0515aa16b0b#type-declaration
---
# `EditorPalette`: Property: targetHeader

Read these exact member contracts together with the [containing type](innoeditor.imgui.editorpalette.md) and its [shared ownership contract](../../projects/inno-editor-imgui.md).

**Source context:** `editor-script`, configuration `Debug`. This page does not certify execution on other platforms.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

## `targetHeader`

<a id="api-6578ef1ec7562a59"></a>
<!-- api: P:InnoEditor.ImGui.EditorPalette.targetHeader d4ae7c6fe70524cdcb7ff521aa04d6f0f314aa387c5ee70f3bbc9b3dba8f7dd1 -->

```csharp
public static System.Numerics.Vector4 InnoEditor.ImGui.EditorPalette.targetHeader { get; }
```

Gets the persistent target header background.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Styling/EditorPalette.cs#L291).
