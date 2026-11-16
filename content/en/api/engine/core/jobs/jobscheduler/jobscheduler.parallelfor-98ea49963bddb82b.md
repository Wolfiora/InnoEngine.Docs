---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.98ea49963bddb82bbc9469933403bcece16c363e070fe9146dde2613eb580706
symbol: engine:Inno.Core.Jobs:M:Inno.Core.Jobs.JobScheduler.ParallelFor(System.Int32,System.Int32,System.Action{System.Int32,System.Int32})
title: JobScheduler.ParallelFor
kind: api
owners:
- Inno.Core.Jobs
apiSurface: source-clr
reviewed: fbe1d4b4fcc2a6312dc46a84e7bbe5aca7b57ec9feae59e29938f71c823ba5d2
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `length`:** The exclusive upper bound of the complete range.

**Parameter `batchSize`:** The maximum number of indices in one batch.

**Parameter `body`:** The callback receiving each batch's inclusive start and exclusive end.

## Returns

A handle that completes after every batch.
