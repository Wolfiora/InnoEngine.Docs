---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.6acd4a83017405ea1a6c20f8e842de46b4e3cad278947aaa5e1eca7584fde350
symbol: engine:Inno.Rendering.Runtime:M:Inno.Rendering.Runtime.ViewContentItem.#ctor(Inno.Core.Identity.Identity,Inno.Core.Mathematics.Matrix,Inno.Core.Mathematics.Vector3,Inno.Core.Mathematics.Vector3,Inno.Rendering.Runtime.IViewDrawable,Inno.Rendering.Runtime.IViewPointerTarget)
title: ViewContentItem.Constructor
kind: api
owners:
- Inno.Rendering.Runtime
apiSurface: source-clr
sourceFingerprint: a2def9c3a946260cd76ed688b2f2ab6d28193a58438ed535a60f3addc6ff6339
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `owner`:** Scene object identity used for model-owned sorting and visibility.

**Parameter `localToWorld`:** Exact transform of its local geometry.

**Parameter `localBoundsMin`:** Local minimum corner for conservative culling.

**Parameter `localBoundsMax`:** Local maximum corner for conservative culling.

**Parameter `drawable`:** Drawable inserted into the model's scene pass.

**Parameter `pointerTarget`:** Optional input target routed by the rendering model.
