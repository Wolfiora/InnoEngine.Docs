---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.inno.scripting.api.ce6d3b3545876a82
symbol: engine:Inno.Scripting.Api:T:Inno.Scripting.Api.ScriptingApiNamespaceAttribute
title: ScriptingApiNamespaceAttribute
kind: api
owners:
- Inno.Scripting.Api
apiSurface: source-clr
reviewed: f50a5f9918152915cc0163882fe005cc6e053c9395bf319ae577ca3475b1de90

# Authoring metadata. Edit these fields and the explanation below.
source: xml
outdated: false
contracts:
- project.inno-scripting-api
aliases: []
---

## Remarks

Multiple implementation namespaces can map to the same script API namespace. This keeps script organization stable without introducing wrapper types with different runtime identities. A feature assembly may declare a mapping for a dependency namespace when that feature owns the decision to expose selected dependency types.
