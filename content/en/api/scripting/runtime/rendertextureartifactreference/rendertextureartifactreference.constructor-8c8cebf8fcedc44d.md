---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.8c8cebf8fcedc44d4f811a25c5955f48728738c4611afca6dec064e9a8f53044
symbol: scripting:Inno.Rendering.Assets:M:InnoEngine.Rendering.RenderTextureArtifactReference.#ctor(System.Guid,System.Int64,InnoEngine.Rendering.RenderTextureArtifactSlot)
title: RenderTextureArtifactReference.Constructor
kind: api
owners:
- Inno.Rendering.Assets
apiSurface: editor-script
reviewed: 0c90bbc16266bad15b8f1cc3209ef117d437f421a8b096413b4b24e6acdded4d
apiScope: Runtime
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `assetId`:** Persistent identity of the asset that owns the named source artifact.

**Parameter `contentRevision`:** Current committed content revision of the owning asset.

**Parameter `slot`:** Stable texture slot declaration.

## Exceptions

**Exception `T:System.ArgumentException`:** Thrown when `assetId` is empty or `contentRevision` is negative.
