---
title: "ImGuiWidget.ImGuiWidget — Property: isSectionContentVisible"
description: "Exact Property: isSectionContentVisible contracts in ImGuiWidget.ImGuiWidget."
uid: api.inno.editor.imgui.d4506c6286552020
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: source-clr
contracts:
  - project.inno-editor-imgui
  - api.inno.editor.imgui.d7feaecdd475b63f#type-declaration
---
# `ImGuiWidget.ImGuiWidget`: Property: isSectionContentVisible

Read these exact member contracts together with the [containing type](imguiwidget.imguiwidget.md) and its [shared ownership contract](../../../projects/inno-editor-imgui.md).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `isSectionContentVisible`

<a id="api-f8e0c46a60ee6599"></a>
<!-- api: P:Inno.Editor.ImGui.ImGuiWidget.ImGuiWidget.isSectionContentVisible 1faa6e7eeb697c96cf3bf9b3cb57646ff2c26bd2cc994c940b6f29244d22dac4 -->

```csharp
public bool Inno.Editor.ImGui.ImGuiWidget.ImGuiWidget.isSectionContentVisible { get; }
```

Gets whether content belonging to the current Inspector section should be drawn.

**Constraints:** Attribute-driven drawers use this value to skip properties until the next section header
when the current section is collapsed.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.HelpBox.cs#L135).
