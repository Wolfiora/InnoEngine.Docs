---
uid: api.651bb3a9d3465e9ed0e97038dc9e4a56e09a6ef4c7cf5705a2e648239bde5a2e
symbol: "scripting:Inno.Editor.ImGui:M:InnoEditor.ImGui.ImGuiWidget.InlineRename(System.String,System.String@,System.Boolean@,System.Single,System.UIntPtr,System.Single)"
source: xml
reviewed: 4385e46795b30dafe07aa54f192f802902feaa1679cc6f22783538aa95556e12
title: "InlineRename"
kind: api
owners: [Inno.Editor.ImGui]
apiSurface: editor-script
apiScope: Editor
---

Draws a compact single-line rename editor inside an existing row.

**Parameter `id`:** The stable control identifier.

**Parameter `text`:** The mutable text buffer.

**Parameter `requestFocus`:** Whether keyboard focus and complete-value selection should be requested. The value remains `true` until the input becomes active and its current contents are selected.

**Parameter `rowHeight`:** The height of the row area in which the field is centered.

**Parameter `capacity`:** The maximum UTF-8 buffer capacity.

**Parameter `width`:** The control width, or a negative value to fill the available space.

**Returns:** The current rename outcome.

**Exception `T:System.ArgumentException`:** Thrown when `id` is empty.

**Exception `T:System.ArgumentOutOfRangeException`:** Thrown when `rowHeight` is not finite or is not positive.
