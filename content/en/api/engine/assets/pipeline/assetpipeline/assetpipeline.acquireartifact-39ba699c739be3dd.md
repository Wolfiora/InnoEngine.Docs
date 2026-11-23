---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.39ba699c739be3dd9ae773535c6af12528d916fffe7ddf985c4fb390f8733207
symbol: engine:Inno.Assets.Pipeline:M:Inno.Assets.Pipeline.AssetPipeline.AcquireArtifact(System.Guid,System.String)
title: AssetPipeline.AcquireArtifact
kind: api
owners:
- Inno.Assets.Pipeline
apiSurface: source-clr
sourceFingerprint: 03c62779f0a251fa08ca40144a16eed3dea4fa1fac4bb4fc4c4ac35d48c8aa87
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `persistentID`:** Persistent identity of the artifact owner.

**Parameter `outputName`:** Stable artifact output name.

## Returns

A lease over the currently committed immutable artifact generation.

## Exceptions

**Exception `T:System.InvalidOperationException`:** Thrown when the requested artifact is unavailable.
