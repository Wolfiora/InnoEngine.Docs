---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.24fdec400e2383b3eff322d6fabfadf5f8b28fdc7b8757cfbb42802b0dffdf6a
symbol: engine:Inno.Player.Runtime:M:Inno.Player.Runtime.PlayerApplication.RunAsync(Inno.Player.Runtime.PlayerLaunchOptions,System.Threading.CancellationToken)
title: PlayerApplication.RunAsync
kind: api
owners:
- Inno.Player.Runtime
apiSurface: source-clr
sourceFingerprint: 6b85e639de0da2ad7d2cc7d7ca9182c28d5ab944f45b845e18e02f25d1e08612
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `options`:** The prepared content and platform service composition.

**Parameter `cancellationToken`:** Requests termination of frame scheduling.

## Returns

Zero after orderly shutdown; startup, execution and retirement failures propagate.

## Exceptions

**Exception `T:System.ArgumentNullException`:** Options or a required host service is null.

**Exception `T:System.OperationCanceledException`:** Frame scheduling was canceled.

**Exception `T:System.IO.InvalidDataException`:** Deployment metadata, linked code, or the prepared content identity is inconsistent.

**Exception `T:System.InvalidOperationException`:** A host factory does not provide its required product, or runtime startup or retirement fails.

## Remarks

Hosts must preserve their owner thread across asynchronous startup and frame callbacks using their synchronization context. A blocking host can use OwnerThreadExecution.Run.
