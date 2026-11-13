---
uid: api.e996a1ea618a88e33420a6a449613761b76ea10dedeaeed2e6a22f1ed9378aa1
symbol: "engine:Inno.Editor.Scene:M:Inno.Editor.Scene.SceneEdits.CloseScene(Inno.Scene.GameScene,System.String)"
source: xml
reviewed: 1063f5833f41e30e3e7d5b5c04357e81526e1568a17181647f0a8f1cfd873565
title: "CloseScene"
kind: api
owners: [Inno.Editor.Scene]
apiSurface: source-clr
---

Closes one loaded scene without deleting its source asset and records a reversible document change.

**Parameter `scene`:** The loaded scene to close.

**Parameter `historyName`:** The user-facing history entry name.

**Returns:** `true` when the scene was closed and recorded.
