---
uid: api.cba9dfe1cf2938038d9909c053bf06907df87b807d90d1ea83fccba69ca0b013
symbol: "engine:Inno.Integration.WindowsX64.Sdl3:M:Inno.Integration.WindowsX64.Sdl3.WindowsX64Sdl3HostIntegration.ResolveNativeSurface(System.IntPtr)"
source: xml
reviewed: 6fa14583a1f5a2fbdedab7d6751095666696ff097c82b688c4ebf96db4bb5d7f
title: "ResolveNativeSurface"
kind: api
owners: [Inno.Integration.WindowsX64.Sdl3]
apiSurface: source-clr
---

Resolves borrowed graphics surface information for a live SDL window.

**Parameter `windowHandle`:** The opaque handle created or explicitly adopted by the application.

**Returns:** Borrowed surface handles valid until the native window is destroyed; unavailable surfaces fail.
