---
uid: api.inno.runtime.runtime-script.0cb718723b4ea1f9
symbol: "scripting:Inno.Runtime:T:InnoEngine.Core.Time"
source: xml
reviewed: 80c7268d877b7966b6d7b38560ff8d8ee58f9661d0c2841af3592115d1fe457b
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
