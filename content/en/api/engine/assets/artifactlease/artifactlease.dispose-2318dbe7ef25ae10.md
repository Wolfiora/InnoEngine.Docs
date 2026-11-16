---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.2318dbe7ef25ae109775936d1aa14407aec5ee58c16e3252b0788768b8b50161
symbol: engine:Inno.Assets:M:Inno.Assets.ArtifactLease.Dispose
title: ArtifactLease.Dispose
kind: api
owners:
- Inno.Assets
apiSurface: source-clr
reviewed: 2acaf93f05321b0fea5047fdabd49ccc58b1d541d0d8b23a7fdb04db84b3df44
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Remarks

Pending may be wrapped in another exception; classify the complete failure with RetirementPendingException.Find. Ordinary sibling failures remain observable after a later release attempt succeeds. New reads stop when release begins; already opened streams retain their independent provider pins.

## Exceptions

**Exception `T:Inno.Core.Execution.RetirementPendingException`:** Provider retirement is unfinished or a concurrent release is in progress; retain this lease and retry at a safe point.

**Exception `T:System.AggregateException`:** The provider reports a wrapped failure, or release completes with ordinary errors retained from earlier pending attempts.
