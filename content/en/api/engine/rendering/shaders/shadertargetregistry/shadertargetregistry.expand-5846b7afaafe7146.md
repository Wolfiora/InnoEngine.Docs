---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.5846b7afaafe714628cbc40d9e07374aa63876bd69c60f0b193af966e697ed85
symbol: engine:Inno.Rendering.Shaders:M:Inno.Rendering.Shaders.ShaderTargetRegistry.Expand(Inno.Core.Graphs.GraphDocument,Inno.Core.Serialization.SerializationRegistry,Inno.Core.Serialization.SerializationContext,System.Threading.CancellationToken)
title: ShaderTargetRegistry.Expand
kind: api
owners:
- Inno.Rendering.Shaders
apiSurface: source-clr
reviewed: 495a928258d5f340c2b492fa8d395ae01d4805dc73b9fcdead5fab22350c7da8
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `document`:** Authored source, never modified by this operation.

**Parameter `serialization`:** Current owner converters.

**Parameter `context`:** Complete owner reference context.

**Parameter `cancellationToken`:** Cancellation before and during extension invocation.

## Returns

Detached explicit stage graph consumed by the existing compiler.

## Exceptions

**Exception `T:Inno.Rendering.Shaders.ShaderTargetUnavailableException`:** The assigned target is absent from this generation.

**Exception `T:System.InvalidOperationException`:** The target returns an invalid result.
