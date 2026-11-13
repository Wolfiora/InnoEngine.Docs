---
uid: api.954fb41219a769a975b811bc7883053ed312d3eb015e82273a99481cb2788d12
symbol: "engine:Inno.Editor.ImGui:M:Inno.Editor.ImGui.ImGuiWidget.ImGuiWidget.InlineRename(System.String,System.String@,System.Boolean@,System.Single,System.UIntPtr,System.Single)"
source: xml
reviewed: b81caace6b5114eb23b1475c6b91e04ab3454d62202c2a70d3e59864191cc52b
title: "InlineRename"
kind: api
owners: [Inno.Editor.ImGui]
apiSurface: source-clr
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
