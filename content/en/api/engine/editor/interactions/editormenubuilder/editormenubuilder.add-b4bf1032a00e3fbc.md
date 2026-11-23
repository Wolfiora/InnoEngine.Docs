---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.b4bf1032a00e3fbc8376c139e9dbb4ad6f353fa59c49cae85108011dfe9690f1
symbol: engine:Inno.Editor.Interactions:M:Inno.Editor.Interactions.EditorMenuBuilder.Add(System.String,System.String,System.Int32,System.Boolean,System.Object)
title: EditorMenuBuilder.Add
kind: api
owners:
- Inno.Editor.Interactions
apiSurface: source-clr
sourceFingerprint: c0d3eec8cd60e5ed44b78e04d7fb4163f94e9e8c960ff7a230d509299da598f4
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `path`:** The slash-delimited path used to create parent menus and the leaf label.

**Parameter `actionID`:** The stable action identifier invoked by the leaf.

**Parameter `order`:** The stable ordering value among sibling placements.

**Parameter `separatorBefore`:** Whether a visual separator should precede the leaf placement.

**Parameter `argument`:** An optional argument captured for this menu generation.

## Exceptions

**Exception `T:System.ArgumentException`:** Thrown when `path` or `actionID` is empty.
