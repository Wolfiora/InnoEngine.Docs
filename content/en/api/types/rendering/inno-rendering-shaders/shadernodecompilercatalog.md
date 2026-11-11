---
title: "ShaderNodeCompilerCatalog"
description: "Reference for ShaderNodeCompilerCatalog in Inno.Rendering.Shaders."
uid: api.inno.rendering.shaders.623495418c472314
kind: api
owners:
  - Inno.Rendering.Shaders
apiSurface: source-clr
contracts:
  - project.inno-rendering-shaders
---
# `ShaderNodeCompilerCatalog`

This reference describes `ShaderNodeCompilerCatalog` in `Inno.Rendering.Shaders`. Read the [shared contract](../../../projects/inno-rendering-shaders.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-9f3237e47574f6fd) | Method |
| [`DescribePorts`](#api-378b526166fd17ac) | Method |
| [`Lower`](#api-2c2452cd53c490a2) | Method |
| [`definitionIds`](#api-559abb8eb6e515b8) | Property |

## Type declaration

<a id="api-623495418c472314"></a>
<!-- api: T:Inno.Rendering.Shaders.ShaderNodeCompilerCatalog 63ce907b1b76c55775a5a534512fa966253b2f18a1901fc83bd5260a12d368c3 -->

```csharp
public sealed class Inno.Rendering.Shaders.ShaderNodeCompilerCatalog
```

Owns an immutable compiler map; the common lowering algorithm never switches on concrete node identities.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Compilation/ShaderNodeCompilerCatalog.cs#L16).

## `#ctor`

<a id="api-9f3237e47574f6fd"></a>
<!-- api: M:Inno.Rendering.Shaders.ShaderNodeCompilerCatalog.#ctor(System.Collections.Generic.IEnumerable{Inno.Rendering.Shaders.IShaderNodeCompiler}) fcb84e604a82e45afd740bd569c94f8b23bf336f586de981f01790340cd64e95 -->

```csharp
public Inno.Rendering.Shaders.ShaderNodeCompilerCatalog.ShaderNodeCompilerCatalog(System.Collections.Generic.IEnumerable<Inno.Rendering.Shaders.IShaderNodeCompiler> compilers)
```

Validates a complete generation of node compiler registrations.

**Parameter `compilers`:** Providers owned by the calling generation or composition scope.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Compilation/ShaderNodeCompilerCatalog.cs#L27).

## `DescribePorts`

<a id="api-378b526166fd17ac"></a>
<!-- api: M:Inno.Rendering.Shaders.ShaderNodeCompilerCatalog.DescribePorts(Inno.Core.Graphs.GraphNodeRecord,Inno.Core.Serialization.SerializationRegistry,Inno.Core.Serialization.SerializationContext,Inno.Rendering.Shaders.ShaderSourceModuleAnalysis,System.String,Inno.Rendering.Shaders.ShaderIrStageInput) d590f8ebff4343848c99630180f5867691507ff266d99aeec0d8defd2b89d246 -->

```csharp
public System.Collections.Generic.IReadOnlyList<Inno.Rendering.Shaders.ShaderNodePort> Inno.Rendering.Shaders.ShaderNodeCompilerCatalog.DescribePorts(Inno.Core.Graphs.GraphNodeRecord node, Inno.Core.Serialization.SerializationRegistry serialization, Inno.Core.Serialization.SerializationContext context, Inno.Rendering.Shaders.ShaderSourceModuleAnalysis? source = null, string implementationId = "", Inno.Rendering.Shaders.ShaderIrStageInput? input = null)
```

Describes current typed ports for editor presentation without exposing the compiler provider.

**Parameter `node`:** Neutral node properties.

**Parameter `serialization`:** Owner converter registry.

**Parameter `context`:** Complete owner reference context.

**Parameter `source`:** Resolved frozen function module, or null.

**Parameter `implementationId`:** Selected source implementation.

**Parameter `input`:** Resolved stage input interface, or null.

**Returns:** A detached immutable typed port snapshot.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Compilation/ShaderNodeCompilerCatalog.cs#L70).

## `Lower`

<a id="api-2c2452cd53c490a2"></a>
<!-- api: M:Inno.Rendering.Shaders.ShaderNodeCompilerCatalog.Lower(Inno.Rendering.Shaders.ShaderGraphLoweringRequest,Inno.Core.Serialization.SerializationRegistry,Inno.Core.Serialization.SerializationContext,System.Threading.CancellationToken) ce9de4216bacae627da675db21808713e63af178b9ba4a1ad24eb18bb9ef50fa -->

```csharp
public Inno.Rendering.Shaders.ShaderGraphLoweringResult Inno.Rendering.Shaders.ShaderNodeCompilerCatalog.Lower(Inno.Rendering.Shaders.ShaderGraphLoweringRequest request, Inno.Core.Serialization.SerializationRegistry serialization, Inno.Core.Serialization.SerializationContext context, System.Threading.CancellationToken cancellationToken = default(System.Threading.CancellationToken))
```

Lowers an entire target-selected region, preserving stable topological/document order and all source calls.
Missing definitions, stale ports and cycles fail without mutating graph records or dropping edges.

**Parameter `request`:** Frozen region, outputs and resolved source/target data.

**Parameter `serialization`:** The current owner's native converter registry.

**Parameter `context`:** The complete owner reference/asset serialization context; never synthesized by this compiler.

**Parameter `cancellationToken`:** Cancellation between node invocations.

**Returns:** A detached typed region or precise graph diagnostics.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Compilation/ShaderNodeCompilerCatalog.cs#L103).

## `definitionIds`

<a id="api-559abb8eb6e515b8"></a>
<!-- api: P:Inno.Rendering.Shaders.ShaderNodeCompilerCatalog.definitionIds 9721b75c2c0b7b7c296bc540f4112a5daca3f79b7aaa69ac13c98232ac14192e -->

```csharp
public System.Collections.Generic.IReadOnlyList<string> Inno.Rendering.Shaders.ShaderNodeCompilerCatalog.definitionIds { get; }
```

Gets stable registered definition identities, without exposing providers.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Compilation/ShaderNodeCompilerCatalog.cs#L44).
