---
uid: api.6acd4a83017405ea1a6c20f8e842de46b4e3cad278947aaa5e1eca7584fde350
symbol: "engine:Inno.Rendering.Runtime:M:Inno.Rendering.Runtime.ViewContentItem.#ctor(Inno.Core.Identity.Identity,Inno.Core.Mathematics.Matrix,Inno.Core.Mathematics.Vector3,Inno.Core.Mathematics.Vector3,Inno.Rendering.Runtime.IViewDrawable,Inno.Rendering.Runtime.IViewPointerTarget)"
source: xml
reviewed: 3a2bd65d353531b80b9932169cbdf58ad8fa903983e0d9d158c917e618ecb45e
title: "ViewContentItem.Constructor"
kind: api
owners: [Inno.Rendering.Runtime]
apiSurface: source-clr
---

Creates an item whose lifetime is limited to the current frame.

## Parameters

**Parameter `owner`:** Scene object identity used for model-owned sorting and visibility.

**Parameter `localToWorld`:** Exact transform of its local geometry.

**Parameter `localBoundsMin`:** Local minimum corner for conservative culling.

**Parameter `localBoundsMax`:** Local maximum corner for conservative culling.

**Parameter `drawable`:** Drawable inserted into the model's scene pass.

**Parameter `pointerTarget`:** Optional input target routed by the rendering model.
