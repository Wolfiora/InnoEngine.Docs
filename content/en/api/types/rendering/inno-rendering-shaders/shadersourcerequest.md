---
title: "ShaderSourceRequest"
description: "Reference for ShaderSourceRequest in Inno.Rendering.Shaders."
uid: api.inno.rendering.shaders.644f315c35719ee4
kind: api
owners:
  - Inno.Rendering.Shaders
apiSurface: source-clr
contracts:
  - project.inno-rendering-shaders
---
# `ShaderSourceRequest`

This reference describes `ShaderSourceRequest` in `Inno.Rendering.Shaders`. Read the [shared contract](../../../projects/inno-rendering-shaders.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-b43942c5b3f05941) | Method |
| [`defines`](#api-b3fa2b342e0ae701) | Property |
| [`entryPoint`](#api-f219fdcf47a93ee3) | Property |
| [`resolver`](#api-53d263170b50dbf5) | Property |
| [`source`](#api-dd12395cc6c98423) | Property |

## Type declaration

<a id="api-644f315c35719ee4"></a>
<!-- api: T:Inno.Rendering.Shaders.ShaderSourceRequest d310826fca3b8f685613cc3f3c89296a78b596967383ccb6d829dedb21343240 -->

```csharp
public sealed class Inno.Rendering.Shaders.ShaderSourceRequest
```

Carries the immutable inputs required to execute one shader source request.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Sources/IShaderSourceFrontend.cs#L88).

## `#ctor`

<a id="api-b43942c5b3f05941"></a>
<!-- api: M:Inno.Rendering.Shaders.ShaderSourceRequest.#ctor(Inno.Rendering.Shaders.ShaderSourceFile,System.String,Inno.Rendering.Shaders.IShaderSourceResolver,System.Collections.Generic.IReadOnlyDictionary{System.String,System.String}) 9130d83d990c2e8af9b2caf7db778aec6b41e44b3b1a024b4508ec2979a3f437 -->

```csharp
public Inno.Rendering.Shaders.ShaderSourceRequest.ShaderSourceRequest(Inno.Rendering.Shaders.ShaderSourceFile source, string entryPoint, Inno.Rendering.Shaders.IShaderSourceResolver resolver, System.Collections.Generic.IReadOnlyDictionary<string, string>? defines = null)
```

Creates an analysis request for an explicitly selected function.

**Parameter `source`:** Root source snapshot.

**Parameter `entryPoint`:** The one public function selected by source import settings.

**Parameter `resolver`:** Candidate-scoped include resolver.

**Parameter `defines`:** Target and variant preprocessing inputs, or null for no defines.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Sources/IShaderSourceFrontend.cs#L105).

## `defines`

<a id="api-b3fa2b342e0ae701"></a>
<!-- api: P:Inno.Rendering.Shaders.ShaderSourceRequest.defines 6d0f56ec390f8db87c872269f9f4ab6fee3c5e48c84e6a207f1db007cd5a13c2 -->

```csharp
public System.Collections.Generic.IReadOnlyDictionary<string, string> Inno.Rendering.Shaders.ShaderSourceRequest.defines { get; }
```

Gets immutable preprocessing inputs included in analysis cache identity.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Sources/IShaderSourceFrontend.cs#L135).

## `entryPoint`

<a id="api-f219fdcf47a93ee3"></a>
<!-- api: P:Inno.Rendering.Shaders.ShaderSourceRequest.entryPoint 96b9101d21b1e88241487e1e9df8343d5034c78ca5745a10358ac791af3b6562 -->

```csharp
public string Inno.Rendering.Shaders.ShaderSourceRequest.entryPoint { get; }
```

Gets the explicitly selected export function name.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Sources/IShaderSourceFrontend.cs#L127).

## `resolver`

<a id="api-53d263170b50dbf5"></a>
<!-- api: P:Inno.Rendering.Shaders.ShaderSourceRequest.resolver 3c70c1a48283df5b4f239ddf00d1cafd351382166ea1a39e90ab62a130fb8a18 -->

```csharp
public Inno.Rendering.Shaders.IShaderSourceResolver Inno.Rendering.Shaders.ShaderSourceRequest.resolver { get; }
```

Gets the candidate-scoped dependency resolver.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Sources/IShaderSourceFrontend.cs#L131).

## `source`

<a id="api-dd12395cc6c98423"></a>
<!-- api: P:Inno.Rendering.Shaders.ShaderSourceRequest.source e29008a4edccb14d0b2c75c9f6889a4c819a7c1636f8f353c7cdeb435a57d41a -->

```csharp
public Inno.Rendering.Shaders.ShaderSourceFile Inno.Rendering.Shaders.ShaderSourceRequest.source { get; }
```

Gets the root source snapshot.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Sources/IShaderSourceFrontend.cs#L123).
