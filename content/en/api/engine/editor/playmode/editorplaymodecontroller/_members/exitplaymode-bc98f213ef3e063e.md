---
uid: api.bc98f213ef3e063ef27158caf20dc4a834cb33ef3a54d06dfd70d71852829f79
symbol: "engine:Inno.Editor.PlayMode:M:Inno.Editor.PlayMode.EditorPlayModeController.ExitPlayMode"
source: xml
reviewed: 6a2054fd21d5e3b18f99f19983e6219ed0e81318baeab01f07ab5316224f2d66
title: "ExitPlayMode"
kind: api
owners: [Inno.Editor.PlayMode]
apiSurface: source-clr
---

Requests cancellation, runtime-session disposal, or dismissal of a failed transition.

**Returns:** `true` when the current state accepted the request; otherwise, `false`.

**Exception `T:System.ObjectDisposedException`:** Thrown after the controller has been disposed.
