---
uid: api.5f80759497bb4cc88a67141429a0672b981375410f847b7412249dfd1090925c
symbol: "scripting:Inno.Editor.ImGui:M:InnoEditor.ImGui.ImGuiWidget.BeginMenuSelector(System.String,System.String,System.Single,System.Single)"
source: xml
reviewed: 02b7801ebed40f218273e63258d382f257e57537e0bf502a9e6c8988e30a0595
title: "ImGuiWidget.BeginMenuSelector"
kind: api
owners: [Inno.Editor.ImGui]
apiSurface: editor-script
apiScope: Editor
---

Draws a compact selector control and begins a work-area-bounded menu popup.

**Parameter `id`:** Stable selector identifier in the current ImGui scope.

**Parameter `preview`:** Text displayed by the closed selector.

**Parameter `width`:** Width reserved for the selector control.

**Parameter `minimumPopupWidth`:** Minimum outer width of the popup, including its window padding.

**Returns:** `true` when the popup is open and its contents should be submitted; otherwise, `false`.

**Exception `T:System.ArgumentException`:** Thrown when `id` is empty.

**Exception `T:System.ArgumentNullException`:** Thrown when `preview` is `null`.

**Exception `T:System.ArgumentOutOfRangeException`:** Thrown when `width` or `minimumPopupWidth` is not positive.
