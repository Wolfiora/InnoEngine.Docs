---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.fa024f67d97faf1c4b451bafe96107667258023ecb23d6c5f1ab386e390911bc
symbol: engine:Inno.Assets.Pipeline:M:Inno.Assets.Pipeline.AssetPipeline.ExportRuntimeArtifacts(System.String)
title: AssetPipeline.ExportRuntimeArtifacts
kind: api
owners:
- Inno.Assets.Pipeline
apiSurface: source-clr
reviewed: 9ec2d630ab38e9bee7b52dc282394e21f963dbe6c9759dd829ae29e718416465
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `destinationContentRoot`:** Empty destination for the deployed asset database.

## Returns

Counts and source identities for the deployed runtime snapshot.

## Exceptions

**Exception `T:System.InvalidOperationException`:** Thrown when runtime artifacts are incomplete, a deployed reference is authoring-only, or a transitive authoring input has failed or changed since import. Last-good inputs do not certify an export.

**Exception `T:System.IO.IOException`:** Thrown when the destination is not empty or cannot be written.
