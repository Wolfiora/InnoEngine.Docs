---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.c0eed63351b6956566bb57a806f9650e150f60dad051cc1008d0a3127251c0ea
symbol: scripting:Inno.Editor.Inspection:M:InnoEditor.Inspection.PropertyDrawContext.TryGetTextState(System.String,System.String@)
title: PropertyDrawContext.TryGetTextState
kind: api
owners:
- Inno.Editor.Inspection
apiSurface: editor-script
reviewed: 2560604eb9ebd8bc7828070367422b62598b9af3bff66c9c664f55adad2a6d6e
apiScope: Editor
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `key`:** Drawer-local state identity within the current property path.

**Parameter `value`:** Receives the stored text when the state exists.

## Returns

`true` when text state exists for the exact owner and property path.
