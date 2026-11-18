---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.b2049035ebd12ca740b5f48e41fdb9e93b58c1e4aa9d147695eb29a3925fe324
symbol: engine:Inno.Editor.Scene:M:Inno.Editor.Scene.IEditorGameScenePresentation.Capture
title: IEditorGameScenePresentation.Capture
kind: api
owners:
- Inno.Editor.Scene
apiSurface: source-clr
sourceFingerprint: c942acf737786f071f3b6d8ca583f4cbf81ba3e1166a5a86a7200b13b00df951
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Returns

A caller-owned identity scope for the Edit scenes while not playing and the isolated Play scenes after Play Mode commits. Dispose it after consumption; it retains no scene instances and stale identities never resolve to a replacement session or generation.
