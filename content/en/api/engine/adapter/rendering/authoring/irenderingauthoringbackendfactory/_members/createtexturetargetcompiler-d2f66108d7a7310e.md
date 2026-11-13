---
uid: api.d2f66108d7a7310e0cc236321425ed10c16be8407ae50e55e9db86f16bb43e51
symbol: "engine:Inno.Adapter.Rendering.Authoring:M:Inno.Adapter.Rendering.IRenderingAuthoringBackendFactory.CreateTextureTargetCompiler(Inno.Adapter.Rendering.RenderingBackendId)"
source: xml
reviewed: 27d64708fd2ea7a08f92362ace3c72ecb5d03f806c4fc35771e995e3c4e2625b
title: "CreateTextureTargetCompiler"
kind: api
owners: [Inno.Adapter.Rendering.Authoring]
apiSurface: source-clr
---

Creates the texture compiler paired with the selected rendering backend.

**Parameter `backend`:** Stable rendering backend identity selected by the authoring composition root.

**Returns:** A texture target compiler compatible with devices created for the same backend.
