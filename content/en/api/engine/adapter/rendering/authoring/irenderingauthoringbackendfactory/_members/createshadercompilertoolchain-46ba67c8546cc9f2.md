---
uid: api.46ba67c8546cc9f2deec869625e88db68a8b05b9329f17f8e6ed0970829973c6
symbol: "engine:Inno.Adapter.Rendering.Authoring:M:Inno.Adapter.Rendering.IRenderingAuthoringBackendFactory.CreateShaderCompilerToolchain(Inno.Adapter.Rendering.RenderingBackendId)"
source: xml
reviewed: 67201b0f43d059de3af7a2baa861f0cf4b343ccb2e1c0542e201e931a068e5af
title: "CreateShaderCompilerToolchain"
kind: api
owners: [Inno.Adapter.Rendering.Authoring]
apiSurface: source-clr
---

Creates the shader compiler toolchain paired with the selected rendering backend.

**Parameter `backend`:** Stable rendering backend identity selected by the authoring composition root.

**Returns:** A target compiler compatible with devices created for the same backend.
