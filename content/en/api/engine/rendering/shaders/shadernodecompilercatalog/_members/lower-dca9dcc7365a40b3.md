---
uid: api.dca9dcc7365a40b37c1a0c6a2d3d897698c9c74cefff32dd9ef0cae176ce4464
symbol: "engine:Inno.Rendering.Shaders:M:Inno.Rendering.Shaders.ShaderNodeCompilerCatalog.Lower(Inno.Rendering.Shaders.ShaderGraphLoweringRequest,Inno.Core.Serialization.SerializationRegistry,Inno.Core.Serialization.SerializationContext,System.Threading.CancellationToken)"
source: xml
reviewed: b3ff54cc58a703219dba12cb26b3a833f385f984cac798a50ba2221e2c49fae7
title: "Lower"
kind: api
owners: [Inno.Rendering.Shaders]
apiSurface: source-clr
---

Lowers an entire target-selected region, preserving stable topological/document order and all source calls. Missing definitions, stale ports and cycles fail without mutating graph records or dropping edges.

**Parameter `request`:** Frozen region, outputs and resolved source/target data.

**Parameter `serialization`:** The current owner's native converter registry.

**Parameter `context`:** The complete owner reference/asset serialization context; never synthesized by this compiler.

**Parameter `cancellationToken`:** Cancellation between node invocations.

**Returns:** A detached typed region or precise graph diagnostics.
