---
uid: api.9c72699c805da75557e67d2cf01c87588be8995fb44d84ee493e326e546a218a
symbol: "engine:Inno.Assets:M:Inno.Assets.AssetDatabase.TryGetArtifact(System.Guid,System.String,Inno.Assets.AssetArtifactInfo@)"
source: xml
reviewed: b4503149004acd607f4d47589bdc99fca08f4e28572e513eb98a6dfe4e479b01
title: "TryGetArtifact"
kind: api
owners: [Inno.Assets]
apiSurface: source-clr
---

Tries to resolve one named immutable artifact output by persistent asset identity.

**Parameter `persistentId`:** The persistent identity of the artifact owner.

**Parameter `outputName`:** The exact artifact output name.

**Parameter `artifact`:** Receives verified output metadata without prescribing a physical deployment location.

**Returns:** `true` when the deployed bundle contains the requested output; otherwise, `false`.

**Exception `T:System.ObjectDisposedException`:** Thrown when this database has been disposed.
