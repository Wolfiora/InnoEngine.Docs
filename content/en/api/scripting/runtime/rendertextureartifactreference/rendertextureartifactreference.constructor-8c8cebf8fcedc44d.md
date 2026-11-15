---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.8c8cebf8fcedc44d4f811a25c5955f48728738c4611afca6dec064e9a8f53044
symbol: scripting:Inno.Rendering.Assets:M:InnoEngine.Rendering.RenderTextureArtifactReference.#ctor(System.Guid,System.Int64,InnoEngine.Rendering.RenderTextureArtifactSlot)
title: RenderTextureArtifactReference.Constructor
kind: api
owners:
- Inno.Rendering.Assets
apiSurface: editor-script
reviewed: a45736d45ff926d0ec58ff9ee9e9624ff481155f2145e65adc4c1898ceb7ea28
apiScope: Runtime

# Authoring metadata. Edit these fields and the explanation below.
source: xml
outdated: false
---

Creates a reference to one texture slot owned by an imported asset generation.

## Parameters

**Parameter `assetId`:** Persistent identity of the asset that owns the named source artifact.

**Parameter `contentRevision`:** Current committed content revision of the owning asset.

**Parameter `slot`:** Stable texture slot declaration.

## Exceptions

**Exception `T:System.ArgumentException`:** Thrown when `assetId` is empty or `contentRevision` is negative.
