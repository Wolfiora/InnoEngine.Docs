---
title: "ImGuiWidget — Method: InlineRename"
description: "Exact Method: InlineRename contracts in ImGuiWidget."
uid: api.inno.editor.imgui.editor-script.cd46e6cb77fe53d8
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: editor-script
contracts:
  - project.inno-editor-imgui
  - manual.scripting.use-script-api
  - api.inno.editor.imgui.editor-script.7b683e110163fdd5#type-declaration
---
# `ImGuiWidget`: Method: InlineRename

Read these exact member contracts together with the [containing type](innoeditor.imgui.imguiwidget.md) and its [shared ownership contract](../../projects/inno-editor-imgui.md).

**Source context:** `editor-script`, configuration `Debug`. This page does not certify execution on other platforms.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

## `InlineRename`

<a id="api-5a3e203e6c32932a"></a>
<!-- api: M:InnoEditor.ImGui.ImGuiWidget.InlineRename(System.String,System.String@,System.Boolean@,System.Single,System.UIntPtr,System.Single) 531bc4f0c13f5e8e3f36584aef33cc0a02965ff5d202ea887156cdcbe06ce7d0 -->

```csharp
public InnoEditor.ImGui.InlineRenameResult InnoEditor.ImGui.ImGuiWidget.InlineRename(string id, ref string text, ref bool requestFocus, float rowHeight, nuint capacity = 512, float width = -1)
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


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.InlineRename.cs#L44).
