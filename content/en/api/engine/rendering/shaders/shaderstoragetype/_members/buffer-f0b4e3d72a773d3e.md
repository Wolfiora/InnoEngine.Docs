---
uid: api.f0b4e3d72a773d3eb51a59c96c1b3faef7e464118eeaf605071d7b2f6da4a252
symbol: "engine:Inno.Rendering.Shaders:M:Inno.Rendering.Shaders.ShaderStorageType.Buffer(Inno.Rendering.Shaders.ShaderSourceType,Inno.Rendering.RenderStorageAccess)"
source: xml
reviewed: 4372f8b345adaa3b0cd1db7de44368d234345f588b89795bfce9237cb5b4e1f0
title: "Buffer"
kind: api
owners: [Inno.Rendering.Shaders]
apiSurface: source-clr
---

Creates a structured storage buffer with an explicit element layout.

**Parameter `element`:** Non-void value layout; resources cannot be embedded in buffer elements.

**Parameter `access`:** Permitted memory operations.

**Returns:** An immutable storage buffer description.

**Exception `T:System.ArgumentException`:** The element contains void or resource handles.
