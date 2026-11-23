---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.9c72699c805da75557e67d2cf01c87588be8995fb44d84ee493e326e546a218a
symbol: engine:Inno.Assets:M:Inno.Assets.AssetDatabase.TryGetArtifact(System.Guid,System.String,Inno.Assets.AssetArtifactInfo@)
title: AssetDatabase.TryGetArtifact
kind: api
owners:
- Inno.Assets
apiSurface: source-clr
sourceFingerprint: 77062cd0d790ad30f2db5949574ebf57b6ba6ca5daa4c8b54720f29bf5d3e47a
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `persistentID`:** The persistent identity of the artifact owner.

**Parameter `outputName`:** The exact artifact output name.

**Parameter `artifact`:** Receives verified output metadata without prescribing a physical deployment location.

## Returns

`true` when the deployed bundle contains the requested output; otherwise, `false`.

## Exceptions

**Exception `T:System.ObjectDisposedException`:** Thrown when this database has been disposed.
