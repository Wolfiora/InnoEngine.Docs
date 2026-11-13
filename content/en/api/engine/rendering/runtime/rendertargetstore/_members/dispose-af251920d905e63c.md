---
uid: api.af251920d905e63ca9042fd2753c6f57df590423fa323f7fc20dd0e56b66f967
symbol: "engine:Inno.Rendering.Runtime:M:Inno.Rendering.Runtime.RenderTargetStore.Dispose"
source: xml
reviewed: f5dbb4fffebfd3e34741e14071f04b0fb0ce9e5554808dbd465d5afc608f58ec
title: "Dispose"
kind: api
owners: [Inno.Rendering.Runtime]
apiSurface: source-clr
---

Queues all owned resources for device-safe destruction.

**Exception `T:Inno.Core.Execution.RetirementPendingException`:** A backend resource is still active. Remaining resources stay owned until disposal is retried.

**Exception `T:System.AggregateException`:** Quiescent resources were all attempted, but one or more backend releases failed.
