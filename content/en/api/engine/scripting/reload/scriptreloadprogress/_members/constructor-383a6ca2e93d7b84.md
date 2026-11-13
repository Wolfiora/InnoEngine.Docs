---
uid: api.383a6ca2e93d7b84d5d05c8a071aea617ecb4f31adc06af378d7a469b64abe83
symbol: "engine:Inno.Scripting.Reload:M:Inno.Scripting.Reload.ScriptReloadProgress.#ctor(System.Int64,System.Single,System.String,System.Boolean,System.Boolean)"
source: xml
reviewed: 17bc261317fd7d88ab702eb4dbcfd4e3fb85fa607cebbf2560ce020af0792fcc
title: "Constructor"
kind: api
owners: [Inno.Scripting.Reload]
apiSurface: source-clr
---

Atomically published progress owned by one reload request, containing no runtime or extension objects.

**Parameter `operationId`:** The host-local reload request sequence; zero precedes the first request.

**Parameter `fraction`:** The fraction through compilation, activation and verified retirement.

**Parameter `stage`:** The actual stage or terminal diagnostic.

**Parameter `cancellationRequested`:** Whether cancellation has been requested and still requires owned work to drain.

**Parameter `canCancel`:** Whether this exact operation currently admits cancellation.
