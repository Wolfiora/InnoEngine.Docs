---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.921bc8d7c3dbbb014b1a3d90814cc94828c2fdf43f2010d30a69a434b7762f88
symbol: engine:Inno.Shell:M:Inno.Shell.ScheduledShellFrameDriver.RunAsync(System.Func{System.Boolean},System.Threading.CancellationToken)
title: ScheduledShellFrameDriver.RunAsync
kind: api
owners:
- Inno.Shell
apiSurface: source-clr
reviewed: 3047c88921086cf17c57ad6a7f5df05cf48dc4b6e1b49276dc3ca33c221940f8
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
