---
uid: api.94317930168483ec43352d2b7b939675e6831cea2500d91930e90670db9e2821
symbol: "engine:Inno.Editor.Interactions:P:Inno.Editor.Interactions.EditorHistoryResult.statePreserved"
source: xml
reviewed: 712c2a3cbd276f8fceb96506a079464a87a2702fe8f735ac413ffe210865abab
title: "statePreserved"
kind: api
owners: [Inno.Editor.Interactions]
apiSurface: source-clr
---

Gets whether a failed transition restored the domain state that existed before the attempt.

## Remarks

Successful results always preserve a valid state. A failed result with this value set to `false` faults the owning history because the transition can no longer be retried safely.
