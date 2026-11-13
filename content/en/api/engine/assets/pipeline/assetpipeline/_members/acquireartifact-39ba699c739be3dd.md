---
uid: api.39ba699c739be3dd9ae773535c6af12528d916fffe7ddf985c4fb390f8733207
symbol: "engine:Inno.Assets.Pipeline:M:Inno.Assets.Pipeline.AssetPipeline.AcquireArtifact(System.Guid,System.String)"
source: xml
reviewed: 0da505f4b8d83641220133a57d73bd13bd09c1501f15f9882b730a6d67acf61b
title: "AcquireArtifact"
kind: api
owners: [Inno.Assets.Pipeline]
apiSurface: source-clr
---

Acquires one verified authoring artifact generation for an explicit lifetime.

**Parameter `persistentId`:** Persistent identity of the artifact owner.

**Parameter `outputName`:** Stable artifact output name.

**Returns:** A lease over the currently committed immutable artifact generation.

**Exception `T:System.InvalidOperationException`:** Thrown when the requested artifact is unavailable.
