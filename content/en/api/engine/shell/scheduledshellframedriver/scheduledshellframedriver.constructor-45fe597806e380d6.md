---
uid: api.45fe597806e380d6b1187ba989c585e5b0bb63796c73c6a9f1911294c6ea2493
symbol: "engine:Inno.Shell:M:Inno.Shell.ScheduledShellFrameDriver.#ctor(System.Func{System.Threading.CancellationToken,System.Threading.Tasks.ValueTask})"
source: xml
reviewed: 25c330014a5c2b762ca10205bb405427822c586ec2a0723a6acb0425f32aec9d
title: "ScheduledShellFrameDriver.Constructor"
kind: api
owners: [Inno.Shell]
apiSurface: source-clr
---

Creates a driver whose scheduling callback resumes on the frame owner's thread.

**Parameter `nextFrame`:** The callback that waits for a presentation opportunity and observes cancellation.

**Exception `T:System.ArgumentNullException`:** The callback is null.
