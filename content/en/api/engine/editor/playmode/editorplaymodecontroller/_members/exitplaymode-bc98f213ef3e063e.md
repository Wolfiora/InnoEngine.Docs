---
uid: api.bc98f213ef3e063ef27158caf20dc4a834cb33ef3a54d06dfd70d71852829f79
symbol: "engine:Inno.Editor.PlayMode:M:Inno.Editor.PlayMode.EditorPlayModeController.ExitPlayMode"
source: xml
reviewed: f12ab87b96c4db030bd24269d0d00fabb04ccf61130bc51079824e0449e59a65
title: "ExitPlayMode"
kind: api
owners: [Inno.Editor.PlayMode]
apiSurface: source-clr
---

Requests cancellation, runtime-session disposal, or dismissal of a failed transition.

**Returns:** `true` when the current state accepted the request; otherwise, `false`.

**Exception `T:System.ObjectDisposedException`:** Thrown after the controller has been disposed.
