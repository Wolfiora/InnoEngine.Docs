---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.8e68602a4c9b2a17289a10b4e1f2d8a5caa0056d89aae92dec70da9418bf6453
symbol: engine:Inno.Rendering.Shaders:M:Inno.Rendering.Shaders.ShaderNodeCompilerRegistry.Lower(Inno.Rendering.Shaders.ShaderGraphLoweringRequest,Inno.Core.Serialization.SerializationRegistry,Inno.Core.Serialization.SerializationContext,System.Threading.CancellationToken)
title: ShaderNodeCompilerRegistry.Lower
kind: api
owners:
- Inno.Rendering.Shaders
apiSurface: source-clr
reviewed: 772a978bf5213c9436e7f8124506c5a9d6060c3715d7cec88bcd3c15ef2543e8
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
