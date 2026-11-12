---
title: "EditorPalette — Property: tab"
description: "Exact Property: tab contracts in EditorPalette."
uid: api.inno.editor.imgui.editor-script.5e66e0b9ed7253f1
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: editor-script
contracts:
  - project.inno-editor-imgui
  - manual.scripting.use-script-api
  - api.inno.editor.imgui.editor-script.e2d7e0515aa16b0b#type-declaration
---
# `EditorPalette`: Property: tab

Read these exact member contracts together with the [containing type](innoeditor.imgui.editorpalette.md) and its [shared ownership contract](../../projects/inno-editor-imgui.md).

**Source context:** `editor-script`, configuration `Debug`. This page does not certify execution on other platforms.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

## `tab`

<a id="api-114120a44bf7f8aa"></a>
<!-- api: P:InnoEditor.ImGui.EditorPalette.tab 4357868fbfab69ba9d9ca3bb59a5fdf5ac9a0cca069704507a5a33ca547fa937 -->

```csharp
public static System.Numerics.Vector4 InnoEditor.ImGui.EditorPalette.tab { get; }
```

Gets the standard tab color.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Styling/EditorPalette.cs#L216).
