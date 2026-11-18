---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.ecf7468d0a40fda66a1951f6a91af800c76a5fa5957c1d916a3a35407a06b78d
symbol: engine:Inno.Core.Logging:M:Inno.Core.Logging.LogRouter.Flush
title: LogRouter.Flush
kind: api
owners:
- Inno.Core.Logging
apiSurface: source-clr
sourceFingerprint: 6603fce741aa820c1cf143c26e74e2b8e00f965043baa45de2b929dc4883cb6b
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Exceptions

**Exception `T:System.InvalidOperationException`:** A delivery callback attempts to wait for its own completion, or the queue cannot accept a flush barrier.

**Exception `T:System.ObjectDisposedException`:** Thrown after this router has been disposed.
