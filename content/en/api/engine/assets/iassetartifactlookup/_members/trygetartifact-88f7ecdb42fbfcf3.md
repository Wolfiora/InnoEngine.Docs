---
uid: api.88f7ecdb42fbfcf3ee3bfef522a25e6800759635f6e50e2da940510904c18f43
symbol: "engine:Inno.Assets:M:Inno.Assets.IAssetArtifactLookup.TryGetArtifact(System.Guid,System.String,Inno.Assets.AssetArtifactInfo@)"
source: xml
reviewed: d4f11d6142f306258c64d30e3232fe7f69f8ac8cbb6e34f9ec48b0c141939ae8
title: "TryGetArtifact"
kind: api
owners: [Inno.Assets]
apiSurface: source-clr
---

Tries to resolve one named immutable artifact output by persistent asset identity.

**Parameter `persistentId`:** Persistent identity of the artifact owner.

**Parameter `outputName`:** Exact stable artifact output name.

**Parameter `artifact`:** Receives verified output metadata without exposing the provider's physical location.

**Returns:** `true` when the artifact output exists and passes integrity validation.
