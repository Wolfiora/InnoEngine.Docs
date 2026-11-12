---
title: "EditorStyleMetrics — Property: sectionRounding"
description: "Exact Property: sectionRounding contracts in EditorStyleMetrics."
uid: api.inno.editor.imgui.editor-script.e017e1dbfacc039e
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: editor-script
contracts:
  - project.inno-editor-imgui
  - manual.scripting.use-script-api
  - api.inno.editor.imgui.editor-script.933382d010c02cca#type-declaration
---
# `EditorStyleMetrics`: Property: sectionRounding

Read these exact member contracts together with the [containing type](innoeditor.imgui.editorstylemetrics.md) and its [shared ownership contract](../../projects/inno-editor-imgui.md).

**Source context:** `editor-script`, configuration `Debug`. This page does not certify execution on other platforms.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

## `sectionRounding`

<a id="api-95abfd2744761807"></a>
<!-- api: P:InnoEditor.ImGui.EditorStyleMetrics.sectionRounding 47f8a91ba4e5d91572948eed6f0f3a74c26fb401dffa01377ac9a4e7fb76eda4 -->

```csharp
public float InnoEditor.ImGui.EditorStyleMetrics.sectionRounding { get; }
```

Gets the subtle corner rounding used by framed content sections inside editor containers.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Styling/EditorStyleMetrics.cs#L357).
