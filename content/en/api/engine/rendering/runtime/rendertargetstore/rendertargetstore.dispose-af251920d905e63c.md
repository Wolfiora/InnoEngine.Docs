---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.af251920d905e63ca9042fd2753c6f57df590423fa323f7fc20dd0e56b66f967
symbol: engine:Inno.Rendering.Runtime:M:Inno.Rendering.Runtime.RenderTargetStore.Dispose
title: RenderTargetStore.Dispose
kind: api
owners:
- Inno.Rendering.Runtime
apiSurface: source-clr
reviewed: bac87eecdc713678df3fce8d301184b042448a09ef74eef5b6254e2d4a848418
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Exceptions

**Exception `T:Inno.Core.Execution.RetirementPendingException`:** A backend resource is still active. Remaining resources stay owned until disposal is retried.

**Exception `T:System.AggregateException`:** Quiescent resources were all attempted, but one or more backend releases failed.
