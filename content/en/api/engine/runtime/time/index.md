---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.inno.runtime.b97859746caf3165
symbol: engine:Inno.Runtime:T:Inno.Runtime.Time
title: Time
kind: api
owners:
- Inno.Runtime
apiSurface: source-clr
reviewed: a423eb6c7b8a2a6d3e53707f9dcbbd8e6e57e69c225d6830e3b31e47bca5f311
contracts:
- project.inno-runtime

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
aliases: []
---

## Remarks

This façade owns no process-global timing state. Engine systems update an instance clock and scripts resolve that clock through the active `T:Inno.Runtime.RuntimeSession` scope.
