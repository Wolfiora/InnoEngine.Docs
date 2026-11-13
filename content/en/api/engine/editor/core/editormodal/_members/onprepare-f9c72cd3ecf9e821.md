---
uid: api.f9c72cd3ecf9e8213921a57edc357ae3908b572e716c9a60260539c590423334
symbol: "engine:Inno.Editor.Core:M:Inno.Editor.Core.EditorModal.OnPrepare(Inno.Editor.Core.EditorContext,System.Numerics.Vector2)"
source: xml
reviewed: 562e40efa33b38f273900d7374cb506e144fc04863e28e6e11ed1482e451f25d
title: "OnPrepare"
kind: api
owners: [Inno.Editor.Core]
apiSurface: source-clr
---

Captures the state consumed by OnDraw and measures it without drawing or performing domain operations. Content-sized modals must return a finite, nonnegative size. Fixed-size modals may return null.

**Parameter `context`:** The current owner-thread context.

**Parameter `availableContentSize`:** The bounded, already scaled content area.

**Returns:** The content extent required by the captured state, or null for explicit sizing.
