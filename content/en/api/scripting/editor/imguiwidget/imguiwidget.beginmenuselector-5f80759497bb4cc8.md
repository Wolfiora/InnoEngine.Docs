---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.5f80759497bb4cc88a67141429a0672b981375410f847b7412249dfd1090925c
symbol: scripting:Inno.Editor.ImGui:M:InnoEditor.ImGui.ImGuiWidget.BeginMenuSelector(System.String,System.String,System.Single,System.Single)
title: ImGuiWidget.BeginMenuSelector
kind: api
owners:
- Inno.Editor.ImGui
apiSurface: editor-script
sourceFingerprint: 6ff835ed6a09f94039f354f4f1c2dc31c033d69ab156e26862054334856ee4ff
apiScope: Editor
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
