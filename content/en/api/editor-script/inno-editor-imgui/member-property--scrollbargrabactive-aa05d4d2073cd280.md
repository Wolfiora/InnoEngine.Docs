---
title: "EditorPalette — Property: scrollbarGrabActive"
description: "Exact Property: scrollbarGrabActive contracts in EditorPalette."
uid: api.inno.editor.imgui.editor-script.aa05d4d2073cd280
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: editor-script
contracts:
  - project.inno-editor-imgui
  - manual.scripting.use-script-api
  - api.inno.editor.imgui.editor-script.e2d7e0515aa16b0b#type-declaration
---
# `EditorPalette`: Property: scrollbarGrabActive

Read these exact member contracts together with the [containing type](innoeditor.imgui.editorpalette.md) and its [shared ownership contract](../../projects/inno-editor-imgui.md).

**Source context:** `editor-script`, configuration `Debug`. This page does not certify execution on other platforms.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

## `scrollbarGrabActive`

<a id="api-d4c3cb423f139909"></a>
<!-- api: P:InnoEditor.ImGui.EditorPalette.scrollbarGrabActive 2edc37e12ee39d6613d070f0d7a48a96fd236c9124400a83cc130beb4a911951 -->

```csharp
public static System.Numerics.Vector4 InnoEditor.ImGui.EditorPalette.scrollbarGrabActive { get; }
```

Gets the active scrollbar thumb.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Styling/EditorPalette.cs#L196).
