---
title: "EditorStyleMetrics — Property: sectionPadding"
description: "Exact Property: sectionPadding contracts in EditorStyleMetrics."
uid: api.inno.editor.imgui.editor-script.1f807022d804bb03
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: editor-script
contracts:
  - project.inno-editor-imgui
  - manual.scripting.use-script-api
  - api.inno.editor.imgui.editor-script.933382d010c02cca#type-declaration
---
# `EditorStyleMetrics`: Property: sectionPadding

Read these exact member contracts together with the [containing type](innoeditor.imgui.editorstylemetrics.md) and its [shared ownership contract](../../projects/inno-editor-imgui.md).

**Source context:** `editor-script`, configuration `Debug`. This page does not certify execution on other platforms.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

## `sectionPadding`

<a id="api-186c7ee4170dff0a"></a>
<!-- api: P:InnoEditor.ImGui.EditorStyleMetrics.sectionPadding 18ab3e32ac9dc2a681703a1777399ea8a6c64349bb2ad0ddff76ba802d50e5db -->

```csharp
public System.Numerics.Vector2 InnoEditor.ImGui.EditorStyleMetrics.sectionPadding { get; }
```

Gets the inner padding of a framed Inspector section.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Styling/EditorStyleMetrics.cs#L332).
