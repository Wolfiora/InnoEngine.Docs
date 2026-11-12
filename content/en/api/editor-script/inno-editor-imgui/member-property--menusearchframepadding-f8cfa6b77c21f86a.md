---
title: "EditorStyleMetrics — Property: menuSearchFramePadding"
description: "Exact Property: menuSearchFramePadding contracts in EditorStyleMetrics."
uid: api.inno.editor.imgui.editor-script.f8cfa6b77c21f86a
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: editor-script
contracts:
  - project.inno-editor-imgui
  - manual.scripting.use-script-api
  - api.inno.editor.imgui.editor-script.933382d010c02cca#type-declaration
---
# `EditorStyleMetrics`: Property: menuSearchFramePadding

Read these exact member contracts together with the [containing type](innoeditor.imgui.editorstylemetrics.md) and its [shared ownership contract](../../projects/inno-editor-imgui.md).

**Source context:** `editor-script`, configuration `Debug`. This page does not certify execution on other platforms.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

## `menuSearchFramePadding`

<a id="api-c66202bd85a7aa99"></a>
<!-- api: P:InnoEditor.ImGui.EditorStyleMetrics.menuSearchFramePadding bddb054a2183b870384187ce2a26b7f8f182e77c68e41301d777d47968beb739 -->

```csharp
public System.Numerics.Vector2 InnoEditor.ImGui.EditorStyleMetrics.menuSearchFramePadding { get; }
```

Gets the compact padding used by the search field at the top of editor context menus.
Its vertical padding matches the half-spacing that menu entries add above and below a line.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Styling/EditorStyleMetrics.cs#L197).
