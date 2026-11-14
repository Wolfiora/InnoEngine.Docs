---
uid: api.beb18884ba674f5d45f7abda8767ae53823bc180c1ac144a9f97bdf8f4ced05e
symbol: "engine:Inno.Assets:M:Inno.Assets.AssetRuntimeOwner.GetSourceHash(Inno.Assets.AssetObject)"
source: xml
reviewed: c39ab60d43982c22d40d721a9681afd920fb4b4dff0ff9c135385a78d2175768
title: "AssetRuntimeOwner.GetSourceHash"
kind: api
owners: [Inno.Assets]
apiSurface: source-clr
---

Reads the source fingerprint of an asset claimed by this owner.

**Parameter `asset`:** The owned asset.

**Returns:** The fingerprint currently committed to the asset.

**Exception `T:System.InvalidOperationException`:** The asset belongs to a different owner.
