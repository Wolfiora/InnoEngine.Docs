---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.inno.scripting.reload.4347b096f0fa86c8
symbol: engine:Inno.Scripting.Reload:T:Inno.Scripting.Reload.ScriptReloadProgress
title: ScriptReloadProgress
kind: api
owners:
- Inno.Scripting.Reload
apiSurface: source-clr
reviewed: a8282dd77fad70909e0aa5b828a792863c2b00e86cda3e4c1332d372d1989158
contracts:
- project.inno-scripting-reload

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
aliases: []
---

## Parameters

**Parameter `operationId`:** The host-local reload request sequence; zero precedes the first request.

**Parameter `fraction`:** The fraction through compilation, activation and verified retirement.

**Parameter `stage`:** The actual stage or terminal diagnostic.

**Parameter `cancellationRequested`:** Whether cancellation has been requested and still requires owned work to drain.

**Parameter `canCancel`:** Whether this exact operation currently admits cancellation.
