---
uid: api.5eb59bd71a793fedaf0245362a67d5ae54ac1da4d77796f8603671af070e3261
symbol: "engine:Inno.UI:M:Inno.UI.IUiBackend.DrainEvents(Inno.UI.UiContextHandle)"
source: xml
reviewed: 1e4789697f20719f287a3bc803b9b6131c33763ac5a674d19e8a050b09fe9f01
title: "DrainEvents"
kind: api
owners: [Inno.UI]
apiSurface: source-clr
---

Drains document events queued by the preceding updates.

**Parameter `context`:** The context that owns the requested document or state.

**Returns:** Events emitted since the preceding drain, in dispatch order.
