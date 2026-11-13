---
uid: api.3a66ce8534fdc4f8459e841a3b14ea0d55fd7ca0bee52752e739ed157d337918
symbol: "engine:Inno.Rendering:M:Inno.Rendering.IRenderDevice.CreateBuffer(Inno.Rendering.PersistentBufferDescriptor,System.ReadOnlySpan{System.Byte},System.String)"
source: xml
reviewed: 0eaf1eb1369aa476f0501695f5882322f49711fb6a14f45241329cec1d502ba3
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
