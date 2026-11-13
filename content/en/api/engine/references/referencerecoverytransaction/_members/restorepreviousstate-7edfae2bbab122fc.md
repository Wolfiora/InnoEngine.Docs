---
uid: api.7edfae2bbab122fcc4331dbd3c67e683f4c67f0fc47937774a9e72d38b4b5b01
symbol: "engine:Inno.References:M:Inno.References.ReferenceRecoveryTransaction.RestorePreviousState"
source: xml
reviewed: d153e07615398e44c682d150ab6900a2a019416fa1e3ec33d3a9dc9eb0241ac7
title: "RestorePreviousState"
kind: api
owners: [Inno.References]
apiSurface: source-clr
---

Restores previous values and lifecycle after the old type and serializer publication is active again.

**Exception `T:System.InvalidOperationException`:** Structure rollback is incomplete or the caller is not the owner thread.

**Exception `T:System.AggregateException`:** One or more previous-state restorations failed.

**Exception `T:Inno.Core.Execution.RetirementPendingException`:** An unfinished restoration retains its owners.
