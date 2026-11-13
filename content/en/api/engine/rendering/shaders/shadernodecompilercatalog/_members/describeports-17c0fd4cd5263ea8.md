---
uid: api.17c0fd4cd5263ea86866d15fce9f7ade8093b2269199f4c9e0c3e6d24219c050
symbol: "engine:Inno.Rendering.Shaders:M:Inno.Rendering.Shaders.ShaderNodeCompilerCatalog.DescribePorts(Inno.Core.Graphs.GraphNodeRecord,Inno.Core.Serialization.SerializationRegistry,Inno.Core.Serialization.SerializationContext,Inno.Rendering.Shaders.ShaderSourceModuleAnalysis,System.String,Inno.Rendering.Shaders.ShaderIrStageInput)"
source: xml
reviewed: cb1bdb81884718844c03b1ffe4abfe03eddce8d3a47257db110ff99fe72b2214
title: "DescribePorts"
kind: api
owners: [Inno.Rendering.Shaders]
apiSurface: source-clr
---

Describes current typed ports for editor presentation without exposing the compiler provider.

**Parameter `node`:** Neutral node properties.

**Parameter `serialization`:** Owner converter registry.

**Parameter `context`:** Complete owner reference context.

**Parameter `source`:** Resolved frozen function module, or null.

**Parameter `implementationId`:** Selected source implementation.

**Parameter `input`:** Resolved stage input interface, or null.

**Returns:** A detached immutable typed port snapshot.
