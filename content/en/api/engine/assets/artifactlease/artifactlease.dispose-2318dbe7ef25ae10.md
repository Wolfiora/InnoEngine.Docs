---
uid: api.2318dbe7ef25ae109775936d1aa14407aec5ee58c16e3252b0788768b8b50161
symbol: "engine:Inno.Assets:M:Inno.Assets.ArtifactLease.Dispose"
source: xml
reviewed: 36d0472c5be8074424ba8fcd4b39a9e1ba04790d2142bb91e174924a9b800d42
title: "ArtifactLease.Dispose"
kind: api
owners: [Inno.Assets]
apiSurface: source-clr
---

Releases artifact ownership, retaining metadata and callback while the provider reports Pending.

## Remarks

Pending may be wrapped in another exception; classify the complete failure with RetirementPendingException.Find. Ordinary sibling failures remain observable after a later release attempt succeeds. New reads stop when release begins; already opened streams retain their independent provider pins.

## Exceptions

**Exception `T:Inno.Core.Execution.RetirementPendingException`:** Provider retirement is unfinished or a concurrent release is in progress; retain this lease and retry at a safe point.

**Exception `T:System.AggregateException`:** The provider reports a wrapped failure, or release completes with ordinary errors retained from earlier pending attempts.
