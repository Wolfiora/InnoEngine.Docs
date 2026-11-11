---
title: "IShaderSourceFrontend"
description: "Reference for IShaderSourceFrontend in Inno.Rendering.Shaders."
uid: api.inno.rendering.shaders.18214149aef080e5
kind: api
owners:
  - Inno.Rendering.Shaders
apiSurface: source-clr
contracts:
  - project.inno-rendering-shaders
---
# `IShaderSourceFrontend`

This reference describes `IShaderSourceFrontend` in `Inno.Rendering.Shaders`. Read the [shared contract](../../../projects/inno-rendering-shaders.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

## Members

| Member | Kind |
| --- | --- |
| [`Analyze`](#api-a82047ad7900bf53) | Method |
| [`languageId`](#api-f80725ebc5409f72) | Property |

## Type declaration

<a id="api-18214149aef080e5"></a>
<!-- api: T:Inno.Rendering.Shaders.IShaderSourceFrontend 7c5413d52ecf2fdf9a23f34e4f59070eeb49993857c940e8e6a0498c063b585f -->

```csharp
public interface Inno.Rendering.Shaders.IShaderSourceFrontend
```

Parses one source language into canonical function interfaces; it does not create GPU objects.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Sources/IShaderSourceFrontend.cs#L187).

## `Analyze`

<a id="api-a82047ad7900bf53"></a>
<!-- api: M:Inno.Rendering.Shaders.IShaderSourceFrontend.Analyze(Inno.Rendering.Shaders.ShaderSourceRequest) 38a80b6b18e658d2cfb90803f79e6a721f45ac04f5078ff00bbe4ceaa5bc5cbb -->

```csharp
Inno.Rendering.Shaders.ShaderSourceAnalysis Inno.Rendering.Shaders.IShaderSourceFrontend.Analyze(Inno.Rendering.Shaders.ShaderSourceRequest request)
```

Analyzes an immutable source candidate with explicit preprocessing inputs.

**Parameter `request`:** Source, selected function, dependencies, and target inputs.

**Returns:** A successful interface or a recoverable set of original-source diagnostics.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Sources/IShaderSourceFrontend.cs#L202).

## `languageId`

<a id="api-f80725ebc5409f72"></a>
<!-- api: P:Inno.Rendering.Shaders.IShaderSourceFrontend.languageId 750947e51224b2a559a4e262dd9b52ac4c2ca8f92e04ab836a4488c15402effd -->

```csharp
string Inno.Rendering.Shaders.IShaderSourceFrontend.languageId { get; }
```

Gets the open source language identity, distinct from a rendering backend or GPU API.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Sources/IShaderSourceFrontend.cs#L192).
