---
uid: api.2b1e76298ebcf811bc3d2984eeb38cd5606968c37613635f591dfe1826f859e9
symbol: "engine:Inno.Rendering.Runtime:M:Inno.Rendering.Runtime.IRenderTargetArtifactProvider.ReadShaderDefinition(Inno.Rendering.Assets.RenderShaderArtifact)"
source: xml
reviewed: 755c674efe112d6d49b7e937e73d5efbaefe39b6fd32b0333ba52237137d3094
title: "ReadShaderDefinition"
kind: api
owners: [Inno.Rendering.Runtime]
apiSurface: source-clr
---

Resolves the exact material contract stored with a compiled program using the current owner reference context.

**Parameter `artifact`:** One immutable program publication, including its native-serialized runtime definition.

**Returns:** A detached definition belonging to this artifact, never the latest uncompiled source definition.

**Exception `T:System.InvalidOperationException`:** The publication cannot be decoded in the current owner generation.
