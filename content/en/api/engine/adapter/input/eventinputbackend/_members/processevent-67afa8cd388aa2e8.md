---
uid: api.67afa8cd388aa2e88aa3750ffe83efc3839ef037429305b2c4f2959a021d2755
symbol: "engine:Inno.Adapter.Input:M:Inno.Adapter.Input.EventInputBackend.ProcessEvent(Inno.Core.Events.Event)"
source: xml
reviewed: 321a9e425a8d0aa3ecd3dbf5ec21013656742bfc1e9547c488834ea7797486f3
title: "ProcessEvent"
kind: api
owners: [Inno.Adapter.Input]
apiSurface: source-clr
---

Applies one backend-neutral event translated by the owning platform application.

**Parameter `evnt`:** The event observed before runtime dispatch.

**Exception `T:System.ArgumentNullException`:** Thrown when `evnt` is null.

**Exception `T:System.ObjectDisposedException`:** Thrown after this backend is disposed.
