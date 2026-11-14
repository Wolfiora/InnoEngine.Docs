---
uid: api.db5ff91610631f899e3d2a6f4292cb07039e6585eb61ad5608c3e13497ab413c
symbol: "engine:Inno.Assets:M:Inno.Assets.AssetReferenceInfo.#ctor(System.Guid,Inno.Assets.AssetPath,System.Int64,System.Boolean,System.Nullable{System.Boolean},System.Collections.Generic.IReadOnlyList{Inno.Assets.AssetReferenceLocation})"
source: xml
reviewed: afdeb1d0c00a1c1cf98ca92d54ed00aeb46b5965dc60132b19b1565a01edff58
title: "AssetReferenceInfo.Constructor"
kind: api
owners: [Inno.Assets]
apiSurface: source-clr
---

Freezes one diagnostic view of the engine-known references to an asset.

## Parameters

**Parameter `persistentId`:** The persistent asset identity.

**Parameter `assetPath`:** The mount-qualified source location.

**Parameter `contentVersion`:** The observed content revision.

**Parameter `isLoaded`:** Whether a canonical instance is resident.

**Parameter `lastSweepReachability`:** The previous reachability result, or null if not inspected.

**Parameter `references`:** Reference locations copied into this immutable snapshot.
