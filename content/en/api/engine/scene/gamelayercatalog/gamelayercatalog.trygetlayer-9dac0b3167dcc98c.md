---
uid: api.9dac0b3167dcc98c7990d4c76b345ce4df2796173cd4b7089c559345ac609063
symbol: "engine:Inno.Scene:M:Inno.Scene.Layers.GameLayerCatalog.TryGetLayer(Inno.Core.Settings.ProjectId,Inno.Scene.Layers.GameLayerId,Inno.Scene.Layers.GameLayer@)"
source: xml
reviewed: eb057ab33a3ac867c13840cd91f64356d10fd583bb302da6deb6877a19f9080e
title: "GameLayerCatalog.TryGetLayer"
kind: api
owners: [Inno.Scene]
apiSurface: source-clr
---

Tries to resolve a qualified identity to its compact runtime slot.

## Parameters

**Parameter `projectId`:** The current project namespace.

**Parameter `id`:** The complete layer identity.

**Parameter `layer`:** The resolved runtime slot.

## Returns

`true` when the identity belongs to this project and is defined.
