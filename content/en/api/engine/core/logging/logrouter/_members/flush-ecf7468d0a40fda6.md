---
uid: api.ecf7468d0a40fda66a1951f6a91af800c76a5fa5957c1d916a3a35407a06b78d
symbol: "engine:Inno.Core.Logging:M:Inno.Core.Logging.LogRouter.Flush"
source: xml
reviewed: 3c218809d1b55a20e8402c62bfc6f89805eaf52abc2fa8acf363d29b5df96948
title: "Flush"
kind: api
owners: [Inno.Core.Logging]
apiSurface: source-clr
---

Blocks until every entry enqueued before this call has reached the current sink snapshot.

**Exception `T:System.InvalidOperationException`:** A delivery callback attempts to wait for its own completion, or the queue cannot accept a flush barrier.

**Exception `T:System.ObjectDisposedException`:** Thrown after this router has been disposed.
