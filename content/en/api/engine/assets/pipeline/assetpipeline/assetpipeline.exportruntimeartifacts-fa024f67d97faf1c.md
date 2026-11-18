---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.fa024f67d97faf1c4b451bafe96107667258023ecb23d6c5f1ab386e390911bc
symbol: engine:Inno.Assets.Pipeline:M:Inno.Assets.Pipeline.AssetPipeline.ExportRuntimeArtifacts(System.String)
title: AssetPipeline.ExportRuntimeArtifacts
kind: api
owners:
- Inno.Assets.Pipeline
apiSurface: source-clr
sourceFingerprint: 76818da30666e6116baf557b0ca40fe97cb77577d6065ae0ccaf6c4b92bbd40c
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
