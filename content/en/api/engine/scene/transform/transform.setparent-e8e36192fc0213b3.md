---
uid: api.e8e36192fc0213b31ece99736f34119250025d63ef4a024af070d0f13fc08aff
symbol: "engine:Inno.Scene:M:Inno.Scene.Components.Transform.SetParent(Inno.Scene.Components.Transform)"
source: xml
reviewed: 905cb481ce371a4da24e4087126f905575a87bf8d09dc22b29c9a00d87d7f3eb
title: "Transform.SetParent"
kind: api
owners: [Inno.Scene]
apiSurface: source-clr
---

Sets the parent while preserving this transform's world-space values.

**Parameter `parent`:** New parent, or `null` to move to scene level.

**Exception `T:System.InvalidOperationException`:** Thrown for hierarchy cycles, cross-scene parents, or a non-invertible parent hierarchy.
