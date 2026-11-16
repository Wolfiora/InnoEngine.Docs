---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.894ee9d58f7e04963f9e128f44bce573a062f9b0023c23fb4d58c7279aaee7c4
symbol: engine:Inno.Core.Logging:M:Inno.Core.Logging.LogRouter.Dispose
title: LogRouter.Dispose
kind: api
owners:
- Inno.Core.Logging
apiSurface: source-clr
reviewed: ac9921ca55f729ff00dd7dc89850be422900db039240420f6431fbc05a2b71cd
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Exceptions

**Exception `T:System.InvalidOperationException`:** A delivery callback attempts to dispose its own router.

**Exception `T:System.AggregateException`:** One or more owned sinks fail to dispose after pending entries have drained.
