---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.inno.scripting.reload.4347b096f0fa86c8
symbol: engine:Inno.Scripting.Reload:T:Inno.Scripting.Reload.ScriptReloadProgress
title: ScriptReloadProgress
kind: api
owners:
- Inno.Scripting.Reload
apiSurface: source-clr
sourceFingerprint: 2c17ff184517153f3d6e44a138a73337c82aa87bc061445c235ae5cdb7cb111b
contracts:
- project.inno-scripting-reload

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
aliases: []
---

## Parameters

**Parameter `operationID`:** The host-local reload request sequence; zero precedes the first request.

**Parameter `fraction`:** The fraction through compilation, activation and verified retirement.

**Parameter `stage`:** The actual stage or terminal diagnostic.

**Parameter `cancellationRequested`:** Whether cancellation has been requested and still requires owned work to drain.

**Parameter `canCancel`:** Whether this exact operation currently admits cancellation.
