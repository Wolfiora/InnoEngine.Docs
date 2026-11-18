---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.56e9c55ef47cdd777956fd2fdeee007cc8015fc0a88d00061923532d85cece7a
symbol: engine:Inno.Extensibility.Types:M:Inno.Extensibility.Types.TypeRegistry`1.Refresh
title: TypeRegistry<TSnapshot>.Refresh
kind: api
owners:
- Inno.Extensibility.Types
apiSurface: source-clr
sourceFingerprint: dc2e967a7d8ee7dee3c07fc39cb92a9da769fb27df9e29a0fddfda2ffd18782a
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Remarks

Each refresh iteration is a complete transaction. If the active type snapshot changes during activation, convergence runs as a separate transaction after the completed transaction returns.
