---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.inno.assets.pipeline.425e1bd0143d29e6
symbol: engine:Inno.Assets.Pipeline:T:Inno.Assets.Pipeline.AssetSampleImportTransaction
title: AssetSampleImportTransaction
kind: api
owners:
- Inno.Assets.Pipeline
apiSurface: source-clr
reviewed: b7997683afd36ff7e70c2561d48eb7cff90205b7fcb6fa79e5c03c9863d32a58

# Authoring metadata. Edit these fields and the explanation below.
source: xml
outdated: false
contracts:
- project.inno-assets-pipeline
aliases: []
---

## Remarks

Advance and Commit run on the AssetPipeline initialization thread. A prepared copy is indexed in an isolated catalog for validation without publishing Changed; ordinary mutations and generation changes are deferred. Rollback must finish before the pipeline or any validation dependency can be released.
