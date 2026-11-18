---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.7edfae2bbab122fcc4331dbd3c67e683f4c67f0fc47937774a9e72d38b4b5b01
symbol: engine:Inno.References:M:Inno.References.ReferenceRecoveryTransaction.RestorePreviousState
title: ReferenceRecoveryTransaction.RestorePreviousState
kind: api
owners:
- Inno.References
apiSurface: source-clr
sourceFingerprint: 6cad4071d7b86f656a69013fa130dc0b4d251473c0ddbb2d34656f60ebc61afa
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Exceptions

**Exception `T:System.InvalidOperationException`:** Structure rollback is incomplete or the caller is not the owner thread.

**Exception `T:System.AggregateException`:** One or more previous-state restorations failed.

**Exception `T:Inno.Core.Execution.RetirementPendingException`:** An unfinished restoration retains its owners.
