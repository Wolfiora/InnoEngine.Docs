---
title: "ImGuiWidget.ImGuiWidget — Property: treeExpansionRevision"
description: "Exact Property: treeExpansionRevision contracts in ImGuiWidget.ImGuiWidget."
uid: api.inno.editor.imgui.654aaac53786e37f
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: source-clr
contracts:
  - project.inno-editor-imgui
  - api.inno.editor.imgui.d7feaecdd475b63f#type-declaration
---
# `ImGuiWidget.ImGuiWidget`: Property: treeExpansionRevision

Read these exact member contracts together with the [containing type](imguiwidget.imguiwidget.md) and its [shared ownership contract](../../../projects/inno-editor-imgui.md).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `treeExpansionRevision`

<a id="api-b95570ec6f5707f6"></a>
<!-- api: P:Inno.Editor.ImGui.ImGuiWidget.ImGuiWidget.treeExpansionRevision 3fec61d3b1b3f6ff35ab0d7d9bcf13cc5d5ea4e5f2aa01aa4f59488890419b6c -->

```csharp
public ulong Inno.Editor.ImGui.ImGuiWidget.ImGuiWidget.treeExpansionRevision { get; }
```

Gets this window and owner's expansion change counter for invalidating neutral flattened views.

**Throws `System.InvalidOperationException`:** No valid drawing session or native frame is active.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.Tree.cs#L70).
