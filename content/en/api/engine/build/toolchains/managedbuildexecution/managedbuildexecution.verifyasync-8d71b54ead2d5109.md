---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.8d71b54ead2d5109febf64bb062d45f6698174bb65ba5a33187bb474f94ccdb0
symbol: engine:Inno.Build.Toolchains:M:Inno.Build.Toolchains.ManagedBuildExecution.VerifyAsync(System.Threading.CancellationToken)
title: ManagedBuildExecution.VerifyAsync
kind: api
owners:
- Inno.Build.Toolchains
apiSurface: source-clr
sourceFingerprint: a1bab3c172819dce22e9b610a97bbf5f4a173959cbae512a2e23a7b01335f399
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `cancellationToken`:** Cancels complete source verification before the consumer publishes its output.

## Returns

Completion only when every owned input remains unchanged.

## Exceptions

**Exception `T:System.InvalidOperationException`:** A tool changed a fixed input during execution.

**Exception `T:System.ObjectDisposedException`:** This execution no longer owns the workspace.
