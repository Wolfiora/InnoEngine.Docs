---
uid: api.0be112b824e52537cace82b73a825be5bf6c382b1026176b90534c636d55a40d
symbol: "engine:Inno.Integration.MacOSArm64.Sdl3:M:Inno.Integration.MacOSArm64.Sdl3.MacOSArm64Sdl3HostIntegration.ResolveNativeSurface(System.IntPtr)"
source: xml
reviewed: 6dc9fa02b5fdf5d2c57a5fe5d973b16814c940e0fc692605d367fa80d9074582
title: "ResolveNativeSurface"
kind: api
owners: [Inno.Integration.MacOSArm64.Sdl3]
apiSurface: source-clr
---

Resolves borrowed graphics surface information for a live SDL window.

**Parameter `windowHandle`:** The opaque handle created or explicitly adopted by the application.

**Returns:** Borrowed surface handles valid until the native window is destroyed; unavailable surfaces fail.
