---
uid: api.39978e1e22eca6207a901f943b8919fd1305895fe648f5785e709d1a0bf4630b
symbol: "engine:Inno.Runtime.Contracts:M:Inno.Runtime.Contracts.RuntimeSubsystem.OwnFrameScope(System.IDisposable)"
source: xml
reviewed: af0271f5e834c461b69836cebf57baf1207d49c87032c1139cbacc3dcf4ac2c0
title: "OwnFrameScope"
kind: api
owners: [Inno.Runtime.Contracts]
apiSurface: source-clr
---

Registers a binding that must close even when a frame hook fails.

**Parameter `scope`:** The newly entered execution scope.

**Exception `T:System.InvalidOperationException`:** No subsystem frame is open.
