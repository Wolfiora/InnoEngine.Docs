---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.inno.runtime.runtime-script.0cb718723b4ea1f9
symbol: scripting:Inno.Runtime:T:InnoEngine.Core.Time
title: Time
kind: api
owners:
- Inno.Runtime
apiSurface: editor-script
sourceFingerprint: 908884ed96cae7ec537f748476215f5e9c6419a6cd76a37b92efed0558aea648
apiScope: Runtime
contracts:
- manual.scripting.use-script-api
- project.inno-runtime

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
aliases: []
---

## Remarks

This façade owns no process-global timing state. Engine systems update an instance clock and scripts resolve that clock through the active `T:InnoEngine.Core.RuntimeSession` scope.
