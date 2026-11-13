---
uid: api.b29d30b1cc163507f84a6499c7cb9833b4d9d28a91d7f0824c12728db41aa1d5
symbol: "engine:Inno.Integration.BrowserWasm32.Bgfx.Runtime:M:Inno.Integration.BrowserWasm32.Bgfx.Runtime.BrowserWasm32BgfxSurfaceIntegration.Resolve(Inno.Adapter.Platform.PlatformNativeHandles,Inno.Adapter.Rendering.Bgfx.BgfxSurfaceRole)"
source: xml
reviewed: fd963ded1961c7f6b94a3e6cdf387e49b1f22ea6ddd61a23ae5e4d437f8fdad5
title: "Resolve"
kind: api
owners: [Inno.Integration.BrowserWasm32.Bgfx.Runtime]
apiSurface: source-clr
---

Validates this system's borrowed surface ABI before native renderer ownership is acquired.

**Parameter `handles`:** The platform window owner's immutable borrowed handles.

**Parameter `role`:** The requested primary or additional presentation role.

**Returns:** The validated handle binding and reset capability, without transferring window ownership.

**Exception `T:System.NotSupportedException`:** The surface ABI or requested presentation role is not supported by this integration.

**Exception `T:System.ArgumentException`:** The requested role or native window handle is invalid.
