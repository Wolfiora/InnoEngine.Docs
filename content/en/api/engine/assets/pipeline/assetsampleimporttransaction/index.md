---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.inno.assets.pipeline.425e1bd0143d29e6
symbol: engine:Inno.Assets.Pipeline:T:Inno.Assets.Pipeline.AssetSampleImportTransaction
title: AssetSampleImportTransaction
kind: api
owners:
- Inno.Assets.Pipeline
apiSurface: source-clr
reviewed: f4ddda6eb083be4ef5de48fd9a7cb52daebb1445662ed8b5ce46a83d496ee3f0
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
