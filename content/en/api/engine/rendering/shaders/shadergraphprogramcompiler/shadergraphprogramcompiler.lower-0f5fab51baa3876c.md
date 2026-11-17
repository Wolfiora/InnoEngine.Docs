---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.0f5fab51baa3876c01efbac5233bb5f3b6935f827fd74822e2c734d99efc1e4d
symbol: engine:Inno.Rendering.Shaders:M:Inno.Rendering.Shaders.ShaderGraphProgramCompiler.Lower(Inno.Core.Graphs.GraphDocument,System.String,System.Collections.Generic.IReadOnlyDictionary{Inno.Core.Graphs.GraphNodeId,Inno.Rendering.Shaders.ShaderSourceModuleAnalysis},Inno.Core.Serialization.SerializationRegistry,Inno.Core.Serialization.SerializationContext,System.Threading.CancellationToken)
title: ShaderGraphProgramCompiler.Lower
kind: api
owners:
- Inno.Rendering.Shaders
apiSurface: source-clr
reviewed: 1466468d6ab9775912d7a5953c3ed4f8fd3cda0c2cf09ccc6ddefbfcc11f9288
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `document`:** Authored graph, copied before validation.

**Parameter `implementationId`:** Exact adapter implementation identity selected by the caller.

**Parameter `sources`:** Frozen function modules keyed by source node identity.

**Parameter `serialization`:** The owner converter registry.

**Parameter `context`:** The complete owner reference context.

**Parameter `cancellationToken`:** Cancellation between stages and node invocations.

## Returns

All typed passes, or diagnostics without a partial publishable program.
