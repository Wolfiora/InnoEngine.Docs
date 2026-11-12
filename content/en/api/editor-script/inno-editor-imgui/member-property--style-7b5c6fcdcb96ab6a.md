---
title: "ImGuiWidget — Property: style"
description: "Exact Property: style contracts in ImGuiWidget."
uid: api.inno.editor.imgui.editor-script.7b5c6fcdcb96ab6a
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: editor-script
contracts:
  - project.inno-editor-imgui
  - manual.scripting.use-script-api
  - api.inno.editor.imgui.editor-script.7b683e110163fdd5#type-declaration
---
# `ImGuiWidget`: Property: style

Read these exact member contracts together with the [containing type](innoeditor.imgui.imguiwidget.md) and its [shared ownership contract](../../projects/inno-editor-imgui.md).

**Source context:** `editor-script`, configuration `Debug`. This page does not certify execution on other platforms.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

## `style`

<a id="api-cbfe9f977f9c8036"></a>
<!-- api: P:InnoEditor.ImGui.ImGuiWidget.style 9f5e838d6b5f1277fa0bb161c3b02db8d565a01f6f3f88b24d10be7aab277832 -->

```csharp
public InnoEditor.ImGui.EditorStyleMetrics InnoEditor.ImGui.ImGuiWidget.style { get; }
```

Gets the centralized editor layout metrics shared by every widget and feature panel.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.Style.cs#L17).
