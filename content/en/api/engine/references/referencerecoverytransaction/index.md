---
uid: api.inno.references.69bd6f7e2916e24d
symbol: "engine:Inno.References:T:Inno.References.ReferenceRecoveryTransaction"
source: xml
reviewed: 6627322d7aa2aade7e3e5360862009136f03a38343cfaa765025beb494f8db54
title: "ReferenceRecoveryTransaction"
kind: api
owners: [Inno.References]
apiSurface: source-clr
contracts:
- project.inno-references
aliases: []
---

Coordinates preserved reference slots using the host generation publication and two-phase rollback protocol.

## Remarks

The generation owner calls these phases at its safe point. This transaction never publishes types or rolls back automatically: old structures must be restored before old converters, and old values after them.
