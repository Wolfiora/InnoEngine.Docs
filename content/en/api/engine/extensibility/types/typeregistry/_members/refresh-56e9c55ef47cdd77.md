---
uid: api.56e9c55ef47cdd777956fd2fdeee007cc8015fc0a88d00061923532d85cece7a
symbol: "engine:Inno.Extensibility.Types:M:Inno.Extensibility.Types.TypeRegistry\u00601.Refresh"
source: xml
reviewed: 6f820aac1587144a6c50c43eed7b7e45554de74dd4505173e8fa5c652e7008bb
title: "Refresh"
kind: api
owners: [Inno.Extensibility.Types]
apiSurface: source-clr
---

Refreshes this registry from the currently active type snapshot.

## Remarks

Each refresh iteration is a complete transaction. If the active type snapshot changes during activation, convergence runs as a separate transaction after the completed transaction returns.
