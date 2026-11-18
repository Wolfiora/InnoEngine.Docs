---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.2484367e5af4f3020df8268e22c8dd1fa0e553cc2a8da66559c5edf3b36e4eaf
symbol: engine:Inno.Shell:M:Inno.Shell.PollingShellFrameDriver.RunAsync(System.Func{System.Boolean},System.Threading.CancellationToken)
title: PollingShellFrameDriver.RunAsync
kind: api
owners:
- Inno.Shell
apiSurface: source-clr
sourceFingerprint: 30aa4e6c4f48ee013a10472faeb9d27d067056a606fc03101ccdf02f471ee1fe
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `advanceFrame`:** The owner-thread frame callback; false terminates the loop.

**Parameter `cancellationToken`:** Cancels before the next frame can execute.

## Returns

Completion when the callback stops; cancellation and callback failures propagate to the owner.

## Exceptions

**Exception `T:System.ArgumentNullException`:** The frame callback is null.

**Exception `T:System.OperationCanceledException`:** Cancellation was requested before a frame.
