---
uid: api.ace1a1bf5b59b8664178cd987ad4d60f0557702393aeadace4411bf7ede1bf1e
symbol: "engine:Inno.Editor.Interactions:M:Inno.Editor.Interactions.EditorPlanarNavigation.WheelFactor(System.Single,System.Single)"
source: xml
reviewed: 6996aa94e75cd2be46de1c1c42cebd839f7547b61d976b7c78ecd3471c8efb78
title: "EditorPlanarNavigation.WheelFactor"
kind: api
owners: [Inno.Editor.Interactions]
apiSurface: source-clr
---

Converts wheel input to the common exponential magnification used by Editor canvases.

**Parameter `wheel`:** Logical wheel units, independent of framebuffer DPI.

**Parameter `sensitivity`:** Positive exponential sensitivity.

**Returns:** A finite positive magnification factor; positive wheel magnifies content.

**Exception `T:System.ArgumentOutOfRangeException`:** Input is non-finite or sensitivity is not positive.
