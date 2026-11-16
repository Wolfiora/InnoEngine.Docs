---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.947b2a5d01cdf497427d3031a604953eb322515aaf078541c8d49d984a7f198b
symbol: engine:Inno.References:M:Inno.References.ReferenceRecoveryTransaction.RollbackStructure
title: ReferenceRecoveryTransaction.RollbackStructure
kind: api
owners:
- Inno.References
apiSurface: source-clr
reviewed: 40ac57e4f5df7119c0779fde0a4072aedf006833cc25c97d3be8662b94e5b99f
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
