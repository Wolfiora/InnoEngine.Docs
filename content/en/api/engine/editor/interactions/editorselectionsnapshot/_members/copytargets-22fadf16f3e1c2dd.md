---
uid: api.22fadf16f3e1c2dd9197c826cdbd7490b85961c4221765d44ef7593bcf0809ac
symbol: "engine:Inno.Editor.Interactions:M:Inno.Editor.Interactions.EditorSelectionSnapshot.CopyTargets\u0060\u00601(Inno.Editor.Interactions.EditorInteractions,System.Collections.Generic.ICollection{\u0060\u00600})"
source: xml
reviewed: 60f9218dab17d8fdeee386c1d6f959adc824d3f9906a0e6dba2bdd917981d0bf
title: "CopyTargets"
kind: api
owners: [Inno.Editor.Interactions]
apiSurface: source-clr
---

Resolves this immutable selection in its original domains, including same-identity recovery after a generation change.

**Type parameter `TTarget`:** The target type accepted by the current presenter.

**Parameter `interactions`:** The active session supplying the original identity domains.

**Parameter `destination`:** A temporary caller-owned collection to clear and fill.

**Returns:** The number of currently available compatible targets; missing members remain represented by this snapshot.
