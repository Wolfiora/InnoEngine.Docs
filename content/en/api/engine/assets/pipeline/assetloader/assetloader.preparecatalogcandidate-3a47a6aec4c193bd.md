---
uid: api.3a47a6aec4c193bd19b50f2d745ea7a706b8417cc4ae3ecd4a67e0e48dcaf73d
symbol: "engine:Inno.Assets.Pipeline:M:Inno.Assets.Pipeline.AssetLoader.PrepareCatalogCandidate(System.Collections.Generic.IReadOnlyList{Inno.Assets.Pipeline.AssetSourceMount},Inno.Assets.Pipeline.AssetSourcePolicy)"
source: xml
reviewed: b2bf6754b1f3af604d3005ed11dff0b7467e974a7f4c8a6e559bc75a2b6a2885
title: "AssetLoader.PrepareCatalogCandidate"
kind: api
owners: [Inno.Assets.Pipeline]
apiSurface: source-clr
---

Creates an isolated source-mount and catalog candidate without changing the active catalog.

**Parameter `mounts`:** The complete source-mount snapshot to validate.

**Parameter `sourcePolicy`:** The source policy for the candidate, or `null` to reuse this loader's policy.

**Returns:** A candidate that owns its catalog staging storage and exposes the isolated loader to its owner.

**Exception `T:System.ArgumentException`:** Thrown when the mount snapshot is empty, duplicated, or has no writable project source.

**Exception `T:System.IO.IOException`:** Thrown when the active catalog cannot be copied into candidate storage.
