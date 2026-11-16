---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.00b13eae60d1ae8716a5c703fc1ffe4afc5c8c0b143b2b655e1eb4246794432b
symbol: engine:Inno.Editor.Interactions:M:Inno.Editor.Interactions.EditorHistoryHandler.TryMerge(Inno.Editor.Interactions.EditorHistoryChange,Inno.Editor.Interactions.EditorHistoryChange,Inno.Editor.Interactions.EditorHistoryChange@)
title: EditorHistoryHandler.TryMerge
kind: api
owners:
- Inno.Editor.Interactions
apiSurface: source-clr
reviewed: ebdb6b461057007fb70c589ad2ea50113d518783b9672c40cd63d2123ff8d898
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `older`:** The existing older history change.

**Parameter `newer`:** The newly recorded adjacent history change.

**Parameter `merged`:** The independently owned merged change when successful.

## Returns

`true` when `merged` replaces both input changes.
