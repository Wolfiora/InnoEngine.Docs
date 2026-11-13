---
uid: api.c9e0e0de78da68f715e94b0ceca4fe6989e5db061fa1f6df5184f78af7f1f9c2
symbol: "engine:Inno.Core.Execution:P:Inno.Core.Execution.ExecutionSlot\u00601.current"
source: xml
reviewed: b7ef5ba6531ac26b03010e81dd1b2e3b4a24dcfa59ab956f8104c36e8550a14c
title: "current"
kind: api
owners: [Inno.Core.Execution]
apiSurface: source-clr
---

Gets the current live value, rejecting expired or wrong-thread bindings.

**Exception `T:System.InvalidOperationException`:** No live binding exists on the permitted thread.
