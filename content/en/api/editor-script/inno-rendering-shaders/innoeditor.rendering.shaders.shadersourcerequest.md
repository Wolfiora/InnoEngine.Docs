---
title: "ShaderSourceRequest"
description: "Reference for ShaderSourceRequest in Inno.Rendering.Shaders."
uid: api.inno.rendering.shaders.editor-script.de605a61249979da
kind: api
owners:
  - Inno.Rendering.Shaders
apiSurface: editor-script
contracts:
  - project.inno-rendering-shaders
  - manual.scripting.use-script-api
---
# `ShaderSourceRequest`

This reference describes `ShaderSourceRequest` in `Inno.Rendering.Shaders`. Read the [shared contract](../../projects/inno-rendering-shaders.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `editor-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-42d5af9e862e1ce8) | Method |
| [`defines`](#api-c2231ee7957124b0) | Property |
| [`entryPoint`](#api-5791511b376c7821) | Property |
| [`resolver`](#api-c1be99a712932766) | Property |
| [`source`](#api-171ee12f129e8550) | Property |

## Type declaration

<a id="api-de605a61249979da"></a>
<!-- api: T:InnoEditor.Rendering.Shaders.ShaderSourceRequest bd465a56f8ff53d5ef25d2e285b4e18e1d2abea1427321227876b6aa5a22f67e -->

```csharp
public sealed class InnoEditor.Rendering.Shaders.ShaderSourceRequest
```

Carries the immutable inputs required to execute one shader source request.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Sources/IShaderSourceFrontend.cs#L88).

## `#ctor`

<a id="api-42d5af9e862e1ce8"></a>
<!-- api: M:InnoEditor.Rendering.Shaders.ShaderSourceRequest.#ctor(InnoEditor.Rendering.Shaders.ShaderSourceFile,System.String,InnoEditor.Rendering.Shaders.IShaderSourceResolver,System.Collections.Generic.IReadOnlyDictionary{System.String,System.String}) b94cae44b2cee1c4753fd685fbba0f0f56388499d50db238b615f9d9119d89aa -->

```csharp
public InnoEditor.Rendering.Shaders.ShaderSourceRequest.ShaderSourceRequest(InnoEditor.Rendering.Shaders.ShaderSourceFile source, string entryPoint, InnoEditor.Rendering.Shaders.IShaderSourceResolver resolver, System.Collections.Generic.IReadOnlyDictionary<string, string>? defines = null)
```

Creates an analysis request for an explicitly selected function.

**Parameter `source`:** Root source snapshot.

**Parameter `entryPoint`:** The one public function selected by source import settings.

**Parameter `resolver`:** Candidate-scoped include resolver.

**Parameter `defines`:** Target and variant preprocessing inputs, or null for no defines.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Sources/IShaderSourceFrontend.cs#L105).

## `defines`

<a id="api-c2231ee7957124b0"></a>
<!-- api: P:InnoEditor.Rendering.Shaders.ShaderSourceRequest.defines 0153eb25b1dac45625544d8f0041a1130dee4b3c901a807f8268376b1f3cf62e -->

```csharp
public System.Collections.Generic.IReadOnlyDictionary<string, string> InnoEditor.Rendering.Shaders.ShaderSourceRequest.defines { get; }
```

Gets immutable preprocessing inputs included in analysis cache identity.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Sources/IShaderSourceFrontend.cs#L135).

## `entryPoint`

<a id="api-5791511b376c7821"></a>
<!-- api: P:InnoEditor.Rendering.Shaders.ShaderSourceRequest.entryPoint 35db1bd7ecbf9f8d3249230a90bfc78206a94b6e5bce50f0bc8473d115b410f9 -->

```csharp
public string InnoEditor.Rendering.Shaders.ShaderSourceRequest.entryPoint { get; }
```

Gets the explicitly selected export function name.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Sources/IShaderSourceFrontend.cs#L127).

## `resolver`

<a id="api-c1be99a712932766"></a>
<!-- api: P:InnoEditor.Rendering.Shaders.ShaderSourceRequest.resolver fb8f514bdb890c9c781d0a94ad7bb138dfa6adc2f925558ea1b3c44695203bc6 -->

```csharp
public InnoEditor.Rendering.Shaders.IShaderSourceResolver InnoEditor.Rendering.Shaders.ShaderSourceRequest.resolver { get; }
```

Gets the candidate-scoped dependency resolver.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Sources/IShaderSourceFrontend.cs#L131).

## `source`

<a id="api-171ee12f129e8550"></a>
<!-- api: P:InnoEditor.Rendering.Shaders.ShaderSourceRequest.source b6f6ec325b90b6a91b55b2d9d7ec91a73844a0a380590ddbc9b702cf1685721b -->

```csharp
public InnoEditor.Rendering.Shaders.ShaderSourceFile InnoEditor.Rendering.Shaders.ShaderSourceRequest.source { get; }
```

Gets the root source snapshot.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Sources/IShaderSourceFrontend.cs#L123).
