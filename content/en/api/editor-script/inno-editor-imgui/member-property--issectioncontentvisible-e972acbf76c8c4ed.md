---
title: "ImGuiWidget — Property: isSectionContentVisible"
description: "Exact Property: isSectionContentVisible contracts in ImGuiWidget."
uid: api.inno.editor.imgui.editor-script.e972acbf76c8c4ed
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: editor-script
contracts:
  - project.inno-editor-imgui
  - manual.scripting.use-script-api
  - api.inno.editor.imgui.editor-script.7b683e110163fdd5#type-declaration
---
# `ImGuiWidget`: Property: isSectionContentVisible

Read these exact member contracts together with the [containing type](innoeditor.imgui.imguiwidget.md) and its [shared ownership contract](../../projects/inno-editor-imgui.md).

**Source context:** `editor-script`, configuration `Debug`. This page does not certify execution on other platforms.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

## `isSectionContentVisible`

<a id="api-ba4e0237e926da80"></a>
<!-- api: P:InnoEditor.ImGui.ImGuiWidget.isSectionContentVisible afbfdb25280a5c876ea9978e8f403163b622f01b31793444e80ce4a79a97c076 -->

```csharp
public bool InnoEditor.ImGui.ImGuiWidget.isSectionContentVisible { get; }
```

Gets whether content belonging to the current Inspector section should be drawn.

**Constraints:** Attribute-driven drawers use this value to skip properties until the next section header
when the current section is collapsed.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.HelpBox.cs#L135).
