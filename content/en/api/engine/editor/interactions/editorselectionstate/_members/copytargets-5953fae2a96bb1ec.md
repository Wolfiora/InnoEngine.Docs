---
uid: api.5953fae2a96bb1ecb1ff8b49134d195f6b1c89a9945af2c01728703846503e63
symbol: "engine:Inno.Editor.Interactions:M:Inno.Editor.Interactions.EditorSelectionState.CopyTargets\u0060\u00601(System.Collections.Generic.ICollection{\u0060\u00600})"
source: xml
reviewed: e38242063d3245da1aab805abcf475eda755d00c14a792dd91187ae96ebb6357
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
