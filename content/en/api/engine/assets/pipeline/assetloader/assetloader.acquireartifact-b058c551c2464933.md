---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.b058c551c246493365122426a8ee4906933e15e673fa1dac9da4463d57c26676
symbol: engine:Inno.Assets.Pipeline:M:Inno.Assets.Pipeline.AssetLoader.AcquireArtifact(System.Guid,System.String)
title: AssetLoader.AcquireArtifact
kind: api
owners:
- Inno.Assets.Pipeline
apiSurface: source-clr
sourceFingerprint: e0d7e06b333418f8c7ef60e0081dd7a30995b3e2588ba0489c4abd64ab26fdc5
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `persistentID`:** The source asset's persistent identity.

**Parameter `outputName`:** The required output protocol.

## Returns

A lease retaining this exact artifact key, even after reimport or source deletion.

## Exceptions

**Exception `T:System.InvalidOperationException`:** No current output can be resolved.
