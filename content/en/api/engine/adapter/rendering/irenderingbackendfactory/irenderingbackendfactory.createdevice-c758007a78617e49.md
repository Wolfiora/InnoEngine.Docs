---
uid: api.c758007a78617e49bff01ba21ff9a1baba6b7fd79daca9956893399b5e434c69
symbol: "engine:Inno.Adapter.Rendering:M:Inno.Adapter.Rendering.IRenderingBackendFactory.CreateDevice(Inno.Adapter.Rendering.RenderingBackendId,Inno.Adapter.Rendering.RenderingBackendOptions)"
source: xml
reviewed: b13c73a4c7757818b5c2b17dcc18f959b075a2f8d03e4e5899843e341b5f0a7f
title: "IRenderingBackendFactory.CreateDevice"
kind: api
owners: [Inno.Adapter.Rendering]
apiSurface: source-clr
---

Creates a rendering device for the supplied primary presentation surface.

## Parameters

**Parameter `backend`:** Stable rendering backend selected by the composition root.

**Parameter `options`:** Backend-neutral rendering options.

## Returns

A caller-owned backend-neutral rendering device.
