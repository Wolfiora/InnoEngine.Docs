---
uid: api.46e3dcce55843ad97b54a4e1d7b1d264e420d2a8d604b07cde43598460afd7d2
symbol: "engine:Inno.Editor.Interactions:M:Inno.Editor.Interactions.EditorDragData.#ctor(Inno.Core.Identity.IdentityObject,System.String)"
source: xml
reviewed: 93f5758fd4106db7f7a551cffd770d287eb049ca311199d915e80bb63207365f
title: "Constructor"
kind: api
owners: [Inno.Editor.Interactions]
apiSurface: source-clr
---

Creates drag data for a registered identity object.

**Parameter `source`:** The registered source object resolved again for each drop query and delivery.

**Parameter `label`:** The human-readable label used by drag previews.

**Exception `T:System.ArgumentNullException`:** Thrown when `source` is `null`.

**Exception `T:System.InvalidOperationException`:** Thrown when `source` is not registered in a live identity domain.
