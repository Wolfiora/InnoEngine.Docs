---
uid: api.2b1e76298ebcf811bc3d2984eeb38cd5606968c37613635f591dfe1826f859e9
symbol: "engine:Inno.Rendering.Runtime:M:Inno.Rendering.Runtime.IRenderTargetArtifactProvider.ReadShaderDefinition(Inno.Rendering.Assets.RenderShaderArtifact)"
source: xml
reviewed: d8006d00b32ad9f9d6fef77b62b6d94d519c591ef88e0442c2fc557f09ff5ab1
title: "ReadShaderDefinition"
kind: api
owners: [Inno.Rendering.Runtime]
apiSurface: source-clr
---

Resolves the exact material contract stored with a compiled program using the current owner reference context.

**Parameter `artifact`:** One immutable program publication, including its native-serialized runtime definition.

**Returns:** A detached definition belonging to this artifact, never the latest uncompiled source definition.

**Exception `T:System.InvalidOperationException`:** The publication cannot be decoded in the current owner generation.
