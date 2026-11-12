---
title: "EditorPalette — Property: windowBackground"
description: "Exact Property: windowBackground contracts in EditorPalette."
uid: api.inno.editor.imgui.editor-script.b4f17a4bf474571a
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: editor-script
contracts:
  - project.inno-editor-imgui
  - manual.scripting.use-script-api
  - api.inno.editor.imgui.editor-script.e2d7e0515aa16b0b#type-declaration
---
# `EditorPalette`: Property: windowBackground

Read these exact member contracts together with the [containing type](innoeditor.imgui.editorpalette.md) and its [shared ownership contract](../../projects/inno-editor-imgui.md).

**Source context:** `editor-script`, configuration `Debug`. This page does not certify execution on other platforms.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

## `windowBackground`

<a id="api-76dbed0aae84acf3"></a>
<!-- api: P:InnoEditor.ImGui.EditorPalette.windowBackground 90da7cb1a709a0a01f056cfec0803cfc2456df8044277d3103ad18498750f6b4 -->

```csharp
public static System.Numerics.Vector4 InnoEditor.ImGui.EditorPalette.windowBackground { get; }
```

Gets the editor window background.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Styling/EditorPalette.cs#L106).
