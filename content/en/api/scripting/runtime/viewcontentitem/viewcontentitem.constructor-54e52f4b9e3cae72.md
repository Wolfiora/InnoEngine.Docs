---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.54e52f4b9e3cae72f98eabd0832de8dbeaa866f6a4cf7c60b3335f84523ecf2f
symbol: scripting:Inno.Rendering.Runtime:M:InnoEngine.Rendering.ViewContentItem.#ctor(InnoEngine.Core.Identity,InnoEngine.Mathematics.Matrix,InnoEngine.Mathematics.Vector3,InnoEngine.Mathematics.Vector3,InnoEngine.Rendering.IViewDrawable,InnoEngine.Rendering.IViewPointerTarget)
title: ViewContentItem.Constructor
kind: api
owners:
- Inno.Rendering.Runtime
apiSurface: editor-script
sourceFingerprint: 1aed85e6b0e8fa6bf3097370fe8643bc39796d879610513b4cc04e5b27346e77
apiScope: Runtime
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
