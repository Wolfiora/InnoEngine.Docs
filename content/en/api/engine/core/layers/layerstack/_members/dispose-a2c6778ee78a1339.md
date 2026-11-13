---
uid: api.a2c6778ee78a1339dc5441ebc5b4a8804d99f305470cfe194d38609fa35af3c8
symbol: "engine:Inno.Core.Layers:M:Inno.Core.Layers.LayerStack.Dispose"
source: xml
reviewed: 853a88b9061764adac4d95bd2d642f4d4ecdfff7ff9400707f8cd3f22b1bf7cc
title: "Dispose"
kind: api
owners: [Inno.Core.Layers]
apiSurface: source-clr
---

Detaches every layer and permanently releases this stack.

**Exception `T:Inno.Core.Execution.RetirementPendingException`:** A layer still owns live work. The current and lower layers remain owned until disposal is retried.

**Exception `T:System.AggregateException`:** Thrown after cleanup completes when multiple layers fail to detach.
