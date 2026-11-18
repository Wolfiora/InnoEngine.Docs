---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.94317930168483ec43352d2b7b939675e6831cea2500d91930e90670db9e2821
symbol: engine:Inno.Editor.Interactions:P:Inno.Editor.Interactions.EditorHistoryResult.statePreserved
title: EditorHistoryResult.statePreserved
kind: api
owners:
- Inno.Editor.Interactions
apiSurface: source-clr
sourceFingerprint: 21a0456a47b5cceda1d40bf40185d46c818b0f0cf6b871d239bbd1ecb4428777
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Remarks

Successful results always preserve a valid state. A failed result with this value set to `false` faults the owning history because the transition can no longer be retried safely.
