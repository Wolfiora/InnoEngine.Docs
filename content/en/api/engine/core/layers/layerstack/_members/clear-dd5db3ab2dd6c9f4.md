---
uid: api.dd5db3ab2dd6c9f4c968c50e54a169d5ea3326cdb767fd1bf7ab39e7e74c02f7
symbol: "engine:Inno.Core.Layers:M:Inno.Core.Layers.LayerStack.Clear"
source: xml
reviewed: 027827f68f2a4f6383419ccccf0ec7bb1eab0016e91c5f97195fea6c88afb48a
title: "Clear"
kind: api
owners: [Inno.Core.Layers]
apiSurface: source-clr
---

Detaches every layer in top-to-bottom order while keeping this stack reusable.

**Exception `T:Inno.Core.Execution.RetirementPendingException`:** Cleanup is incomplete. The remaining layers stay owned; only Clear or Dispose may resume cleanup.

**Exception `T:System.AggregateException`:** Thrown after cleanup completes when multiple layers fail to detach.

**Exception `T:System.ObjectDisposedException`:** Thrown when this stack has been disposed.
