---
uid: api.ee538fd11d92f4c8afd3046d0f1f51e4c5ce6b34477559bc3c9eb7b3535312d3
symbol: "engine:Inno.Adapter.Platform:P:Inno.Adapter.Platform.INativeWindowSurface.nativeHandles"
source: xml
reviewed: b6fc692fc90887183ad60dc76fafcc00ee618c1e7c04cb20959b3db64635220f
title: "INativeWindowSurface.nativeHandles"
kind: api
owners: [Inno.Adapter.Platform]
apiSurface: source-clr
---

Gets handles owned by the live window; consumers must neither free nor retain them beyond its lifetime.

## Exceptions

**Exception `T:System.ObjectDisposedException`:** The owning window has been released.
