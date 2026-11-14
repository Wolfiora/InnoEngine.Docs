---
uid: api.39978e1e22eca6207a901f943b8919fd1305895fe648f5785e709d1a0bf4630b
symbol: "engine:Inno.Runtime.Contracts:M:Inno.Runtime.Contracts.RuntimeSubsystem.OwnFrameScope(System.IDisposable)"
source: xml
reviewed: 2a96bd5fb95af8200cdac6c2061b1fbe94e1e427ed2d35b623ff0dc0afacd9e6
title: "RuntimeSubsystem.OwnFrameScope"
kind: api
owners: [Inno.Runtime.Contracts]
apiSurface: source-clr
---

Registers a binding that must close even when a frame hook fails.

**Parameter `scope`:** The newly entered execution scope.

**Exception `T:System.InvalidOperationException`:** No subsystem frame is open.
