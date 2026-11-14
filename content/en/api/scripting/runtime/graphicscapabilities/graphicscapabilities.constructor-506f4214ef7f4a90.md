---
uid: api.506f4214ef7f4a901825381e598713d24cf5b958735c7a071e9f9153732e897e
symbol: "scripting:Inno.Rendering:M:InnoEngine.Rendering.GraphicsCapabilities.#ctor(InnoEngine.Rendering.GraphicsApi,InnoEngine.Rendering.GraphicsCapability,InnoEngine.Rendering.GraphicsLimits,System.Collections.Generic.IEnumerable{InnoEngine.Rendering.RenderTextureFormat},System.Collections.Generic.IEnumerable{InnoEngine.Rendering.RenderTextureFormat},System.Collections.Generic.IEnumerable{InnoEngine.Rendering.RenderTextureFormat},System.Collections.Generic.IEnumerable{InnoEngine.Rendering.RenderTextureFormat},System.Boolean,System.Boolean,System.Collections.Generic.IEnumerable{InnoEngine.Rendering.RenderTextureFormat},System.Collections.Generic.IEnumerable{InnoEngine.Rendering.RenderTextureFormat},System.Collections.Generic.IEnumerable{InnoEngine.Rendering.RenderTextureFormat})"
source: xml
reviewed: 30f9a4c3b5e9da239367a465edff22061c732760a15b036281397c8989f40337
title: "GraphicsCapabilities.Constructor"
kind: api
owners: [Inno.Rendering]
apiSurface: editor-script
apiScope: Runtime
---

Creates a device capability snapshot.

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
