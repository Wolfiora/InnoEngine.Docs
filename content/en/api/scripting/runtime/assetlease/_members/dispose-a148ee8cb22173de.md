---
uid: api.a148ee8cb22173de2f59c84b2e60e30acd3c4a05f08749e7c89fb66e2ec5573b
symbol: "scripting:Inno.Assets:M:InnoEngine.Assets.AssetLease\u00601.Dispose"
source: xml
reviewed: ac091eed1326c7abf8fa9eed1548978a50112d49a0f395b1ae7e9585a18f9f04
title: "Dispose"
kind: api
owners: [Inno.Assets]
apiSurface: editor-script
apiScope: Runtime
---

Releases this caller's residency ownership, retaining its value and callback while the provider reports Pending.

## Remarks

Pending may be wrapped in another exception; classify the complete failure with RetirementPendingException.Find. Ordinary sibling failures remain observable after a later release attempt succeeds.

**Exception `T:Inno.Core.Execution.RetirementPendingException`:** Provider retirement is unfinished or a concurrent release is in progress; retain this lease and retry at a safe point.

**Exception `T:System.AggregateException`:** The provider reports a wrapped failure, or release completes with ordinary errors retained from earlier pending attempts.
