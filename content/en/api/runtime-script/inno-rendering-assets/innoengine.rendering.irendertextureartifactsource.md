---
title: "IRenderTextureArtifactSource"
description: "Reference for IRenderTextureArtifactSource in Inno.Rendering.Assets."
uid: api.inno.rendering.assets.runtime-script.0e17c27604bf302f
kind: api
owners:
  - Inno.Rendering.Assets
apiSurface: runtime-script
contracts:
  - project.inno-rendering-assets
  - manual.scripting.use-script-api
---
# `IRenderTextureArtifactSource`

This reference describes `IRenderTextureArtifactSource` in `Inno.Rendering.Assets`. Read the [shared contract](../../projects/inno-rendering-assets.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

## Members

| Member | Kind |
| --- | --- |
| [`textureArtifacts`](#api-c2c06f6d742a5a1b) | Property |

## Type declaration

<a id="api-0e17c27604bf302f"></a>
<!-- api: T:InnoEngine.Rendering.IRenderTextureArtifactSource a82a0a14bbe77fae2ed8728fd8063fa7f6d21b7c069c6a97a1a7d685ea788776 -->

```csharp
public interface InnoEngine.Rendering.IRenderTextureArtifactSource
```

Exposes one or more portable image artifacts owned by an imported asset.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Assets/Textures/IRenderTextureArtifactSource.cs#L11).

## `textureArtifacts`

<a id="api-c2c06f6d742a5a1b"></a>
<!-- api: P:InnoEngine.Rendering.IRenderTextureArtifactSource.textureArtifacts 76e67c987542da7fbd66be4a678fd930d9962ab77c2433d72840a8399f416bca -->

```csharp
System.Collections.Generic.IReadOnlyList<InnoEngine.Rendering.RenderTextureArtifactSlot> InnoEngine.Rendering.IRenderTextureArtifactSource.textureArtifacts { get; }
```

Gets the complete immutable set of stable texture slots owned by the current asset content.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Assets/Textures/IRenderTextureArtifactSource.cs#L16).
