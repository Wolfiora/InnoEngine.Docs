---
title: "RenderTargetArtifactPath"
description: "Reference for RenderTargetArtifactPath in Inno.Rendering.Assets."
uid: api.inno.rendering.assets.8a799db2aa18426c
kind: api
owners:
  - Inno.Rendering.Assets
apiSurface: source-clr
contracts:
  - project.inno-rendering-assets
---
# `RenderTargetArtifactPath`

This reference describes `RenderTargetArtifactPath` in `Inno.Rendering.Assets`. Read the [shared contract](../../../projects/inno-rendering-assets.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`GetShaderPath`](#api-c63e30bcfce82298) | Method |
| [`GetTexturePath`](#api-5a15ca1769310970) | Method |

## Type declaration

<a id="api-8a799db2aa18426c"></a>
<!-- api: T:Inno.Rendering.Assets.RenderTargetArtifactPath ef1290d320fbd883465f7a7d8c5b7f29f81200062c7af898fb202415c6b20099 -->

```csharp
public static class Inno.Rendering.Assets.RenderTargetArtifactPath
```

Defines deterministic relative paths shared by target-artifact producers and runtime consumers.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets/Deployment/RenderTargetArtifactPath.cs#L13).

## `GetShaderPath`

<a id="api-c63e30bcfce82298"></a>
<!-- api: M:Inno.Rendering.Assets.RenderTargetArtifactPath.GetShaderPath(System.Guid,Inno.Rendering.GraphicsApi,Inno.Rendering.Assets.RenderShaderVariant) b0e11324641b1e2554d8bdf1aa6e247adbe576000e5bfcca9abee6b920aff24e -->

```csharp
public static string Inno.Rendering.Assets.RenderTargetArtifactPath.GetShaderPath(System.Guid shaderId, Inno.Rendering.GraphicsApi backend, Inno.Rendering.Assets.RenderShaderVariant variant)
```

Gets the relative deployment path for one target shader variant.

**Parameter `shaderId`:** The persistent shader asset identity.

**Parameter `backend`:** The graphics backend selected by the target Player.

**Parameter `variant`:** The canonical static keyword selection.

**Returns:** A platform-neutral path beneath the runtime content root.

**Throws `System.ArgumentException`:** Thrown when `shaderId` is empty.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets/Deployment/RenderTargetArtifactPath.cs#L33).

## `GetTexturePath`

<a id="api-5a15ca1769310970"></a>
<!-- api: M:Inno.Rendering.Assets.RenderTargetArtifactPath.GetTexturePath(Inno.Rendering.Assets.RenderTextureArtifactReference) 26ce90678fb298dddd5ef461a720ed142e8a474e3a478f1f3a5a4c33cd9a87ef -->

```csharp
public static string Inno.Rendering.Assets.RenderTargetArtifactPath.GetTexturePath(Inno.Rendering.Assets.RenderTextureArtifactReference texture)
```

Gets the relative deployment path for one portable texture artifact.

**Parameter `texture`:** Stable texture artifact reference.

**Returns:** A platform-neutral path beneath the runtime content root.

**Throws `System.ArgumentException`:** Thrown when `texture` is invalid.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets/Deployment/RenderTargetArtifactPath.cs#L60).
