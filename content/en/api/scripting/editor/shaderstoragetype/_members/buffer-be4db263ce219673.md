---
uid: api.be4db263ce21967328743bcd1d2b1de4622a217a1a62136fd897dc6723adcb2d
symbol: "scripting:Inno.Rendering.Shaders:M:InnoEditor.Rendering.Shaders.ShaderStorageType.Buffer(InnoEditor.Rendering.Shaders.ShaderSourceType,InnoEngine.Rendering.RenderStorageAccess)"
source: xml
reviewed: 3440b8ea73d1ab63498d46c6e8a120cd02a55dd15036e755b684d6538cc30dc2
title: "Buffer"
kind: api
owners: [Inno.Rendering.Shaders]
apiSurface: editor-script
apiScope: Editor
---

Creates a structured storage buffer with an explicit element layout.

**Parameter `element`:** Non-void value layout; resources cannot be embedded in buffer elements.

**Parameter `access`:** Permitted memory operations.

**Returns:** An immutable storage buffer description.

**Exception `T:System.ArgumentException`:** The element contains void or resource handles.
