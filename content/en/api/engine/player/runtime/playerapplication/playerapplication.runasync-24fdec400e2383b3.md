---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.24fdec400e2383b3eff322d6fabfadf5f8b28fdc7b8757cfbb42802b0dffdf6a
symbol: engine:Inno.Player.Runtime:M:Inno.Player.Runtime.PlayerApplication.RunAsync(Inno.Player.Runtime.PlayerLaunchOptions,System.Threading.CancellationToken)
title: PlayerApplication.RunAsync
kind: api
owners:
- Inno.Player.Runtime
apiSurface: source-clr
reviewed: 3ad555f90e3c6a035a556197273e16fe5c33b54d7fb19315ce792593c34652e9
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

## Remarks

Hosts must preserve their owner thread across asynchronous startup and frame callbacks using their synchronization context. A blocking host can use OwnerThreadExecution.Run.

## Exceptions

**Exception `T:System.ArgumentNullException`:** Options or a required host service is null.

**Exception `T:System.OperationCanceledException`:** Frame scheduling was canceled.

**Exception `T:System.IO.InvalidDataException`:** Deployment metadata, linked code, or the prepared content identity is inconsistent.

**Exception `T:System.InvalidOperationException`:** A host factory does not provide its required product, or runtime startup or retirement fails.
