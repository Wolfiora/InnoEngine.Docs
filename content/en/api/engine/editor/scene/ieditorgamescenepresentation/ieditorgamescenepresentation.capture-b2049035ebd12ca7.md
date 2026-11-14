---
uid: api.b2049035ebd12ca740b5f48e41fdb9e93b58c1e4aa9d147695eb29a3925fe324
symbol: "engine:Inno.Editor.Scene:M:Inno.Editor.Scene.IEditorGameScenePresentation.Capture"
source: xml
reviewed: 9f89e6d84360eba2c308db5c3c9a7540d9dc9405efac2dc8e36d5a408f279620
title: "IEditorGameScenePresentation.Capture"
kind: api
owners: [Inno.Editor.Scene]
apiSurface: source-clr
---

Captures one coherent game-scene presentation for the current Editor frame.

**Returns:** A caller-owned identity scope for the Edit scenes while not playing and the isolated Play scenes after Play Mode commits. Dispose it after consumption; it retains no scene instances and stale identities never resolve to a replacement session or generation.
