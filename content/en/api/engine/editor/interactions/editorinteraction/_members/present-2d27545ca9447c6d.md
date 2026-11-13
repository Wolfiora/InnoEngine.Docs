---
uid: api.2d27545ca9447c6d46720b6037f5a3d2baf52cc869003feae3447882c20aae89
symbol: "engine:Inno.Editor.Interactions:M:Inno.Editor.Interactions.EditorInteraction.Present(System.String,System.Object)"
source: xml
reviewed: 5b1bdb275d2810d7cc106520dfb0413274c88d12725803d5027c4fb1e4863f65
title: "Present"
kind: api
owners: [Inno.Editor.Interactions]
apiSurface: source-clr
---

Presents an active action in place of this target's normal content.

**Parameter `action`:** The stable action name.

**Parameter `argument`:** Optional presentation data supplied by the current view.

**Returns:** `true` when the action presented content; otherwise, `false`.

**Exception `T:System.ArgumentException`:** Thrown when `action` is empty.
