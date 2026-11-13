---
uid: api.8e841cf1498586570dfded1ff08ed72df281b91a549ab2a9b5137ccbe4df6443
symbol: "engine:Inno.Core.Logging:M:Inno.Core.Logging.LogRouter.UnregisterSink(Inno.Core.Logging.ILogSink)"
source: xml
reviewed: 994407cd43fe486cca4d3e3c8c00d42ed4c3536beb04001a10dfad06c9dfb033
title: "UnregisterSink"
kind: api
owners: [Inno.Core.Logging]
apiSurface: source-clr
---

Removes a sink from subsequent delivery snapshots without disposing it.

## Remarks

An in-flight batch may still borrow the previous snapshot. This operation does not wait for its callbacks; the host must coordinate quiescence before releasing sink resources. Router disposal releases only sinks that remain registered.

**Parameter `sink`:** The sink to remove when registered.

**Exception `T:System.ArgumentNullException`:** Thrown when `sink` is null.
