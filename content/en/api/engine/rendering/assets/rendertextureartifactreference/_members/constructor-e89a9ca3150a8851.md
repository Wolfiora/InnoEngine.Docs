---
uid: api.e89a9ca3150a88513b5aee67ac6084502e385f69c7886e90ce10e1d63792f1e7
symbol: "engine:Inno.Rendering.Assets:M:Inno.Rendering.Assets.RenderTextureArtifactReference.#ctor(System.Guid,System.Int64,Inno.Rendering.Assets.RenderTextureArtifactSlot)"
source: xml
reviewed: f21b9aebb8fa016303e62ca1af877d7c18ecbc6293f57fa7d113e126aa701496
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
