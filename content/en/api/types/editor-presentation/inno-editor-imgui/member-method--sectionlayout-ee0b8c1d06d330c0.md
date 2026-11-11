---
title: "ImGuiWidget.ImGuiWidget — Method: SectionLayout"
description: "Exact Method: SectionLayout contracts in ImGuiWidget.ImGuiWidget."
uid: api.inno.editor.imgui.ee0b8c1d06d330c0
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: source-clr
contracts:
  - project.inno-editor-imgui
  - api.inno.editor.imgui.d7feaecdd475b63f#type-declaration
---
# `ImGuiWidget.ImGuiWidget`: Method: SectionLayout

Read these exact member contracts together with the [containing type](imguiwidget.imguiwidget.md) and its [shared ownership contract](../../../projects/inno-editor-imgui.md).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `SectionLayout`

<a id="api-428fa2f84a8f47ce"></a>
<!-- api: M:Inno.Editor.ImGui.ImGuiWidget.ImGuiWidget.SectionLayout(System.Action) 26e3af42a852c2e94d17453dd639c85dbeae9a5063e0bb49302ed589a96476a4 -->

```csharp
public void Inno.Editor.ImGui.ImGuiWidget.ImGuiWidget.SectionLayout(System.Action drawContent)
```

Draws content in a scope where consecutive section headers become framed fieldsets.

**Parameter `drawContent`:** Callback that draws all content participating in the section layout.

**Throws `System.ArgumentNullException`:** Thrown when `drawContent` is `null`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.HelpBox.cs#L110).
