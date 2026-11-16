---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.94602282a82beb8239b884229465d23c0235ebc66407f2bd6308ad86ab05fab7
symbol: engine:Inno.Editor.ImGui:M:Inno.Editor.ImGui.ImGuiWidget.ImGuiWidget.PropertyRow(System.String,System.Action,System.Action)
title: ImGuiWidget.PropertyRow
kind: api
owners:
- Inno.Editor.ImGui
apiSurface: source-clr
reviewed: dbba6fa73e85e0570603ddc08074f0ed8e12c71961cd9671afd85b9dad43bc8f
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
