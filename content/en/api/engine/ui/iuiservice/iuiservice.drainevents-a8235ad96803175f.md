---
uid: api.a8235ad96803175ff9451c3ae2b5164c40c9c680a5cc06b4f436483f04e68e0c
symbol: "engine:Inno.UI:M:Inno.UI.IUiService.DrainEvents(Inno.UI.UiContextHandle)"
source: xml
reviewed: d97fd89fefc17a68e7f82293bd95a6753b9b4f111b2f7efd5fad55f385648cd7
title: "IUiService.DrainEvents"
kind: api
owners: [Inno.UI]
apiSurface: source-clr
---

Drains document events queued by preceding updates.

**Parameter `context`:** The context that owns the requested document or state.

**Returns:** Events emitted since the preceding drain, in dispatch order.
