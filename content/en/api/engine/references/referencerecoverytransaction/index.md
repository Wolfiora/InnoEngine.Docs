---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.inno.references.69bd6f7e2916e24d
symbol: engine:Inno.References:T:Inno.References.ReferenceRecoveryTransaction
title: ReferenceRecoveryTransaction
kind: api
owners:
- Inno.References
apiSurface: source-clr
reviewed: 93532c8fdbc2cef82435f9340a00548e47f3c6ad37aef67f9fecfcf45b0e8867
contracts:
- project.inno-references

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
aliases: []
---

## Remarks

The generation owner calls these phases at its safe point. This transaction never publishes types or rolls back automatically: old structures must be restored before old converters, and old values after them.
