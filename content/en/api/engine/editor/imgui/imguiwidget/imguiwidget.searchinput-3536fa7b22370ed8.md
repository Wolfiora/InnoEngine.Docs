---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.3536fa7b22370ed804310835938087cf66b063dd46a15c46b6e6dd5aba0a867e
symbol: engine:Inno.Editor.ImGui:M:Inno.Editor.ImGui.ImGuiWidget.ImGuiWidget.SearchInput(System.String,System.String,System.String@,System.UIntPtr,System.Single)
title: ImGuiWidget.SearchInput
kind: api
owners:
- Inno.Editor.ImGui
apiSurface: source-clr
sourceFingerprint: 920be03078b4cda4f9bae3c29ce9c7c33c625efa450be6c0bb81a6063d97d62a
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Remarks

Escape clears a nonempty query before leaving text input on a subsequent press.

## Parameters

**Parameter `id`:** The stable control identifier.

**Parameter `hint`:** The hint shown while the query is empty.

**Parameter `query`:** The mutable search query.

**Parameter `capacity`:** The maximum UTF-8 buffer capacity.

**Parameter `width`:** The control width, or a negative value to fill the available space.

## Returns

`true` when the query changed; otherwise, `false`.
