---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.dd5db3ab2dd6c9f4c968c50e54a169d5ea3326cdb767fd1bf7ab39e7e74c02f7
symbol: engine:Inno.Core.Layers:M:Inno.Core.Layers.LayerStack.Clear
title: LayerStack.Clear
kind: api
owners:
- Inno.Core.Layers
apiSurface: source-clr
sourceFingerprint: 3efe0bb89b47e4019c79cf94b96d5dfdabd09a9d99597dd35ea6bab9af1c646a
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
