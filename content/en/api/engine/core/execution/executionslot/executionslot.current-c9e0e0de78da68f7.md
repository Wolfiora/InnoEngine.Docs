---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.c9e0e0de78da68f715e94b0ceca4fe6989e5db061fa1f6df5184f78af7f1f9c2
symbol: engine:Inno.Core.Execution:P:Inno.Core.Execution.ExecutionSlot`1.current
title: ExecutionSlot<TValue>.current
kind: api
owners:
- Inno.Core.Execution
apiSurface: source-clr
reviewed: 43e11bf675c8cccd2f1482323b948ffb99715008c1ea502198e3fc760b4e6301

# Authoring metadata. Edit these fields and the explanation below.
source: xml
outdated: false
---

Gets the current live value, rejecting expired or wrong-thread bindings.

## Exceptions

**Exception `T:System.InvalidOperationException`:** No live binding exists on the permitted thread.
