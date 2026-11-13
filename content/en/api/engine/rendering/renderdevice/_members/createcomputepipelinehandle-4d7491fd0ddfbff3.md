---
uid: api.4d7491fd0ddfbff360d1decf60cc11234159d8284c54b6a4560ff0a4227ab442
symbol: "engine:Inno.Rendering:M:Inno.Rendering.RenderDevice.CreateComputePipelineHandle(System.UInt64,System.UInt32)"
source: xml
reviewed: 8342b0d59962b5f9facd8277ce4fad027245a1e02e4056a071ac0271eb96dde1
title: "CreateComputePipelineHandle"
kind: api
owners: [Inno.Rendering]
apiSurface: source-clr
---

Encodes a compute pipeline identity into a backend-neutral handle.

**Parameter `value`:** The backend-owned non-zero pipeline identity.

**Parameter `generation`:** The device generation that owns the pipeline.

**Returns:** An opaque compute pipeline handle.
