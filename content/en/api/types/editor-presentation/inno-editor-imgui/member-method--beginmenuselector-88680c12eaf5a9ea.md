---
title: "ImGuiWidget.ImGuiWidget — Method: BeginMenuSelector"
description: "Exact Method: BeginMenuSelector contracts in ImGuiWidget.ImGuiWidget."
uid: api.inno.editor.imgui.88680c12eaf5a9ea
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: source-clr
contracts:
  - project.inno-editor-imgui
  - api.inno.editor.imgui.d7feaecdd475b63f#type-declaration
---
# `ImGuiWidget.ImGuiWidget`: Method: BeginMenuSelector

Read these exact member contracts together with the [containing type](imguiwidget.imguiwidget.md) and its [shared ownership contract](../../../projects/inno-editor-imgui.md).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `BeginMenuSelector`

<a id="api-9313089ba4fdfc6a"></a>
<!-- api: M:Inno.Editor.ImGui.ImGuiWidget.ImGuiWidget.BeginMenuSelector(System.String,System.String,System.Single,System.Single) 7983419bc100124f49b1a3e1db9c19908c4b6a43297fb8db66cc355807211fbc -->

```csharp
public bool Inno.Editor.ImGui.ImGuiWidget.ImGuiWidget.BeginMenuSelector(string id, string preview, float width, float minimumPopupWidth)
```

Draws a compact selector control and begins a work-area-bounded menu popup.

**Parameter `id`:** Stable selector identifier in the current ImGui scope.

**Parameter `preview`:** Text displayed by the closed selector.

**Parameter `width`:** Width reserved for the selector control.

**Parameter `minimumPopupWidth`:** Minimum outer width of the popup, including its window padding.

**Returns:** `true` when the popup is open and its contents should be submitted;
    otherwise, `false`.

**Throws `System.ArgumentException`:** Thrown when `id` is empty.

**Throws `System.ArgumentNullException`:** Thrown when `preview` is `null`.

**Throws `System.ArgumentOutOfRangeException`:** Thrown when `width` or `minimumPopupWidth` is not positive.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.Selector.cs#L84).
