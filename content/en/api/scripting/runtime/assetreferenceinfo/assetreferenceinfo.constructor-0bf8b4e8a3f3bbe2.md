---
uid: api.0bf8b4e8a3f3bbe21ea6aa605e17623dc9539d8a702665a825c51e806629c5b2
symbol: "scripting:Inno.Assets:M:InnoEngine.Assets.AssetReferenceInfo.#ctor(System.Guid,InnoEngine.Assets.AssetPath,System.Int64,System.Boolean,System.Nullable{System.Boolean},System.Collections.Generic.IReadOnlyList{InnoEngine.Assets.AssetReferenceLocation})"
source: xml
reviewed: 5c30cf03b61c9a53f9fd36d0c22f00c4c4a52d8cbc3322ec41e9732345c17037
title: "AssetReferenceInfo.Constructor"
kind: api
owners: [Inno.Assets]
apiSurface: editor-script
apiScope: Runtime
---

Freezes one diagnostic view of the engine-known references to an asset.

## Parameters

**Parameter `persistentId`:** The persistent asset identity.

**Parameter `assetPath`:** The mount-qualified source location.

**Parameter `contentVersion`:** The observed content revision.

**Parameter `isLoaded`:** Whether a canonical instance is resident.

**Parameter `lastSweepReachability`:** The previous reachability result, or null if not inspected.

**Parameter `references`:** Reference locations copied into this immutable snapshot.
