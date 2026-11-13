---
uid: api.3b8313d55d5e5823aab4a4a30b5b62f3336b25f5f750d83527816e021faeda1b
symbol: "engine:Inno.Integration.BrowserWasm32.Sdl3:M:Inno.Integration.BrowserWasm32.Sdl3.BrowserWasm32Sdl3HostIntegration.CreateWindow(Inno.Platform.PlatformWindowOptions)"
source: xml
reviewed: 37dbc380abf0a806f301fa237b1183c3140602b33f343f4839bc82904c602f81
title: "CreateWindow"
kind: api
owners: [Inno.Integration.BrowserWasm32.Sdl3]
apiSurface: source-clr
---

Creates one native window whose ownership transfers to the application on success.

**Parameter `options`:** The explicit window options supplied by the product.

**Returns:** A nonzero opaque SDL window handle. Failure must throw without leaking a window.
