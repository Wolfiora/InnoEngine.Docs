---
title: "Inno.Adapter.Rendering.RenderingAuthoringBackendProvider"
description: "Reference for Inno.Adapter.Rendering.RenderingAuthoringBackendProvider in Inno.Adapter.Rendering.Authoring."
uid: api.inno.adapter.rendering.authoring.0505aa995479bc9b
kind: api
owners:
  - Inno.Adapter.Rendering.Authoring
apiSurface: source-clr
contracts:
  - project.inno-adapter-rendering-authoring
---
# `Inno.Adapter.Rendering.RenderingAuthoringBackendProvider`

This reference describes `Inno.Adapter.Rendering.RenderingAuthoringBackendProvider` in `Inno.Adapter.Rendering.Authoring`. Read the [shared contract](../../../projects/inno-adapter-rendering-authoring.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-35f7709e89d6158e) | Method |
| [`CreateShaderCompilerToolchain`](#api-b49059cff5efa6b0) | Method |
| [`CreateTextureTargetCompiler`](#api-14cb9030236a87fd) | Method |
| [`id`](#api-34917d64fbc6dc44) | Property |

## Type declaration

<a id="api-0505aa995479bc9b"></a>
<!-- api: T:Inno.Adapter.Rendering.RenderingAuthoringBackendProvider 5fb6e16a70476229f80acf680c91274b0d8020b6543c174e53110799f5410631 -->

```csharp
public abstract class Inno.Adapter.Rendering.RenderingAuthoringBackendProvider
```

Supplies authoring tools paired with one runtime rendering implementation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/adapters/rendering/Inno.Adapter.Rendering.Authoring/RenderingAuthoringBackendProvider.cs#L10).

## `#ctor`

<a id="api-35f7709e89d6158e"></a>
<!-- api: M:Inno.Adapter.Rendering.RenderingAuthoringBackendProvider.#ctor(Inno.Adapter.Rendering.RenderingBackendId) 0ab3eb3c56a367f8788a2d234859ae92992b14e9d1937912d41b70d4f3a95a70 -->

```csharp
protected Inno.Adapter.Rendering.RenderingAuthoringBackendProvider.RenderingAuthoringBackendProvider(Inno.Adapter.Rendering.RenderingBackendId id)
```

Captures the registration identity assigned by the composition owner.

**Parameter `id`:** The assigned implementation identity.

**Throws `System.ArgumentException`:** The identity is unassigned.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/adapters/rendering/Inno.Adapter.Rendering.Authoring/RenderingAuthoringBackendProvider.cs#L21).

## `CreateShaderCompilerToolchain`

<a id="api-b49059cff5efa6b0"></a>
<!-- api: M:Inno.Adapter.Rendering.RenderingAuthoringBackendProvider.CreateShaderCompilerToolchain f8f24da1fbc43aa6f6e1a8add8320c38e702b4b428f158d00685eabe75a22a27 -->

```csharp
public abstract Inno.Rendering.Assets.Authoring.IShaderCompilerToolchain Inno.Adapter.Rendering.RenderingAuthoringBackendProvider.CreateShaderCompilerToolchain()
```

Creates the shader toolchain for this implementation.

**Returns:** A compiler compatible with devices registered under the same identity.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/adapters/rendering/Inno.Adapter.Rendering.Authoring/RenderingAuthoringBackendProvider.cs#L39).

## `CreateTextureTargetCompiler`

<a id="api-14cb9030236a87fd"></a>
<!-- api: M:Inno.Adapter.Rendering.RenderingAuthoringBackendProvider.CreateTextureTargetCompiler 79f2fe8a3bdad442d8dd2c432c09b14bdb52118e729075ff9ee5e9c46f43ade5 -->

```csharp
public abstract Inno.Rendering.Assets.Authoring.ITextureTargetCompiler Inno.Adapter.Rendering.RenderingAuthoringBackendProvider.CreateTextureTargetCompiler()
```

Creates the texture compiler for this implementation.

**Returns:** A compiler compatible with devices registered under the same identity.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/adapters/rendering/Inno.Adapter.Rendering.Authoring/RenderingAuthoringBackendProvider.cs#L47).

## `id`

<a id="api-34917d64fbc6dc44"></a>
<!-- api: P:Inno.Adapter.Rendering.RenderingAuthoringBackendProvider.id 19da0a1ea9d99312a095cea2ecb486b6a1ba9b87742ce8ec2fbbc61556801c67 -->

```csharp
public Inno.Adapter.Rendering.RenderingBackendId Inno.Adapter.Rendering.RenderingAuthoringBackendProvider.id { get; }
```

Gets the stable runtime implementation identity served by these tools.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/adapters/rendering/Inno.Adapter.Rendering.Authoring/RenderingAuthoringBackendProvider.cs#L31).
