---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.4e5ed878ff7d1199f7ef0c6fbe0a6d240d984f4fd9326c878ebc856f12c3f1da
symbol: scripting:Inno.Editor.Interactions:M:InnoEditor.Interactions.EditorMenuAttribute.#ctor(System.String,System.String,System.Int32,System.Boolean)
title: EditorMenuAttribute.Constructor
kind: api
owners:
- Inno.Editor.Interactions
apiSurface: editor-script
reviewed: 62e84bd19167840f5eaea6cbcf14d9afe57d1a48b4373546731984f6e6bab9d1
apiScope: Editor
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
