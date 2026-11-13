---
uid: api.8c8cebf8fcedc44d4f811a25c5955f48728738c4611afca6dec064e9a8f53044
symbol: "scripting:Inno.Rendering.Assets:M:InnoEngine.Rendering.RenderTextureArtifactReference.#ctor(System.Guid,System.Int64,InnoEngine.Rendering.RenderTextureArtifactSlot)"
source: xml
reviewed: 513f2f572f53b3334c8aa886312ba2c9c0d083b50f0ae4165d0bff81581c0083
title: "Constructor"
kind: api
owners: [Inno.Rendering.Assets]
apiSurface: editor-script
apiScope: Runtime
---

Creates a reference to one texture slot owned by an imported asset generation.

**Parameter `assetId`:** Persistent identity of the asset that owns the named source artifact.

**Parameter `contentRevision`:** Current committed content revision of the owning asset.

**Parameter `slot`:** Stable texture slot declaration.

**Exception `T:System.ArgumentException`:** Thrown when `assetId` is empty or `contentRevision` is negative.
