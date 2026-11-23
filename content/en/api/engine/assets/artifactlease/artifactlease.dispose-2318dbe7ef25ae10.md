---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.2318dbe7ef25ae109775936d1aa14407aec5ee58c16e3252b0788768b8b50161
symbol: engine:Inno.Assets:M:Inno.Assets.ArtifactLease.Dispose
title: ArtifactLease.Dispose
kind: api
owners:
- Inno.Assets
apiSurface: source-clr
sourceFingerprint: 04c5e6b8cc83e29869ca65ce7db8e2763185f620527bb596151edfdd1d07dbeb
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Exceptions

**Exception `T:Inno.Core.Execution.RetirementPendingException`:** Provider retirement is unfinished or a concurrent release is in progress; retain this lease and retry at a safe point.

**Exception `T:System.AggregateException`:** The provider reports a wrapped failure, or release completes with ordinary errors retained from earlier pending attempts.

## Remarks

Pending may be wrapped in another exception; classify the complete failure with RetirementPendingException.Find. Ordinary sibling failures remain observable after a later release attempt succeeds. New reads stop when release begins; already opened streams retain their independent provider pins.
