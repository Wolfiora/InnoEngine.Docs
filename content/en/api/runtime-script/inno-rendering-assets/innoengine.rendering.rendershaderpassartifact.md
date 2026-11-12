---
title: "RenderShaderPassArtifact"
description: "Reference for RenderShaderPassArtifact in Inno.Rendering.Assets."
uid: api.inno.rendering.assets.runtime-script.1f9e3be2fb20a879
kind: api
owners:
  - Inno.Rendering.Assets
apiSurface: runtime-script
contracts:
  - project.inno-rendering-assets
  - manual.scripting.use-script-api
---
# `RenderShaderPassArtifact`

This reference describes `RenderShaderPassArtifact` in `Inno.Rendering.Assets`. Read the [shared contract](../../projects/inno-rendering-assets.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-5f198d2e3bf71402) | Method |
| [`name`](#api-3d9637aac7521a8b) | Property |
| [`programKind`](#api-a3830935c03b7191) | Property |
| [`rasterState`](#api-d78e48c3d70ae39e) | Property |
| [`shaderInterface`](#api-cca6ae007692cd6e) | Property |
| [`stages`](#api-3231645b9602054b) | Property |

## Type declaration

<a id="api-1f9e3be2fb20a879"></a>
<!-- api: T:InnoEngine.Rendering.RenderShaderPassArtifact 572690eeada9fb751ed37faafa0a4e8e481730bcf07eef94cd7aced34ead625d -->

```csharp
public sealed class InnoEngine.Rendering.RenderShaderPassArtifact
```

Carries one immutable compiled shader pass and its reflected runtime bindings.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Assets/Deployment/RenderShaderPassArtifact.cs#L13).

## `#ctor`

<a id="api-5f198d2e3bf71402"></a>
<!-- api: M:InnoEngine.Rendering.RenderShaderPassArtifact.#ctor(System.String,InnoEngine.Rendering.ShaderProgramKind,InnoEngine.Rendering.RenderRasterState,InnoEngine.Rendering.ShaderInterface,System.Collections.Generic.IReadOnlyList{InnoEngine.Rendering.RenderShaderStageArtifact}) ead5d6d8b626e29e723bb987247fdd6662cd2b24a278bbbaf1507a3643e8ff40 -->

```csharp
public InnoEngine.Rendering.RenderShaderPassArtifact.RenderShaderPassArtifact(string name, InnoEngine.Rendering.ShaderProgramKind programKind, InnoEngine.Rendering.RenderRasterState rasterState, InnoEngine.Rendering.ShaderInterface shaderInterface, System.Collections.Generic.IReadOnlyList<InnoEngine.Rendering.RenderShaderStageArtifact> stages)
```

Creates a deployed shader pass.

**Parameter `name`:** The stable pass name within the owning shader.

**Parameter `programKind`:** The programmable stage combination used by the pass.

**Parameter `rasterState`:** The backend-neutral fixed-function state used by raster passes.

**Parameter `shaderInterface`:** The validated pass-local resource binding contract.

**Parameter `stages`:** The complete target stage binaries required by the pass.

**Throws `System.ArgumentException`:** Thrown when the name, stage set, or program kind is invalid.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Assets/Deployment/RenderShaderPassArtifact.cs#L38).

## `name`

<a id="api-3d9637aac7521a8b"></a>
<!-- api: P:InnoEngine.Rendering.RenderShaderPassArtifact.name d7340d1f09914acde26e8ecf186239b09a8296d37bf801186f2867304041853e -->

```csharp
public string InnoEngine.Rendering.RenderShaderPassArtifact.name { get; }
```

Gets the stable pass name within the owning shader.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Assets/Deployment/RenderShaderPassArtifact.cs#L63).

## `programKind`

<a id="api-a3830935c03b7191"></a>
<!-- api: P:InnoEngine.Rendering.RenderShaderPassArtifact.programKind 3e5a0dc49edfcb0f9e90241f7fdd53740c7f338ac9f31c210d0c71fd076de92a -->

```csharp
public InnoEngine.Rendering.ShaderProgramKind InnoEngine.Rendering.RenderShaderPassArtifact.programKind { get; }
```

Gets the programmable stage combination used by this pass.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Assets/Deployment/RenderShaderPassArtifact.cs#L68).

## `rasterState`

<a id="api-d78e48c3d70ae39e"></a>
<!-- api: P:InnoEngine.Rendering.RenderShaderPassArtifact.rasterState 72114272ccdfb492e87c3c8c50e8f7881dd9ee3f6cba6526216c023ba9f923c2 -->

```csharp
public InnoEngine.Rendering.RenderRasterState InnoEngine.Rendering.RenderShaderPassArtifact.rasterState { get; }
```

Gets an immutable copy of the backend-neutral raster state.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Assets/Deployment/RenderShaderPassArtifact.cs#L73).

## `shaderInterface`

<a id="api-cca6ae007692cd6e"></a>
<!-- api: P:InnoEngine.Rendering.RenderShaderPassArtifact.shaderInterface c6cf081e5f1f03314213fbefa01df07a27472ca8cb84e2334e7427dda20345cd -->

```csharp
public InnoEngine.Rendering.ShaderInterface InnoEngine.Rendering.RenderShaderPassArtifact.shaderInterface { get; }
```

Gets the validated pass-local resource binding contract.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Assets/Deployment/RenderShaderPassArtifact.cs#L78).

## `stages`

<a id="api-3231645b9602054b"></a>
<!-- api: P:InnoEngine.Rendering.RenderShaderPassArtifact.stages 72b99ede8456402b290c7b7a52f3db6c237bdeac7dd7cbeb0727ec7e1a737b61 -->

```csharp
public System.Collections.Generic.IReadOnlyList<InnoEngine.Rendering.RenderShaderStageArtifact> InnoEngine.Rendering.RenderShaderPassArtifact.stages { get; }
```

Gets the complete target stage binaries required by this pass.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Assets/Deployment/RenderShaderPassArtifact.cs#L83).
