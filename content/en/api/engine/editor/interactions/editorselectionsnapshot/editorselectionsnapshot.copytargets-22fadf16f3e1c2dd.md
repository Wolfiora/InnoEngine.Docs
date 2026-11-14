---
uid: api.22fadf16f3e1c2dd9197c826cdbd7490b85961c4221765d44ef7593bcf0809ac
symbol: "engine:Inno.Editor.Interactions:M:Inno.Editor.Interactions.EditorSelectionSnapshot.CopyTargets\u0060\u00601(Inno.Editor.Interactions.EditorInteractions,System.Collections.Generic.ICollection{\u0060\u00600})"
source: xml
reviewed: c949a1c28e69569fde1f939fca8ad1b1750cc6ca3d32e5198dd2a350b089785b
title: "EditorSelectionSnapshot.CopyTargets"
kind: api
owners: [Inno.Editor.Interactions]
apiSurface: source-clr
---

Resolves this immutable selection in its original domains, including same-identity recovery after a generation change.

## Type parameters

**Type parameter `TTarget`:** The target type accepted by the current presenter.

## Parameters

**Parameter `interactions`:** The active session supplying the original identity domains.

**Parameter `destination`:** A temporary caller-owned collection to clear and fill.

## Returns

The number of currently available compatible targets; missing members remain represented by this snapshot.
