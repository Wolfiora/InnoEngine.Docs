---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.e89a9ca3150a88513b5aee67ac6084502e385f69c7886e90ce10e1d63792f1e7
symbol: engine:Inno.Rendering.Assets:M:Inno.Rendering.Assets.RenderTextureArtifactReference.#ctor(System.Guid,System.Int64,Inno.Rendering.Assets.RenderTextureArtifactSlot)
title: RenderTextureArtifactReference.Constructor
kind: api
owners:
- Inno.Rendering.Assets
apiSurface: source-clr
reviewed: fd68992c7b95c578c2a1829b23a42b1a3cbf160e9cd5d40d6a9bae24a88e4024
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
