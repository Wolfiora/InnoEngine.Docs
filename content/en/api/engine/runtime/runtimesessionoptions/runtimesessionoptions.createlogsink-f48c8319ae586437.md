---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.f48c8319ae5864375443d14317800b7e6411c19a2094c4f11e292c5306f03842
symbol: engine:Inno.Runtime:P:Inno.Runtime.RuntimeSessionOptions.createLogSink
title: RuntimeSessionOptions.createLogSink
kind: api
owners:
- Inno.Runtime
apiSurface: source-clr
reviewed: 4b5c4b2bc0983549b3fe638ae56449c71e6a5be6dc7d814f74b0d940e44e9db3
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Remarks

The factory receives the session identity. The returned sink receives only this session's entries and is disposed during retirement when it implements `IDisposable`. A null factory leaves logging to the host router's existing sinks.
