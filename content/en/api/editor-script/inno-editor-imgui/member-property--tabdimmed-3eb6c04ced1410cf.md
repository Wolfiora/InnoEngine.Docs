---
title: "EditorPalette — Property: tabDimmed"
description: "Exact Property: tabDimmed contracts in EditorPalette."
uid: api.inno.editor.imgui.editor-script.3eb6c04ced1410cf
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: editor-script
contracts:
  - project.inno-editor-imgui
  - manual.scripting.use-script-api
  - api.inno.editor.imgui.editor-script.e2d7e0515aa16b0b#type-declaration
---
# `EditorPalette`: Property: tabDimmed

Read these exact member contracts together with the [containing type](innoeditor.imgui.editorpalette.md) and its [shared ownership contract](../../projects/inno-editor-imgui.md).

**Source context:** `editor-script`, configuration `Debug`. This page does not certify execution on other platforms.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

## `tabDimmed`

<a id="api-cd737d0e06197ec2"></a>
<!-- api: P:InnoEditor.ImGui.EditorPalette.tabDimmed a71f6bb288d5079654282c9a3daab41fa72fdea072d19bb3b8554ecfc3283b51 -->

```csharp
public static System.Numerics.Vector4 InnoEditor.ImGui.EditorPalette.tabDimmed { get; }
```

Gets the dimmed tab color.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Styling/EditorPalette.cs#L231).
