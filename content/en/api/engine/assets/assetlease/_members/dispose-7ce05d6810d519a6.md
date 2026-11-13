---
uid: api.7ce05d6810d519a62a6e01c8b5a098d68372d7d23e9cbea3205596da7197ec17
symbol: "engine:Inno.Assets:M:Inno.Assets.AssetLease\u00601.Dispose"
source: xml
reviewed: 5e9699c515d59807c57d1af6928ce74abd7e4c1f37fab9bf46eb1c42fc865bd0
title: "Dispose"
kind: api
owners: [Inno.Assets]
apiSurface: source-clr
---

Releases this caller's residency ownership, retaining its value and callback while the provider reports Pending.

## Remarks

Pending may be wrapped in another exception; classify the complete failure with RetirementPendingException.Find. Ordinary sibling failures remain observable after a later release attempt succeeds.

**Exception `T:Inno.Core.Execution.RetirementPendingException`:** Provider retirement is unfinished or a concurrent release is in progress; retain this lease and retry at a safe point.

**Exception `T:System.AggregateException`:** The provider reports a wrapped failure, or release completes with ordinary errors retained from earlier pending attempts.
