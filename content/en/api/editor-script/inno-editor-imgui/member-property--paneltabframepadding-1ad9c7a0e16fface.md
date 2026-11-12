---
title: "EditorStyleMetrics — Property: panelTabFramePadding"
description: "Exact Property: panelTabFramePadding contracts in EditorStyleMetrics."
uid: api.inno.editor.imgui.editor-script.1ad9c7a0e16fface
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: editor-script
contracts:
  - project.inno-editor-imgui
  - manual.scripting.use-script-api
  - api.inno.editor.imgui.editor-script.933382d010c02cca#type-declaration
---
# `EditorStyleMetrics`: Property: panelTabFramePadding

Read these exact member contracts together with the [containing type](innoeditor.imgui.editorstylemetrics.md) and its [shared ownership contract](../../projects/inno-editor-imgui.md).

**Source context:** `editor-script`, configuration `Debug`. This page does not certify execution on other platforms.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

## `panelTabFramePadding`

<a id="api-9845d44200b414fa"></a>
<!-- api: P:InnoEditor.ImGui.EditorStyleMetrics.panelTabFramePadding 59829d2ca49396edc22f487bd111d2a5f217579ab04a98caf5ba4ee77a857f64 -->

```csharp
public System.Numerics.Vector2 InnoEditor.ImGui.EditorStyleMetrics.panelTabFramePadding { get; }
```

Gets the frame padding used while docked panel tabs are laid out.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Styling/EditorStyleMetrics.cs#L181).
