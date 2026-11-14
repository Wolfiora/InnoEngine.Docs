---
uid: api.7ce05d6810d519a62a6e01c8b5a098d68372d7d23e9cbea3205596da7197ec17
symbol: "engine:Inno.Assets:M:Inno.Assets.AssetLease\u00601.Dispose"
source: xml
reviewed: c2dbc2d7e0c81a497bfae313b32e5517d1b05430517e8f9c3acfe1079f44800a
title: "AssetLease\u003CTAsset\u003E.Dispose"
kind: api
owners: [Inno.Assets]
apiSurface: source-clr
---

Releases this caller's residency ownership, retaining its value and callback while the provider reports Pending.

## Remarks

Pending may be wrapped in another exception; classify the complete failure with RetirementPendingException.Find. Ordinary sibling failures remain observable after a later release attempt succeeds.

**Exception `T:Inno.Core.Execution.RetirementPendingException`:** Provider retirement is unfinished or a concurrent release is in progress; retain this lease and retry at a safe point.

**Exception `T:System.AggregateException`:** The provider reports a wrapped failure, or release completes with ordinary errors retained from earlier pending attempts.
