---
title: "EditorPalette — Property: menuText"
description: "Exact Property: menuText contracts in EditorPalette."
uid: api.inno.editor.imgui.editor-script.5af2edb1388a624f
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: editor-script
contracts:
  - project.inno-editor-imgui
  - manual.scripting.use-script-api
  - api.inno.editor.imgui.editor-script.e2d7e0515aa16b0b#type-declaration
---
# `EditorPalette`: Property: menuText

Read these exact member contracts together with the [containing type](innoeditor.imgui.editorpalette.md) and its [shared ownership contract](../../projects/inno-editor-imgui.md).

**Source context:** `editor-script`, configuration `Debug`. This page does not certify execution on other platforms.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

## `menuText`

<a id="api-8b9d1074d0ef084a"></a>
<!-- api: P:InnoEditor.ImGui.EditorPalette.menuText 9a83123bc019b820cf0269739dae828b6992dd4c633c65f08b1d572680dfe7c7 -->

```csharp
public static System.Numerics.Vector4 InnoEditor.ImGui.EditorPalette.menuText { get; }
```

Gets text color used by editor context menus.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Styling/EditorPalette.cs#L116).
