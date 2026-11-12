---
title: "EditorPalette — Property: transparent"
description: "Exact Property: transparent contracts in EditorPalette."
uid: api.inno.editor.imgui.editor-script.c53a776df57f2a66
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: editor-script
contracts:
  - project.inno-editor-imgui
  - manual.scripting.use-script-api
  - api.inno.editor.imgui.editor-script.e2d7e0515aa16b0b#type-declaration
---
# `EditorPalette`: Property: transparent

Read these exact member contracts together with the [containing type](innoeditor.imgui.editorpalette.md) and its [shared ownership contract](../../projects/inno-editor-imgui.md).

**Source context:** `editor-script`, configuration `Debug`. This page does not certify execution on other platforms.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

## `transparent`

<a id="api-ef496a3bc2e3c8dd"></a>
<!-- api: P:InnoEditor.ImGui.EditorPalette.transparent def7a20ec0e6fa5e48f604eef3497196a5b45b19a4f28f91af51ba4a123fd85d -->

```csharp
public static System.Numerics.Vector4 InnoEditor.ImGui.EditorPalette.transparent { get; }
```

Gets fully transparent color.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Styling/EditorPalette.cs#L81).
