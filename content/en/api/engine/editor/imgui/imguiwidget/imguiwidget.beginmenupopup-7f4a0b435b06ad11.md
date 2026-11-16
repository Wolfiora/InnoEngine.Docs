---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.7f4a0b435b06ad11c2db66444ab053f4a46e96b73a46a36d9c9f027d2b0738a2
symbol: engine:Inno.Editor.ImGui:M:Inno.Editor.ImGui.ImGuiWidget.ImGuiWidget.BeginMenuPopup(System.String)
title: ImGuiWidget.BeginMenuPopup
kind: api
owners:
- Inno.Editor.ImGui
apiSurface: source-clr
reviewed: 9854d58a6786354c275eb68d660c2060bb9f553b4891c55a43649843601f0a8f
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `id`:** The stable identifier previously passed to ImGui when opening the popup.

## Returns

`true` when popup content should be submitted; otherwise, `false`.

## Exceptions

**Exception `T:System.ArgumentException`:** Thrown when `id` is empty.
