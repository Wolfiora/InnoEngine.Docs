---
uid: api.87cf43e2af9fb31cc4d52e15780698e8bd3d932ad97fb167e7ed42c823c37b31
symbol: "engine:Inno.Core.Execution:M:Inno.Core.Execution.LifetimeScope.RunAsync\u0060\u00601(System.Func{System.Threading.CancellationToken,System.Threading.Tasks.ValueTask{\u0060\u00600}},System.Threading.CancellationToken)"
source: xml
reviewed: 34fc3959ccb83ec9d820218c40664a299028f00ada2bd795ea27a80f9301581a
title: "RunAsync"
kind: api
owners: [Inno.Core.Execution]
apiSurface: source-clr
---

Atomically admits and tracks asynchronous work under this owner's cancellation boundary.

**Type parameter `TResult`:** The operation result type.

**Parameter `operation`:** The operation, which must observe the supplied token and must not require owner-thread completion.

**Parameter `cancellationToken`:** Additional cancellation requested by the caller.

**Returns:** The tracked result, cancellation or operation failure.

**Exception `T:System.InvalidOperationException`:** Retirement has begun or work capacity is exhausted; the operation is not invoked.
