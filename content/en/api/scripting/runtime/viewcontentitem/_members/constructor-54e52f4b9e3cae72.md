---
uid: api.54e52f4b9e3cae72f98eabd0832de8dbeaa866f6a4cf7c60b3335f84523ecf2f
symbol: "scripting:Inno.Rendering.Runtime:M:InnoEngine.Rendering.ViewContentItem.#ctor(InnoEngine.Core.Identity,InnoEngine.Mathematics.Matrix,InnoEngine.Mathematics.Vector3,InnoEngine.Mathematics.Vector3,InnoEngine.Rendering.IViewDrawable,InnoEngine.Rendering.IViewPointerTarget)"
source: xml
reviewed: 5ac95d41b72a87ea726c8bb05c8954370dee42842e1ca22a450e48f4e5d874fd
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
