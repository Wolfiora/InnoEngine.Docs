---
uid: api.inno.scripting.reload.4347b096f0fa86c8
symbol: "engine:Inno.Scripting.Reload:T:Inno.Scripting.Reload.ScriptReloadProgress"
source: xml
reviewed: be23c7e426f1a8064b0416cc087b19df282a61ef28c9ae28bb8c6ecab03d3deb
title: "ScriptReloadProgress"
kind: api
owners: [Inno.Scripting.Reload]
apiSurface: source-clr
contracts:
- project.inno-scripting-reload
aliases: []
---

Atomically published progress owned by one reload request, containing no runtime or extension objects.

**Parameter `operationId`:** The host-local reload request sequence; zero precedes the first request.

**Parameter `fraction`:** The fraction through compilation, activation and verified retirement.

**Parameter `stage`:** The actual stage or terminal diagnostic.

**Parameter `cancellationRequested`:** Whether cancellation has been requested and still requires owned work to drain.

**Parameter `canCancel`:** Whether this exact operation currently admits cancellation.
