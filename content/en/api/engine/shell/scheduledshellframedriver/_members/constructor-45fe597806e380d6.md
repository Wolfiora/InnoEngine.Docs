---
uid: api.45fe597806e380d6b1187ba989c585e5b0bb63796c73c6a9f1911294c6ea2493
symbol: "engine:Inno.Shell:M:Inno.Shell.ScheduledShellFrameDriver.#ctor(System.Func{System.Threading.CancellationToken,System.Threading.Tasks.ValueTask})"
source: xml
reviewed: 2a490b28938f09c2f826d045e7805b513894bc8bfb7a24d39bd86b307fd89b03
title: "Constructor"
kind: api
owners: [Inno.Shell]
apiSurface: source-clr
---

Creates a driver whose scheduling callback resumes on the frame owner's thread.

**Parameter `nextFrame`:** The callback that waits for a presentation opportunity and observes cancellation.

**Exception `T:System.ArgumentNullException`:** The callback is null.
