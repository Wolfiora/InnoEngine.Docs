---
uid: api.a2c6778ee78a1339dc5441ebc5b4a8804d99f305470cfe194d38609fa35af3c8
symbol: "engine:Inno.Core.Layers:M:Inno.Core.Layers.LayerStack.Dispose"
source: xml
reviewed: dc6dba3a215324e6848c146ec6ef389f499c8c5be333721e4ff3fd6f4f055819
title: "Dispose"
kind: api
owners: [Inno.Core.Layers]
apiSurface: source-clr
---

Detaches every layer and permanently releases this stack.

**Exception `T:Inno.Core.Execution.RetirementPendingException`:** A layer still owns live work. The current and lower layers remain owned until disposal is retried.

**Exception `T:System.AggregateException`:** Thrown after cleanup completes when multiple layers fail to detach.
