---
uid: api.9f491604de0ae7fce05fb5539bbd8569f64266e1a5c525c661d4d2073f3fcf54
symbol: "engine:Inno.Rendering.Runtime:M:Inno.Rendering.Runtime.RenderRuntime.RegisterContributor(Inno.Rendering.IRenderFrameGraphContributor)"
source: xml
reviewed: 85ad549b9f6c7e2d8d88aaaac96de171dab12f4dc7a8134aebfc181ccadff86d
title: "RegisterContributor"
kind: api
owners: [Inno.Rendering.Runtime]
apiSurface: source-clr
---

Registers frame-final work without transferring frame ownership.

**Parameter `contributor`:** Contributor invoked after all user pipeline requests.

**Exception `T:System.ArgumentException`:** Thrown when the instance is already registered.

**Exception `T:System.InvalidOperationException`:** Retirement has started or generation cleanup has faulted the owner.
