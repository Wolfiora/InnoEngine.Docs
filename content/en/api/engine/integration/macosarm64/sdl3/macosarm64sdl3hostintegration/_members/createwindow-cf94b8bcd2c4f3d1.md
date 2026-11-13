---
uid: api.cf94b8bcd2c4f3d15ec7a53380f5948104aceab7f0d8d978ed4987a7f1b77103
symbol: "engine:Inno.Integration.MacOSArm64.Sdl3:M:Inno.Integration.MacOSArm64.Sdl3.MacOSArm64Sdl3HostIntegration.CreateWindow(Inno.Platform.PlatformWindowOptions)"
source: xml
reviewed: ebeb4cb2fa4ecc54b4a29718e63081c648a5e284c20fa92d39b70c44f41bfd28
title: "CreateWindow"
kind: api
owners: [Inno.Integration.MacOSArm64.Sdl3]
apiSurface: source-clr
---

Creates one native window whose ownership transfers to the application on success.

**Parameter `options`:** The explicit window options supplied by the product.

**Returns:** A nonzero opaque SDL window handle. Failure must throw without leaking a window.
