---
title: "Inno.Adapter.Rendering.RenderingAuthoringBackendCatalog"
description: "Reference for Inno.Adapter.Rendering.RenderingAuthoringBackendCatalog in Inno.Adapter.Rendering.Authoring."
uid: api.inno.adapter.rendering.authoring.5bf82fc0930a1f05
kind: api
owners:
  - Inno.Adapter.Rendering.Authoring
apiSurface: source-clr
contracts:
  - project.inno-adapter-rendering-authoring
---
# `Inno.Adapter.Rendering.RenderingAuthoringBackendCatalog`

This reference describes `Inno.Adapter.Rendering.RenderingAuthoringBackendCatalog` in `Inno.Adapter.Rendering.Authoring`. Read the [shared contract](../../../projects/inno-adapter-rendering-authoring.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

**Direct interfaces:** `Inno.Adapter.Rendering.IRenderingAuthoringBackendFactory`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-eefd1be1d6940185) | Method |
| [`CreateShaderCompilerToolchain`](#api-a606989f55803dc7) | Method |
| [`CreateTextureTargetCompiler`](#api-e0cd373517079662) | Method |
| [`supportedBackends`](#api-8dd7e79c67107bf3) | Property |

## Type declaration

<a id="api-5bf82fc0930a1f05"></a>
<!-- api: T:Inno.Adapter.Rendering.RenderingAuthoringBackendCatalog cc73e0b4ec9e40886c76cb474d28fb088a400676f9196d7e10de0258aab3edb8 -->

```csharp
public sealed class Inno.Adapter.Rendering.RenderingAuthoringBackendCatalog : Inno.Adapter.Rendering.IRenderingAuthoringBackendFactory
```

Pairs one immutable authoring provider set with a runtime rendering catalog.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/adapters/rendering/Inno.Adapter.Rendering.Authoring/RenderingAuthoringBackendCatalog.cs#L12).

## `#ctor`

<a id="api-eefd1be1d6940185"></a>
<!-- api: M:Inno.Adapter.Rendering.RenderingAuthoringBackendCatalog.#ctor(Inno.Adapter.Rendering.IRenderingBackendFactory,System.Collections.Generic.IEnumerable{Inno.Adapter.Rendering.RenderingAuthoringBackendProvider}) bfafe0cef1e111d66aab7a9f3e2eedd438842fc1e79e8d7cb4ae5dd46e885244 -->

```csharp
public Inno.Adapter.Rendering.RenderingAuthoringBackendCatalog.RenderingAuthoringBackendCatalog(Inno.Adapter.Rendering.IRenderingBackendFactory runtime, System.Collections.Generic.IEnumerable<Inno.Adapter.Rendering.RenderingAuthoringBackendProvider> providers)
```

Validates that every runtime backend has exactly one matching authoring provider.

**Parameter `runtime`:** Runtime provider snapshot paired with these authoring tools.

**Parameter `providers`:** Complete authoring provider set owned by this composition generation.

**Throws `System.ArgumentException`:** Provider IDs are missing, duplicated, or do not match the runtime set.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/adapters/rendering/Inno.Adapter.Rendering.Authoring/RenderingAuthoringBackendCatalog.cs#L28).

## `CreateShaderCompilerToolchain`

<a id="api-a606989f55803dc7"></a>
<!-- api: M:Inno.Adapter.Rendering.RenderingAuthoringBackendCatalog.CreateShaderCompilerToolchain(Inno.Adapter.Rendering.RenderingBackendId) e977833d2b9aa6fe410f46be362e1be52201c1bedf8ef0741d78d946a5da64fd -->

```csharp
public Inno.Rendering.Assets.Authoring.IShaderCompilerToolchain Inno.Adapter.Rendering.RenderingAuthoringBackendCatalog.CreateShaderCompilerToolchain(Inno.Adapter.Rendering.RenderingBackendId backend)
```

Creates a shader compiler toolchain using this implementation's validated inputs.

**Parameter `backend`:** The backend consumed by create shader compiler toolchain; ownership remains with the caller unless explicitly stated otherwise.

**Returns:** The validated ishader compiler toolchain that represents the completed operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/adapters/rendering/Inno.Adapter.Rendering.Authoring/RenderingAuthoringBackendCatalog.cs#L57).

## `CreateTextureTargetCompiler`

<a id="api-e0cd373517079662"></a>
<!-- api: M:Inno.Adapter.Rendering.RenderingAuthoringBackendCatalog.CreateTextureTargetCompiler(Inno.Adapter.Rendering.RenderingBackendId) 8839d6a2b8654dd0e78ac79502d7156f6341e0856300cbedf10593770a0ec7ed -->

```csharp
public Inno.Rendering.Assets.Authoring.ITextureTargetCompiler Inno.Adapter.Rendering.RenderingAuthoringBackendCatalog.CreateTextureTargetCompiler(Inno.Adapter.Rendering.RenderingBackendId backend)
```

Creates a texture target compiler using this implementation's validated inputs.

**Parameter `backend`:** The backend consumed by create texture target compiler; ownership remains with the caller unless explicitly stated otherwise.

**Returns:** The validated itexture target compiler that represents the completed operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/adapters/rendering/Inno.Adapter.Rendering.Authoring/RenderingAuthoringBackendCatalog.cs#L70).

## `supportedBackends`

<a id="api-8dd7e79c67107bf3"></a>
<!-- api: P:Inno.Adapter.Rendering.RenderingAuthoringBackendCatalog.supportedBackends c6892c597ac46ec3ae4de5a24ddbcf3dd298b973445528d31fea3a7a24bceef6 -->

```csharp
public System.Collections.Generic.IReadOnlyList<Inno.Adapter.Rendering.RenderingBackendId> Inno.Adapter.Rendering.RenderingAuthoringBackendCatalog.supportedBackends { get; }
```

Gets backend registrations available in this type generation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/adapters/rendering/Inno.Adapter.Rendering.Authoring/RenderingAuthoringBackendCatalog.cs#L46).
