---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.db5ff91610631f899e3d2a6f4292cb07039e6585eb61ad5608c3e13497ab413c
symbol: engine:Inno.Assets:M:Inno.Assets.AssetReferenceInfo.#ctor(System.Guid,Inno.Assets.AssetPath,System.Int64,System.Boolean,System.Nullable{System.Boolean},System.Collections.Generic.IReadOnlyList{Inno.Assets.AssetReferenceLocation})
title: AssetReferenceInfo.Constructor
kind: api
owners:
- Inno.Assets
apiSurface: source-clr
reviewed: 54524b58f5487edcfe71bf61b91f02123b901b3240f6354c5964c131d2a59cd1
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `persistentId`:** The persistent asset identity.

**Parameter `assetPath`:** The mount-qualified source location.

**Parameter `contentVersion`:** The observed content revision.

**Parameter `isLoaded`:** Whether a canonical instance is resident.

**Parameter `lastSweepReachability`:** The previous reachability result, or null if not inspected.

**Parameter `references`:** Reference locations copied into this immutable snapshot.
