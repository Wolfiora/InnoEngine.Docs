---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.b058c551c246493365122426a8ee4906933e15e673fa1dac9da4463d57c26676
symbol: engine:Inno.Assets.Pipeline:M:Inno.Assets.Pipeline.AssetLoader.AcquireArtifact(System.Guid,System.String)
title: AssetLoader.AcquireArtifact
kind: api
owners:
- Inno.Assets.Pipeline
apiSurface: source-clr
sourceFingerprint: acb9e26a7e6b4bbb19413ad9a8c0d8ce9e5e2dc05ea68ee3f01c96562b5000b1
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `persistentId`:** The source asset's persistent identity.

**Parameter `outputName`:** The required output protocol.

## Returns

A lease retaining this exact artifact key, even after reimport or source deletion.

## Exceptions

**Exception `T:System.InvalidOperationException`:** No current output can be resolved.
