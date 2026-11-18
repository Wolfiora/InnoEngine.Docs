---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.39ba699c739be3dd9ae773535c6af12528d916fffe7ddf985c4fb390f8733207
symbol: engine:Inno.Assets.Pipeline:M:Inno.Assets.Pipeline.AssetPipeline.AcquireArtifact(System.Guid,System.String)
title: AssetPipeline.AcquireArtifact
kind: api
owners:
- Inno.Assets.Pipeline
apiSurface: source-clr
sourceFingerprint: cccf2bee6c778a8c58f541dd13144c19c52ea4d1650f164dc966cf37228695e7
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
