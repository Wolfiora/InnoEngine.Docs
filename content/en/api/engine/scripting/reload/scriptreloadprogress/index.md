---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.inno.scripting.reload.4347b096f0fa86c8
symbol: engine:Inno.Scripting.Reload:T:Inno.Scripting.Reload.ScriptReloadProgress
title: ScriptReloadProgress
kind: api
owners:
- Inno.Scripting.Reload
apiSurface: source-clr
sourceFingerprint: 923df4040e8841e6424a6ee06058470d9c64756fe75913a458904ae6c9b892db
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
