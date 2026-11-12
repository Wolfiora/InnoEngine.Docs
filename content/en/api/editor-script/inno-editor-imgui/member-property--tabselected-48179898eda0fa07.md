---
title: "EditorPalette — Property: tabSelected"
description: "Exact Property: tabSelected contracts in EditorPalette."
uid: api.inno.editor.imgui.editor-script.48179898eda0fa07
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: editor-script
contracts:
  - project.inno-editor-imgui
  - manual.scripting.use-script-api
  - api.inno.editor.imgui.editor-script.e2d7e0515aa16b0b#type-declaration
---
# `EditorPalette`: Property: tabSelected

Read these exact member contracts together with the [containing type](innoeditor.imgui.editorpalette.md) and its [shared ownership contract](../../projects/inno-editor-imgui.md).

**Source context:** `editor-script`, configuration `Debug`. This page does not certify execution on other platforms.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

## `tabSelected`

<a id="api-0c4e15a32db20bd9"></a>
<!-- api: P:InnoEditor.ImGui.EditorPalette.tabSelected f6d8f7d354d3853e7a93af2e6178072fe53e544a8b0165cb3dd6f52913c0da03 -->

```csharp
public static System.Numerics.Vector4 InnoEditor.ImGui.EditorPalette.tabSelected { get; }
```

Gets the selected tab color.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Styling/EditorPalette.cs#L226).
