---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.ecf7468d0a40fda66a1951f6a91af800c76a5fa5957c1d916a3a35407a06b78d
symbol: engine:Inno.Core.Logging:M:Inno.Core.Logging.LogRouter.Flush
title: LogRouter.Flush
kind: api
owners:
- Inno.Core.Logging
apiSurface: source-clr
reviewed: c3553b9a8d5fb88a0ba2c90623e5c799cec1a59bbd14088510a0d24bd23ba7f9
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Exceptions

**Exception `T:System.InvalidOperationException`:** A delivery callback attempts to wait for its own completion, or the queue cannot accept a flush barrier.

**Exception `T:System.ObjectDisposedException`:** Thrown after this router has been disposed.
