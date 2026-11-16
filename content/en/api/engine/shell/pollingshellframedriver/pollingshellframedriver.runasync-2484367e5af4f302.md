---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.2484367e5af4f3020df8268e22c8dd1fa0e553cc2a8da66559c5edf3b36e4eaf
symbol: engine:Inno.Shell:M:Inno.Shell.PollingShellFrameDriver.RunAsync(System.Func{System.Boolean},System.Threading.CancellationToken)
title: PollingShellFrameDriver.RunAsync
kind: api
owners:
- Inno.Shell
apiSurface: source-clr
reviewed: 49a6ab2f98d2a6c2de0f5c8022a1a6a0b48850e8a6d73f65e6dde1e7e9ef7ff7
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
