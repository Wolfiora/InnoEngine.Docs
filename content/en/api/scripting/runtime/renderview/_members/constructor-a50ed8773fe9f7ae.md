---
uid: api.a50ed8773fe9f7ae2e75084d13bedf802d4f4b7cd11c6fb897b0512e5bab72af
symbol: "scripting:Inno.Rendering.Runtime:M:InnoEngine.Rendering.RenderView.#ctor(System.String,InnoEngine.Rendering.RenderViewport,InnoEngine.Mathematics.Matrix,InnoEngine.Mathematics.Matrix,System.UInt64)"
source: xml
reviewed: 44f64d7cf1e8d31dc486616d0ab37ab345b55fd817717fae3df7abb61dd6d7ad
title: "Constructor"
kind: api
owners: [Inno.Rendering.Runtime]
apiSurface: editor-script
apiScope: Runtime
---

Creates the exact view used to render content into a viewport.

**Parameter `id`:** Stable identity within the current output session.

**Parameter `viewport`:** Destination pixel rectangle.

**Parameter `viewMatrix`:** World-to-view transform.

**Parameter `projectionMatrix`:** View-to-clip transform.

**Parameter `visibilityMask`:** Model-defined visible content bits.
