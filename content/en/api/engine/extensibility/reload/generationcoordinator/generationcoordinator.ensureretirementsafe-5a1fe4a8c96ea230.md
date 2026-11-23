---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.5a1fe4a8c96ea230a9ce8aa50dc763b7bac42f6c014afe90edbf604c8a5886df
symbol: engine:Inno.Extensibility.Reload:M:Inno.Extensibility.Reload.GenerationCoordinator.EnsureRetirementSafe
title: GenerationCoordinator.EnsureRetirementSafe
kind: api
owners:
- Inno.Extensibility.Reload
apiSurface: source-clr
sourceFingerprint: fea659d6df2a2c33085fb24e646d5140124f99aa831fe785c81c77cf56a98a07
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Exceptions

**Exception `T:Inno.Core.Execution.RetirementPendingException`:** A failed generation still owns live work; its dependencies must remain owned until host restart.

## Remarks

Ordinary terminal cleanup failures do not prevent remaining cleanup. Unfinished retirement remains blocking even if an earlier ordinary error is the primary diagnostic failure.
