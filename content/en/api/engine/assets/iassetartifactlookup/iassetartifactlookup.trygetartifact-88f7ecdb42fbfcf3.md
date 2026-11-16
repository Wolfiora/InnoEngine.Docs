---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.88f7ecdb42fbfcf3ee3bfef522a25e6800759635f6e50e2da940510904c18f43
symbol: engine:Inno.Assets:M:Inno.Assets.IAssetArtifactLookup.TryGetArtifact(System.Guid,System.String,Inno.Assets.AssetArtifactInfo@)
title: IAssetArtifactLookup.TryGetArtifact
kind: api
owners:
- Inno.Assets
apiSurface: source-clr
reviewed: c4bb165d5861269ff9371b84b4b493c83e41699e1e6e1667308de54baaed7d8f
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `persistentId`:** Persistent identity of the artifact owner.

**Parameter `outputName`:** Exact stable artifact output name.

**Parameter `artifact`:** Receives verified output metadata without exposing the provider's physical location.

## Returns

`true` when the artifact output exists and passes integrity validation.
