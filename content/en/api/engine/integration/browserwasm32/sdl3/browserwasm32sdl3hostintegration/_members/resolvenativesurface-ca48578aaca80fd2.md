---
uid: api.ca48578aaca80fd2a1a6a6cc780e9143c68a148a5c9041c435d6fa8539ba9383
symbol: "engine:Inno.Integration.BrowserWasm32.Sdl3:M:Inno.Integration.BrowserWasm32.Sdl3.BrowserWasm32Sdl3HostIntegration.ResolveNativeSurface(System.IntPtr)"
source: xml
reviewed: da1ac9b70daf399cca28bebab2dd2afb563ea7ab7ad76e7ebab577a9ac0f29e4
title: "ResolveNativeSurface"
kind: api
owners: [Inno.Integration.BrowserWasm32.Sdl3]
apiSurface: source-clr
---

Resolves borrowed graphics surface information for a live SDL window.

**Parameter `windowHandle`:** The opaque handle created or explicitly adopted by the application.

**Returns:** Borrowed surface handles valid until the native window is destroyed; unavailable surfaces fail.
