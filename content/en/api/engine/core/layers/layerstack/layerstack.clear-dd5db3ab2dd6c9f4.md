---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.dd5db3ab2dd6c9f4c968c50e54a169d5ea3326cdb767fd1bf7ab39e7e74c02f7
symbol: engine:Inno.Core.Layers:M:Inno.Core.Layers.LayerStack.Clear
title: LayerStack.Clear
kind: api
owners:
- Inno.Core.Layers
apiSurface: source-clr
reviewed: 2bd1812d6d98c17a8c8ed1e5cae9157e6c48c46408e03858e95fb7ec72123de0
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Exceptions

**Exception `T:Inno.Core.Execution.RetirementPendingException`:** Cleanup is incomplete. The remaining layers stay owned; only Clear or Dispose may resume cleanup.

**Exception `T:System.AggregateException`:** Thrown after cleanup completes when multiple layers fail to detach.

**Exception `T:System.ObjectDisposedException`:** Thrown when this stack has been disposed.
