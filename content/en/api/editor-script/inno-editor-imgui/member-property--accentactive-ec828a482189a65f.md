---
title: "EditorPalette — Property: accentActive"
description: "Exact Property: accentActive contracts in EditorPalette."
uid: api.inno.editor.imgui.editor-script.ec828a482189a65f
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: editor-script
contracts:
  - project.inno-editor-imgui
  - manual.scripting.use-script-api
  - api.inno.editor.imgui.editor-script.e2d7e0515aa16b0b#type-declaration
---
# `EditorPalette`: Property: accentActive

Read these exact member contracts together with the [containing type](innoeditor.imgui.editorpalette.md) and its [shared ownership contract](../../projects/inno-editor-imgui.md).

**Source context:** `editor-script`, configuration `Debug`. This page does not certify execution on other platforms.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

## `accentActive`

<a id="api-69d5071318935afb"></a>
<!-- api: P:InnoEditor.ImGui.EditorPalette.accentActive e8596ab31c1499248b2ab14c8c4e938a782bcd8611381c0d26a6ac0e62e6eabe -->

```csharp
public static System.Numerics.Vector4 InnoEditor.ImGui.EditorPalette.accentActive { get; }
```

Gets the active accent color.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Styling/EditorPalette.cs#L211).
