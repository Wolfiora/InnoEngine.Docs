---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.24f76c39933a554abdd337a96c63237069d6dd570de2c1775df742b1e0b7ea04
symbol: engine:Inno.Editor.ImGui:M:Inno.Editor.ImGui.ImGuiWidget.ImGuiWidget.BeginMenuSelector(System.String,System.String,System.Single,System.Single)
title: ImGuiWidget.BeginMenuSelector
kind: api
owners:
- Inno.Editor.ImGui
apiSurface: source-clr
reviewed: 330208877b72ea43c21d55995d3d3f8e140c033ea56f331c3a6d0ba3f7101032
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

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
