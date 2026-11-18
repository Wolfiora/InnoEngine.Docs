---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.947b2a5d01cdf497427d3031a604953eb322515aaf078541c8d49d984a7f198b
symbol: engine:Inno.References:M:Inno.References.ReferenceRecoveryTransaction.RollbackStructure
title: ReferenceRecoveryTransaction.RollbackStructure
kind: api
owners:
- Inno.References
apiSurface: source-clr
sourceFingerprint: 31d4969212e5b8f6bbaa1c80cb6ce89f2fb75fa12394a2974846aec7ec98bb63
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Exceptions

**Exception `T:System.InvalidOperationException`:** The transaction is terminal or the caller is not the owner thread.

**Exception `T:System.AggregateException`:** One or more structure compensations failed.

**Exception `T:Inno.Core.Execution.RetirementPendingException`:** An unfinished compensation retains its owners.
