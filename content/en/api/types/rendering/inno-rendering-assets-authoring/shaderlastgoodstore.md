---
title: "ShaderLastGoodStore"
description: "Reference for ShaderLastGoodStore in Inno.Rendering.Assets.Authoring."
uid: api.inno.rendering.assets.authoring.c90d00467a1c99f4
kind: api
owners:
  - Inno.Rendering.Assets.Authoring
apiSurface: source-clr
contracts:
  - project.inno-rendering-assets-authoring
---
# `ShaderLastGoodStore`

This reference describes `ShaderLastGoodStore` in `Inno.Rendering.Assets.Authoring`. Read the [shared contract](../../../projects/inno-rendering-assets-authoring.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-4333db5e7b7dc486) | Method |
| [`Remove`](#api-4c8d5a9ed388bcc1) | Method |
| [`Select`](#api-bb1b29b7a3d75613) | Method |

## Type declaration

<a id="api-c90d00467a1c99f4"></a>
<!-- api: T:Inno.Rendering.Assets.Authoring.ShaderLastGoodStore 10a8d7b9a0b50f02ee637d9227d01419ca08ca5ea56fb98f9b3d297dafc25a3a -->

```csharp
public sealed class Inno.Rendering.Assets.Authoring.ShaderLastGoodStore
```

Atomically preserves last-good CPU shader artifacts by asset, target and variant.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets.Authoring/Compilation/ShaderLastGoodStore.cs#L68).

## `#ctor`

<a id="api-4333db5e7b7dc486"></a>
<!-- api: M:Inno.Rendering.Assets.Authoring.ShaderLastGoodStore.#ctor 5b4b208ac14ee5e480cd7adf2ae6cf4eb5261390b8c63d7e63953df11b81098c -->

```csharp
public Inno.Rendering.Assets.Authoring.ShaderLastGoodStore.ShaderLastGoodStore()
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets.Authoring/Compilation/ShaderLastGoodStore.cs#L68).

## `Remove`

<a id="api-4c8d5a9ed388bcc1"></a>
<!-- api: M:Inno.Rendering.Assets.Authoring.ShaderLastGoodStore.Remove(System.Guid) afe8e16dacd1dc9c2208061920b083ade9645116c0ebe595dd934169367b35cd -->

```csharp
public int Inno.Rendering.Assets.Authoring.ShaderLastGoodStore.Remove(System.Guid shaderId)
```

Removes all CPU artifacts associated with one persistent shader.

**Parameter `shaderId`:** Persistent shader asset identity.

**Returns:** The number of removed variants.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets.Authoring/Compilation/ShaderLastGoodStore.cs#L135).

## `Select`

<a id="api-bb1b29b7a3d75613"></a>
<!-- api: M:Inno.Rendering.Assets.Authoring.ShaderLastGoodStore.Select(System.Guid,System.String,Inno.Rendering.Assets.RenderShaderVariant,Inno.Rendering.Assets.Authoring.ShaderCompilationResult) 91d3af9f2fa9f19801786b571351afcb31d22e7e1d9ffa8b0ea87461e0bc8d68 -->

```csharp
public Inno.Rendering.Assets.Authoring.ShaderArtifactSelection Inno.Rendering.Assets.Authoring.ShaderLastGoodStore.Select(System.Guid shaderId, string targetKey, Inno.Rendering.Assets.RenderShaderVariant variant, Inno.Rendering.Assets.Authoring.ShaderCompilationResult candidate)
```

Commits a complete candidate or returns the current last-good artifact after failure.

**Parameter `shaderId`:** Persistent shader asset identity.

**Parameter `targetKey`:** Stable target cache key.

**Parameter `variant`:** Static keyword variant.

**Parameter `candidate`:** Candidate compilation result.

**Returns:** The artifact safe to use for rendering.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets.Authoring/Compilation/ShaderLastGoodStore.cs#L91).
