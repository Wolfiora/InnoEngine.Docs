---
uid: api.b17eee1ddcffd3d5fc80e3903d80eb32d271696f51a9ef91af3e07c47c7e80a4
symbol: "engine:Inno.Core.Logging:M:Inno.Core.Logging.LogRouter.Dispatch(Inno.Core.Logging.LogEntry)"
source: xml
reviewed: 081cb3b8379ed15eaba883ef0ea1be9d3a51792eb1a97e4b6d901d5aa41a5c9f
title: "LogRouter.Dispatch"
kind: api
owners: [Inno.Core.Logging]
apiSurface: source-clr
---

Queues an immutable entry under the configured worker or inline delivery policy.

**Parameter `entry`:** The entry to dispatch when it satisfies the current severity policy.

**Exception `T:System.InvalidOperationException`:** The bounded queue is full and the producer must apply backpressure.

**Exception `T:System.ObjectDisposedException`:** Thrown after this router has been disposed.
