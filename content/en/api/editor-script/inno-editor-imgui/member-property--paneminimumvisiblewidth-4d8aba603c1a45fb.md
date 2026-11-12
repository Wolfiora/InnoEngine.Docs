---
title: "EditorStyleMetrics — Property: paneMinimumVisibleWidth"
description: "Exact Property: paneMinimumVisibleWidth contracts in EditorStyleMetrics."
uid: api.inno.editor.imgui.editor-script.4d8aba603c1a45fb
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: editor-script
contracts:
  - project.inno-editor-imgui
  - manual.scripting.use-script-api
  - api.inno.editor.imgui.editor-script.933382d010c02cca#type-declaration
---
# `EditorStyleMetrics`: Property: paneMinimumVisibleWidth

Read these exact member contracts together with the [containing type](innoeditor.imgui.editorstylemetrics.md) and its [shared ownership contract](../../projects/inno-editor-imgui.md).

**Source context:** `editor-script`, configuration `Debug`. This page does not certify execution on other platforms.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

## `paneMinimumVisibleWidth`

<a id="api-cbf107ef39ae409c"></a>
<!-- api: P:InnoEditor.ImGui.EditorStyleMetrics.paneMinimumVisibleWidth 37d4c75af6d1cd11be6ef09f5e945a3b7b094c69b2e02792adaa23722e716661 -->

```csharp
public float InnoEditor.ImGui.EditorStyleMetrics.paneMinimumVisibleWidth { get; }
```

Gets the minimum visible width retained for either resizable content pane while its splitter is dragged.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Styling/EditorStyleMetrics.cs#L287).
