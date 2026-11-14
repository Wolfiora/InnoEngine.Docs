---
uid: api.fa9a644eee5c61064b31a471a545729edc593c5de5d30c4666ff1b3b449dbbf6
symbol: "engine:Inno.Rendering:M:Inno.Rendering.GraphicsProgramArtifactCodec.Encode(Inno.Rendering.GraphicsPipelineDescriptor)"
source: xml
reviewed: 07bad4b24f29b70d900a9172c14e86bfbf16ac08effb4d4dcf6027a9908ed236
title: "GraphicsProgramArtifactCodec.Encode"
kind: api
owners: [Inno.Rendering]
apiSurface: source-clr
---

Encodes owned program binaries, reflected bindings, and raster state for device distribution. Vertex layout belongs to the eventual caller and is not part of this artifact.

**Parameter `descriptor`:** The compiled graphics program to distribute without any asset or material metadata.

**Returns:** Deterministic binary bytes owned by the caller.

**Exception `T:System.ArgumentNullException`:** The descriptor is null.

**Exception `T:System.IO.InvalidDataException`:** A stage, binding, or reflected name exceeds the distribution limits.
