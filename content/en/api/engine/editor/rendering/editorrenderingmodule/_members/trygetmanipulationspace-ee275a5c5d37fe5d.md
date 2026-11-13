---
uid: api.ee275a5c5d37fe5dad7d1969773f64e1aafdc54c678a50f47f468c767f88f891
symbol: "engine:Inno.Editor.Rendering:M:Inno.Editor.Rendering.EditorRenderingModule.TryGetManipulationSpace(System.String,Inno.Editor.Rendering.EditorViewportManipulationSpace@)"
source: xml
reviewed: 29ef30d8de1a6b6306cc3f3d181eabf752af4550bce2316ffb011aad21136ab3
title: "TryGetManipulationSpace"
kind: api
owners: [Inno.Editor.Rendering]
apiSurface: source-clr
---

Tries to get the manipulation space from the selected controller's latest contribution.

**Parameter `viewportId`:** Stable panel viewport identity.

**Parameter `space`:** Receives the latest exact view/projection contract.

**Returns:** `true` when the selected controller supplied a manipulation space.
