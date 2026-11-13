---
uid: api.42187991e667ad8b1d5efc1f275bd3cb66d5e52de83c4ff8d934c084202e49a2
symbol: "engine:Inno.Rendering.Shaders:M:Inno.Rendering.Shaders.ShaderNodeCompilerRegistry.DescribePorts(Inno.Core.Graphs.GraphNodeRecord,Inno.Core.Serialization.SerializationRegistry,Inno.Core.Serialization.SerializationContext,Inno.Rendering.Shaders.ShaderSourceModuleAnalysis,System.String,Inno.Rendering.Shaders.ShaderIrStageInput)"
source: xml
reviewed: fdc08ccd2dfcd0ef2ac960c4493cae310bb09fdcbdd2cce5886b55a2e6980d57
title: "DescribePorts"
kind: api
owners: [Inno.Rendering.Shaders]
apiSurface: source-clr
---

Captures a node's current typed ports under the shared generation lease.

**Parameter `node`:** Neutral node properties.

**Parameter `serialization`:** Owner converter registry.

**Parameter `context`:** Complete owner reference context.

**Parameter `source`:** Resolved frozen source function, or null.

**Parameter `implementationId`:** Selected source implementation identity.

**Parameter `input`:** Resolved stage input interface, or null.

**Returns:** An immutable provider-free port snapshot.
