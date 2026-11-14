---
uid: api.bd88e01a720fe2bb528fd838a9fec98888634334d7cdf1fa8a6a7a06a6c6e7ba
symbol: "engine:Inno.Editor.ImGui:M:Inno.Editor.ImGui.EditorStyleMetrics.SetCompactMode(System.Boolean)"
source: xml
reviewed: b5cf2e68deb9c7631ef2bb9c97db4ed6b24cc2b1216fb83ef7d470ef2ebd90fe
title: "EditorStyleMetrics.SetCompactMode"
kind: api
owners: [Inno.Editor.ImGui]
apiSurface: source-clr
---

Requests comfortable or compact density without changing an active session frame.

**Parameter `value`:** `true` for compact density.

**Returns:** `true` when the requested density changed; owned drawing applies it at the next frame preparation.

**Exception `T:System.ObjectDisposedException`:** The owning session has retired or is no longer available.

**Exception `T:System.InvalidOperationException`:** The caller is not the owning session's thread.
