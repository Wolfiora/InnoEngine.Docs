---
uid: api.1c7112237094cc28fceb6143195a5a10a669236d47404dfa6896ea0170a2c2d6
symbol: "engine:Inno.Scripting.Reload:M:Inno.Scripting.Reload.ScriptReloadHost.ApplyPendingReload"
source: xml
reviewed: 9efc8d0d787a571cc2aa5db681778839f8bab20c7226e4e71b8e50471c13fecf
title: "ApplyPendingReload"
kind: api
owners: [Inno.Scripting.Reload]
apiSurface: source-clr
---

Applies the latest compiled generation, or commits a Plugin-unavailability generation when changed Plugin code cannot produce a replacement, at a caller-controlled main-thread safe point.

**Returns:** `true` when modules were replaced or retired; otherwise, `false`.

**Exception `T:System.ObjectDisposedException`:** Thrown after the manager has been disposed.
