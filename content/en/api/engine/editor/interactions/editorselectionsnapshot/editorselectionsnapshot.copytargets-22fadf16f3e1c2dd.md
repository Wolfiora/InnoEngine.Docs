---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.22fadf16f3e1c2dd9197c826cdbd7490b85961c4221765d44ef7593bcf0809ac
symbol: engine:Inno.Editor.Interactions:M:Inno.Editor.Interactions.EditorSelectionSnapshot.CopyTargets``1(Inno.Editor.Interactions.EditorInteractions,System.Collections.Generic.ICollection{``0})
title: EditorSelectionSnapshot.CopyTargets
kind: api
owners:
- Inno.Editor.Interactions
apiSurface: source-clr
reviewed: 8a55d62b9b261fbb66b649378814af69fdfe815c3b226f99349c7eb977bbec81
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Type parameters

**Type parameter `TTarget`:** The target type accepted by the current presenter.

## Parameters

**Parameter `interactions`:** The active session supplying the original identity domains.

**Parameter `destination`:** A temporary caller-owned collection to clear and fill.

## Returns

The number of currently available compatible targets; missing members remain represented by this snapshot.
