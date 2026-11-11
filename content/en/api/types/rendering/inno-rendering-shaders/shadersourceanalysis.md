---
title: "ShaderSourceAnalysis"
description: "Reference for ShaderSourceAnalysis in Inno.Rendering.Shaders."
uid: api.inno.rendering.shaders.c5b76d71f4b7c058
kind: api
owners:
  - Inno.Rendering.Shaders
apiSurface: source-clr
contracts:
  - project.inno-rendering-shaders
---
# `ShaderSourceAnalysis`

This reference describes `ShaderSourceAnalysis` in `Inno.Rendering.Shaders`. Read the [shared contract](../../../projects/inno-rendering-shaders.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-53f0e115d11650d9) | Method |
| [`dependencies`](#api-d7e1ef91684bbecc) | Property |
| [`diagnostics`](#api-2dca64ddfc287e6c) | Property |
| [`function`](#api-70bec7042baafc5a) | Property |
| [`succeeded`](#api-9619b702b323996c) | Property |

## Type declaration

<a id="api-c5b76d71f4b7c058"></a>
<!-- api: T:Inno.Rendering.Shaders.ShaderSourceAnalysis 30ee7af30d74a21cff2fb7fa2f65dab5dccd174b8b7f870a1f181fb70f247f19 -->

```csharp
public sealed class Inno.Rendering.Shaders.ShaderSourceAnalysis
```

Returns a recoverable source analysis result and complete original-source dependencies.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Sources/IShaderSourceFrontend.cs#L141).

## `#ctor`

<a id="api-53f0e115d11650d9"></a>
<!-- api: M:Inno.Rendering.Shaders.ShaderSourceAnalysis.#ctor(Inno.Rendering.Shaders.ShaderSourceFunction,System.Collections.Generic.IEnumerable{System.String},System.Collections.Generic.IEnumerable{Inno.Rendering.Shaders.ShaderSourceDiagnostic}) 773370949f7015c731e30cd20b46aed2608242e57b47859210756e0f27624083 -->

```csharp
public Inno.Rendering.Shaders.ShaderSourceAnalysis.ShaderSourceAnalysis(Inno.Rendering.Shaders.ShaderSourceFunction? function, System.Collections.Generic.IEnumerable<string> dependencies, System.Collections.Generic.IEnumerable<Inno.Rendering.Shaders.ShaderSourceDiagnostic> diagnostics)
```

Captures a completed analysis without retaining compiler objects.

**Parameter `function`:** Parsed interface, or null when parsing failed.

**Parameter `dependencies`:** Resolved included sources, excluding the root.

**Parameter `diagnostics`:** All problems discovered by the frontend.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Sources/IShaderSourceFrontend.cs#L155).

## `dependencies`

<a id="api-d7e1ef91684bbecc"></a>
<!-- api: P:Inno.Rendering.Shaders.ShaderSourceAnalysis.dependencies ee79bd2f941d3b50e56468173723cd409349bbc7efd1f9032442b5aec870f203 -->

```csharp
public System.Collections.Generic.IReadOnlyList<string> Inno.Rendering.Shaders.ShaderSourceAnalysis.dependencies { get; }
```

Gets original source dependencies for invalidation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Sources/IShaderSourceFrontend.cs#L173).

## `diagnostics`

<a id="api-2dca64ddfc287e6c"></a>
<!-- api: P:Inno.Rendering.Shaders.ShaderSourceAnalysis.diagnostics c8f935f4a58de6c3ed7d18899fe8d3eb54406fb017b281fac4bc65fa8b4d3e3a -->

```csharp
public System.Collections.Generic.IReadOnlyList<Inno.Rendering.Shaders.ShaderSourceDiagnostic> Inno.Rendering.Shaders.ShaderSourceAnalysis.diagnostics { get; }
```

Gets immutable, provider-neutral diagnostics.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Sources/IShaderSourceFrontend.cs#L177).

## `function`

<a id="api-70bec7042baafc5a"></a>
<!-- api: P:Inno.Rendering.Shaders.ShaderSourceAnalysis.function 7b1cb1f2cc9d60acfd545295f62f9c03af1c036b5016f55fd1ca16bbc9d8a8dc -->

```csharp
public Inno.Rendering.Shaders.ShaderSourceFunction? Inno.Rendering.Shaders.ShaderSourceAnalysis.function { get; }
```

Gets the parsed interface, or null after an analysis failure.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Sources/IShaderSourceFrontend.cs#L169).

## `succeeded`

<a id="api-9619b702b323996c"></a>
<!-- api: P:Inno.Rendering.Shaders.ShaderSourceAnalysis.succeeded d0cfe2594404ad0c081c784812828b930606cd9370a750e0f71b93a2267999ad -->

```csharp
public bool Inno.Rendering.Shaders.ShaderSourceAnalysis.succeeded { get; }
```

Gets whether a usable interface was found without errors.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Sources/IShaderSourceFrontend.cs#L181).
