---
title: "ShaderSourceFrontendCatalog"
description: "Reference for ShaderSourceFrontendCatalog in Inno.Rendering.Shaders."
uid: api.inno.rendering.shaders.c2acd9afe665cb35
kind: api
owners:
  - Inno.Rendering.Shaders
apiSurface: source-clr
contracts:
  - project.inno-rendering-shaders
---
# `ShaderSourceFrontendCatalog`

This reference describes `ShaderSourceFrontendCatalog` in `Inno.Rendering.Shaders`. Read the [shared contract](../../../projects/inno-rendering-shaders.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-4299b866205f6089) | Method |
| [`Analyze`](#api-4ea0698074d24b77) | Method |
| [`AnalyzeModule`](#api-97004348a3bf6807) | Method |
| [`languageIds`](#api-1efbb578c4afbac8) | Property |

## Type declaration

<a id="api-c2acd9afe665cb35"></a>
<!-- api: T:Inno.Rendering.Shaders.ShaderSourceFrontendCatalog e332ddc4b00c825f52f87ce0882644bfd119f7e7441773cf6bfc628cc65066ce -->

```csharp
public sealed class Inno.Rendering.Shaders.ShaderSourceFrontendCatalog
```

Owns an immutable language registration snapshot for one authoring generation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Sources/ShaderSourceFrontendCatalog.cs#L12).

## `#ctor`

<a id="api-4299b866205f6089"></a>
<!-- api: M:Inno.Rendering.Shaders.ShaderSourceFrontendCatalog.#ctor(System.Collections.Generic.IEnumerable{Inno.Rendering.Shaders.IShaderSourceFrontend}) c4ec0d39cd8f145eed1f82d94d68cd89ecb3129534825bf7e14246fab2801328 -->

```csharp
public Inno.Rendering.Shaders.ShaderSourceFrontendCatalog.ShaderSourceFrontendCatalog(System.Collections.Generic.IEnumerable<Inno.Rendering.Shaders.IShaderSourceFrontend> frontends)
```

Captures a validated language provider set without a process-global registry.

**Parameter `frontends`:** Providers owned and retired by the calling generation.

**Throws `System.ArgumentException`:** Language IDs are missing or duplicated.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Sources/ShaderSourceFrontendCatalog.cs#L25).

## `Analyze`

<a id="api-4ea0698074d24b77"></a>
<!-- api: M:Inno.Rendering.Shaders.ShaderSourceFrontendCatalog.Analyze(System.String,Inno.Rendering.Shaders.ShaderSourceRequest) 51a3761385fa105903a8687ecfccdf1d1bc2b2c5c88747a38999ba43d6f8f1a0 -->

```csharp
public Inno.Rendering.Shaders.ShaderSourceAnalysis Inno.Rendering.Shaders.ShaderSourceFrontendCatalog.Analyze(string languageId, Inno.Rendering.Shaders.ShaderSourceRequest request)
```

Analyzes source using an explicitly selected language.

**Parameter `languageId`:** Registered language identity, never inferred from the active graphics API.

**Parameter `request`:** Immutable source analysis request.

**Returns:** The selected frontend's analysis result.

**Throws `System.NotSupportedException`:** The requested language provider is unavailable.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Sources/ShaderSourceFrontendCatalog.cs#L56).

## `AnalyzeModule`

<a id="api-97004348a3bf6807"></a>
<!-- api: M:Inno.Rendering.Shaders.ShaderSourceFrontendCatalog.AnalyzeModule(System.Collections.Generic.IEnumerable{Inno.Rendering.Shaders.ShaderSourceImplementationRequest}) 1488a62ab6e215f9d146375b7df92de859f3521aca3f77c38d9cca9420fbc01a -->

```csharp
public Inno.Rendering.Shaders.ShaderSourceModuleAnalysis Inno.Rendering.Shaders.ShaderSourceFrontendCatalog.AnalyzeModule(System.Collections.Generic.IEnumerable<Inno.Rendering.Shaders.ShaderSourceImplementationRequest> implementations)
```

Analyzes all selected implementations and variants against one immutable provider generation.

**Parameter `implementations`:** Explicit implementation/configuration candidates; no native-code translation is attempted.

**Returns:** Frozen source inputs and a common interface, or recoverable missing/interface diagnostics.

**Throws `System.ArgumentException`:** The candidate list is empty or contains null or duplicate implementation IDs.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Sources/ShaderSourceFrontendCatalog.cs#L79).

## `languageIds`

<a id="api-1efbb578c4afbac8"></a>
<!-- api: P:Inno.Rendering.Shaders.ShaderSourceFrontendCatalog.languageIds 062121de0262925eb1529208376bc64071a779ae87547fc5d989f697cb6a55eb -->

```csharp
public System.Collections.Generic.IReadOnlyList<string> Inno.Rendering.Shaders.ShaderSourceFrontendCatalog.languageIds { get; }
```

Gets registered language identities for source import settings.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Sources/ShaderSourceFrontendCatalog.cs#L37).
