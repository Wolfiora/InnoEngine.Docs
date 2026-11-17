---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.f48c8319ae5864375443d14317800b7e6411c19a2094c4f11e292c5306f03842
symbol: engine:Inno.Runtime:P:Inno.Runtime.RuntimeSessionOptions.createLogSink
title: RuntimeSessionOptions.createLogSink
kind: api
owners:
- Inno.Runtime
apiSurface: source-clr
reviewed: 856d095fd5c478724b0760baf1ff6fab68e6a68aeb4c91df4ffc8d1e0f791f8d
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Remarks

The factory receives the session identity. The returned sink receives only this session's entries and is disposed during retirement when it implements `IDisposable`. A null factory leaves logging to the host router's existing sinks.
