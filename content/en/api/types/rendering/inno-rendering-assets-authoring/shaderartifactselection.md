---
title: "ShaderArtifactSelection"
description: "Reference for ShaderArtifactSelection in Inno.Rendering.Assets.Authoring."
uid: api.inno.rendering.assets.authoring.77a027f8ec5f7846
kind: api
owners:
  - Inno.Rendering.Assets.Authoring
apiSurface: source-clr
contracts:
  - project.inno-rendering-assets-authoring
---
# `ShaderArtifactSelection`

This reference describes `ShaderArtifactSelection` in `Inno.Rendering.Assets.Authoring`. Read the [shared contract](../../../projects/inno-rendering-assets-authoring.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-351ec943df9fb3a1) | Method |
| [`artifact`](#api-c35c6053645f4af5) | Property |
| [`candidateSucceeded`](#api-43f13d395220b7f9) | Property |
| [`diagnostics`](#api-02efa622e50227b4) | Property |
| [`usingLastGood`](#api-b33a278b2edf0cc7) | Property |

## Type declaration

<a id="api-77a027f8ec5f7846"></a>
<!-- api: T:Inno.Rendering.Assets.Authoring.ShaderArtifactSelection 2101b8f9db14cd81dc853ec01b01b4f9b34b8d7c1810a8928f292ad53dd2c179 -->

```csharp
public sealed class Inno.Rendering.Assets.Authoring.ShaderArtifactSelection
```

Describes the artifact selected after evaluating a candidate compilation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets.Authoring/Compilation/ShaderLastGoodStore.cs#L13).

## `#ctor`

<a id="api-351ec943df9fb3a1"></a>
<!-- api: M:Inno.Rendering.Assets.Authoring.ShaderArtifactSelection.#ctor(Inno.Rendering.Assets.Authoring.CompiledShaderArtifact,System.Boolean,System.Boolean,System.Collections.Generic.IReadOnlyList{Inno.Rendering.Assets.ShaderDiagnostic}) 88194764a74184252a337d0c518cd0fcac8bf574a4d60c413e6904eb3d0588b0 -->

```csharp
public Inno.Rendering.Assets.Authoring.ShaderArtifactSelection.ShaderArtifactSelection(Inno.Rendering.Assets.Authoring.CompiledShaderArtifact? artifact, bool candidateSucceeded, bool usingLastGood, System.Collections.Generic.IReadOnlyList<Inno.Rendering.Assets.ShaderDiagnostic> diagnostics)
```

Creates an artifact selection result.

**Parameter `artifact`:** Selected candidate or last-good artifact.

**Parameter `candidateSucceeded`:** Whether the candidate replaced active state.

**Parameter `usingLastGood`:** Whether a previous artifact was preserved.

**Parameter `diagnostics`:** Candidate diagnostics.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets.Authoring/Compilation/ShaderLastGoodStore.cs#L30).

## `artifact`

<a id="api-c35c6053645f4af5"></a>
<!-- api: P:Inno.Rendering.Assets.Authoring.ShaderArtifactSelection.artifact a0a5068db168add7f45810d72e7468e3905142303bf6e79019ebd3f4c5310f60 -->

```csharp
public Inno.Rendering.Assets.Authoring.CompiledShaderArtifact? Inno.Rendering.Assets.Authoring.ShaderArtifactSelection.artifact { get; }
```

Gets the selected candidate or last-good artifact.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets.Authoring/Compilation/ShaderLastGoodStore.cs#L46).

## `candidateSucceeded`

<a id="api-43f13d395220b7f9"></a>
<!-- api: P:Inno.Rendering.Assets.Authoring.ShaderArtifactSelection.candidateSucceeded b09dfe43fd6ef6f605827396a18479cad62057dd1e63c5d41d33c51eff018b5b -->

```csharp
public bool Inno.Rendering.Assets.Authoring.ShaderArtifactSelection.candidateSucceeded { get; }
```

Gets whether the candidate replaced active state.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets.Authoring/Compilation/ShaderLastGoodStore.cs#L51).

## `diagnostics`

<a id="api-02efa622e50227b4"></a>
<!-- api: P:Inno.Rendering.Assets.Authoring.ShaderArtifactSelection.diagnostics 5825962a429996efba886ef68425e0c0b2ac1173a54c18235e862d0eed0b67d2 -->

```csharp
public System.Collections.Generic.IReadOnlyList<Inno.Rendering.Assets.ShaderDiagnostic> Inno.Rendering.Assets.Authoring.ShaderArtifactSelection.diagnostics { get; }
```

Gets candidate diagnostics.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets.Authoring/Compilation/ShaderLastGoodStore.cs#L61).

## `usingLastGood`

<a id="api-b33a278b2edf0cc7"></a>
<!-- api: P:Inno.Rendering.Assets.Authoring.ShaderArtifactSelection.usingLastGood e330f7865fef0c9dc42831a2676ddc1cfe60d12221bde503e77c3ecc51d0e1d3 -->

```csharp
public bool Inno.Rendering.Assets.Authoring.ShaderArtifactSelection.usingLastGood { get; }
```

Gets whether a previous artifact was preserved.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets.Authoring/Compilation/ShaderLastGoodStore.cs#L56).
