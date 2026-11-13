---
uid: api.c6614ccda69797a5ef129403f4a7fcc4234f81d52be5187babfec2ffa246a2c7
symbol: "engine:Inno.Rendering:M:Inno.Rendering.GraphicsProgramArtifactCodec.Decode(System.ReadOnlySpan{System.Byte},Inno.Rendering.RenderVertexLayout)"
source: xml
reviewed: 3c6e772c64048cf17438981d86f255887ffbe985aff42a613e8debcfa9f021b3
title: "GraphicsProgramArtifactCodec.Decode"
kind: api
owners: [Inno.Rendering]
apiSurface: source-clr
---

Validates a complete device program artifact before constructing an owned pipeline descriptor.

**Parameter `bytes`:** The complete current artifact, including its strict magic header.

**Parameter `vertexLayout`:** The caller's vertex layout, or null for a procedural pipeline.

**Returns:** A detached descriptor containing the validated binaries, bindings, and raster state.

**Exception `T:System.IO.InvalidDataException`:** The input is truncated, oversized, malformed, or contains trailing data.
