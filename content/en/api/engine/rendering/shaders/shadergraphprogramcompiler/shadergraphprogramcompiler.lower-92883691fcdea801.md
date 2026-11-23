---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.92883691fcdea801c460417a7f373a7ffe4f11b71018a260c166abcc92b3b1eb
symbol: engine:Inno.Rendering.Shaders:M:Inno.Rendering.Shaders.ShaderGraphProgramCompiler.Lower(Inno.Core.Graphs.GraphDocument,System.String,System.Collections.Generic.IReadOnlyDictionary{Inno.Core.Graphs.GraphNodeID,Inno.Rendering.Shaders.ShaderSourceModuleAnalysis},Inno.Core.Serialization.SerializationRegistry,Inno.Core.Serialization.SerializationContext,System.Threading.CancellationToken)
title: ShaderGraphProgramCompiler.Lower
kind: api
owners:
- Inno.Rendering.Shaders
apiSurface: source-clr
sourceFingerprint: a8de81f420a8cdbb7860a9cbcf1567a65e475b82b26f6adb3d15da7c4eeae606
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `document`:** Authored graph, copied before validation.

**Parameter `implementationID`:** Exact adapter implementation identity selected by the caller.

**Parameter `sources`:** Frozen function modules keyed by source node identity.

**Parameter `serialization`:** The owner converter registry.

**Parameter `context`:** The complete owner reference context.

**Parameter `cancellationToken`:** Cancellation between stages and node invocations.

## Returns

All typed passes, or diagnostics without a partial publishable program.
