---
uid: api.563a1b717f3fee94ec6f025f7c858022dc4bdaf8b1c2517fdae335232ea8c224
symbol: "scripting:Inno.Editor.Interactions:M:InnoEditor.Interactions.EditorSelectionSnapshot.CopyTargets\u0060\u00601(InnoEditor.Interactions.EditorInteractions,System.Collections.Generic.ICollection{\u0060\u00600})"
source: xml
reviewed: ad39ee9db85d03e102073461af3ef23e8276de299173d4a72193072724ad2e17
title: "CopyTargets"
kind: api
owners: [Inno.Editor.Interactions]
apiSurface: editor-script
apiScope: Editor
---

Resolves this immutable selection in its original domains, including same-identity recovery after a generation change.

**Type parameter `TTarget`:** The target type accepted by the current presenter.

**Parameter `interactions`:** The active session supplying the original identity domains.

**Parameter `destination`:** A temporary caller-owned collection to clear and fill.

**Returns:** The number of currently available compatible targets; missing members remain represented by this snapshot.
