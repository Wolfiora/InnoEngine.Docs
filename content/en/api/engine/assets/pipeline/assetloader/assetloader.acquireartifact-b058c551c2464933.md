---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.b058c551c246493365122426a8ee4906933e15e673fa1dac9da4463d57c26676
symbol: engine:Inno.Assets.Pipeline:M:Inno.Assets.Pipeline.AssetLoader.AcquireArtifact(System.Guid,System.String)
title: AssetLoader.AcquireArtifact
kind: api
owners:
- Inno.Assets.Pipeline
apiSurface: source-clr
reviewed: fbd302c9d5f97797be4eb2baaf50fa07294e876d96b138874b99d7aa7100086b
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
