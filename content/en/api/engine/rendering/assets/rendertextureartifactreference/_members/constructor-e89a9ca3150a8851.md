---
uid: api.e89a9ca3150a88513b5aee67ac6084502e385f69c7886e90ce10e1d63792f1e7
symbol: "engine:Inno.Rendering.Assets:M:Inno.Rendering.Assets.RenderTextureArtifactReference.#ctor(System.Guid,System.Int64,Inno.Rendering.Assets.RenderTextureArtifactSlot)"
source: xml
reviewed: 3e657452c7ead0a950f7ef2c5a6e0224037179e63b26d5111b9eeb8120c14ff4
title: "Constructor"
kind: api
owners: [Inno.Rendering.Assets]
apiSurface: source-clr
---

Creates a reference to one texture slot owned by an imported asset generation.

**Parameter `assetId`:** Persistent identity of the asset that owns the named source artifact.

**Parameter `contentRevision`:** Current committed content revision of the owning asset.

**Parameter `slot`:** Stable texture slot declaration.

**Exception `T:System.ArgumentException`:** Thrown when `assetId` is empty or `contentRevision` is negative.
