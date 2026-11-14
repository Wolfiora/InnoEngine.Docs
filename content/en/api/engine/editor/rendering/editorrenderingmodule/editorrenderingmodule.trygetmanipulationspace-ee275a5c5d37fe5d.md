---
uid: api.ee275a5c5d37fe5dad7d1969773f64e1aafdc54c678a50f47f468c767f88f891
symbol: "engine:Inno.Editor.Rendering:M:Inno.Editor.Rendering.EditorRenderingModule.TryGetManipulationSpace(System.String,Inno.Editor.Rendering.EditorViewportManipulationSpace@)"
source: xml
reviewed: 931209dbb0b61145d84119d3d587370183d4793a1425150858b3c2729150fdd3
title: "EditorRenderingModule.TryGetManipulationSpace"
kind: api
owners: [Inno.Editor.Rendering]
apiSurface: source-clr
---

Tries to get the manipulation space from the selected controller's latest contribution.

**Parameter `viewportId`:** Stable panel viewport identity.

**Parameter `space`:** Receives the latest exact view/projection contract.

**Returns:** `true` when the selected controller supplied a manipulation space.
