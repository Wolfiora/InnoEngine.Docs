---
uid: api.faa2b7644f64604017b6dce1c5d7f519cd4f42f1f579a79618d562e02fcdaf1e
symbol: "engine:Inno.Runtime:M:Inno.Runtime.RuntimeSession.Tick(System.Single)"
source: xml
reviewed: 1d83eb2f324815ef4f968306fbfdcc63115f609a585d4ff908b1bb8cb73cd094
title: "RuntimeSession.Tick"
kind: api
owners: [Inno.Runtime]
apiSurface: source-clr
---

Advances session events, jobs, coroutines, and scene lifecycle by one frame.

**Parameter `deltaTime`:** The elapsed frame time in seconds; negative values are treated as zero.

**Exception `T:System.ObjectDisposedException`:** Thrown when this session has been disposed.

**Exception `T:Inno.Core.Execution.RetirementPendingException`:** A faulted generation still owns live dependencies and cannot execute another frame.
