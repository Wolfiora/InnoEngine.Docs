---
uid: api.db1ce518ce33219d36cdb67bc707ce98670fa179f7bff5808c7ef5cbf23b2e5e
symbol: "engine:Inno.Runtime:M:Inno.Runtime.RuntimeSession.EnterExecutionScope"
source: xml
reviewed: fbb1c32c3f54170ed71e2911aaaff4ab4fde388e73fe188317affe9e90486cf9
title: "EnterExecutionScope"
kind: api
owners: [Inno.Runtime]
apiSurface: source-clr
---

Binds this session's script façades to the current asynchronous execution context.

**Returns:** A strict last-in-first-out scope owned by the caller.

**Exception `T:System.ObjectDisposedException`:** Thrown when this session has been disposed.
