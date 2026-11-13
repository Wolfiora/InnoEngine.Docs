---
uid: api.ace1a1bf5b59b8664178cd987ad4d60f0557702393aeadace4411bf7ede1bf1e
symbol: "engine:Inno.Editor.Interactions:M:Inno.Editor.Interactions.EditorPlanarNavigation.WheelFactor(System.Single,System.Single)"
source: xml
reviewed: fcf3b74943cfe8d8bdb28ec6c51946aeafc9731afc5b0009b00a8d0bd0a3fd45
title: "WheelFactor"
kind: api
owners: [Inno.Editor.Interactions]
apiSurface: source-clr
---

Converts wheel input to the common exponential magnification used by Editor canvases.

**Parameter `wheel`:** Logical wheel units, independent of framebuffer DPI.

**Parameter `sensitivity`:** Positive exponential sensitivity.

**Returns:** A finite positive magnification factor; positive wheel magnifies content.

**Exception `T:System.ArgumentOutOfRangeException`:** Input is non-finite or sensitivity is not positive.
