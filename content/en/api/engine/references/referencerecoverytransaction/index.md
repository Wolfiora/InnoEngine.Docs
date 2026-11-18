---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.inno.references.69bd6f7e2916e24d
symbol: engine:Inno.References:T:Inno.References.ReferenceRecoveryTransaction
title: ReferenceRecoveryTransaction
kind: api
owners:
- Inno.References
apiSurface: source-clr
sourceFingerprint: 2aad1533a25042b4b04788d3ebd46c8a5a98d0848380e640897af121af44e246
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
