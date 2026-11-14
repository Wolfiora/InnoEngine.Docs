---
uid: api.c9e0e0de78da68f715e94b0ceca4fe6989e5db061fa1f6df5184f78af7f1f9c2
symbol: "engine:Inno.Core.Execution:P:Inno.Core.Execution.ExecutionSlot\u00601.current"
source: xml
reviewed: 43e11bf675c8cccd2f1482323b948ffb99715008c1ea502198e3fc760b4e6301
title: "ExecutionSlot\u003CTValue\u003E.current"
kind: api
owners: [Inno.Core.Execution]
apiSurface: source-clr
---

Gets the current live value, rejecting expired or wrong-thread bindings.

## Exceptions

**Exception `T:System.InvalidOperationException`:** No live binding exists on the permitted thread.
