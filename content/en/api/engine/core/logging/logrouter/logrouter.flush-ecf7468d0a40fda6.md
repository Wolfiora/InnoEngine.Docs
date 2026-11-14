---
uid: api.ecf7468d0a40fda66a1951f6a91af800c76a5fa5957c1d916a3a35407a06b78d
symbol: "engine:Inno.Core.Logging:M:Inno.Core.Logging.LogRouter.Flush"
source: xml
reviewed: d0401497983be719b002705917add276dd34e099c065d74165b9967d15ea14c8
title: "LogRouter.Flush"
kind: api
owners: [Inno.Core.Logging]
apiSurface: source-clr
---

Blocks until every entry enqueued before this call has reached the current sink snapshot.

**Exception `T:System.InvalidOperationException`:** A delivery callback attempts to wait for its own completion, or the queue cannot accept a flush barrier.

**Exception `T:System.ObjectDisposedException`:** Thrown after this router has been disposed.
