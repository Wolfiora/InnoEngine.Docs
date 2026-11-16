---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.46e3dcce55843ad97b54a4e1d7b1d264e420d2a8d604b07cde43598460afd7d2
symbol: engine:Inno.Editor.Interactions:M:Inno.Editor.Interactions.EditorDragData.#ctor(Inno.Core.Identity.IdentityObject,System.String)
title: EditorDragData.Constructor
kind: api
owners:
- Inno.Editor.Interactions
apiSurface: source-clr
reviewed: 7f552498f4494f8fd152578e6169a0b48ece3c05084756a35a9c519e636c0546
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `source`:** The registered source object resolved again for each drop query and delivery.

**Parameter `label`:** The human-readable label used by drag previews.

## Exceptions

**Exception `T:System.ArgumentNullException`:** Thrown when `source` is `null`.

**Exception `T:System.InvalidOperationException`:** Thrown when `source` is not registered in a live identity domain.
