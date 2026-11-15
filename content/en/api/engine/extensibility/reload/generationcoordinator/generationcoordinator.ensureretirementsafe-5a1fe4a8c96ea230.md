---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.5a1fe4a8c96ea230a9ce8aa50dc763b7bac42f6c014afe90edbf604c8a5886df
symbol: engine:Inno.Extensibility.Reload:M:Inno.Extensibility.Reload.GenerationCoordinator.EnsureRetirementSafe
title: GenerationCoordinator.EnsureRetirementSafe
kind: api
owners:
- Inno.Extensibility.Reload
apiSurface: source-clr
reviewed: 4cdaa713d77d5b949da2b8ed422c05c73f559d542e7fabf7bcd5cb317b2aefd5

# Authoring metadata. Edit these fields and the explanation below.
source: xml
outdated: false
---

## Remarks

Ordinary terminal cleanup failures do not prevent remaining cleanup. Unfinished retirement remains blocking even if an earlier ordinary error is the primary diagnostic failure.

## Exceptions

**Exception `T:Inno.Core.Execution.RetirementPendingException`:** A failed generation still owns live work; its dependencies must remain owned until host restart.
