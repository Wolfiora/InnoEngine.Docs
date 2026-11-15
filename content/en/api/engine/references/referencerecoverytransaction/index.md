---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.inno.references.69bd6f7e2916e24d
symbol: engine:Inno.References:T:Inno.References.ReferenceRecoveryTransaction
title: ReferenceRecoveryTransaction
kind: api
owners:
- Inno.References
apiSurface: source-clr
reviewed: 09c775cfbacdde8586411fae5c8d28ae22605a4295fe6da87eb7d5df01ecd678

# Authoring metadata. Edit these fields and the explanation below.
source: xml
outdated: false
contracts:
- project.inno-references
aliases: []
---

## Remarks

The generation owner calls these phases at its safe point. This transaction never publishes types or rolls back automatically: old structures must be restored before old converters, and old values after them.
