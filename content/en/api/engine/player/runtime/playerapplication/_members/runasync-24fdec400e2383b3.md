---
uid: api.24fdec400e2383b3eff322d6fabfadf5f8b28fdc7b8757cfbb42802b0dffdf6a
symbol: "engine:Inno.Player.Runtime:M:Inno.Player.Runtime.PlayerApplication.RunAsync(Inno.Player.Runtime.PlayerLaunchOptions,System.Threading.CancellationToken)"
source: xml
reviewed: b98f6d31e077396f12bc902c1f81d95d56c45903c1a3193dace44997a3881eaa
title: "RunAsync"
kind: api
owners: [Inno.Player.Runtime]
apiSurface: source-clr
---

Runs a frozen game deployment using explicitly supplied host services.

**Parameter `options`:** The prepared content and platform service composition.

**Parameter `cancellationToken`:** Requests termination of frame scheduling.

**Returns:** Zero after orderly shutdown; startup, execution and retirement failures propagate.

## Remarks

Hosts must preserve their owner thread across asynchronous startup and frame callbacks using their synchronization context. A blocking host can use OwnerThreadExecution.Run.

**Exception `T:System.ArgumentNullException`:** Options or a required host service is null.

**Exception `T:System.OperationCanceledException`:** Frame scheduling was canceled.

**Exception `T:System.IO.InvalidDataException`:** Deployment metadata, linked code, or the prepared content identity is inconsistent.

**Exception `T:System.InvalidOperationException`:** A host factory does not provide its required product, or runtime startup or retirement fails.
