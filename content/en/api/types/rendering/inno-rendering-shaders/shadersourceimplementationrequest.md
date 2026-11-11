---
title: "ShaderSourceImplementationRequest"
description: "Reference for ShaderSourceImplementationRequest in Inno.Rendering.Shaders."
uid: api.inno.rendering.shaders.29e30ce5414d18ae
kind: api
owners:
  - Inno.Rendering.Shaders
apiSurface: source-clr
contracts:
  - project.inno-rendering-shaders
---
# `ShaderSourceImplementationRequest`

This reference describes `ShaderSourceImplementationRequest` in `Inno.Rendering.Shaders`. Read the [shared contract](../../../projects/inno-rendering-shaders.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-c9e66f6214466c33) | Method |
| [`implementationId`](#api-960e8c12d2085510) | Property |
| [`languageId`](#api-a1ae521a67042226) | Property |
| [`source`](#api-826a78e8042b5f5c) | Property |

## Type declaration

<a id="api-29e30ce5414d18ae"></a>
<!-- api: T:Inno.Rendering.Shaders.ShaderSourceImplementationRequest d084472d9cf310ebd30fa4085db5e0f9f3c221fa7b5e69e10305b163d6fbcf8c -->

```csharp
public sealed class Inno.Rendering.Shaders.ShaderSourceImplementationRequest
```

Identifies one explicitly selected implementation and preprocessing configuration of a source module.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Sources/ShaderSourceModuleAnalysis.cs#L32).

## `#ctor`

<a id="api-c9e66f6214466c33"></a>
<!-- api: M:Inno.Rendering.Shaders.ShaderSourceImplementationRequest.#ctor(System.String,System.String,Inno.Rendering.Shaders.ShaderSourceRequest) 58259a9f1770d374035da57d45b51b96ef75944ce318e5b27a3b13e3dcb6e8cd -->

```csharp
public Inno.Rendering.Shaders.ShaderSourceImplementationRequest.ShaderSourceImplementationRequest(string implementationId, string languageId, Inno.Rendering.Shaders.ShaderSourceRequest source)
```

Creates a candidate without inferring a language or adapter from its filename.

**Parameter `implementationId`:** Unique owner-defined key, including the target or variant when applicable.

**Parameter `languageId`:** Registered source language identity.

**Parameter `source`:** Source function and candidate-scoped dependency resolver.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Sources/ShaderSourceModuleAnalysis.cs#L46).

## `implementationId`

<a id="api-960e8c12d2085510"></a>
<!-- api: P:Inno.Rendering.Shaders.ShaderSourceImplementationRequest.implementationId c50e5813c4778ef50df4a02fba1f130b54e42aa3022379ff8870c0741cb64a06 -->

```csharp
public string Inno.Rendering.Shaders.ShaderSourceImplementationRequest.implementationId { get; }
```

Gets the stable owner-defined implementation/configuration key.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Sources/ShaderSourceModuleAnalysis.cs#L61).

## `languageId`

<a id="api-a1ae521a67042226"></a>
<!-- api: P:Inno.Rendering.Shaders.ShaderSourceImplementationRequest.languageId 3295038c57d6de297799626c82437520a2034050495ca3385729252fddd64eb9 -->

```csharp
public string Inno.Rendering.Shaders.ShaderSourceImplementationRequest.languageId { get; }
```

Gets the explicitly selected language identity.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Sources/ShaderSourceModuleAnalysis.cs#L65).

## `source`

<a id="api-826a78e8042b5f5c"></a>
<!-- api: P:Inno.Rendering.Shaders.ShaderSourceImplementationRequest.source 713d0db5012dd20997229fe3cd40587b563dbff6840426e38a7e866695d50084 -->

```csharp
public Inno.Rendering.Shaders.ShaderSourceRequest Inno.Rendering.Shaders.ShaderSourceImplementationRequest.source { get; }
```

Gets the transient candidate request, which must not be persisted or retained after analysis.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Sources/ShaderSourceModuleAnalysis.cs#L69).
