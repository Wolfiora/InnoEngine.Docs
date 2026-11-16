---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.0d5a082d37cd25f7e0dbc025142fe181937e241828c56a7815c3bfbc6fc7ea82
symbol: scripting:Inno.Editor.ImGui:M:InnoEditor.ImGui.ImGuiWidget.PropertyRow(System.String,System.Action,System.Action)
title: ImGuiWidget.PropertyRow
kind: api
owners:
- Inno.Editor.ImGui
apiSurface: editor-script
reviewed: 38d14f0b989ce3cb5f03db0ce0949038cb9358ed673a1736b37dbd294e89ccfb
apiScope: Editor
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
