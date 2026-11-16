---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.b60563971a133fe430c62bb4b79d9478fe4c9cef0bb96e889b8d11e8ea796570
symbol: engine:Inno.Editor.Interactions:M:Inno.Editor.Interactions.EditorActionAttribute.#ctor(System.String,System.String,System.Int32)
title: EditorActionAttribute.Constructor
kind: api
owners:
- Inno.Editor.Interactions
apiSurface: source-clr
reviewed: 3ebdbd2f6d6d647185ca512c0454d85d9c5f7d15f9fdfffcc92fb38dc61af302
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `action`:** The stable semantic action name.

**Parameter `area`:** The exact area, or an empty string for every area.

**Parameter `priority`:** The tie-breaking priority.

## Exceptions

**Exception `T:System.ArgumentException`:** Thrown when `action` is empty.
