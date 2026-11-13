---
uid: api.610bb042170b5b50a1004d99f07c475c8bbd633ce9115b8307830b8e3ecd7d4c
symbol: "engine:Inno.Rendering.Runtime:M:Inno.Rendering.Runtime.RenderRuntime.EnterExecutionScope"
source: xml
reviewed: 9de867d558f004a037140e09af9ac8d8bbbb9568a13e09bfc1bec3ffdd793627
title: "EnterExecutionScope"
kind: api
owners: [Inno.Rendering.Runtime]
apiSurface: source-clr
---

Binds this rendering runtime to script-facing graphics APIs for the current asynchronous execution flow.

**Returns:** A strict last-in-first-out execution scope owned by the caller.

**Exception `T:System.ObjectDisposedException`:** Thrown when this rendering runtime has been disposed.

**Exception `T:System.InvalidOperationException`:** Retirement has started or generation cleanup has faulted the owner.
