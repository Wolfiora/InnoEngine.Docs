---
uid: api.bd73b4d87fea3db605ef473ff9df1353096571b9c850598190803acb5985951c
symbol: "engine:Inno.Adapter.Input:M:Inno.Adapter.Input.EventInputSource.ProcessEvent(Inno.Core.Events.Event)"
source: xml
reviewed: c46e6dc5fcfe13b040f4cfccb698c651725e83d1d09d427af15cd5ff8ec9a829
title: "ProcessEvent"
kind: api
owners: [Inno.Adapter.Input]
apiSurface: source-clr
---

Dispatches one translated platform event to active session backends, honoring event consumption.

**Parameter `evnt`:** The backend-neutral event produced by a platform adapter.

**Exception `T:System.ArgumentNullException`:** Thrown when `evnt` is null.

**Exception `T:System.ObjectDisposedException`:** Thrown after this source has been disposed.
