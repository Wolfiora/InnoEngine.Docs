---
uid: api.894ee9d58f7e04963f9e128f44bce573a062f9b0023c23fb4d58c7279aaee7c4
symbol: "engine:Inno.Core.Logging:M:Inno.Core.Logging.LogRouter.Dispose"
source: xml
reviewed: 4ec914334b1cf1c91d50327b5945a1c477739dc759af8e254d79fb89bf9c58d4
title: "LogRouter.Dispose"
kind: api
owners: [Inno.Core.Logging]
apiSurface: source-clr
---

Drains pending entries, stops the worker, and disposes every sink still owned by this router.

## Exceptions

**Exception `T:System.InvalidOperationException`:** A delivery callback attempts to dispose its own router.

**Exception `T:System.AggregateException`:** One or more owned sinks fail to dispose after pending entries have drained.
