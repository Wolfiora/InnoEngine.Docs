---
uid: api.39ba699c739be3dd9ae773535c6af12528d916fffe7ddf985c4fb390f8733207
symbol: "engine:Inno.Assets.Pipeline:M:Inno.Assets.Pipeline.AssetPipeline.AcquireArtifact(System.Guid,System.String)"
source: xml
reviewed: 322fe5f1abe7072a7448bdc29377244000f5857446a25f8e0bc82622b37a1a18
title: "AssetPipeline.AcquireArtifact"
kind: api
owners: [Inno.Assets.Pipeline]
apiSurface: source-clr
---

Acquires one verified authoring artifact generation for an explicit lifetime.

**Parameter `persistentId`:** Persistent identity of the artifact owner.

**Parameter `outputName`:** Stable artifact output name.

**Returns:** A lease over the currently committed immutable artifact generation.

**Exception `T:System.InvalidOperationException`:** Thrown when the requested artifact is unavailable.
