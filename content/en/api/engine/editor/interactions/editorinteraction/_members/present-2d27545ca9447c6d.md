---
uid: api.2d27545ca9447c6d46720b6037f5a3d2baf52cc869003feae3447882c20aae89
symbol: "engine:Inno.Editor.Interactions:M:Inno.Editor.Interactions.EditorInteraction.Present(System.String,System.Object)"
source: xml
reviewed: b679be84d7da24121bc98989b9ab9a3d05e6aa643f3f2b982e0672907cdddb7a
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
