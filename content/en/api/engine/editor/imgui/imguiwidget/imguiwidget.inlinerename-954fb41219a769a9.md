---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.954fb41219a769a975b811bc7883053ed312d3eb015e82273a99481cb2788d12
symbol: engine:Inno.Editor.ImGui:M:Inno.Editor.ImGui.ImGuiWidget.ImGuiWidget.InlineRename(System.String,System.String@,System.Boolean@,System.Single,System.UIntPtr,System.Single)
title: ImGuiWidget.InlineRename
kind: api
owners:
- Inno.Editor.ImGui
apiSurface: source-clr
reviewed: bb7c0a978f89d5b23dd751798eb721b0bb1dfa16424ac2f09eba232191679cc1
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `id`:** The stable control identifier.

**Parameter `text`:** The mutable text buffer.

**Parameter `requestFocus`:** Whether keyboard focus and complete-value selection should be requested. The value remains `true` until the input becomes active and its current contents are selected.

**Parameter `rowHeight`:** The height of the row area in which the field is centered.

**Parameter `capacity`:** The maximum UTF-8 buffer capacity.

**Parameter `width`:** The control width, or a negative value to fill the available space.

## Returns

The current rename outcome.

## Exceptions

**Exception `T:System.ArgumentException`:** Thrown when `id` is empty.

**Exception `T:System.ArgumentOutOfRangeException`:** Thrown when `rowHeight` is not finite or is not positive.
