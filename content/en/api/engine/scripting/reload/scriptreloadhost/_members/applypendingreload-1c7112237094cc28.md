---
uid: api.1c7112237094cc28fceb6143195a5a10a669236d47404dfa6896ea0170a2c2d6
symbol: "engine:Inno.Scripting.Reload:M:Inno.Scripting.Reload.ScriptReloadHost.ApplyPendingReload"
source: xml
reviewed: dfafe0fa3ccb2668588ccd0e9ea91fa0d7278e13c3ae4eb8a35714b9267dab4e
title: "ApplyPendingReload"
kind: api
owners: [Inno.Scripting.Reload]
apiSurface: source-clr
---

Applies the latest compiled generation, or commits a Plugin-unavailability generation when changed Plugin code cannot produce a replacement, at a caller-controlled main-thread safe point.

**Returns:** `true` when modules were replaced or retired; otherwise, `false`.

**Exception `T:System.ObjectDisposedException`:** Thrown after the manager has been disposed.
