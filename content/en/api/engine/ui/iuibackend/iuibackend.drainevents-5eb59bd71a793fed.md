---
uid: api.5eb59bd71a793fedaf0245362a67d5ae54ac1da4d77796f8603671af070e3261
symbol: "engine:Inno.UI:M:Inno.UI.IUiBackend.DrainEvents(Inno.UI.UiContextHandle)"
source: xml
reviewed: 265098f8160918fd34f7133c07d1274e0ef2b9aed83e537b692d7bd891f20be4
title: "IUiBackend.DrainEvents"
kind: api
owners: [Inno.UI]
apiSurface: source-clr
---

Drains document events queued by the preceding updates.

## Parameters

**Parameter `context`:** The context that owns the requested document or state.

## Returns

Events emitted since the preceding drain, in dispatch order.
