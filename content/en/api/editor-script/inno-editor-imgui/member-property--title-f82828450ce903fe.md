---
title: "EditorPalette — Property: title"
description: "Exact Property: title contracts in EditorPalette."
uid: api.inno.editor.imgui.editor-script.f82828450ce903fe
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: editor-script
contracts:
  - project.inno-editor-imgui
  - manual.scripting.use-script-api
  - api.inno.editor.imgui.editor-script.e2d7e0515aa16b0b#type-declaration
---
# `EditorPalette`: Property: title

Read these exact member contracts together with the [containing type](innoeditor.imgui.editorpalette.md) and its [shared ownership contract](../../projects/inno-editor-imgui.md).

**Source context:** `editor-script`, configuration `Debug`. This page does not certify execution on other platforms.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

## `title`

<a id="api-34b183a3bcdc49f6"></a>
<!-- api: P:InnoEditor.ImGui.EditorPalette.title 34cdab36367dbf6485aaeebc72bcae3305c8dfa17bf53f51953c2d2379bdb52e -->

```csharp
public static System.Numerics.Vector4 InnoEditor.ImGui.EditorPalette.title { get; }
```

Gets the inactive title background.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Styling/EditorPalette.cs#L171).
