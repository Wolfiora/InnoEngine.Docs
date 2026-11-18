---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.88f7ecdb42fbfcf3ee3bfef522a25e6800759635f6e50e2da940510904c18f43
symbol: engine:Inno.Assets:M:Inno.Assets.IAssetArtifactLookup.TryGetArtifact(System.Guid,System.String,Inno.Assets.AssetArtifactInfo@)
title: IAssetArtifactLookup.TryGetArtifact
kind: api
owners:
- Inno.Assets
apiSurface: source-clr
sourceFingerprint: fbbe438e285e91e2679ca9d72fcf47f7315364feafa12f2aec8c8aecf39c15e6
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
