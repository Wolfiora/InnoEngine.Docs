---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.9c72699c805da75557e67d2cf01c87588be8995fb44d84ee493e326e546a218a
symbol: engine:Inno.Assets:M:Inno.Assets.AssetDatabase.TryGetArtifact(System.Guid,System.String,Inno.Assets.AssetArtifactInfo@)
title: AssetDatabase.TryGetArtifact
kind: api
owners:
- Inno.Assets
apiSurface: source-clr
reviewed: 4d0120fc46d743e1abec95f6a3c0ce98d8dedfcc8ebc8e93eac9923cb002d5b8
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `persistentId`:** The persistent identity of the artifact owner.

**Parameter `outputName`:** The exact artifact output name.

**Parameter `artifact`:** Receives verified output metadata without prescribing a physical deployment location.

## Returns

`true` when the deployed bundle contains the requested output; otherwise, `false`.

## Exceptions

**Exception `T:System.ObjectDisposedException`:** Thrown when this database has been disposed.
