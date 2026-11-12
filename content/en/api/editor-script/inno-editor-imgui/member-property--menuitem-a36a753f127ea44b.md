---
title: "EditorPalette — Property: menuItem"
description: "Exact Property: menuItem contracts in EditorPalette."
uid: api.inno.editor.imgui.editor-script.a36a753f127ea44b
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: editor-script
contracts:
  - project.inno-editor-imgui
  - manual.scripting.use-script-api
  - api.inno.editor.imgui.editor-script.e2d7e0515aa16b0b#type-declaration
---
# `EditorPalette`: Property: menuItem

Read these exact member contracts together with the [containing type](innoeditor.imgui.editorpalette.md) and its [shared ownership contract](../../projects/inno-editor-imgui.md).

**Source context:** `editor-script`, configuration `Debug`. This page does not certify execution on other platforms.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

## `menuItem`

<a id="api-1b43f9e191e8b5d9"></a>
<!-- api: P:InnoEditor.ImGui.EditorPalette.menuItem e8b4ae275c5dd058926a70fefc821cca896f91c4e50d19c6eeaf304bec713b4d -->

```csharp
public static System.Numerics.Vector4 InnoEditor.ImGui.EditorPalette.menuItem { get; }
```

Gets the resting background of an editor context-menu item.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Styling/EditorPalette.cs#L126).
