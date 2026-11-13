---
uid: api.8c192d9a72b969aaef1aa8dc5c8b6fc9175569e570326477ae7d91db564aedec
symbol: "scripting:Inno.Rendering.Assets:M:InnoEngine.Rendering.RenderTextureArtifactSlot.#ctor(System.String,System.String,InnoEngine.Rendering.TextureColorSpace)"
source: xml
reviewed: f7912fe57061ffedbb00604ea6299bbd22b4bd41dfcd249e088c479bf1c85671
title: "Constructor"
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
