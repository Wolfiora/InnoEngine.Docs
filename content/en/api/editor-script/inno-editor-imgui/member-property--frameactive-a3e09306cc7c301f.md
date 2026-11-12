---
title: "EditorPalette — Property: frameActive"
description: "Exact Property: frameActive contracts in EditorPalette."
uid: api.inno.editor.imgui.editor-script.a3e09306cc7c301f
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: editor-script
contracts:
  - project.inno-editor-imgui
  - manual.scripting.use-script-api
  - api.inno.editor.imgui.editor-script.e2d7e0515aa16b0b#type-declaration
---
# `EditorPalette`: Property: frameActive

Read these exact member contracts together with the [containing type](innoeditor.imgui.editorpalette.md) and its [shared ownership contract](../../projects/inno-editor-imgui.md).

**Source context:** `editor-script`, configuration `Debug`. This page does not certify execution on other platforms.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

## `frameActive`

<a id="api-b3d2c313191757e2"></a>
<!-- api: P:InnoEditor.ImGui.EditorPalette.frameActive 553f06c9ec0d57563303c93d9408368357aec9362fd07a1bbf1824435c13605b -->

```csharp
public static System.Numerics.Vector4 InnoEditor.ImGui.EditorPalette.frameActive { get; }
```

Gets the active frame background.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Styling/EditorPalette.cs#L166).
