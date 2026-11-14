---
uid: api.b6d2bca9dffcfadc748a03dd83f9610e72523de9a3d2a7df61eba7ca48644f0d
symbol: "engine:Inno.Core.Logging:M:Inno.Core.Logging.LogRouter.RegisterSink(Inno.Core.Logging.ILogSink)"
source: xml
reviewed: ed7be0fc8a28679d64b8963007967ef0360cfe1674d3d5bb34feaaac671ffea2
title: "LogRouter.RegisterSink"
kind: api
owners: [Inno.Core.Logging]
apiSurface: source-clr
---

Registers a sink to receive future entries from this router.

## Parameters

**Parameter `sink`:** The sink to register exactly once.

## Exceptions

**Exception `T:System.ArgumentNullException`:** Thrown when `sink` is null.

**Exception `T:System.ObjectDisposedException`:** Thrown after this router has been disposed.
