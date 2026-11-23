---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.db5ff91610631f899e3d2a6f4292cb07039e6585eb61ad5608c3e13497ab413c
symbol: engine:Inno.Assets:M:Inno.Assets.AssetReferenceInfo.#ctor(System.Guid,Inno.Assets.AssetPath,System.Int64,System.Boolean,System.Nullable{System.Boolean},System.Collections.Generic.IReadOnlyList{Inno.Assets.AssetReferenceLocation})
title: AssetReferenceInfo.Constructor
kind: api
owners:
- Inno.Assets
apiSurface: source-clr
sourceFingerprint: 96a5b33d851bb154788cefd9fbb8641b1bc8c22b774ff4be375affdff41c6264
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `persistentID`:** The persistent asset identity.

**Parameter `assetPath`:** The mount-qualified source location.

**Parameter `contentVersion`:** The observed content revision.

**Parameter `isLoaded`:** Whether a canonical instance is resident.

**Parameter `lastSweepReachability`:** The previous reachability result, or null if not inspected.

**Parameter `references`:** Reference locations copied into this immutable snapshot.
