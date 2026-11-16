---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.b17eee1ddcffd3d5fc80e3903d80eb32d271696f51a9ef91af3e07c47c7e80a4
symbol: engine:Inno.Core.Logging:M:Inno.Core.Logging.LogRouter.Dispatch(Inno.Core.Logging.LogEntry)
title: LogRouter.Dispatch
kind: api
owners:
- Inno.Core.Logging
apiSurface: source-clr
reviewed: b3b4b9a8711183b6ee09a8480a09bc5c410e21589f20224cc5e5405dccc85347
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `entry`:** The entry to dispatch when it satisfies the current severity policy.

## Exceptions

**Exception `T:System.InvalidOperationException`:** The bounded queue is full and the producer must apply backpressure.

**Exception `T:System.ObjectDisposedException`:** Thrown after this router has been disposed.
