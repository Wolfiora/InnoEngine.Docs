---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.inno.assets.pipeline.425e1bd0143d29e6
symbol: engine:Inno.Assets.Pipeline:T:Inno.Assets.Pipeline.AssetSampleImportTransaction
title: AssetSampleImportTransaction
kind: api
owners:
- Inno.Assets.Pipeline
apiSurface: source-clr
sourceFingerprint: 90821012e5dd27b3802148ce915f0596595fbba879357c91aad6d289b05a409e
contracts:
- project.inno-assets-pipeline

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
aliases: []
---

## Remarks

Advance and Commit run on the AssetPipeline initialization thread. A prepared copy is indexed in an isolated catalog for validation without publishing Changed; ordinary mutations and generation changes are deferred. Rollback must finish before the pipeline or any validation dependency can be released.
