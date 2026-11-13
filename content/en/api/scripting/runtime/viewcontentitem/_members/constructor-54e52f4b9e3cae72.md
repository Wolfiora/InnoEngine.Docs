---
uid: api.54e52f4b9e3cae72f98eabd0832de8dbeaa866f6a4cf7c60b3335f84523ecf2f
symbol: "scripting:Inno.Rendering.Runtime:M:InnoEngine.Rendering.ViewContentItem.#ctor(InnoEngine.Core.Identity,InnoEngine.Mathematics.Matrix,InnoEngine.Mathematics.Vector3,InnoEngine.Mathematics.Vector3,InnoEngine.Rendering.IViewDrawable,InnoEngine.Rendering.IViewPointerTarget)"
source: xml
reviewed: 8c82b15cbb9aa07c46a908db3085244b2e25e9143f8c05477ca3cd9a2a76d41f
title: "Constructor"
kind: api
owners: [Inno.Rendering.Runtime]
apiSurface: editor-script
apiScope: Runtime
---

Creates an item whose lifetime is limited to the current frame.

**Parameter `owner`:** Scene object identity used for model-owned sorting and visibility.

**Parameter `localToWorld`:** Exact transform of its local geometry.

**Parameter `localBoundsMin`:** Local minimum corner for conservative culling.

**Parameter `localBoundsMax`:** Local maximum corner for conservative culling.

**Parameter `drawable`:** Drawable inserted into the model's scene pass.

**Parameter `pointerTarget`:** Optional input target routed by the rendering model.
