---
uid: api.722b77791c5f3917c1a1e8c0d401021c20fa9096abeafdc22c075f9476127f14
symbol: "engine:Inno.Rendering.Shaders:M:Inno.Rendering.Shaders.ShaderGraphDocument.ReadDefinition(Inno.Core.Graphs.GraphDocument,Inno.Core.Serialization.SerializationRegistry,Inno.Core.Serialization.SerializationContext)"
source: xml
reviewed: 9c1547833985a66751f3ace8d2f59cf30ddfd141971a8b4728779b14bb00851f
title: "ReadDefinition"
kind: api
owners: [Inno.Rendering.Shaders]
apiSurface: source-clr
---

Reads the material and pass contract without evaluating or altering the graph.

**Parameter `graph`:** Native shader graph.

**Parameter `serialization`:** The owner converter registry.

**Parameter `context`:** The complete owner reference context.

**Returns:** A detached contract; missing or corrupt metadata is an explicit error.
