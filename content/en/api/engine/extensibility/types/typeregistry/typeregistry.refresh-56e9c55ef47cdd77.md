---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.56e9c55ef47cdd777956fd2fdeee007cc8015fc0a88d00061923532d85cece7a
symbol: engine:Inno.Extensibility.Types:M:Inno.Extensibility.Types.TypeRegistry`1.Refresh
title: TypeRegistry<TSnapshot>.Refresh
kind: api
owners:
- Inno.Extensibility.Types
apiSurface: source-clr
reviewed: 11b164321a57ac19e91d19d29f5acd46e5f0317d78e3a84a120c123e376dfb5b

# Authoring metadata. Edit these fields and the explanation below.
source: xml
outdated: false
---

Refreshes this registry from the currently active type snapshot.

## Remarks

Each refresh iteration is a complete transaction. If the active type snapshot changes during activation, convergence runs as a separate transaction after the completed transaction returns.
