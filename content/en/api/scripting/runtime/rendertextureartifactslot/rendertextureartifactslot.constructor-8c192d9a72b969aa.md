---
uid: api.8c192d9a72b969aaef1aa8dc5c8b6fc9175569e570326477ae7d91db564aedec
symbol: "scripting:Inno.Rendering.Assets:M:InnoEngine.Rendering.RenderTextureArtifactSlot.#ctor(System.String,System.String,InnoEngine.Rendering.TextureColorSpace)"
source: xml
reviewed: 5869f2600b7eff3d35c1ba1fccbeb529778481e937f15b895d7ab01f56e6b777
title: "RenderTextureArtifactSlot.Constructor"
kind: api
owners: [Inno.Rendering.Assets]
apiSurface: editor-script
apiScope: Runtime
---

Creates one stable texture slot declaration.

**Parameter `id`:** Asset-local stable slot identifier.

**Parameter `sourceOutputName`:** Named source artifact written by the owning asset importer.

**Parameter `colorSpace`:** Sampling color-space interpretation used by the target compiler and GPU resource.

**Exception `T:System.ArgumentException`:** Thrown when `id` or `sourceOutputName` is empty.
