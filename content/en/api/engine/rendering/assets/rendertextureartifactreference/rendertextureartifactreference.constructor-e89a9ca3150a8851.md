---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.e89a9ca3150a88513b5aee67ac6084502e385f69c7886e90ce10e1d63792f1e7
symbol: engine:Inno.Rendering.Assets:M:Inno.Rendering.Assets.RenderTextureArtifactReference.#ctor(System.Guid,System.Int64,Inno.Rendering.Assets.RenderTextureArtifactSlot)
title: RenderTextureArtifactReference.Constructor
kind: api
owners:
- Inno.Rendering.Assets
apiSurface: source-clr
sourceFingerprint: d520e5cf8f70fe87a3d668e6ab36ccb8d405ba87cda81492e2e14f210c5faa96
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `assetID`:** Persistent identity of the asset that owns the named source artifact.

**Parameter `contentRevision`:** Current committed content revision of the owning asset.

**Parameter `slot`:** Stable texture slot declaration.

## Exceptions

**Exception `T:System.ArgumentException`:** Thrown when `assetID` is empty or `contentRevision` is negative.
