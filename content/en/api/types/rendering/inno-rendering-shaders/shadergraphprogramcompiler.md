---
title: "ShaderGraphProgramCompiler"
description: "Reference for ShaderGraphProgramCompiler in Inno.Rendering.Shaders."
uid: api.inno.rendering.shaders.710a030fce5cf3ed
kind: api
owners:
  - Inno.Rendering.Shaders
apiSurface: source-clr
contracts:
  - project.inno-rendering-shaders
---
# `ShaderGraphProgramCompiler`

This reference describes `ShaderGraphProgramCompiler` in `Inno.Rendering.Shaders`. Read the [shared contract](../../../projects/inno-rendering-shaders.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-f0b0b545c06462e7) | Method |
| [`Lower`](#api-80635f956093f083) | Method |

## Type declaration

<a id="api-710a030fce5cf3ed"></a>
<!-- api: T:Inno.Rendering.Shaders.ShaderGraphProgramCompiler e22d5489ed65d52112ba0d20a00a6415487269479503c617cd5087f13b7eb447 -->

```csharp
public sealed class Inno.Rendering.Shaders.ShaderGraphProgramCompiler
```

Partitions explicit GPU-stage regions and lowers them through registered node compilers.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Documents/ShaderGraphProgramCompiler.cs#L18).

## `#ctor`

<a id="api-f0b0b545c06462e7"></a>
<!-- api: M:Inno.Rendering.Shaders.ShaderGraphProgramCompiler.#ctor(Inno.Rendering.Shaders.ShaderNodeCompilerRegistry) 06169420b86e24ecdb1f6d3ae67747207ba24d01d49fab74e3fead555760de55 -->

```csharp
public Inno.Rendering.Shaders.ShaderGraphProgramCompiler.ShaderGraphProgramCompiler(Inno.Rendering.Shaders.ShaderNodeCompilerRegistry nodes)
```

Uses the shared node compiler generation rather than retaining individual providers.

**Parameter `nodes`:** The owner-scoped node registry.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Documents/ShaderGraphProgramCompiler.cs#L28).

## `Lower`

<a id="api-80635f956093f083"></a>
<!-- api: M:Inno.Rendering.Shaders.ShaderGraphProgramCompiler.Lower(Inno.Core.Graphs.GraphDocument,System.String,System.Collections.Generic.IReadOnlyDictionary{Inno.Core.Graphs.GraphNodeId,Inno.Rendering.Shaders.ShaderSourceModuleAnalysis},Inno.Core.Serialization.SerializationRegistry,Inno.Core.Serialization.SerializationContext,System.Threading.CancellationToken) 4404217b13ece9336618702bcab8ec2b64ac1801d99137689be3c3ad4c1bb0b5 -->

```csharp
public Inno.Rendering.Shaders.ShaderGraphProgramResult Inno.Rendering.Shaders.ShaderGraphProgramCompiler.Lower(Inno.Core.Graphs.GraphDocument document, string implementationId, System.Collections.Generic.IReadOnlyDictionary<Inno.Core.Graphs.GraphNodeId, Inno.Rendering.Shaders.ShaderSourceModuleAnalysis> sources, Inno.Core.Serialization.SerializationRegistry serialization, Inno.Core.Serialization.SerializationContext context, System.Threading.CancellationToken cancellationToken = default(System.Threading.CancellationToken))
```

Validates the complete pass/stage graph without deleting invalid or unavailable records.

**Parameter `document`:** Authored graph, copied before validation.

**Parameter `implementationId`:** Exact adapter implementation identity selected by the caller.

**Parameter `sources`:** Frozen function modules keyed by source node identity.

**Parameter `serialization`:** The owner converter registry.

**Parameter `context`:** The complete owner reference context.

**Parameter `cancellationToken`:** Cancellation between stages and node invocations.

**Returns:** All typed passes, or diagnostics without a partial publishable program.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Documents/ShaderGraphProgramCompiler.cs#L55).
