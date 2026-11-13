---
uid: api.fa9a644eee5c61064b31a471a545729edc593c5de5d30c4666ff1b3b449dbbf6
symbol: "engine:Inno.Rendering:M:Inno.Rendering.GraphicsProgramArtifactCodec.Encode(Inno.Rendering.GraphicsPipelineDescriptor)"
source: xml
reviewed: c7ca747cc507a59c5202bcc18aff41d34516a5a86dade7c9d79b95cefccf9a98
title: "Encode"
kind: api
owners: [Inno.Rendering]
apiSurface: source-clr
---

Encodes owned program binaries, reflected bindings, and raster state for device distribution. Vertex layout belongs to the eventual caller and is not part of this artifact.

**Parameter `descriptor`:** The compiled graphics program to distribute without any asset or material metadata.

**Returns:** Deterministic binary bytes owned by the caller.

**Exception `T:System.ArgumentNullException`:** The descriptor is null.

**Exception `T:System.IO.InvalidDataException`:** A stage, binding, or reflected name exceeds the distribution limits.
