---
uid: api.db1ce518ce33219d36cdb67bc707ce98670fa179f7bff5808c7ef5cbf23b2e5e
symbol: "engine:Inno.Runtime:M:Inno.Runtime.RuntimeSession.EnterExecutionScope"
source: xml
reviewed: e7c1f9d0fac72232ea21126d262e91e94d8d09ba81e2d3a68c5d926be473add5
title: "RuntimeSession.EnterExecutionScope"
kind: api
owners: [Inno.Runtime]
apiSurface: source-clr
---

Binds this session's script façades to the current asynchronous execution context.

**Returns:** A strict last-in-first-out scope owned by the caller.

**Exception `T:System.ObjectDisposedException`:** Thrown when this session has been disposed.
