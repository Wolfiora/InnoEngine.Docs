---
uid: api.7a1950d01aa7a487398aa1af8d94b66e0c1b95ece7ae2ac0b1c754cf1f9bc5a9
symbol: "scripting:Inno.Scene:P:InnoEngine.Scene.GameScene.hierarchyRevision"
source: xml
reviewed: 7bc75f1363ab6031fe1b236b6e9f38fd6698f4ec79f54bb0582ccaaee4e4f72c
title: "hierarchyRevision"
kind: api
owners: [Inno.Scene]
apiSurface: editor-script
apiScope: Runtime
---

Gets the owner-local change counter for object membership, parentage and sibling ordering.

## Remarks

Use this counter only to invalidate derived views of this live scene. It is not a persistent identity, data format or guarantee that object properties remain unchanged.
