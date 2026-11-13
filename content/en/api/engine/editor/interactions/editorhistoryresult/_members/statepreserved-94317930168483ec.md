---
uid: api.94317930168483ec43352d2b7b939675e6831cea2500d91930e90670db9e2821
symbol: "engine:Inno.Editor.Interactions:P:Inno.Editor.Interactions.EditorHistoryResult.statePreserved"
source: xml
reviewed: 3a69e06b5004c2d24ef5c6b8f445e89377be0d14a79a2efcd7f01a528575969e
title: "statePreserved"
kind: api
owners: [Inno.Editor.Interactions]
apiSurface: source-clr
---

Gets whether a failed transition restored the domain state that existed before the attempt.

## Remarks

Successful results always preserve a valid state. A failed result with this value set to `false` faults the owning history because the transition can no longer be retried safely.
