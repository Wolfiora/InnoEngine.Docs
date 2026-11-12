---
title: "EditorStyleMetrics — Property: menuItemSpacing"
description: "Exact Property: menuItemSpacing contracts in EditorStyleMetrics."
uid: api.inno.editor.imgui.editor-script.4e5cb901df3b9cc6
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: editor-script
contracts:
  - project.inno-editor-imgui
  - manual.scripting.use-script-api
  - api.inno.editor.imgui.editor-script.933382d010c02cca#type-declaration
---
# `EditorStyleMetrics`: Property: menuItemSpacing

Read these exact member contracts together with the [containing type](innoeditor.imgui.editorstylemetrics.md) and its [shared ownership contract](../../projects/inno-editor-imgui.md).

**Source context:** `editor-script`, configuration `Debug`. This page does not certify execution on other platforms.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

## `menuItemSpacing`

<a id="api-9a6ef8235be09576"></a>
<!-- api: P:InnoEditor.ImGui.EditorStyleMetrics.menuItemSpacing 0e4a134b4f76c96c4424b08e09fe39214d34c627e71ffd91e9c207db3de5e43e -->

```csharp
public System.Numerics.Vector2 InnoEditor.ImGui.EditorStyleMetrics.menuItemSpacing { get; }
```

Gets the uniform spacing between editor context-menu items.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Styling/EditorStyleMetrics.cs#L202).
