---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.faa2b7644f64604017b6dce1c5d7f519cd4f42f1f579a79618d562e02fcdaf1e
symbol: engine:Inno.Runtime:M:Inno.Runtime.RuntimeSession.Tick(System.Single)
title: RuntimeSession.Tick
kind: api
owners:
- Inno.Runtime
apiSurface: source-clr
sourceFingerprint: a3c8827c86aeba28bb4081f2a77992f9e94f5f50433cca7464aa3bce0e97dddd
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `deltaTime`:** The elapsed frame time in seconds; negative values are treated as zero.

## Exceptions

**Exception `T:System.ObjectDisposedException`:** Thrown when this session has been disposed.

**Exception `T:Inno.Core.Execution.RetirementPendingException`:** A faulted generation still owns live dependencies and cannot execute another frame.
