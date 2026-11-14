---
uid: api.4d7491fd0ddfbff360d1decf60cc11234159d8284c54b6a4560ff0a4227ab442
symbol: "engine:Inno.Rendering:M:Inno.Rendering.RenderDevice.CreateComputePipelineHandle(System.UInt64,System.UInt32)"
source: xml
reviewed: 583691bdb5915edcc61a428084c4d76ec8057838f78fb5e6a58b6672c7d688fd
title: "RenderDevice.CreateComputePipelineHandle"
kind: api
owners: [Inno.Rendering]
apiSurface: source-clr
---

Encodes a compute pipeline identity into a backend-neutral handle.

**Parameter `value`:** The backend-owned non-zero pipeline identity.

**Parameter `generation`:** The device generation that owns the pipeline.

**Returns:** An opaque compute pipeline handle.
