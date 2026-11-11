---
title: "ShaderSourceImplementationAnalysis"
description: "Reference for ShaderSourceImplementationAnalysis in Inno.Rendering.Shaders."
uid: api.inno.rendering.shaders.085de6c17e1efa8e
kind: api
owners:
  - Inno.Rendering.Shaders
apiSurface: source-clr
contracts:
  - project.inno-rendering-shaders
---
# `ShaderSourceImplementationAnalysis`

This reference describes `ShaderSourceImplementationAnalysis` in `Inno.Rendering.Shaders`. Read the [shared contract](../../../projects/inno-rendering-shaders.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`CreateSourceRequest`](#api-4a835db3867dbccc) | Method |
| [`analysis`](#api-895fa9bf2670d086) | Property |
| [`contentHash`](#api-7ab9ebbf8b135065) | Property |
| [`defines`](#api-d93bf140cb6bccc6) | Property |
| [`entryPoint`](#api-5a27b9ac1e7de143) | Property |
| [`implementationId`](#api-e70e7c4b6dfe028d) | Property |
| [`includes`](#api-3b64d60879998c02) | Property |
| [`languageId`](#api-a4879cd2255a0f58) | Property |
| [`sourcePath`](#api-56d2ad596b3cfa8c) | Property |
| [`sources`](#api-d2353174f373a5a7) | Property |

## Type declaration

<a id="api-085de6c17e1efa8e"></a>
<!-- api: T:Inno.Rendering.Shaders.ShaderSourceImplementationAnalysis 5b9446194f830cc9146ea7b2fbc97cf49af9a60fa5d35a558baf6d093a1bff11 -->

```csharp
public sealed class Inno.Rendering.Shaders.ShaderSourceImplementationAnalysis
```

Freezes a parsed implementation and its complete source inputs without retaining a frontend or resolver.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Sources/ShaderSourceModuleAnalysis.cs#L75).

## `CreateSourceRequest`

<a id="api-4a835db3867dbccc"></a>
<!-- api: M:Inno.Rendering.Shaders.ShaderSourceImplementationAnalysis.CreateSourceRequest 50a41030b918c1ab4f7d8067af02571987c274280dbf7a4e395d02a86c03b1a0 -->

```csharp
public Inno.Rendering.Shaders.ShaderSourceRequest Inno.Rendering.Shaders.ShaderSourceImplementationAnalysis.CreateSourceRequest()
```

Recreates a compiler input backed only by immutable captured sources and resolution edges.

**Returns:** A request with no filesystem access or reference to the original frontend, resolver or generation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Sources/ShaderSourceModuleAnalysis.cs#L139).

## `analysis`

<a id="api-895fa9bf2670d086"></a>
<!-- api: P:Inno.Rendering.Shaders.ShaderSourceImplementationAnalysis.analysis 40e43edc7f92013f26921572cc87e2adcb912c893b2670570c1a123c07908bb2 -->

```csharp
public Inno.Rendering.Shaders.ShaderSourceAnalysis Inno.Rendering.Shaders.ShaderSourceImplementationAnalysis.analysis { get; }
```

Gets the parsed interface and implementation-local diagnostics.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Sources/ShaderSourceModuleAnalysis.cs#L126).

## `contentHash`

<a id="api-7ab9ebbf8b135065"></a>
<!-- api: P:Inno.Rendering.Shaders.ShaderSourceImplementationAnalysis.contentHash 788f55ccc1680228b0587f42cc128e0108b1bac9f295bc86efe352835cb7fe3c -->

```csharp
public string Inno.Rendering.Shaders.ShaderSourceImplementationAnalysis.contentHash { get; }
```

Gets a deterministic source-input hash. A compiler cache must additionally include its toolchain,
target, graph semantics and binding layout; this hash alone is not a compiled artifact key.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Sources/ShaderSourceModuleAnalysis.cs#L131).

## `defines`

<a id="api-d93bf140cb6bccc6"></a>
<!-- api: P:Inno.Rendering.Shaders.ShaderSourceImplementationAnalysis.defines 1708198cee6635660b35b1971fc8d071f5616a80a39494bca85474ff03201f66 -->

```csharp
public System.Collections.Generic.IReadOnlyDictionary<string, string> Inno.Rendering.Shaders.ShaderSourceImplementationAnalysis.defines { get; }
```

Gets the immutable preprocessing inputs used for this implementation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Sources/ShaderSourceModuleAnalysis.cs#L114).

## `entryPoint`

<a id="api-5a27b9ac1e7de143"></a>
<!-- api: P:Inno.Rendering.Shaders.ShaderSourceImplementationAnalysis.entryPoint 77138d89c8800f3c7512552080de1944d22416c02e804daf0e0d0d8ad15b414b -->

```csharp
public string Inno.Rendering.Shaders.ShaderSourceImplementationAnalysis.entryPoint { get; }
```

Gets the implementation's selected callable function name.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Sources/ShaderSourceModuleAnalysis.cs#L110).

## `implementationId`

<a id="api-e70e7c4b6dfe028d"></a>
<!-- api: P:Inno.Rendering.Shaders.ShaderSourceImplementationAnalysis.implementationId bedd302eea4ab9782611b5ab135aa11b2efffe440c41f1347cdc66abf31c4004 -->

```csharp
public string Inno.Rendering.Shaders.ShaderSourceImplementationAnalysis.implementationId { get; }
```

Gets the stable implementation/configuration key.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Sources/ShaderSourceModuleAnalysis.cs#L98).

## `includes`

<a id="api-3b64d60879998c02"></a>
<!-- api: P:Inno.Rendering.Shaders.ShaderSourceImplementationAnalysis.includes 285226fff98bb2510acbf0c81558ab041753325a26413d7b44e89b6c7c9ff48b -->

```csharp
public System.Collections.Generic.IReadOnlyList<Inno.Rendering.Shaders.ShaderSourceInclude> Inno.Rendering.Shaders.ShaderSourceImplementationAnalysis.includes { get; }
```

Gets the original resolver's frozen include edges, including aliases and mounted source paths.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Sources/ShaderSourceModuleAnalysis.cs#L122).

## `languageId`

<a id="api-a4879cd2255a0f58"></a>
<!-- api: P:Inno.Rendering.Shaders.ShaderSourceImplementationAnalysis.languageId 6e07e0b986e698b341dfb7bd3d75fc56e9d60399739f84aacc2fc9442dfa6ce0 -->

```csharp
public string Inno.Rendering.Shaders.ShaderSourceImplementationAnalysis.languageId { get; }
```

Gets the selected source language.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Sources/ShaderSourceModuleAnalysis.cs#L102).

## `sourcePath`

<a id="api-56d2ad596b3cfa8c"></a>
<!-- api: P:Inno.Rendering.Shaders.ShaderSourceImplementationAnalysis.sourcePath e3ce9dd8d2a946a3dd0b210c37a3db9ccbf8101ae8710c359f3d54b093b8dcce -->

```csharp
public string Inno.Rendering.Shaders.ShaderSourceImplementationAnalysis.sourcePath { get; }
```

Gets the root source path in the frozen source set.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Sources/ShaderSourceModuleAnalysis.cs#L106).

## `sources`

<a id="api-d2353174f373a5a7"></a>
<!-- api: P:Inno.Rendering.Shaders.ShaderSourceImplementationAnalysis.sources bea22fde0c57c06aa4aa207d979ac2b96134b77c9de0be20af5da1277e9bd54a -->

```csharp
public System.Collections.Generic.IReadOnlyList<Inno.Rendering.Shaders.ShaderSourceFile> Inno.Rendering.Shaders.ShaderSourceImplementationAnalysis.sources { get; }
```

Gets every successfully read source, including the root, ordered by path.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Sources/ShaderSourceModuleAnalysis.cs#L118).
