---
uid: api.3a47a6aec4c193bd19b50f2d745ea7a706b8417cc4ae3ecd4a67e0e48dcaf73d
symbol: "engine:Inno.Assets.Pipeline:M:Inno.Assets.Pipeline.AssetLoader.PrepareCatalogCandidate(System.Collections.Generic.IReadOnlyList{Inno.Assets.Pipeline.AssetSourceMount},Inno.Assets.Pipeline.AssetSourcePolicy)"
source: xml
reviewed: 42ec8561917fdd20507c90c231f92ec9ff4bf54941c5066a803c55f68e53e66a
title: "PrepareCatalogCandidate"
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
