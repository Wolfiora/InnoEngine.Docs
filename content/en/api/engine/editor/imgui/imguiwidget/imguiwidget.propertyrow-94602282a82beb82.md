---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.94602282a82beb8239b884229465d23c0235ebc66407f2bd6308ad86ab05fab7
symbol: engine:Inno.Editor.ImGui:M:Inno.Editor.ImGui.ImGuiWidget.ImGuiWidget.PropertyRow(System.String,System.Action,System.Action)
title: ImGuiWidget.PropertyRow
kind: api
owners:
- Inno.Editor.ImGui
apiSurface: source-clr
reviewed: 1fccec3ffb605fb1a8c63144fc4038d653f736f6ae9cf47f0b70ae24339cf189
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `id`:** Stable row identifier.

**Parameter `drawLabel`:** Label presentation callback. It may wrap or draw badges inside the label column.

**Parameter `drawValue`:** Value control callback.

## Exceptions

**Exception `T:System.ArgumentException`:** Thrown when `id` is empty or whitespace.

**Exception `T:System.ArgumentNullException`:** Thrown when `drawLabel` or `drawValue` is `null`.
