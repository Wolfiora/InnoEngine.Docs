---
uid: api.028ca19103d5db04d4b08b257122f1bd6b8b83ea352dd21a2bf6d190e04d315c
symbol: "engine:Inno.Integration.WindowsX64.Bgfx.Runtime:M:Inno.Integration.WindowsX64.Bgfx.Runtime.WindowsX64BgfxSurfaceIntegration.Resolve(Inno.Adapter.Platform.PlatformNativeHandles,Inno.Adapter.Rendering.Bgfx.BgfxSurfaceRole)"
source: xml
reviewed: 91bf9c0ba0198e5c33052c624fafd33038218dd4c290fd5d9a852a5b66d8e14d
title: "Resolve"
kind: api
owners: [Inno.Integration.WindowsX64.Bgfx.Runtime]
apiSurface: source-clr
---

Validates this system's borrowed surface ABI before native renderer ownership is acquired.

**Parameter `handles`:** The platform window owner's immutable borrowed handles.

**Parameter `role`:** The requested primary or additional presentation role.

**Returns:** The validated handle binding and reset capability, without transferring window ownership.

**Exception `T:System.NotSupportedException`:** The surface ABI or requested presentation role is not supported by this integration.

**Exception `T:System.ArgumentException`:** The requested role or native window handle is invalid.
