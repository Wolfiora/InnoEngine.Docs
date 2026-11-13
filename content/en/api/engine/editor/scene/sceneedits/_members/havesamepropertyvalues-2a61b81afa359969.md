---
uid: api.2a61b81afa3599691c847056208156a3dce5322aad39264cdf3d7d3460421ffd
symbol: "engine:Inno.Editor.Scene:M:Inno.Editor.Scene.SceneEdits.HaveSamePropertyValues(System.Collections.Generic.IReadOnlyList{Inno.Scene.EngineObject},System.String)"
source: xml
reviewed: 3aa29df8670a99cb5832c9d6dfb1d2ecef1228e238c88debc18ccc7eb6cf243d
title: "HaveSamePropertyValues"
kind: api
owners: [Inno.Editor.Scene]
apiSurface: source-clr
---

Compares common serialized property values using the complete owner serialization context.

**Parameter `targets`:** Live compatible scene objects to compare.

**Parameter `propertyName`:** The required common serialized member.

**Returns:** True when every encoded value matches, including an empty selection.

**Exception `T:System.InvalidOperationException`:** A selected object does not expose the requested property.
