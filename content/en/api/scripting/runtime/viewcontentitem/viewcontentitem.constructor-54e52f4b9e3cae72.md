---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.54e52f4b9e3cae72f98eabd0832de8dbeaa866f6a4cf7c60b3335f84523ecf2f
symbol: scripting:Inno.Rendering.Runtime:M:InnoEngine.Rendering.ViewContentItem.#ctor(InnoEngine.Core.Identity,InnoEngine.Mathematics.Matrix,InnoEngine.Mathematics.Vector3,InnoEngine.Mathematics.Vector3,InnoEngine.Rendering.IViewDrawable,InnoEngine.Rendering.IViewPointerTarget)
title: ViewContentItem.Constructor
kind: api
owners:
- Inno.Rendering.Runtime
apiSurface: editor-script
reviewed: b94ca108e1ad4f0b08aeea0b1316d6179839fdb39135c803ca4898e6e052d0e5
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
