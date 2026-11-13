---
uid: api.ee538fd11d92f4c8afd3046d0f1f51e4c5ce6b34477559bc3c9eb7b3535312d3
symbol: "engine:Inno.Adapter.Platform:P:Inno.Adapter.Platform.INativeWindowSurface.nativeHandles"
source: xml
reviewed: c6320bbbabb503dfe6f555d50ffa362e7a8171a16f731d1d6016a3807adedbaa
title: "nativeHandles"
kind: api
owners: [Inno.Adapter.Platform]
apiSurface: source-clr
---

Gets handles owned by the live window; consumers must neither free nor retain them beyond its lifetime.

**Exception `T:System.ObjectDisposedException`:** The owning window has been released.
