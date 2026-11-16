---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.inno.scripting.api.ce6d3b3545876a82
symbol: engine:Inno.Scripting.Api:T:Inno.Scripting.Api.ScriptingApiNamespaceAttribute
title: ScriptingApiNamespaceAttribute
kind: api
owners:
- Inno.Scripting.Api
apiSurface: source-clr
reviewed: 47615b75a077fe6ba0d23e2086f484763ca36e5606c67697487379966583e365
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
