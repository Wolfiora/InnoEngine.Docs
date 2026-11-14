---
uid: api.c58b1957738a31355da4bf72bfb61f01864b722e49f0eaa9dab945ad31a08b3d
symbol: "engine:Inno.Scripting.Reload:M:Inno.Scripting.Reload.ScriptReloadHost.ReloadScripting"
source: xml
reviewed: 16ef6e376c8125812edade8726068f37c53b3553fa3868383d9b73127b205f39
title: "ScriptReloadHost.ReloadScripting"
kind: api
owners: [Inno.Scripting.Reload]
apiSurface: source-clr
---

Queues a complete rebuild of both scripting load contexts while retaining the plugin generation. Valid cached artifacts are reused.

## Exceptions

**Exception `T:System.ObjectDisposedException`:** Thrown after the manager has been disposed.
