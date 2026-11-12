---
title: "EditorPalette — Property: contentField"
description: "Exact Property: contentField contracts in EditorPalette."
uid: api.inno.editor.imgui.editor-script.687efd4a718130cf
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: editor-script
contracts:
  - project.inno-editor-imgui
  - manual.scripting.use-script-api
  - api.inno.editor.imgui.editor-script.e2d7e0515aa16b0b#type-declaration
---
# `EditorPalette`: Property: contentField

Read these exact member contracts together with the [containing type](innoeditor.imgui.editorpalette.md) and its [shared ownership contract](../../projects/inno-editor-imgui.md).

**Source context:** `editor-script`, configuration `Debug`. This page does not certify execution on other platforms.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

## `contentField`

<a id="api-14402b1f5f3019e6"></a>
<!-- api: P:InnoEditor.ImGui.EditorPalette.contentField bb2381a7a021059efc9fba81199fb1f2fdb28abfcda2dd1b9f917f84e67d28fb -->

```csharp
public static System.Numerics.Vector4 InnoEditor.ImGui.EditorPalette.contentField { get; }
```

Gets the content field background.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Styling/EditorPalette.cs#L346).
