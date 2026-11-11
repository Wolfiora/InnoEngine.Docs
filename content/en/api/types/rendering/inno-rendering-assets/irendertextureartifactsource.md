---
title: "IRenderTextureArtifactSource"
description: "Reference for IRenderTextureArtifactSource in Inno.Rendering.Assets."
uid: api.inno.rendering.assets.b2f5fb3887f6e592
kind: api
owners:
  - Inno.Rendering.Assets
apiSurface: source-clr
contracts:
  - project.inno-rendering-assets
---
# `IRenderTextureArtifactSource`

This reference describes `IRenderTextureArtifactSource` in `Inno.Rendering.Assets`. Read the [shared contract](../../../projects/inno-rendering-assets.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

## Members

| Member | Kind |
| --- | --- |
| [`textureArtifacts`](#api-baa0d1b676fb3564) | Property |

## Type declaration

<a id="api-b2f5fb3887f6e592"></a>
<!-- api: T:Inno.Rendering.Assets.IRenderTextureArtifactSource a82113e42249cf05b78cddd9c0fd98d9e427f16f0dc76d9a55692fc9b7c9638e -->

```csharp
public interface Inno.Rendering.Assets.IRenderTextureArtifactSource
```

Exposes one or more portable image artifacts owned by an imported asset.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets/Textures/IRenderTextureArtifactSource.cs#L11).

## `textureArtifacts`

<a id="api-baa0d1b676fb3564"></a>
<!-- api: P:Inno.Rendering.Assets.IRenderTextureArtifactSource.textureArtifacts e4bff55915cb73f34cc6c6f976b86ef067509c750e15c6d3bc06b6c4c18b21f3 -->

```csharp
System.Collections.Generic.IReadOnlyList<Inno.Rendering.Assets.RenderTextureArtifactSlot> Inno.Rendering.Assets.IRenderTextureArtifactSource.textureArtifacts { get; }
```

Gets the complete immutable set of stable texture slots owned by the current asset content.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets/Textures/IRenderTextureArtifactSource.cs#L16).
