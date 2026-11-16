---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.651bb3a9d3465e9ed0e97038dc9e4a56e09a6ef4c7cf5705a2e648239bde5a2e
symbol: scripting:Inno.Editor.ImGui:M:InnoEditor.ImGui.ImGuiWidget.InlineRename(System.String,System.String@,System.Boolean@,System.Single,System.UIntPtr,System.Single)
title: ImGuiWidget.InlineRename
kind: api
owners:
- Inno.Editor.ImGui
apiSurface: editor-script
reviewed: 4135ddb8cf2cb22e0da38e8e9c72ab32cdfbfc4f91d80646ee9c76723972c802
apiScope: Editor
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
