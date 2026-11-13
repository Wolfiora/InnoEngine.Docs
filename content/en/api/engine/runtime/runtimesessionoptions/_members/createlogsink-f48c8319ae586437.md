---
uid: api.f48c8319ae5864375443d14317800b7e6411c19a2094c4f11e292c5306f03842
symbol: "engine:Inno.Runtime:P:Inno.Runtime.RuntimeSessionOptions.createLogSink"
source: xml
reviewed: e5a0d1d919b79fb2831a7be6e3799a3252101c14b2b82bdce0c44d8de58d9317
title: "createLogSink"
kind: api
owners: [Inno.Runtime]
apiSurface: source-clr
---

Gets or initializes the optional factory that transfers one session log sink to this session.

## Remarks

The factory receives the session identity. The returned sink receives only this session's entries and is disposed during retirement when it implements `IDisposable`. A null factory leaves logging to the host router's existing sinks.
