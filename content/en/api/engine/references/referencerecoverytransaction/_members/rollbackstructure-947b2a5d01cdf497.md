---
uid: api.947b2a5d01cdf497427d3031a604953eb322515aaf078541c8d49d984a7f198b
symbol: "engine:Inno.References:M:Inno.References.ReferenceRecoveryTransaction.RollbackStructure"
source: xml
reviewed: 39b2870c3a774bb72cf22bf4db725ecd395fb0e6a72ddf19430df9ff0a3744c7
title: "RollbackStructure"
kind: api
owners: [Inno.References]
apiSurface: source-clr
---

Restores attempted domain structures in reverse order before the previous publication is restored.

**Exception `T:System.InvalidOperationException`:** The transaction is terminal or the caller is not the owner thread.

**Exception `T:System.AggregateException`:** One or more structure compensations failed.

**Exception `T:Inno.Core.Execution.RetirementPendingException`:** An unfinished compensation retains its owners.
