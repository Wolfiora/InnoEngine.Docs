---
uid: api.9bf930dc96662e8285a05aea165a6c7498864b85cfa63687a81cacb8f924437d
symbol: "engine:Inno.Rendering:M:Inno.Rendering.IRenderDevice.SetPrimaryPresentationSize(System.Nullable{Inno.Rendering.RenderPresentationSize})"
source: xml
reviewed: 7420a60e111e5e1ccd499cf24a9e795edbde3649d6914f2eea13c18aca6f74a2
title: "IRenderDevice.SetPrimaryPresentationSize"
kind: api
owners: [Inno.Rendering]
apiSurface: source-clr
---

Queues primary output availability and its real pixel extent for the next frame safety point.

## Parameters

**Parameter `size`:** A valid drawable pixel extent, or null when the primary surface cannot currently present.

## Exceptions

**Exception `T:System.ArgumentException`:** The assigned extent has zero or negative dimensions, including a default struct value.
