---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.3a47a6aec4c193bd19b50f2d745ea7a706b8417cc4ae3ecd4a67e0e48dcaf73d
symbol: engine:Inno.Assets.Pipeline:M:Inno.Assets.Pipeline.AssetLoader.PrepareCatalogCandidate(System.Collections.Generic.IReadOnlyList{Inno.Assets.Pipeline.AssetSourceMount},Inno.Assets.Pipeline.AssetSourcePolicy)
title: AssetLoader.PrepareCatalogCandidate
kind: api
owners:
- Inno.Assets.Pipeline
apiSurface: source-clr
reviewed: b2bf6754b1f3af604d3005ed11dff0b7467e974a7f4c8a6e559bc75a2b6a2885

# Authoring metadata. Edit these fields and the explanation below.
source: xml
outdated: false
---

## Parameters

**Parameter `mounts`:** The complete source-mount snapshot to validate.

**Parameter `sourcePolicy`:** The source policy for the candidate, or `null` to reuse this loader's policy.

## Returns

A candidate that owns its catalog staging storage and exposes the isolated loader to its owner.

## Exceptions

**Exception `T:System.ArgumentException`:** Thrown when the mount snapshot is empty, duplicated, or has no writable project source.

**Exception `T:System.IO.IOException`:** Thrown when the active catalog cannot be copied into candidate storage.
