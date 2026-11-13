---
uid: api.b3bcbf1a6998ecc6a5e818f904058fb40b7d669905f95940f0fedc49a785fcc8
symbol: "engine:Inno.Shell:M:Inno.Shell.IShellFrameDriver.RunAsync(System.Func{System.Boolean},System.Threading.CancellationToken)"
source: xml
reviewed: 2fcd90c8fba67938243b8f148a89f4330419a8e7a8331916a3c61fe03c5da6c1
title: "RunAsync"
kind: api
owners: [Inno.Shell]
apiSurface: source-clr
---

Schedules frames on the owning thread until a frame callback requests termination.

**Parameter `advanceFrame`:** Executes one frame and returns true when the host should schedule another frame.

**Parameter `cancellationToken`:** Requests termination before the next frame.

**Returns:** Completion after scheduling ends; callback failures must propagate to the shell.
