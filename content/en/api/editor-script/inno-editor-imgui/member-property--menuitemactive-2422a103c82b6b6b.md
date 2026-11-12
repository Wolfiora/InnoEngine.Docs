---
title: "EditorPalette — Property: menuItemActive"
description: "Exact Property: menuItemActive contracts in EditorPalette."
uid: api.inno.editor.imgui.editor-script.2422a103c82b6b6b
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: editor-script
contracts:
  - project.inno-editor-imgui
  - manual.scripting.use-script-api
  - api.inno.editor.imgui.editor-script.e2d7e0515aa16b0b#type-declaration
---
# `EditorPalette`: Property: menuItemActive

Read these exact member contracts together with the [containing type](innoeditor.imgui.editorpalette.md) and its [shared ownership contract](../../projects/inno-editor-imgui.md).

**Source context:** `editor-script`, configuration `Debug`. This page does not certify execution on other platforms.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

## `menuItemActive`

<a id="api-c1161e272eff527b"></a>
<!-- api: P:InnoEditor.ImGui.EditorPalette.menuItemActive 2b69e3d97715021c04ec015ba4844a53c47c22eef82f8bd686b3bf13c362dbfe -->

```csharp
public static System.Numerics.Vector4 InnoEditor.ImGui.EditorPalette.menuItemActive { get; }
```

Gets the active background of an editor context-menu item.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Styling/EditorPalette.cs#L136).
