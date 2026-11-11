---
title: "ImGuiWidget.ImGuiWidget — Method: InlineRename"
description: "Exact Method: InlineRename contracts in ImGuiWidget.ImGuiWidget."
uid: api.inno.editor.imgui.0c5be97c9eec87a2
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: source-clr
contracts:
  - project.inno-editor-imgui
  - api.inno.editor.imgui.d7feaecdd475b63f#type-declaration
---
# `ImGuiWidget.ImGuiWidget`: Method: InlineRename

Read these exact member contracts together with the [containing type](imguiwidget.imguiwidget.md) and its [shared ownership contract](../../../projects/inno-editor-imgui.md).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `InlineRename`

<a id="api-8cab006ab3f3a7cc"></a>
<!-- api: M:Inno.Editor.ImGui.ImGuiWidget.ImGuiWidget.InlineRename(System.String,System.String@,System.Boolean@,System.Single,System.UIntPtr,System.Single) c8404e9747adc0e897cf2422c923a1f11779ba39906e5983c3269e996a0d9635 -->

```csharp
public Inno.Editor.ImGui.ImGuiWidget.InlineRenameResult Inno.Editor.ImGui.ImGuiWidget.ImGuiWidget.InlineRename(string id, ref string text, ref bool requestFocus, float rowHeight, nuint capacity = 512, float width = -1)
```

Draws a compact single-line rename editor inside an existing row.

**Parameter `id`:** The stable control identifier.

**Parameter `text`:** The mutable text buffer.

**Parameter `requestFocus`:** Whether keyboard focus and complete-value selection should be requested. The value remains
`true` until the input becomes active and its current contents are selected.

**Parameter `rowHeight`:** The height of the row area in which the field is centered.

**Parameter `capacity`:** The maximum UTF-8 buffer capacity.

**Parameter `width`:** The control width, or a negative value to fill the available space.

**Returns:** The current rename outcome.

**Throws `System.ArgumentException`:** Thrown when `id` is empty.

**Throws `System.ArgumentOutOfRangeException`:** Thrown when `rowHeight` is not finite or is not positive.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.InlineRename.cs#L44).
