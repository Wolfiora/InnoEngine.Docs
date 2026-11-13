---
uid: api.a8235ad96803175ff9451c3ae2b5164c40c9c680a5cc06b4f436483f04e68e0c
symbol: "engine:Inno.UI:M:Inno.UI.IUiService.DrainEvents(Inno.UI.UiContextHandle)"
source: xml
reviewed: 607be29456677c3caf63008a920d58686fe3657865c9aff24cbebfe98185f40a
title: "DrainEvents"
kind: api
owners: [Inno.UI]
apiSurface: source-clr
---

Drains document events queued by preceding updates.

**Parameter `context`:** The context that owns the requested document or state.

**Returns:** Events emitted since the preceding drain, in dispatch order.
