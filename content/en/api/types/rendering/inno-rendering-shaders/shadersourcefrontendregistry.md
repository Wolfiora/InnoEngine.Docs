---
title: "ShaderSourceFrontendRegistry"
description: "Reference for ShaderSourceFrontendRegistry in Inno.Rendering.Shaders."
uid: api.inno.rendering.shaders.6772b6e2f6f25be7
kind: api
owners:
  - Inno.Rendering.Shaders
apiSurface: source-clr
contracts:
  - project.inno-rendering-shaders
---
# `ShaderSourceFrontendRegistry`

This reference describes `ShaderSourceFrontendRegistry` in `Inno.Rendering.Shaders`. Read the [shared contract](../../../projects/inno-rendering-shaders.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `Inno.Extensibility.Types.TypeRegistry<Inno.Rendering.Shaders.ShaderSourceFrontendCatalog>`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-7a749ca4d6beaedf) | Method |
| [`Analyze`](#api-2a3099734367a852) | Method |
| [`AnalyzeModule`](#api-59295634fa367260) | Method |
| [`Build`](#api-95a5a31b3f0f022a) | Method |
| [`DisposeSnapshot`](#api-a5d09c3ad0ec21e6) | Method |
| [`languageIds`](#api-45753d63ae6fab10) | Property |

## Type declaration

<a id="api-6772b6e2f6f25be7"></a>
<!-- api: T:Inno.Rendering.Shaders.ShaderSourceFrontendRegistry 312b3196983aa0c2fec274dbbf90c006585b1d3e1c706424bc0cdd2555410a72 -->

```csharp
public sealed class Inno.Rendering.Shaders.ShaderSourceFrontendRegistry : Inno.Extensibility.Types.TypeRegistry<Inno.Rendering.Shaders.ShaderSourceFrontendCatalog>
```

Discovers source language providers through the shared type-generation transaction and owns their retirement.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Sources/ShaderSourceFrontendRegistry.cs#L12).

## `#ctor`

<a id="api-7a749ca4d6beaedf"></a>
<!-- api: M:Inno.Rendering.Shaders.ShaderSourceFrontendRegistry.#ctor(Inno.Extensibility.Types.TypeCatalog) 0fe7beb33c2dd1b8c4796c5a539fad74b4c6e2a2c3b71c96d2f139b9ed35ab4b -->

```csharp
public Inno.Rendering.Shaders.ShaderSourceFrontendRegistry.ShaderSourceFrontendRegistry(Inno.Extensibility.Types.TypeCatalog types)
```

Registers this authoring owner with the shared candidate and rollback coordinator.

**Parameter `types`:** The owner type catalog; it must outlive this registry.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Sources/ShaderSourceFrontendRegistry.cs#L22).

## `Analyze`

<a id="api-2a3099734367a852"></a>
<!-- api: M:Inno.Rendering.Shaders.ShaderSourceFrontendRegistry.Analyze(System.String,Inno.Rendering.Shaders.ShaderSourceRequest) 58943e250414e0d0e21cc9d1292bef548ca89fb7f1552125ecbf34e283c2607f -->

```csharp
public Inno.Rendering.Shaders.ShaderSourceAnalysis Inno.Rendering.Shaders.ShaderSourceFrontendRegistry.Analyze(string languageId, Inno.Rendering.Shaders.ShaderSourceRequest request)
```

Analyzes source while preventing provider retirement for the complete synchronous operation.

**Parameter `languageId`:** The exact registered language identity.

**Parameter `request`:** Candidate source inputs and include resolver.

**Returns:** A neutral interface/diagnostic result without a provider reference.

**Throws `System.NotSupportedException`:** The language is not available in the current generation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Sources/ShaderSourceFrontendRegistry.cs#L51).

## `AnalyzeModule`

<a id="api-59295634fa367260"></a>
<!-- api: M:Inno.Rendering.Shaders.ShaderSourceFrontendRegistry.AnalyzeModule(System.Collections.Generic.IEnumerable{Inno.Rendering.Shaders.ShaderSourceImplementationRequest}) 90ddb9439ff95b44e23a2abe65f4a459de859a9c320c26b51cceaed80dcd0dcf -->

```csharp
public Inno.Rendering.Shaders.ShaderSourceModuleAnalysis Inno.Rendering.Shaders.ShaderSourceFrontendRegistry.AnalyzeModule(System.Collections.Generic.IEnumerable<Inno.Rendering.Shaders.ShaderSourceImplementationRequest> implementations)
```

Freezes and validates a complete module without mixing frontend generations between implementations.

**Parameter `implementations`:** Explicit implementation and variant candidates from the current asset transaction.

**Returns:** A neutral module result containing no frontend or source resolver references.

**Throws `System.ArgumentException`:** The candidate list is empty or has duplicate implementation keys.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Sources/ShaderSourceFrontendRegistry.cs#L71).

## `Build`

<a id="api-95a5a31b3f0f022a"></a>
<!-- api: M:Inno.Rendering.Shaders.ShaderSourceFrontendRegistry.Build(Inno.Extensibility.Types.TypeCacheSnapshot) 140a1be9a6b0b58ad3bd8af90803bad7795fe14b3edfa80dbf6ea5d3b640f93e -->

```csharp
protected override Inno.Rendering.Shaders.ShaderSourceFrontendCatalog Inno.Rendering.Shaders.ShaderSourceFrontendRegistry.Build(Inno.Extensibility.Types.TypeCacheSnapshot types)
```

Builds a validated result from the current immutable input snapshot.

**Parameter `types`:** The active type catalog generation used for extension resolution.

**Returns:** The validated shader source frontend catalog that represents the completed operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Sources/ShaderSourceFrontendRegistry.cs#L86).

## `DisposeSnapshot`

<a id="api-a5d09c3ad0ec21e6"></a>
<!-- api: M:Inno.Rendering.Shaders.ShaderSourceFrontendRegistry.DisposeSnapshot(Inno.Rendering.Shaders.ShaderSourceFrontendCatalog) 4630d5df1f6777cb1d9d5df71a5d3b9b3b2e3ac2c66a93f0c316c53077046185 -->

```csharp
protected override void Inno.Rendering.Shaders.ShaderSourceFrontendRegistry.DisposeSnapshot(Inno.Rendering.Shaders.ShaderSourceFrontendCatalog snapshot)
```

Releases the generation lease retained by an immutable registry snapshot.

**Parameter `snapshot`:** The immutable state snapshot consumed by this operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Sources/ShaderSourceFrontendRegistry.cs#L102).

## `languageIds`

<a id="api-45753d63ae6fab10"></a>
<!-- api: P:Inno.Rendering.Shaders.ShaderSourceFrontendRegistry.languageIds b7801055c0bc7f3c7b37d85ea9305fb664b2a8c0dc8ed8046e4815469e9b4432 -->

```csharp
public System.Collections.Generic.IReadOnlyList<string> Inno.Rendering.Shaders.ShaderSourceFrontendRegistry.languageIds { get; }
```

Gets immutable language identities available in the current generation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Sources/ShaderSourceFrontendRegistry.cs#L27).
