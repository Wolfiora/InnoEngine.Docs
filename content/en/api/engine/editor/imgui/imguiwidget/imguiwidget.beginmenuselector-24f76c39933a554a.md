---
uid: api.24f76c39933a554abdd337a96c63237069d6dd570de2c1775df742b1e0b7ea04
symbol: "engine:Inno.Editor.ImGui:M:Inno.Editor.ImGui.ImGuiWidget.ImGuiWidget.BeginMenuSelector(System.String,System.String,System.Single,System.Single)"
source: xml
reviewed: b4c6ab8efdf577e85ff15ff0ef35464c8a5817795deec9fff1c5990c1c68165d
title: "ImGuiWidget.BeginMenuSelector"
kind: api
owners: [Inno.Editor.ImGui]
apiSurface: source-clr
---

Draws a compact selector control and begins a work-area-bounded menu popup.

## Parameters

**Parameter `id`:** Stable selector identifier in the current ImGui scope.

**Parameter `preview`:** Text displayed by the closed selector.

**Parameter `width`:** Width reserved for the selector control.

**Parameter `minimumPopupWidth`:** Minimum outer width of the popup, including its window padding.

## Returns

`true` when the popup is open and its contents should be submitted; otherwise, `false`.

## Exceptions

**Exception `T:System.ArgumentException`:** Thrown when `id` is empty.

**Exception `T:System.ArgumentNullException`:** Thrown when `preview` is `null`.

**Exception `T:System.ArgumentOutOfRangeException`:** Thrown when `width` or `minimumPopupWidth` is not positive.
