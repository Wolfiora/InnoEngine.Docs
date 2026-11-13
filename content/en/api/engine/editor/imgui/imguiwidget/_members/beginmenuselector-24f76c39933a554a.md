---
uid: api.24f76c39933a554abdd337a96c63237069d6dd570de2c1775df742b1e0b7ea04
symbol: "engine:Inno.Editor.ImGui:M:Inno.Editor.ImGui.ImGuiWidget.ImGuiWidget.BeginMenuSelector(System.String,System.String,System.Single,System.Single)"
source: xml
reviewed: 2e6797e17f809276992e1f3598b08fa85aae5a12d2d6b1593feda67c55a21e05
title: "BeginMenuSelector"
kind: api
owners: [Inno.Editor.ImGui]
apiSurface: source-clr
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
