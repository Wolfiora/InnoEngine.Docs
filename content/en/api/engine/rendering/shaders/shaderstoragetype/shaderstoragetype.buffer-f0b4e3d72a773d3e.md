---
uid: api.f0b4e3d72a773d3eb51a59c96c1b3faef7e464118eeaf605071d7b2f6da4a252
symbol: "engine:Inno.Rendering.Shaders:M:Inno.Rendering.Shaders.ShaderStorageType.Buffer(Inno.Rendering.Shaders.ShaderSourceType,Inno.Rendering.RenderStorageAccess)"
source: xml
reviewed: e2aaa89d89bb017cb7503f481d255e5829905eef5a259f2c1e489e3bff45834a
title: "ShaderStorageType.Buffer"
kind: api
owners: [Inno.Rendering.Shaders]
apiSurface: source-clr
---

Creates a structured storage buffer with an explicit element layout.

**Parameter `element`:** Non-void value layout; resources cannot be embedded in buffer elements.

**Parameter `access`:** Permitted memory operations.

**Returns:** An immutable storage buffer description.

**Exception `T:System.ArgumentException`:** The element contains void or resource handles.
