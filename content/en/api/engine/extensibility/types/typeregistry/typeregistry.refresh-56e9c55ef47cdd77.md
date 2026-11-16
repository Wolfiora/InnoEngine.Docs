---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.56e9c55ef47cdd777956fd2fdeee007cc8015fc0a88d00061923532d85cece7a
symbol: engine:Inno.Extensibility.Types:M:Inno.Extensibility.Types.TypeRegistry`1.Refresh
title: TypeRegistry<TSnapshot>.Refresh
kind: api
owners:
- Inno.Extensibility.Types
apiSurface: source-clr
reviewed: e0d3cfdd14fc4c429b3ea26e5b03cd126e393b72ad609c691ac0da500a33395f
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Remarks

Each refresh iteration is a complete transaction. If the active type snapshot changes during activation, convergence runs as a separate transaction after the completed transaction returns.
