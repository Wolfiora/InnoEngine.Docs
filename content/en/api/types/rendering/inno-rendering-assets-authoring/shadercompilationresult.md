---
title: "ShaderCompilationResult"
description: "Reference for ShaderCompilationResult in Inno.Rendering.Assets.Authoring."
uid: api.inno.rendering.assets.authoring.4cde7c7cbdc879b0
kind: api
owners:
  - Inno.Rendering.Assets.Authoring
apiSurface: source-clr
contracts:
  - project.inno-rendering-assets-authoring
---
# `ShaderCompilationResult`

This reference describes `ShaderCompilationResult` in `Inno.Rendering.Assets.Authoring`. Read the [shared contract](../../../projects/inno-rendering-assets-authoring.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-fa6c44d3f30d08ed) | Method |
| [`artifact`](#api-6aa448ee08ceccf9) | Property |
| [`diagnostics`](#api-3c85e5874b1f0f3e) | Property |
| [`succeeded`](#api-d99b741e83f58680) | Property |

## Type declaration

<a id="api-4cde7c7cbdc879b0"></a>
<!-- api: T:Inno.Rendering.Assets.Authoring.ShaderCompilationResult 6f05a645ce121a79cd0e14a3a9bef09642a7cee9fa2fa34db3eb12ff7e41c5e3 -->

```csharp
public sealed class Inno.Rendering.Assets.Authoring.ShaderCompilationResult
```

Returns a candidate artifact and structured diagnostics without mutating active state.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets.Authoring/Compilation/ShaderCompilation.cs#L312).

## `#ctor`

<a id="api-fa6c44d3f30d08ed"></a>
<!-- api: M:Inno.Rendering.Assets.Authoring.ShaderCompilationResult.#ctor(Inno.Rendering.Assets.Authoring.CompiledShaderArtifact,System.Collections.Generic.IReadOnlyList{Inno.Rendering.Assets.ShaderDiagnostic}) 71da89a0e7a7775125ec3378af49a4f2a31dfea34148e6cef847a5cc39760a3f -->

```csharp
public Inno.Rendering.Assets.Authoring.ShaderCompilationResult.ShaderCompilationResult(Inno.Rendering.Assets.Authoring.CompiledShaderArtifact? artifact, System.Collections.Generic.IReadOnlyList<Inno.Rendering.Assets.ShaderDiagnostic> diagnostics)
```

Creates a shader compilation result.

**Parameter `artifact`:** Candidate artifact, or `null` after failure.

**Parameter `diagnostics`:** Validation and compiler diagnostics.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets.Authoring/Compilation/ShaderCompilation.cs#L323).

## `artifact`

<a id="api-6aa448ee08ceccf9"></a>
<!-- api: P:Inno.Rendering.Assets.Authoring.ShaderCompilationResult.artifact d1c7541b5912513bde808d69d1850ee8e79dcd6220dbed6b4465c088b54d401f -->

```csharp
public Inno.Rendering.Assets.Authoring.CompiledShaderArtifact? Inno.Rendering.Assets.Authoring.ShaderCompilationResult.artifact { get; }
```

Gets the candidate artifact, or `null` after failure.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets.Authoring/Compilation/ShaderCompilation.cs#L335).

## `diagnostics`

<a id="api-3c85e5874b1f0f3e"></a>
<!-- api: P:Inno.Rendering.Assets.Authoring.ShaderCompilationResult.diagnostics 4def5d0c2a15c93477c14f0523691b254d565e6ed4db1f8b613743b02c282e46 -->

```csharp
public System.Collections.Generic.IReadOnlyList<Inno.Rendering.Assets.ShaderDiagnostic> Inno.Rendering.Assets.Authoring.ShaderCompilationResult.diagnostics { get; }
```

Gets validation and compiler diagnostics.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets.Authoring/Compilation/ShaderCompilation.cs#L340).

## `succeeded`

<a id="api-d99b741e83f58680"></a>
<!-- api: P:Inno.Rendering.Assets.Authoring.ShaderCompilationResult.succeeded 23f4c2a600fb1e9d9a8b0e4659cf3bb335b4064c4807a0a912668de328c6c2f6 -->

```csharp
public bool Inno.Rendering.Assets.Authoring.ShaderCompilationResult.succeeded { get; }
```

Gets whether a complete candidate artifact was produced.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets.Authoring/Compilation/ShaderCompilation.cs#L345).
