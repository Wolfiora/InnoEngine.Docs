---
uid: api.9dac0b3167dcc98c7990d4c76b345ce4df2796173cd4b7089c559345ac609063
symbol: "engine:Inno.Scene:M:Inno.Scene.Layers.GameLayerCatalog.TryGetLayer(Inno.Core.Settings.ProjectId,Inno.Scene.Layers.GameLayerId,Inno.Scene.Layers.GameLayer@)"
source: xml
reviewed: 3493c72994b9e84ae6227f5bff00c0c1891467d8098aa46d634175dff5eb639b
title: "TryGetLayer"
kind: api
owners: [Inno.Scene]
apiSurface: source-clr
---

Tries to resolve a qualified identity to its compact runtime slot.

**Parameter `projectId`:** The current project namespace.

**Parameter `id`:** The complete layer identity.

**Parameter `layer`:** The resolved runtime slot.

**Returns:** `true` when the identity belongs to this project and is defined.
