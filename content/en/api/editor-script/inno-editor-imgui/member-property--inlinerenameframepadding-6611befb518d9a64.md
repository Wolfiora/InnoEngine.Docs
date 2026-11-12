---
title: "EditorStyleMetrics — Property: inlineRenameFramePadding"
description: "Exact Property: inlineRenameFramePadding contracts in EditorStyleMetrics."
uid: api.inno.editor.imgui.editor-script.6611befb518d9a64
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: editor-script
contracts:
  - project.inno-editor-imgui
  - manual.scripting.use-script-api
  - api.inno.editor.imgui.editor-script.933382d010c02cca#type-declaration
---
# `EditorStyleMetrics`: Property: inlineRenameFramePadding

Read these exact member contracts together with the [containing type](innoeditor.imgui.editorstylemetrics.md) and its [shared ownership contract](../../projects/inno-editor-imgui.md).

**Source context:** `editor-script`, configuration `Debug`. This page does not certify execution on other platforms.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

## `inlineRenameFramePadding`

<a id="api-d7a0f1443711ef71"></a>
<!-- api: P:InnoEditor.ImGui.EditorStyleMetrics.inlineRenameFramePadding ed11b603e36e78864a1f89151cd7431cefc953b2d32ce45e9508074233260e3b -->

```csharp
public System.Numerics.Vector2 InnoEditor.ImGui.EditorStyleMetrics.inlineRenameFramePadding { get; }
```

Gets the compact inner padding of inline rename fields.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Styling/EditorStyleMetrics.cs#L222).
