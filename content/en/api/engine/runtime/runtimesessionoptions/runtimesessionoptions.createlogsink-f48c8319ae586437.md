---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.f48c8319ae5864375443d14317800b7e6411c19a2094c4f11e292c5306f03842
symbol: engine:Inno.Runtime:P:Inno.Runtime.RuntimeSessionOptions.createLogSink
title: RuntimeSessionOptions.createLogSink
kind: api
owners:
- Inno.Runtime
apiSurface: source-clr
sourceFingerprint: b95c27cebf16620e4bd158d99ea0d10f436f3b08598a77a849ace722d7d99036
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Remarks

The factory receives the session identity. The returned sink receives only this session's entries and is disposed during retirement when it implements `IDisposable`. A null factory leaves logging to the host router's existing sinks.
