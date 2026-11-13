---
uid: api.8f1ebbe1c2fe7450389a4e98d62eb7ebc8f8de45ad81c3f3f974c40a57555097
symbol: "engine:Inno.Integration.MacOSArm64.Bgfx.Runtime:M:Inno.Integration.MacOSArm64.Bgfx.Runtime.MacOSArm64BgfxSurfaceIntegration.Resolve(Inno.Adapter.Platform.PlatformNativeHandles,Inno.Adapter.Rendering.Bgfx.BgfxSurfaceRole)"
source: xml
reviewed: 4714510ec8cf1b5f4f6556d47c5d51e0ca015da8d6d068ddc5c90de854c0476e
title: "Resolve"
kind: api
owners: [Inno.Integration.MacOSArm64.Bgfx.Runtime]
apiSurface: source-clr
---

Validates this system's borrowed surface ABI before native renderer ownership is acquired.

**Parameter `handles`:** The platform window owner's immutable borrowed handles.

**Parameter `role`:** The requested primary or additional presentation role.

**Returns:** The validated handle binding and reset capability, without transferring window ownership.

**Exception `T:System.NotSupportedException`:** The surface ABI or requested presentation role is not supported by this integration.

**Exception `T:System.ArgumentException`:** The requested role or native window handle is invalid.
