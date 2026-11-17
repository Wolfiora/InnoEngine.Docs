---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.8c192d9a72b969aaef1aa8dc5c8b6fc9175569e570326477ae7d91db564aedec
symbol: scripting:Inno.Rendering.Assets:M:InnoEngine.Rendering.RenderTextureArtifactSlot.#ctor(System.String,System.String,InnoEngine.Rendering.TextureColorSpace)
title: RenderTextureArtifactSlot.Constructor
kind: api
owners:
- Inno.Rendering.Assets
apiSurface: editor-script
reviewed: e238197bda79f4173c9cce290a1d58ae3b017dbe28e03c0b23ad36573de61aab
apiScope: Runtime
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `id`:** Asset-local stable slot identifier.

**Parameter `sourceOutputName`:** Named source artifact written by the owning asset importer.

**Parameter `colorSpace`:** Sampling color-space interpretation used by the target compiler and GPU resource.

## Exceptions

**Exception `T:System.ArgumentException`:** Thrown when `id` or `sourceOutputName` is empty.
