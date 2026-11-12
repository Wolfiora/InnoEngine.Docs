---
title: "ImGuiWidget — Method: CancelEdits"
description: "Exact Method: CancelEdits contracts in ImGuiWidget."
uid: api.inno.editor.imgui.editor-script.857b029159ca3007
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: editor-script
contracts:
  - project.inno-editor-imgui
  - manual.scripting.use-script-api
  - api.inno.editor.imgui.editor-script.7b683e110163fdd5#type-declaration
---
# `ImGuiWidget`: Method: CancelEdits

Read these exact member contracts together with the [containing type](innoeditor.imgui.imguiwidget.md) and its [shared ownership contract](../../projects/inno-editor-imgui.md).

**Source context:** `editor-script`, configuration `Debug`. This page does not certify execution on other platforms.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

## `CancelEdits`

<a id="api-22b8a4d008a1ef68"></a>
<!-- api: M:InnoEditor.ImGui.ImGuiWidget.CancelEdits a48efe30be1a29c87bec769f103918962a63af4556aad56f5f2313a523915077 -->

```csharp
public void InnoEditor.ImGui.ImGuiWidget.CancelEdits()
```

Restores the control's initial domain values before discarding its transient presentation state.

**Throws `System.InvalidOperationException`:** Rollback is unavailable; the gesture remains owned for recovery.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.Editing.cs#L135).
