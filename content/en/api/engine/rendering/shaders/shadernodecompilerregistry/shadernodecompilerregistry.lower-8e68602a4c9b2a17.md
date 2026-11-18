---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.8e68602a4c9b2a17289a10b4e1f2d8a5caa0056d89aae92dec70da9418bf6453
symbol: engine:Inno.Rendering.Shaders:M:Inno.Rendering.Shaders.ShaderNodeCompilerRegistry.Lower(Inno.Rendering.Shaders.ShaderGraphLoweringRequest,Inno.Core.Serialization.SerializationRegistry,Inno.Core.Serialization.SerializationContext,System.Threading.CancellationToken)
title: ShaderNodeCompilerRegistry.Lower
kind: api
owners:
- Inno.Rendering.Shaders
apiSurface: source-clr
sourceFingerprint: d9c3b0eecf2cc5a3c0224ddca3f5f355e3b07f92d46fbdd732176c1ef3150880
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `request`:** Frozen graph region and resolved immutable inputs.

**Parameter `serialization`:** The current owner converter registry.

**Parameter `context`:** The complete owner reference/asset serialization context.

**Parameter `cancellationToken`:** Cancellation between node invocations.

## Returns

A detached region or neutral diagnostics, never compiler instances.
