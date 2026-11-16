---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.dca9dcc7365a40b37c1a0c6a2d3d897698c9c74cefff32dd9ef0cae176ce4464
symbol: engine:Inno.Rendering.Shaders:M:Inno.Rendering.Shaders.ShaderNodeCompilerCatalog.Lower(Inno.Rendering.Shaders.ShaderGraphLoweringRequest,Inno.Core.Serialization.SerializationRegistry,Inno.Core.Serialization.SerializationContext,System.Threading.CancellationToken)
title: ShaderNodeCompilerCatalog.Lower
kind: api
owners:
- Inno.Rendering.Shaders
apiSurface: source-clr
reviewed: e7e6a7da14b83de91a5682a8712a17184f6808f0a4bab725314b923789e66a3e
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `request`:** Frozen region, outputs and resolved source/target data.

**Parameter `serialization`:** The current owner's native converter registry.

**Parameter `context`:** The complete owner reference/asset serialization context; never synthesized by this compiler.

**Parameter `cancellationToken`:** Cancellation between node invocations.

## Returns

A detached typed region or precise graph diagnostics.
