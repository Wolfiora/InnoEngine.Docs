---
uid: api.beb18884ba674f5d45f7abda8767ae53823bc180c1ac144a9f97bdf8f4ced05e
symbol: "engine:Inno.Assets:M:Inno.Assets.AssetRuntimeOwner.GetSourceHash(Inno.Assets.AssetObject)"
source: xml
reviewed: 38cfde53c964b1346fae4503214bb5843913ea30dcc33d7481d4290425f66665
title: "GetSourceHash"
kind: api
owners: [Inno.Assets]
apiSurface: source-clr
---

Reads the source fingerprint of an asset claimed by this owner.

**Parameter `asset`:** The owned asset.

**Returns:** The fingerprint currently committed to the asset.

**Exception `T:System.InvalidOperationException`:** The asset belongs to a different owner.
