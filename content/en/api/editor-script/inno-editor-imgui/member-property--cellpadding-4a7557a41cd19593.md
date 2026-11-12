---
title: "EditorStyleMetrics — Property: cellPadding"
description: "Exact Property: cellPadding contracts in EditorStyleMetrics."
uid: api.inno.editor.imgui.editor-script.4a7557a41cd19593
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: editor-script
contracts:
  - project.inno-editor-imgui
  - manual.scripting.use-script-api
  - api.inno.editor.imgui.editor-script.933382d010c02cca#type-declaration
---
# `EditorStyleMetrics`: Property: cellPadding

Read these exact member contracts together with the [containing type](innoeditor.imgui.editorstylemetrics.md) and its [shared ownership contract](../../projects/inno-editor-imgui.md).

**Source context:** `editor-script`, configuration `Debug`. This page does not certify execution on other platforms.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

## `cellPadding`

<a id="api-d6f9eaef390fec43"></a>
<!-- api: P:InnoEditor.ImGui.EditorStyleMetrics.cellPadding df25c029b90a1e5653e9f228301377ea5c01241d1eef0ac226a5a04d8e38b90a -->

```csharp
public System.Numerics.Vector2 InnoEditor.ImGui.EditorStyleMetrics.cellPadding { get; }
```

Gets standard table cell padding.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Styling/EditorStyleMetrics.cs#L257).
