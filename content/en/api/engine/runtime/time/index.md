---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.inno.runtime.b97859746caf3165
symbol: engine:Inno.Runtime:T:Inno.Runtime.Time
title: Time
kind: api
owners:
- Inno.Runtime
apiSurface: source-clr
sourceFingerprint: 13d7fedc658653dbe520a5f2d165b46a3f0e96aeb9a1dc2cfc19cbb8c558f511
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
