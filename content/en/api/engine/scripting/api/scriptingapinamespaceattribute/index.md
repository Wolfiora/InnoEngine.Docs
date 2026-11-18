---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.inno.scripting.api.ce6d3b3545876a82
symbol: engine:Inno.Scripting.Api:T:Inno.Scripting.Api.ScriptingApiNamespaceAttribute
title: ScriptingApiNamespaceAttribute
kind: api
owners:
- Inno.Scripting.Api
apiSurface: source-clr
sourceFingerprint: cbfbbd350e45ab688ad7428734e81c49f7f5c2fbf71c0af53101a4a2969dfcee
contracts:
- project.inno-scripting-api

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
aliases: []
---

## Remarks

Multiple implementation namespaces can map to the same script API namespace. This keeps script organization stable without introducing wrapper types with different runtime identities. A feature assembly may declare a mapping for a dependency namespace when that feature owns the decision to expose selected dependency types.
