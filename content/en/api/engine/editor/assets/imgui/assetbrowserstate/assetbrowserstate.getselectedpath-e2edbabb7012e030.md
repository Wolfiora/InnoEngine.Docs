---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.e2edbabb7012e030ba7514efde2aebaa3564147c1c6a36049a3669651d3a9247
symbol: engine:Inno.Editor.Assets.ImGui:M:Inno.Editor.Assets.ImGui.AssetBrowserState.GetSelectedPath(Inno.Editor.Core.EditorContext)
title: AssetBrowserState.GetSelectedPath
kind: api
owners:
- Inno.Editor.Assets.ImGui
apiSurface: source-clr
reviewed: 7d94c7de0db3a10ac6d9578ebb3ba0161cc181f047e6fadae150af0fa87e2624
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `context`:** The shared editor context containing the global selection.

## Returns

The normalized source-relative path, or `null` when another target type is selected.

## Exceptions

**Exception `T:System.ArgumentNullException`:** Thrown when `context` is `null`.
