---
uid: api.bd73b4d87fea3db605ef473ff9df1353096571b9c850598190803acb5985951c
symbol: "engine:Inno.Adapter.Input:M:Inno.Adapter.Input.EventInputSource.ProcessEvent(Inno.Core.Events.Event)"
source: xml
reviewed: 7b27c950c7afc1a8a8f0e2c0e1a27cfcb0d0d905e95e4de11058692486786a8f
title: "EventInputSource.ProcessEvent"
kind: api
owners: [Inno.Adapter.Input]
apiSurface: source-clr
---

Dispatches one translated platform event to active session backends, honoring event consumption.

**Parameter `evnt`:** The backend-neutral event produced by a platform adapter.

**Exception `T:System.ArgumentNullException`:** Thrown when `evnt` is null.

**Exception `T:System.ObjectDisposedException`:** Thrown after this source has been disposed.
