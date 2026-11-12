---
title: "EditorStyleMetrics — Property: zoom"
description: "Exact Property: zoom contracts in EditorStyleMetrics."
uid: api.inno.editor.imgui.editor-script.eabc7ff2d9bbf5fc
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: editor-script
contracts:
  - project.inno-editor-imgui
  - manual.scripting.use-script-api
  - api.inno.editor.imgui.editor-script.933382d010c02cca#type-declaration
---
# `EditorStyleMetrics`: Property: zoom

Read these exact member contracts together with the [containing type](innoeditor.imgui.editorstylemetrics.md) and its [shared ownership contract](../../projects/inno-editor-imgui.md).

**Source context:** `editor-script`, configuration `Debug`. This page does not certify execution on other platforms.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

## `zoom`

<a id="api-69efb457cfb5409b"></a>
<!-- api: P:InnoEditor.ImGui.EditorStyleMetrics.zoom 1183b016a6b138a39d195996a22ed613ad1545d93eb66a40bd16990f9162f6bc -->

```csharp
public float InnoEditor.ImGui.EditorStyleMetrics.zoom { get; }
```

Gets the effective zoom used by the current presentation frame.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Styling/EditorStyleMetrics.cs#L51).
