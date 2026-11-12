---
title: "EditorPalette — Property: menuItemHovered"
description: "Exact Property: menuItemHovered contracts in EditorPalette."
uid: api.inno.editor.imgui.editor-script.1babe52bf6d75290
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: editor-script
contracts:
  - project.inno-editor-imgui
  - manual.scripting.use-script-api
  - api.inno.editor.imgui.editor-script.e2d7e0515aa16b0b#type-declaration
---
# `EditorPalette`: Property: menuItemHovered

Read these exact member contracts together with the [containing type](innoeditor.imgui.editorpalette.md) and its [shared ownership contract](../../projects/inno-editor-imgui.md).

**Source context:** `editor-script`, configuration `Debug`. This page does not certify execution on other platforms.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

## `menuItemHovered`

<a id="api-3f2afa89def39abf"></a>
<!-- api: P:InnoEditor.ImGui.EditorPalette.menuItemHovered 4e456fd55d2e9c526ded22cc422671a50d7feef969fee3ecf9d52cb6e8b8c359 -->

```csharp
public static System.Numerics.Vector4 InnoEditor.ImGui.EditorPalette.menuItemHovered { get; }
```

Gets the hovered background of an editor context-menu item.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Styling/EditorPalette.cs#L131).
