---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.7f4a0b435b06ad11c2db66444ab053f4a46e96b73a46a36d9c9f027d2b0738a2
symbol: engine:Inno.Editor.ImGui:M:Inno.Editor.ImGui.ImGuiWidget.ImGuiWidget.BeginMenuPopup(System.String)
title: ImGuiWidget.BeginMenuPopup
kind: api
owners:
- Inno.Editor.ImGui
apiSurface: source-clr
reviewed: f7a64dbdea52d3bed1e3307b0d51dab154c6956073fb5c70c5c9828fec1e443d

# Authoring metadata. Edit these fields and the explanation below.
source: xml
outdated: false
---

Begins an explicitly opened popup using the editor context-menu presentation contract. The popup stays in its parent viewport, sizes itself to submitted content, and scrolls when its work-area bound is reached.

## Parameters

**Parameter `id`:** The stable identifier previously passed to ImGui when opening the popup.

## Returns

`true` when popup content should be submitted; otherwise, `false`.

## Exceptions

**Exception `T:System.ArgumentException`:** Thrown when `id` is empty.
