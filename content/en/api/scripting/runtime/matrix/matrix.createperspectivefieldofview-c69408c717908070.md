---
uid: api.c69408c717908070d14c6a7966e65ac49dc08fce4b96841aacc05cfac6f57469
symbol: "scripting:Inno.Core.Mathematics:M:InnoEngine.Mathematics.Matrix.CreatePerspectiveFieldOfView(System.Single,System.Single,System.Single,System.Single)"
source: xml
reviewed: 8966ef982858ad43fe87eac2d6c374ec4d9f925078d90e650e6f262d3c9f0fb9
title: "Matrix.CreatePerspectiveFieldOfView"
kind: api
owners: [Inno.Core.Mathematics]
apiSurface: editor-script
apiScope: Runtime
---

Creates a left-handed, perspective projection matrix ( depth range 0..1).

## Parameters

**Parameter `fov`:** Vertical field of view in radians.

**Parameter `aspect`:** Viewport aspect ratio (width / height).

**Parameter `near`:** Near plane distance (positive).

**Parameter `far`:** Far plane distance (positive).

## Returns

A perspective projection matrix.
