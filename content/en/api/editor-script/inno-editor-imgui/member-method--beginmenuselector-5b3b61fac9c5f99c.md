---
title: "ImGuiWidget — Method: BeginMenuSelector"
description: "Exact Method: BeginMenuSelector contracts in ImGuiWidget."
uid: api.inno.editor.imgui.editor-script.5b3b61fac9c5f99c
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: editor-script
contracts:
  - project.inno-editor-imgui
  - manual.scripting.use-script-api
  - api.inno.editor.imgui.editor-script.7b683e110163fdd5#type-declaration
---
# `ImGuiWidget`: Method: BeginMenuSelector

Read these exact member contracts together with the [containing type](innoeditor.imgui.imguiwidget.md) and its [shared ownership contract](../../projects/inno-editor-imgui.md).

**Source context:** `editor-script`, configuration `Debug`. This page does not certify execution on other platforms.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

## `BeginMenuSelector`

<a id="api-82c0392f9b9b5f6d"></a>
<!-- api: M:InnoEditor.ImGui.ImGuiWidget.BeginMenuSelector(System.String,System.String,System.Single,System.Single) bad84e73d586aa97cb89b4d03524811325f9cec51a07834cf2bf696f83f7006b -->

```csharp
public bool InnoEditor.ImGui.ImGuiWidget.BeginMenuSelector(string id, string preview, float width, float minimumPopupWidth)
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


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.Selector.cs#L84).
