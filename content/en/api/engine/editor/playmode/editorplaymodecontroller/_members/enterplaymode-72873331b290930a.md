---
uid: api.72873331b290930ac2113c368e40aba6ddef775ce6c150d39cb5e5f370976669
symbol: "engine:Inno.Editor.PlayMode:M:Inno.Editor.PlayMode.EditorPlayModeController.EnterPlayMode"
source: xml
reviewed: 235e0a201463412fcb4dac269630dd7224a6722e4cb54b7f1165b5e9190649dd
title: "EnterPlayMode"
kind: api
owners: [Inno.Editor.PlayMode]
apiSurface: source-clr
---

Requests a fresh script generation before preparing an isolated runtime session.

**Returns:** `true` when the controller accepted a new request; otherwise, `false`.

**Exception `T:System.ObjectDisposedException`:** Thrown after the controller has been disposed.
