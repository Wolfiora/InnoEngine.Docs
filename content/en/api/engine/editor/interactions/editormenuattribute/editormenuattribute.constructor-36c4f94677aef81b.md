---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.36c4f94677aef81b886b21b0d77fd93b8dac3f1d9bf950fc50d95bf1ad7f598a
symbol: engine:Inno.Editor.Interactions:M:Inno.Editor.Interactions.EditorMenuAttribute.#ctor(System.String,System.String,System.Int32,System.Boolean)
title: EditorMenuAttribute.Constructor
kind: api
owners:
- Inno.Editor.Interactions
apiSurface: source-clr
reviewed: 5eed3262d32650e7109792821bce68c1a33a3152ceb4b2336a621c9b2805e25a
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `area`:** The exact interaction area whose menu receives the action.

**Parameter `path`:** The slash-delimited path used to create parent menus and the leaf label.

**Parameter `order`:** The stable ordering value among sibling placements.

**Parameter `separatorBefore`:** Whether a visual separator should precede the leaf placement.

## Exceptions

**Exception `T:System.ArgumentException`:** Thrown when `area` or `path` is empty.
