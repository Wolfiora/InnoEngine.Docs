---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.b2049035ebd12ca740b5f48e41fdb9e93b58c1e4aa9d147695eb29a3925fe324
symbol: engine:Inno.Editor.Scene:M:Inno.Editor.Scene.IEditorGameScenePresentation.Capture
title: IEditorGameScenePresentation.Capture
kind: api
owners:
- Inno.Editor.Scene
apiSurface: source-clr
reviewed: 0923416a413f444ff84a2c51134804edfa784b9bb48ba68bbc82334614fe061a
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Returns

A caller-owned identity scope for the Edit scenes while not playing and the isolated Play scenes after Play Mode commits. Dispose it after consumption; it retains no scene instances and stale identities never resolve to a replacement session or generation.
