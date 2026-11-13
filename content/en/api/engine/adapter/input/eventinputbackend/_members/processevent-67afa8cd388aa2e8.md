---
uid: api.67afa8cd388aa2e88aa3750ffe83efc3839ef037429305b2c4f2959a021d2755
symbol: "engine:Inno.Adapter.Input:M:Inno.Adapter.Input.EventInputBackend.ProcessEvent(Inno.Core.Events.Event)"
source: xml
reviewed: e88a8ccc707047d14d3978861e69363d1635bc45536cb5d7051eddfed59662b7
title: "ProcessEvent"
kind: api
owners: [Inno.Adapter.Input]
apiSurface: source-clr
---

Applies one backend-neutral event translated by the owning platform application.

**Parameter `evnt`:** The event observed before runtime dispatch.

**Exception `T:System.ArgumentNullException`:** Thrown when `evnt` is null.

**Exception `T:System.ObjectDisposedException`:** Thrown after this backend is disposed.
