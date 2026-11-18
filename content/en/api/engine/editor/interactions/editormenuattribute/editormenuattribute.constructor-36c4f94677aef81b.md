---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.36c4f94677aef81b886b21b0d77fd93b8dac3f1d9bf950fc50d95bf1ad7f598a
symbol: engine:Inno.Editor.Interactions:M:Inno.Editor.Interactions.EditorMenuAttribute.#ctor(System.String,System.String,System.Int32,System.Boolean)
title: EditorMenuAttribute.Constructor
kind: api
owners:
- Inno.Editor.Interactions
apiSurface: source-clr
sourceFingerprint: 61fb1bcd8b0f5339cb19795e18206a38f397f319fed777f41e4340a74dc7ffdf
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
