---
title: "ShaderNodeCompilerRegistry"
description: "Reference for ShaderNodeCompilerRegistry in Inno.Rendering.Shaders."
uid: api.inno.rendering.shaders.2df0f3d3fb54125b
kind: api
owners:
  - Inno.Rendering.Shaders
apiSurface: source-clr
contracts:
  - project.inno-rendering-shaders
---
# `ShaderNodeCompilerRegistry`

This reference describes `ShaderNodeCompilerRegistry` in `Inno.Rendering.Shaders`. Read the [shared contract](../../../projects/inno-rendering-shaders.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `Inno.Extensibility.Types.TypeRegistry<Inno.Rendering.Shaders.ShaderNodeCompilerCatalog>`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-8a0f4fd02bb5f224) | Method |
| [`Build`](#api-c7f6cd61ce12cab0) | Method |
| [`DescribePorts`](#api-14ecea20bcf55cfc) | Method |
| [`DisposeSnapshot`](#api-be2112b69b1c7b44) | Method |
| [`Lower`](#api-043e3fae57efe102) | Method |
| [`definitionIds`](#api-7301a233c7d42900) | Property |

## Type declaration

<a id="api-2df0f3d3fb54125b"></a>
<!-- api: T:Inno.Rendering.Shaders.ShaderNodeCompilerRegistry 7cca4c3261cb7f2fc740e412bc712dff4747c5e6e1f7e4f57333189c70deb26d -->

```csharp
public sealed class Inno.Rendering.Shaders.ShaderNodeCompilerRegistry : Inno.Extensibility.Types.TypeRegistry<Inno.Rendering.Shaders.ShaderNodeCompilerCatalog>
```

Owns reloadable shader node compilers through the shared candidate, rollback and retirement protocol.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Compilation/ShaderNodeCompilerRegistry.cs#L14).

## `#ctor`

<a id="api-8a0f4fd02bb5f224"></a>
<!-- api: M:Inno.Rendering.Shaders.ShaderNodeCompilerRegistry.#ctor(Inno.Extensibility.Types.TypeCatalog) 3e1d4d91305135062598ad102489e4599b0fe7e9f8d5c8ef06797dec2723f7c0 -->

```csharp
public Inno.Rendering.Shaders.ShaderNodeCompilerRegistry.ShaderNodeCompilerRegistry(Inno.Extensibility.Types.TypeCatalog types)
```

Registers the compiler generation owner with the shared type catalog.

**Parameter `types`:** Owner catalog, which must outlive this registry.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Compilation/ShaderNodeCompilerRegistry.cs#L24).

## `Build`

<a id="api-c7f6cd61ce12cab0"></a>
<!-- api: M:Inno.Rendering.Shaders.ShaderNodeCompilerRegistry.Build(Inno.Extensibility.Types.TypeCacheSnapshot) 66864dd983120278532105f635cfc01eb5cd9de0476e4b1023fd33d5d94ba372 -->

```csharp
protected override Inno.Rendering.Shaders.ShaderNodeCompilerCatalog Inno.Rendering.Shaders.ShaderNodeCompilerRegistry.Build(Inno.Extensibility.Types.TypeCacheSnapshot types)
```

Builds a validated result from the current immutable input snapshot.

**Parameter `types`:** The active type catalog generation used for extension resolution.

**Returns:** The validated shader node compiler catalog that represents the completed operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Compilation/ShaderNodeCompilerRegistry.cs#L111).

## `DescribePorts`

<a id="api-14ecea20bcf55cfc"></a>
<!-- api: M:Inno.Rendering.Shaders.ShaderNodeCompilerRegistry.DescribePorts(Inno.Core.Graphs.GraphNodeRecord,Inno.Core.Serialization.SerializationRegistry,Inno.Core.Serialization.SerializationContext,Inno.Rendering.Shaders.ShaderSourceModuleAnalysis,System.String,Inno.Rendering.Shaders.ShaderIrStageInput) c0a4e9c7e2ba5166659a0521d2173d1fb8db057fbd7c7c85a0546852ea33dc6f -->

```csharp
public System.Collections.Generic.IReadOnlyList<Inno.Rendering.Shaders.ShaderNodePort> Inno.Rendering.Shaders.ShaderNodeCompilerRegistry.DescribePorts(Inno.Core.Graphs.GraphNodeRecord node, Inno.Core.Serialization.SerializationRegistry serialization, Inno.Core.Serialization.SerializationContext context, Inno.Rendering.Shaders.ShaderSourceModuleAnalysis? source = null, string implementationId = "", Inno.Rendering.Shaders.ShaderIrStageInput? input = null)
```

Captures a node's current typed ports under the shared generation lease.

**Parameter `node`:** Neutral node properties.

**Parameter `serialization`:** Owner converter registry.

**Parameter `context`:** Complete owner reference context.

**Parameter `source`:** Resolved frozen source function, or null.

**Parameter `implementationId`:** Selected source implementation identity.

**Parameter `input`:** Resolved stage input interface, or null.

**Returns:** An immutable provider-free port snapshot.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Compilation/ShaderNodeCompilerRegistry.cs#L90).

## `DisposeSnapshot`

<a id="api-be2112b69b1c7b44"></a>
<!-- api: M:Inno.Rendering.Shaders.ShaderNodeCompilerRegistry.DisposeSnapshot(Inno.Rendering.Shaders.ShaderNodeCompilerCatalog) b80f9d5ecc0d98ca0ea3c95785412aac387de4eea66250fb02886541ea535055 -->

```csharp
protected override void Inno.Rendering.Shaders.ShaderNodeCompilerRegistry.DisposeSnapshot(Inno.Rendering.Shaders.ShaderNodeCompilerCatalog snapshot)
```

Releases the generation lease retained by an immutable registry snapshot.

**Parameter `snapshot`:** The immutable state snapshot consumed by this operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Compilation/ShaderNodeCompilerRegistry.cs#L126).

## `Lower`

<a id="api-043e3fae57efe102"></a>
<!-- api: M:Inno.Rendering.Shaders.ShaderNodeCompilerRegistry.Lower(Inno.Rendering.Shaders.ShaderGraphLoweringRequest,Inno.Core.Serialization.SerializationRegistry,Inno.Core.Serialization.SerializationContext,System.Threading.CancellationToken) a1a443d945e5d543fd4689e07f4a527143c056af9a5aa7e5048d95262515a0c4 -->

```csharp
public Inno.Rendering.Shaders.ShaderGraphLoweringResult Inno.Rendering.Shaders.ShaderNodeCompilerRegistry.Lower(Inno.Rendering.Shaders.ShaderGraphLoweringRequest request, Inno.Core.Serialization.SerializationRegistry serialization, Inno.Core.Serialization.SerializationContext context, System.Threading.CancellationToken cancellationToken = default(System.Threading.CancellationToken))
```

Lowers a whole region under one shared generation operation.

**Parameter `request`:** Frozen graph region and resolved immutable inputs.

**Parameter `serialization`:** The current owner converter registry.

**Parameter `context`:** The complete owner reference/asset serialization context.

**Parameter `cancellationToken`:** Cancellation between node invocations.

**Returns:** A detached region or neutral diagnostics, never compiler instances.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Compilation/ShaderNodeCompilerRegistry.cs#L56).

## `definitionIds`

<a id="api-7301a233c7d42900"></a>
<!-- api: P:Inno.Rendering.Shaders.ShaderNodeCompilerRegistry.definitionIds bc18f5f2138ca278fe74acb2bb278c29b9e1b885392103ae85efcb0e2c709c7a -->

```csharp
public System.Collections.Generic.IReadOnlyList<string> Inno.Rendering.Shaders.ShaderNodeCompilerRegistry.definitionIds { get; }
```

Gets stable compiler identities without exposing provider instances.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Compilation/ShaderNodeCompilerRegistry.cs#L29).
