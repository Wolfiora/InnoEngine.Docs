---
uid: api.5a1fe4a8c96ea230a9ce8aa50dc763b7bac42f6c014afe90edbf604c8a5886df
symbol: "engine:Inno.Extensibility.Reload:M:Inno.Extensibility.Reload.GenerationCoordinator.EnsureRetirementSafe"
source: xml
reviewed: 881dc9dd6bbe8832f1913476d9c557d1ec61bd365f02af4cd2020234d02b1cc0
title: "EnsureRetirementSafe"
kind: api
owners: [Inno.Extensibility.Reload]
apiSurface: source-clr
---

Rejects dependency destruction after a generation owner reported unfinished retirement.

## Remarks

Ordinary terminal cleanup failures do not prevent remaining cleanup. Unfinished retirement remains blocking even if an earlier ordinary error is the primary diagnostic failure.

**Exception `T:Inno.Core.Execution.RetirementPendingException`:** A failed generation still owns live work; its dependencies must remain owned until host restart.
