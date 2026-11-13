---
uid: api.6f9dcd842810a5067f60346dc3d76902b8cdc0c6b4d0339ad99f87c61bb30b3d
symbol: "engine:Inno.Rendering.Runtime:M:Inno.Rendering.Runtime.RenderView.#ctor(System.String,Inno.Rendering.RenderViewport,Inno.Core.Mathematics.Matrix,Inno.Core.Mathematics.Matrix,System.UInt64)"
source: xml
reviewed: f01b9d68ff0a0e03d56c2dd5fc2d4528c155b844a707f17ef1c3a74dd988eb81
title: "Constructor"
kind: api
owners: [Inno.Rendering.Runtime]
apiSurface: source-clr
---

Creates the exact view used to render content into a viewport.

**Parameter `id`:** Stable identity within the current output session.

**Parameter `viewport`:** Destination pixel rectangle.

**Parameter `viewMatrix`:** World-to-view transform.

**Parameter `projectionMatrix`:** View-to-clip transform.

**Parameter `visibilityMask`:** Model-defined visible content bits.
