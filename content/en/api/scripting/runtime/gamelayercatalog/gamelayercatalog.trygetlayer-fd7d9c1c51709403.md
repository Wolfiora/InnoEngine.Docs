---
uid: api.fd7d9c1c51709403118e874ac7e97900767c62a9e12f574cedbf9f5857f4dd4b
symbol: "scripting:Inno.Scene:M:InnoEngine.Scene.GameLayerCatalog.TryGetLayer(InnoEngine.Settings.ProjectId,InnoEngine.Scene.GameLayerId,InnoEngine.Scene.GameLayer@)"
source: xml
reviewed: 5b88cbd66dd3f4df4d53a4c51fc6dc952d6a171f3ebed981abd6de20bbfed232
title: "GameLayerCatalog.TryGetLayer"
kind: api
owners: [Inno.Scene]
apiSurface: editor-script
apiScope: Runtime
---

Tries to resolve a qualified identity to its compact runtime slot.

## Parameters

**Parameter `projectId`:** The current project namespace.

**Parameter `id`:** The complete layer identity.

**Parameter `layer`:** The resolved runtime slot.

## Returns

`true` when the identity belongs to this project and is defined.
