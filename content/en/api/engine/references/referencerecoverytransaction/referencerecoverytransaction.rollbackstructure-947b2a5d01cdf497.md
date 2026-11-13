---
uid: api.947b2a5d01cdf497427d3031a604953eb322515aaf078541c8d49d984a7f198b
symbol: "engine:Inno.References:M:Inno.References.ReferenceRecoveryTransaction.RollbackStructure"
source: xml
reviewed: 283afd590bfa1ed6070cc4e613bff6602760369964f44544b9925b0fd5ecb40f
title: "ReferenceRecoveryTransaction.RollbackStructure"
kind: api
owners: [Inno.References]
apiSurface: source-clr
---

Restores attempted domain structures in reverse order before the previous publication is restored.

**Exception `T:System.InvalidOperationException`:** The transaction is terminal or the caller is not the owner thread.

**Exception `T:System.AggregateException`:** One or more structure compensations failed.

**Exception `T:Inno.Core.Execution.RetirementPendingException`:** An unfinished compensation retains its owners.
