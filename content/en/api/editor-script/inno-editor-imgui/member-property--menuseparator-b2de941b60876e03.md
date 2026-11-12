---
title: "EditorPalette — Property: menuSeparator"
description: "Exact Property: menuSeparator contracts in EditorPalette."
uid: api.inno.editor.imgui.editor-script.b2de941b60876e03
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: editor-script
contracts:
  - project.inno-editor-imgui
  - manual.scripting.use-script-api
  - api.inno.editor.imgui.editor-script.e2d7e0515aa16b0b#type-declaration
---
# `EditorPalette`: Property: menuSeparator

Read these exact member contracts together with the [containing type](innoeditor.imgui.editorpalette.md) and its [shared ownership contract](../../projects/inno-editor-imgui.md).

**Source context:** `editor-script`, configuration `Debug`. This page does not certify execution on other platforms.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

## `menuSeparator`

<a id="api-9e62559deb4888b7"></a>
<!-- api: P:InnoEditor.ImGui.EditorPalette.menuSeparator 5cd91d7cd85b0cfa0dedb12b292acd53f2d7eb279f08e0643f176f778812103b -->

```csharp
public static System.Numerics.Vector4 InnoEditor.ImGui.EditorPalette.menuSeparator { get; }
```

Gets the separator color used by editor context menus.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Styling/EditorPalette.cs#L141).
