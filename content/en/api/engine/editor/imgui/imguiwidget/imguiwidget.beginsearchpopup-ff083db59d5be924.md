---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.ff083db59d5be924d9cd817f1248ecf7f38494056c82868d0f3f05a5ada64710
symbol: engine:Inno.Editor.ImGui:M:Inno.Editor.ImGui.ImGuiWidget.ImGuiWidget.BeginSearchPopup(System.String,System.String@,System.String,System.UIntPtr,System.Single)
title: ImGuiWidget.BeginSearchPopup
kind: api
owners:
- Inno.Editor.ImGui
apiSurface: source-clr
sourceFingerprint: 21cf6b50ad8b150b9412057a4c3fbe4fd7c107385fdb321fb87ce548016b9316
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `id`:** The popup identifier previously supplied to ImGui.

**Parameter `query`:** The mutable search query.

**Parameter `hint`:** The hint shown while the query is empty.

**Parameter `capacity`:** The maximum UTF-8 buffer capacity.

**Parameter `width`:** The search field width, or a negative value to use the editor default.

## Returns

`true` when popup content should be drawn; otherwise, `false`.
