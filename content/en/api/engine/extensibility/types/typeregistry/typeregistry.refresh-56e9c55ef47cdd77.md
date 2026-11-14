---
uid: api.56e9c55ef47cdd777956fd2fdeee007cc8015fc0a88d00061923532d85cece7a
symbol: "engine:Inno.Extensibility.Types:M:Inno.Extensibility.Types.TypeRegistry\u00601.Refresh"
source: xml
reviewed: 11b164321a57ac19e91d19d29f5acd46e5f0317d78e3a84a120c123e376dfb5b
title: "TypeRegistry\u003CTSnapshot\u003E.Refresh"
kind: api
owners: [Inno.Extensibility.Types]
apiSurface: source-clr
---

Refreshes this registry from the currently active type snapshot.

## Remarks

Each refresh iteration is a complete transaction. If the active type snapshot changes during activation, convergence runs as a separate transaction after the completed transaction returns.
