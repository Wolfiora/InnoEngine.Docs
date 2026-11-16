---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.58332a23e839ad827e89ac55ff750169cb1021d877f73bacc7a0b5edca60cd35
symbol: engine:Inno.Editor.ImGui:M:Inno.Editor.ImGui.ImGuiWidget.ImGuiWidget.PropertyRow(System.String,System.String,System.Action,System.String)
title: ImGuiWidget.PropertyRow
kind: api
owners:
- Inno.Editor.ImGui
apiSurface: source-clr
reviewed: f1d00573c0c6ae54c72b24706bc307108b93e2329210531c9c4c866e68dede80
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `id`:** Stable row identifier.

**Parameter `label`:** Human-readable property label.

**Parameter `drawValue`:** Value control callback.

**Parameter `tooltip`:** Optional hover help displayed from the property label.

## Exceptions

**Exception `T:System.ArgumentException`:** Thrown when `id` is empty or whitespace.

**Exception `T:System.ArgumentNullException`:** Thrown when `label` or `drawValue` is `null`.
