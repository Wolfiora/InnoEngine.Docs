---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.3536fa7b22370ed804310835938087cf66b063dd46a15c46b6e6dd5aba0a867e
symbol: engine:Inno.Editor.ImGui:M:Inno.Editor.ImGui.ImGuiWidget.ImGuiWidget.SearchInput(System.String,System.String,System.String@,System.UIntPtr,System.Single)
title: ImGuiWidget.SearchInput
kind: api
owners:
- Inno.Editor.ImGui
apiSurface: source-clr
sourceFingerprint: 1cf132d82c1c6ec0a3a3d3a447ab1f1b1fdc6075e5decd2899261882beed2e92
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `id`:** The stable control identifier.

**Parameter `hint`:** The hint shown while the query is empty.

**Parameter `query`:** The mutable search query.

**Parameter `capacity`:** The maximum UTF-8 buffer capacity.

**Parameter `width`:** The control width, or a negative value to fill the available space.

## Returns

`true` when the query changed; otherwise, `false`.

## Remarks

Escape clears a nonempty query before leaving text input on a subsequent press.
