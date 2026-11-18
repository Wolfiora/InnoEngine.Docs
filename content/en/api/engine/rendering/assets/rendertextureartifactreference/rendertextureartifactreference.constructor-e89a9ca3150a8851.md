---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.e89a9ca3150a88513b5aee67ac6084502e385f69c7886e90ce10e1d63792f1e7
symbol: engine:Inno.Rendering.Assets:M:Inno.Rendering.Assets.RenderTextureArtifactReference.#ctor(System.Guid,System.Int64,Inno.Rendering.Assets.RenderTextureArtifactSlot)
title: RenderTextureArtifactReference.Constructor
kind: api
owners:
- Inno.Rendering.Assets
apiSurface: source-clr
sourceFingerprint: 7d1f1cd3a8c511bd8b216c21d17cd0e8488e546f63c4891006b172407b101b73
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
