---
title: "ImGuiWidget — Property: treeExpansionRevision"
description: "Exact Property: treeExpansionRevision contracts in ImGuiWidget."
uid: api.inno.editor.imgui.editor-script.8ccafd302ecad56f
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: editor-script
contracts:
  - project.inno-editor-imgui
  - manual.scripting.use-script-api
  - api.inno.editor.imgui.editor-script.7b683e110163fdd5#type-declaration
---
# `ImGuiWidget`: Property: treeExpansionRevision

Read these exact member contracts together with the [containing type](innoeditor.imgui.imguiwidget.md) and its [shared ownership contract](../../projects/inno-editor-imgui.md).

**Source context:** `editor-script`, configuration `Debug`. This page does not certify execution on other platforms.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

## `treeExpansionRevision`

<a id="api-7fa8c223fa1ee4e9"></a>
<!-- api: P:InnoEditor.ImGui.ImGuiWidget.treeExpansionRevision 27ca672518e3d16a0c9d320e3194e30d473c6d6dc011c8e266a53a0bdb99a21b -->

```csharp
public ulong InnoEditor.ImGui.ImGuiWidget.treeExpansionRevision { get; }
```

Gets this window and owner's expansion change counter for invalidating neutral flattened views.

**Throws `System.InvalidOperationException`:** No valid drawing session or native frame is active.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.Tree.cs#L70).
