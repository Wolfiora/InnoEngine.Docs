---
uid: api.921bc8d7c3dbbb014b1a3d90814cc94828c2fdf43f2010d30a69a434b7762f88
symbol: "engine:Inno.Shell:M:Inno.Shell.ScheduledShellFrameDriver.RunAsync(System.Func{System.Boolean},System.Threading.CancellationToken)"
source: xml
reviewed: 988358e0da7d92e610a05e0ace5b800c13c848ec73be2b88f22f58550b98a818
title: "RunAsync"
kind: api
owners: [Inno.Shell]
apiSurface: source-clr
---

Advances frames until the callback stops the loop, cancellation is requested or a callback fails.

**Parameter `advanceFrame`:** The owner-thread frame callback; false terminates the loop.

**Parameter `cancellationToken`:** Cancels before the next frame can execute.

**Returns:** Completion when the callback stops; cancellation and callback failures propagate to the owner.

**Exception `T:System.ArgumentNullException`:** The frame callback is null.

**Exception `T:System.OperationCanceledException`:** Cancellation was requested before a frame.
