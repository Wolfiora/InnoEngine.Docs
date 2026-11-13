---
uid: api.c69408c717908070d14c6a7966e65ac49dc08fce4b96841aacc05cfac6f57469
symbol: "scripting:Inno.Core.Mathematics:M:InnoEngine.Mathematics.Matrix.CreatePerspectiveFieldOfView(System.Single,System.Single,System.Single,System.Single)"
source: xml
reviewed: a8c7e0a0e261fc04d54a196f73d3b8ad0f4ef2797ec50f96ee135cfee5e4f1d7
title: "CreatePerspectiveFieldOfView"
kind: api
owners: [Inno.Core.Mathematics]
apiSurface: editor-script
apiScope: Runtime
---

Creates a left-handed, perspective projection matrix ( depth range 0..1).

**Parameter `fov`:** Vertical field of view in radians.

**Parameter `aspect`:** Viewport aspect ratio (width / height).

**Parameter `near`:** Near plane distance (positive).

**Parameter `far`:** Far plane distance (positive).

**Returns:** A perspective projection matrix.
