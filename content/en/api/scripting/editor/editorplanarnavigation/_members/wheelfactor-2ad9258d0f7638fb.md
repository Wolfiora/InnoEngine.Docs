---
uid: api.2ad9258d0f7638fb1fc950d6497f1777e32a409021867bce478dfeb469b56ac9
symbol: "scripting:Inno.Editor.Interactions:M:InnoEditor.Interactions.EditorPlanarNavigation.WheelFactor(System.Single,System.Single)"
source: xml
reviewed: aa55b2d3f371ec10a9963caeb4822a564af33bac5e73ffc3cd86b466fada1122
title: "WheelFactor"
kind: api
owners: [Inno.Editor.Interactions]
apiSurface: editor-script
apiScope: Editor
---

Converts wheel input to the common exponential magnification used by Editor canvases.

**Parameter `wheel`:** Logical wheel units, independent of framebuffer DPI.

**Parameter `sensitivity`:** Positive exponential sensitivity.

**Returns:** A finite positive magnification factor; positive wheel magnifies content.

**Exception `T:System.ArgumentOutOfRangeException`:** Input is non-finite or sensitivity is not positive.
