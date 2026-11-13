---
uid: api.c58b1957738a31355da4bf72bfb61f01864b722e49f0eaa9dab945ad31a08b3d
symbol: "engine:Inno.Scripting.Reload:M:Inno.Scripting.Reload.ScriptReloadHost.ReloadScripting"
source: xml
reviewed: 2e80368e427b744fb26ce3fc086f1b30ec90baf723e03fcdae1f1e356ca31422
title: "ReloadScripting"
kind: api
owners: [Inno.Scripting.Reload]
apiSurface: source-clr
---

Queues a complete rebuild of both scripting load contexts while retaining the plugin generation. Valid cached artifacts are reused.

**Exception `T:System.ObjectDisposedException`:** Thrown after the manager has been disposed.
