---
uid: api.6acd4a83017405ea1a6c20f8e842de46b4e3cad278947aaa5e1eca7584fde350
symbol: "engine:Inno.Rendering.Runtime:M:Inno.Rendering.Runtime.ViewContentItem.#ctor(Inno.Core.Identity.Identity,Inno.Core.Mathematics.Matrix,Inno.Core.Mathematics.Vector3,Inno.Core.Mathematics.Vector3,Inno.Rendering.Runtime.IViewDrawable,Inno.Rendering.Runtime.IViewPointerTarget)"
source: xml
reviewed: 66aaf6860e0a82becfcd129896db3a510d4b7f7ae791b05dce459f7003c6fc25
title: "Constructor"
kind: api
owners: [Inno.Rendering.Runtime]
apiSurface: source-clr
---

Creates an item whose lifetime is limited to the current frame.

**Parameter `owner`:** Scene object identity used for model-owned sorting and visibility.

**Parameter `localToWorld`:** Exact transform of its local geometry.

**Parameter `localBoundsMin`:** Local minimum corner for conservative culling.

**Parameter `localBoundsMax`:** Local maximum corner for conservative culling.

**Parameter `drawable`:** Drawable inserted into the model's scene pass.

**Parameter `pointerTarget`:** Optional input target routed by the rendering model.
