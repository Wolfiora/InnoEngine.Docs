---
uid: api.88f7ecdb42fbfcf3ee3bfef522a25e6800759635f6e50e2da940510904c18f43
symbol: "engine:Inno.Assets:M:Inno.Assets.IAssetArtifactLookup.TryGetArtifact(System.Guid,System.String,Inno.Assets.AssetArtifactInfo@)"
source: xml
reviewed: a8c767419cc446a91187e3da47b36a07e237bd41a9a4551761bc857474b95c2e
title: "IAssetArtifactLookup.TryGetArtifact"
kind: api
owners: [Inno.Assets]
apiSurface: source-clr
---

Tries to resolve one named immutable artifact output by persistent asset identity.

## Parameters

**Parameter `persistentId`:** Persistent identity of the artifact owner.

**Parameter `outputName`:** Exact stable artifact output name.

**Parameter `artifact`:** Receives verified output metadata without exposing the provider's physical location.

## Returns

`true` when the artifact output exists and passes integrity validation.
