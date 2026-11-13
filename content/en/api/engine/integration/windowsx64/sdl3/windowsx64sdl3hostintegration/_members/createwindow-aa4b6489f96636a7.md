---
uid: api.aa4b6489f96636a7df130bd6fa3d08905e98327d378df980ed4459cea4ee82e0
symbol: "engine:Inno.Integration.WindowsX64.Sdl3:M:Inno.Integration.WindowsX64.Sdl3.WindowsX64Sdl3HostIntegration.CreateWindow(Inno.Platform.PlatformWindowOptions)"
source: xml
reviewed: 2a24086bc58055672181a216df019f31b7f682b847decdef5e9ce1a5861d2237
title: "CreateWindow"
kind: api
owners: [Inno.Integration.WindowsX64.Sdl3]
apiSurface: source-clr
---

Creates one native window whose ownership transfers to the application on success.

**Parameter `options`:** The explicit window options supplied by the product.

**Returns:** A nonzero opaque SDL window handle. Failure must throw without leaking a window.
