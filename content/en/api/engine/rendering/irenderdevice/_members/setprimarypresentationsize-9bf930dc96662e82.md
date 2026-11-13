---
uid: api.9bf930dc96662e8285a05aea165a6c7498864b85cfa63687a81cacb8f924437d
symbol: "engine:Inno.Rendering:M:Inno.Rendering.IRenderDevice.SetPrimaryPresentationSize(System.Nullable{Inno.Rendering.RenderPresentationSize})"
source: xml
reviewed: d7cb23097923e1eb62f25c4ddf1d72aa725c06f464edf4dc1429c9e0a900ca73
title: "SetPrimaryPresentationSize"
kind: api
owners: [Inno.Rendering]
apiSurface: source-clr
---

Queues primary output availability and its real pixel extent for the next frame safety point.

**Parameter `size`:** A valid drawable pixel extent, or null when the primary surface cannot currently present.

**Exception `T:System.ArgumentException`:** The assigned extent has zero or negative dimensions, including a default struct value.
