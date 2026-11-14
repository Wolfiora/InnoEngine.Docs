---
uid: api.85c6044cf73f7614eca7d6ba759171c1f15291555a5aa50155d25891b7453805
symbol: "scripting:Inno.Assets:M:InnoEngine.Assets.ArtifactLease.Dispose"
source: xml
reviewed: 0a270dd762e63c719635bcc661921e825b4f48dbb7a48a39eed06401cd705e6d
title: "ArtifactLease.Dispose"
kind: api
owners: [Inno.Assets]
apiSurface: editor-script
apiScope: Runtime
---

Releases artifact ownership, retaining metadata and callback while the provider reports Pending.

## Remarks

Pending may be wrapped in another exception; classify the complete failure with RetirementPendingException.Find. Ordinary sibling failures remain observable after a later release attempt succeeds. New reads stop when release begins; already opened streams retain their independent provider pins.

## Exceptions

**Exception `T:Inno.Core.Execution.RetirementPendingException`:** Provider retirement is unfinished or a concurrent release is in progress; retain this lease and retry at a safe point.

**Exception `T:System.AggregateException`:** The provider reports a wrapped failure, or release completes with ordinary errors retained from earlier pending attempts.
