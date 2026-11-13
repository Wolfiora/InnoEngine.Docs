---
uid: api.inno.runtime.runtime-script.0cb718723b4ea1f9
symbol: "scripting:Inno.Runtime:T:InnoEngine.Core.Time"
source: xml
reviewed: fbc7e59db1c5cd3cb43767a05271ccbedc8243aacac63591b3085fd7a37bbdb9
title: "Time"
kind: api
owners: [Inno.Runtime]
apiSurface: editor-script
apiScope: Runtime
contracts:
- manual.scripting.use-script-api
- project.inno-runtime
aliases: []
---

Provides Unity-style timing values for the runtime session bound to the current execution context.

## Remarks

This façade owns no process-global timing state. Engine systems update an instance clock and scripts resolve that clock through the active `T:InnoEngine.Core.RuntimeSession` scope.
