---
uid: api.7a1950d01aa7a487398aa1af8d94b66e0c1b95ece7ae2ac0b1c754cf1f9bc5a9
symbol: "scripting:Inno.Scene:P:InnoEngine.Scene.GameScene.hierarchyRevision"
source: xml
reviewed: ef440cac9a8c0b5aca80728ef11bb025abde418182400c51fef2cff452cd6894
title: "GameScene.hierarchyRevision"
kind: api
owners: [Inno.Scene]
apiSurface: editor-script
apiScope: Runtime
---

Gets the owner-local change counter for object membership, parentage and sibling ordering.

## Remarks

Use this counter only to invalidate derived views of this live scene. It is not a persistent identity, data format or guarantee that object properties remain unchanged.
