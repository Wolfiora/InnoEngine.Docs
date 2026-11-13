---
uid: api.inno.scripting.api.ce6d3b3545876a82
symbol: "engine:Inno.Scripting.Api:T:Inno.Scripting.Api.ScriptingApiNamespaceAttribute"
source: xml
reviewed: d5134b6feef8711bc1f32505e967cba14701c6ebf48454dd4231cf3f997a8e84
title: "ScriptingApiNamespaceAttribute"
kind: api
owners: [Inno.Scripting.Api]
apiSurface: source-clr
contracts:
- project.inno-scripting-api
aliases: []
---

Maps a stable script-facing API namespace to one CLR implementation namespace.

## Remarks

Multiple implementation namespaces can map to the same script API namespace. This keeps script organization stable without introducing wrapper types with different runtime identities. A feature assembly may declare a mapping for a dependency namespace when that feature owns the decision to expose selected dependency types.
