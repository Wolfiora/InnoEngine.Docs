---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.39ba699c739be3dd9ae773535c6af12528d916fffe7ddf985c4fb390f8733207
symbol: engine:Inno.Assets.Pipeline:M:Inno.Assets.Pipeline.AssetPipeline.AcquireArtifact(System.Guid,System.String)
title: AssetPipeline.AcquireArtifact
kind: api
owners:
- Inno.Assets.Pipeline
apiSurface: source-clr
reviewed: e8a0b63bbf491554021cba873fa6fdef5513fadf0e3f394d2f1badb8b6c6668c
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `persistentId`:** Persistent identity of the artifact owner.

**Parameter `outputName`:** Stable artifact output name.

## Returns

A lease over the currently committed immutable artifact generation.

## Exceptions

**Exception `T:System.InvalidOperationException`:** Thrown when the requested artifact is unavailable.
