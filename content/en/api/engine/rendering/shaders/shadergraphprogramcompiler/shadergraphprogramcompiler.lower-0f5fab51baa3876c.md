---
uid: api.0f5fab51baa3876c01efbac5233bb5f3b6935f827fd74822e2c734d99efc1e4d
symbol: "engine:Inno.Rendering.Shaders:M:Inno.Rendering.Shaders.ShaderGraphProgramCompiler.Lower(Inno.Core.Graphs.GraphDocument,System.String,System.Collections.Generic.IReadOnlyDictionary{Inno.Core.Graphs.GraphNodeId,Inno.Rendering.Shaders.ShaderSourceModuleAnalysis},Inno.Core.Serialization.SerializationRegistry,Inno.Core.Serialization.SerializationContext,System.Threading.CancellationToken)"
source: xml
reviewed: bfb9810ded438df2446421c930c38ac5247e0e182f72b38eebf7f0ebd8c2ad33
title: "ShaderGraphProgramCompiler.Lower"
kind: api
owners: [Inno.Rendering.Shaders]
apiSurface: source-clr
---

Validates the complete pass/stage graph without deleting invalid or unavailable records.

**Parameter `document`:** Authored graph, copied before validation.

**Parameter `implementationId`:** Exact adapter implementation identity selected by the caller.

**Parameter `sources`:** Frozen function modules keyed by source node identity.

**Parameter `serialization`:** The owner converter registry.

**Parameter `context`:** The complete owner reference context.

**Parameter `cancellationToken`:** Cancellation between stages and node invocations.

**Returns:** All typed passes, or diagnostics without a partial publishable program.
