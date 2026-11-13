---
uid: api.5953fae2a96bb1ecb1ff8b49134d195f6b1c89a9945af2c01728703846503e63
symbol: "engine:Inno.Editor.Interactions:M:Inno.Editor.Interactions.EditorSelectionState.CopyTargets\u0060\u00601(System.Collections.Generic.ICollection{\u0060\u00600})"
source: xml
reviewed: 1a241e1042d40ca0dd8ee3b5682d8c20f46164aeafe69f12b295e8e48a0fcee6
title: "CopyTargets"
kind: api
owners: [Inno.Editor.Interactions]
apiSurface: source-clr
---

Copies currently available selected targets into a caller-owned temporary collection.

**Type parameter `TTarget`:** The target type accepted by the caller.

**Parameter `destination`:** The collection to clear and fill; do not retain live entries across callbacks.

**Returns:** The number of targets resolved in this callback.

**Exception `T:System.ArgumentNullException`:** The destination is null.
