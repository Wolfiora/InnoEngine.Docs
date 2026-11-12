---
title: "EditorPalette — Property: menuBackground"
description: "Exact Property: menuBackground contracts in EditorPalette."
uid: api.inno.editor.imgui.editor-script.81f197e9f2b029fd
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: editor-script
contracts:
  - project.inno-editor-imgui
  - manual.scripting.use-script-api
  - api.inno.editor.imgui.editor-script.e2d7e0515aa16b0b#type-declaration
---
# `EditorPalette`: Property: menuBackground

Read these exact member contracts together with the [containing type](innoeditor.imgui.editorpalette.md) and its [shared ownership contract](../../projects/inno-editor-imgui.md).

**Source context:** `editor-script`, configuration `Debug`. This page does not certify execution on other platforms.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

## `menuBackground`

<a id="api-639fb93348782d6d"></a>
<!-- api: P:InnoEditor.ImGui.EditorPalette.menuBackground 4f37aef5fd902ec754197795aa35abdd5194f36da323128c893986ac49d77633 -->

```csharp
public static System.Numerics.Vector4 InnoEditor.ImGui.EditorPalette.menuBackground { get; }
```

Gets the background used by editor context menus.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Styling/EditorPalette.cs#L121).
