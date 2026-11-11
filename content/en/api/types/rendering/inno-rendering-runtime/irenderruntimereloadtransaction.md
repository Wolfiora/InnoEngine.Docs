---
title: "IRenderRuntimeReloadTransaction"
description: "Reference for IRenderRuntimeReloadTransaction in Inno.Rendering.Runtime."
uid: api.inno.rendering.runtime.8f69ea17f6da3d43
kind: api
owners:
  - Inno.Rendering.Runtime
apiSurface: source-clr
contracts:
  - project.inno-rendering-runtime
---
# `IRenderRuntimeReloadTransaction`

This reference describes `IRenderRuntimeReloadTransaction` in `Inno.Rendering.Runtime`. Read the [shared contract](../../../projects/inno-rendering-runtime.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

## Members

| Member | Kind |
| --- | --- |
| [`Activate`](#api-3fc982648beee4f1) | Method |
| [`Complete`](#api-1d4334d44b8473e6) | Method |
| [`Prepare`](#api-2b108b290bafbb67) | Method |
| [`Rollback`](#api-c863881914735069) | Method |

## Type declaration

<a id="api-8f69ea17f6da3d43"></a>
<!-- api: T:Inno.Rendering.Runtime.IRenderRuntimeReloadTransaction 668f5fdf074747f04ee8facb42035026f331f235cebc0d86b42b40ab56794c92 -->

```csharp
public interface Inno.Rendering.Runtime.IRenderRuntimeReloadTransaction
```

Controls one isolated rendering-extension candidate from preparation through atomic completion.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/IRenderRuntimeReloadTransaction.cs#L6).

## `Activate`

<a id="api-3fc982648beee4f1"></a>
<!-- api: M:Inno.Rendering.Runtime.IRenderRuntimeReloadTransaction.Activate 12514f9bf973aa6345baba303b45ff95d618739d394d83fe6bba707cd0173945 -->

```csharp
void Inno.Rendering.Runtime.IRenderRuntimeReloadTransaction.Activate()
```

Atomically selects the prepared candidate without retiring the previous generation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/IRenderRuntimeReloadTransaction.cs#L16).

## `Complete`

<a id="api-1d4334d44b8473e6"></a>
<!-- api: M:Inno.Rendering.Runtime.IRenderRuntimeReloadTransaction.Complete 3e4cee8f675cf1e2dc8407c2a5af701d9776316b93022744bd7a4c4c396cc796 -->

```csharp
void Inno.Rendering.Runtime.IRenderRuntimeReloadTransaction.Complete()
```

Commits an activated candidate and retires the previous generation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/IRenderRuntimeReloadTransaction.cs#L21).

## `Prepare`

<a id="api-2b108b290bafbb67"></a>
<!-- api: M:Inno.Rendering.Runtime.IRenderRuntimeReloadTransaction.Prepare e2f5b3eb0d3b9fd283e8879cf98c8a1faf96fa644c5a244785443e8002506ff9 -->

```csharp
void Inno.Rendering.Runtime.IRenderRuntimeReloadTransaction.Prepare()
```

Builds and validates every candidate registry and last-good rendering generation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/IRenderRuntimeReloadTransaction.cs#L11).

## `Rollback`

<a id="api-c863881914735069"></a>
<!-- api: M:Inno.Rendering.Runtime.IRenderRuntimeReloadTransaction.Rollback 5809ce74f9026559f6a8e8d77a4122e2df3ca173a7313b0f45a3c4bf33396f4d -->

```csharp
void Inno.Rendering.Runtime.IRenderRuntimeReloadTransaction.Rollback()
```

Discards the candidate and restores the previous generation after provisional activation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/IRenderRuntimeReloadTransaction.cs#L26).
