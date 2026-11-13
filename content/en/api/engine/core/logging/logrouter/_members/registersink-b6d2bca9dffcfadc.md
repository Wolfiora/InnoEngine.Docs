---
uid: api.b6d2bca9dffcfadc748a03dd83f9610e72523de9a3d2a7df61eba7ca48644f0d
symbol: "engine:Inno.Core.Logging:M:Inno.Core.Logging.LogRouter.RegisterSink(Inno.Core.Logging.ILogSink)"
source: xml
reviewed: 4c1a070ed91cd4ebc6a5fd1ee6ff024a27ff06328fe643f0bc3a4e9c35baab89
title: "RegisterSink"
kind: api
owners: [Inno.Core.Logging]
apiSurface: source-clr
---

Registers a sink to receive future entries from this router.

**Parameter `sink`:** The sink to register exactly once.

**Exception `T:System.ArgumentNullException`:** Thrown when `sink` is null.

**Exception `T:System.ObjectDisposedException`:** Thrown after this router has been disposed.
