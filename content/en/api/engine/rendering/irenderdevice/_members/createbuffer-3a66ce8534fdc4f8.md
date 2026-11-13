---
uid: api.3a66ce8534fdc4f8459e841a3b14ea0d55fd7ca0bee52752e739ed157d337918
symbol: "engine:Inno.Rendering:M:Inno.Rendering.IRenderDevice.CreateBuffer(Inno.Rendering.PersistentBufferDescriptor,System.ReadOnlySpan{System.Byte},System.String)"
source: xml
reviewed: 3834a2a002b8e349f543798ef38cf922f0c2bad0cf434ec29493de3e49cbd0cc
title: "CreateBuffer"
kind: api
owners: [Inno.Rendering]
apiSurface: source-clr
---

Creates a persistent vertex, index or storage buffer at a frame safety point.

**Parameter `descriptor`:** Buffer capacity and interpretation.

**Parameter `initialData`:** Optional complete initial contents.

**Parameter `name`:** Debug and diagnostic name.

**Returns:** An opaque device-generation buffer handle.
