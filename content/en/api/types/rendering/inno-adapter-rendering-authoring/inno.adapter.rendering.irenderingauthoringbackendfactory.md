---
title: "Inno.Adapter.Rendering.IRenderingAuthoringBackendFactory"
description: "Reference for Inno.Adapter.Rendering.IRenderingAuthoringBackendFactory in Inno.Adapter.Rendering.Authoring."
uid: api.inno.adapter.rendering.authoring.c6890c348cd49894
kind: api
owners:
  - Inno.Adapter.Rendering.Authoring
apiSurface: source-clr
contracts:
  - project.inno-adapter-rendering-authoring
---
# `Inno.Adapter.Rendering.IRenderingAuthoringBackendFactory`

This reference describes `Inno.Adapter.Rendering.IRenderingAuthoringBackendFactory` in `Inno.Adapter.Rendering.Authoring`. Read the [shared contract](../../../projects/inno-adapter-rendering-authoring.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

## Members

| Member | Kind |
| --- | --- |
| [`CreateShaderCompilerToolchain`](#api-ecca267be2a326ed) | Method |
| [`CreateTextureTargetCompiler`](#api-ea2b65610b830d8c) | Method |
| [`supportedBackends`](#api-c18ffc0ed0e3767e) | Property |

## Type declaration

<a id="api-c6890c348cd49894"></a>
<!-- api: T:Inno.Adapter.Rendering.IRenderingAuthoringBackendFactory 7bcc77b8b3ee5c07ea86a09b569d8a2c36658fd938a3d913e425baf1cbc2ed36 -->

```csharp
public interface Inno.Adapter.Rendering.IRenderingAuthoringBackendFactory
```

Creates offline rendering compilers paired with a selected runtime rendering backend.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/adapters/rendering/Inno.Adapter.Rendering.Authoring/IRenderingAuthoringBackendFactory.cs#L10).

## `CreateShaderCompilerToolchain`

<a id="api-ecca267be2a326ed"></a>
<!-- api: M:Inno.Adapter.Rendering.IRenderingAuthoringBackendFactory.CreateShaderCompilerToolchain(Inno.Adapter.Rendering.RenderingBackendId) f7c99e6350d0cb241ad7fe2000b7d82059c74ec1e15b08a5858d9d7c2fe28e1f -->

```csharp
Inno.Rendering.Assets.Authoring.IShaderCompilerToolchain Inno.Adapter.Rendering.IRenderingAuthoringBackendFactory.CreateShaderCompilerToolchain(Inno.Adapter.Rendering.RenderingBackendId backend)
```

Creates the shader compiler toolchain paired with the selected rendering backend.

**Parameter `backend`:** Stable rendering backend identity selected by the authoring composition root.

**Returns:** A target compiler compatible with devices created for the same backend.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/adapters/rendering/Inno.Adapter.Rendering.Authoring/IRenderingAuthoringBackendFactory.cs#L26).

## `CreateTextureTargetCompiler`

<a id="api-ea2b65610b830d8c"></a>
<!-- api: M:Inno.Adapter.Rendering.IRenderingAuthoringBackendFactory.CreateTextureTargetCompiler(Inno.Adapter.Rendering.RenderingBackendId) 6e906c6e352724e04474f88449861a464d1a9e8802d23b2c81c745cb2b7b7a7f -->

```csharp
Inno.Rendering.Assets.Authoring.ITextureTargetCompiler Inno.Adapter.Rendering.IRenderingAuthoringBackendFactory.CreateTextureTargetCompiler(Inno.Adapter.Rendering.RenderingBackendId backend)
```

Creates the texture compiler paired with the selected rendering backend.

**Parameter `backend`:** Stable rendering backend identity selected by the authoring composition root.

**Returns:** A texture target compiler compatible with devices created for the same backend.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/adapters/rendering/Inno.Adapter.Rendering.Authoring/IRenderingAuthoringBackendFactory.cs#L37).

## `supportedBackends`

<a id="api-c18ffc0ed0e3767e"></a>
<!-- api: P:Inno.Adapter.Rendering.IRenderingAuthoringBackendFactory.supportedBackends 110582cf9ae8cbd4aa9bf175306ea135b843ec78502d28bdb49b3be333f0bed1 -->

```csharp
System.Collections.Generic.IReadOnlyList<Inno.Adapter.Rendering.RenderingBackendId> Inno.Adapter.Rendering.IRenderingAuthoringBackendFactory.supportedBackends { get; }
```

Gets the runtime backend identities supported by this authoring composition.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/adapters/rendering/Inno.Adapter.Rendering.Authoring/IRenderingAuthoringBackendFactory.cs#L15).
