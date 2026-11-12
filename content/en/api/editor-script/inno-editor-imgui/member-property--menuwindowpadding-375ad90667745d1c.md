---
title: "EditorStyleMetrics — Property: menuWindowPadding"
description: "Exact Property: menuWindowPadding contracts in EditorStyleMetrics."
uid: api.inno.editor.imgui.editor-script.375ad90667745d1c
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: editor-script
contracts:
  - project.inno-editor-imgui
  - manual.scripting.use-script-api
  - api.inno.editor.imgui.editor-script.933382d010c02cca#type-declaration
---
# `EditorStyleMetrics`: Property: menuWindowPadding

Read these exact member contracts together with the [containing type](innoeditor.imgui.editorstylemetrics.md) and its [shared ownership contract](../../projects/inno-editor-imgui.md).

**Source context:** `editor-script`, configuration `Debug`. This page does not certify execution on other platforms.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

## `menuWindowPadding`

<a id="api-06efde1a977168c2"></a>
<!-- api: P:InnoEditor.ImGui.EditorStyleMetrics.menuWindowPadding 10850b83af717acefd3b91f6337432fc215e4b3c18a4d1aae1c43c29fdcfdc84 -->

```csharp
public System.Numerics.Vector2 InnoEditor.ImGui.EditorStyleMetrics.menuWindowPadding { get; }
```

Gets the uniform content padding of editor context menus.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Styling/EditorStyleMetrics.cs#L186).
