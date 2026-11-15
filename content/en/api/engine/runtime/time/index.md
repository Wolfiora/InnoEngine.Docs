---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.inno.runtime.b97859746caf3165
symbol: engine:Inno.Runtime:T:Inno.Runtime.Time
title: Time
kind: api
owners:
- Inno.Runtime
apiSurface: source-clr
reviewed: 9f6db26d3a4a9c8de4ad2b18552c811707f96b4954ef4962d5c8bf4a93a3db59

# Authoring metadata. Edit these fields and the explanation below.
source: xml
outdated: false
contracts:
- project.inno-runtime
aliases: []
---

Provides Unity-style timing values for the runtime session bound to the current execution context.

## Remarks

This façade owns no process-global timing state. Engine systems update an instance clock and scripts resolve that clock through the active `T:Inno.Runtime.RuntimeSession` scope.
