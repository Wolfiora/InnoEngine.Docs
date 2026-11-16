---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.50b43f4f0dafd11830b3bd513bbf962ef65e503e5a92bacb8035e4550b7f603d
symbol: engine:Inno.Rendering:M:Inno.Rendering.GraphicsCapabilities.#ctor(Inno.Rendering.GraphicsApi,Inno.Rendering.GraphicsCapability,Inno.Rendering.GraphicsLimits,System.Collections.Generic.IEnumerable{Inno.Rendering.RenderTextureFormat},System.Collections.Generic.IEnumerable{Inno.Rendering.RenderTextureFormat},System.Collections.Generic.IEnumerable{Inno.Rendering.RenderTextureFormat},System.Collections.Generic.IEnumerable{Inno.Rendering.RenderTextureFormat},System.Boolean,System.Boolean,System.Collections.Generic.IEnumerable{Inno.Rendering.RenderTextureFormat},System.Collections.Generic.IEnumerable{Inno.Rendering.RenderTextureFormat},System.Collections.Generic.IEnumerable{Inno.Rendering.RenderTextureFormat})
title: GraphicsCapabilities.Constructor
kind: api
owners:
- Inno.Rendering
apiSurface: source-clr
reviewed: 03e7bfed8c0ddf8dfee300ee54dea9e2455f53b096de21a0537efbe3666c390e
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `backend`:** Active graphics API family.

**Parameter `features`:** Supported optional features.

**Parameter `limits`:** Device limits.

**Parameter `sampledFormats`:** Formats valid for sampled two-dimensional textures.

**Parameter `renderTargetFormats`:** Formats valid as raster attachments.

**Parameter `storageReadFormats`:** Formats valid for unordered shader reads.

**Parameter `storageWriteFormats`:** Formats valid for unordered shader writes.

**Parameter `originBottomLeft`:** Whether render-target coordinates start at the bottom-left.

**Parameter `homogeneousDepth`:** Whether clip-space depth uses the negative-one-to-one range.

**Parameter `sampled3DFormats`:** Formats valid for sampled volume textures.

**Parameter `sampledCubeFormats`:** Formats valid for sampled cubemaps.

**Parameter `multisampleRenderTargetFormats`:** Formats valid as multisampled raster attachments.
