---
title: "EditorStyleMetrics — Property: menuFramePadding"
description: "Exact Property: menuFramePadding contracts in EditorStyleMetrics."
uid: api.inno.editor.imgui.editor-script.38b9568333ec7848
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: editor-script
contracts:
  - project.inno-editor-imgui
  - manual.scripting.use-script-api
  - api.inno.editor.imgui.editor-script.933382d010c02cca#type-declaration
---
# `EditorStyleMetrics`: Property: menuFramePadding

Read these exact member contracts together with the [containing type](innoeditor.imgui.editorstylemetrics.md) and its [shared ownership contract](../../projects/inno-editor-imgui.md).

**Source context:** `editor-script`, configuration `Debug`. This page does not certify execution on other platforms.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

## `menuFramePadding`

<a id="api-47793a2f34def536"></a>
<!-- api: P:InnoEditor.ImGui.EditorStyleMetrics.menuFramePadding 4e323d7f6c077466718b5e27eab9fe11bf231c890c42f3fcdc74578eaa2edbf1 -->

```csharp
public System.Numerics.Vector2 InnoEditor.ImGui.EditorStyleMetrics.menuFramePadding { get; }
```

Gets the uniform item padding of editor context menus.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Styling/EditorStyleMetrics.cs#L191).
