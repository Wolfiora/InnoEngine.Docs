---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.b60563971a133fe430c62bb4b79d9478fe4c9cef0bb96e889b8d11e8ea796570
symbol: engine:Inno.Editor.Interactions:M:Inno.Editor.Interactions.EditorActionAttribute.#ctor(System.String,System.String,System.Int32)
title: EditorActionAttribute.Constructor
kind: api
owners:
- Inno.Editor.Interactions
apiSurface: source-clr
sourceFingerprint: 21b81f9730bc022c3297ec430a2c3937fe34f2b706d3796b7973681153ba8bfe
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
