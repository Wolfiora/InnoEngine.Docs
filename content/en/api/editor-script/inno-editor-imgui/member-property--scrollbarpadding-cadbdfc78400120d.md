---
title: "EditorStyleMetrics — Property: scrollbarPadding"
description: "Exact Property: scrollbarPadding contracts in EditorStyleMetrics."
uid: api.inno.editor.imgui.editor-script.cadbdfc78400120d
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: editor-script
contracts:
  - project.inno-editor-imgui
  - manual.scripting.use-script-api
  - api.inno.editor.imgui.editor-script.933382d010c02cca#type-declaration
---
# `EditorStyleMetrics`: Property: scrollbarPadding

Read these exact member contracts together with the [containing type](innoeditor.imgui.editorstylemetrics.md) and its [shared ownership contract](../../projects/inno-editor-imgui.md).

**Source context:** `editor-script`, configuration `Debug`. This page does not certify execution on other platforms.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

## `scrollbarPadding`

<a id="api-904270c58227c6bb"></a>
<!-- api: P:InnoEditor.ImGui.EditorStyleMetrics.scrollbarPadding 043318f2f90e24420861fdb71f55539a51970c1d0ec54b59b49b49c883dfd521 -->

```csharp
public float InnoEditor.ImGui.EditorStyleMetrics.scrollbarPadding { get; }
```

Gets the inset that keeps an overlay scrollbar grab visually lightweight.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Styling/EditorStyleMetrics.cs#L277).
