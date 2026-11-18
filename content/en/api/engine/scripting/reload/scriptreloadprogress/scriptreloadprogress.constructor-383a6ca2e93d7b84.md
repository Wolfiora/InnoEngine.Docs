---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.383a6ca2e93d7b84d5d05c8a071aea617ecb4f31adc06af378d7a469b64abe83
symbol: engine:Inno.Scripting.Reload:M:Inno.Scripting.Reload.ScriptReloadProgress.#ctor(System.Int64,System.Single,System.String,System.Boolean,System.Boolean)
title: ScriptReloadProgress.Constructor
kind: api
owners:
- Inno.Scripting.Reload
apiSurface: source-clr
sourceFingerprint: fa2b659016840e2a257264cd12f0b7e7c390d8e41c6856b5394c805255ac7866
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `operationId`:** The host-local reload request sequence; zero precedes the first request.

**Parameter `fraction`:** The fraction through compilation, activation and verified retirement.

**Parameter `stage`:** The actual stage or terminal diagnostic.

**Parameter `cancellationRequested`:** Whether cancellation has been requested and still requires owned work to drain.

**Parameter `canCancel`:** Whether this exact operation currently admits cancellation.
