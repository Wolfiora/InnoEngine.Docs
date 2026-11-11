---
title: "ImGuiWidget.ImGuiWidget — Method: CancelEdits"
description: "Exact Method: CancelEdits contracts in ImGuiWidget.ImGuiWidget."
uid: api.inno.editor.imgui.012710406fa456c5
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: source-clr
contracts:
  - project.inno-editor-imgui
  - api.inno.editor.imgui.d7feaecdd475b63f#type-declaration
---
# `ImGuiWidget.ImGuiWidget`: Method: CancelEdits

Read these exact member contracts together with the [containing type](imguiwidget.imguiwidget.md) and its [shared ownership contract](../../../projects/inno-editor-imgui.md).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `CancelEdits`

<a id="api-3bb6669273bf1e77"></a>
<!-- api: M:Inno.Editor.ImGui.ImGuiWidget.ImGuiWidget.CancelEdits 5f553fe9b6084619af56f03688d1c524323ceda74c51e9c9ffe8c61c234cbb12 -->

```csharp
public void Inno.Editor.ImGui.ImGuiWidget.ImGuiWidget.CancelEdits()
```

Restores the control's initial domain values before discarding its transient presentation state.

**Throws `System.InvalidOperationException`:** Rollback is unavailable; the gesture remains owned for recovery.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.Editing.cs#L135).
