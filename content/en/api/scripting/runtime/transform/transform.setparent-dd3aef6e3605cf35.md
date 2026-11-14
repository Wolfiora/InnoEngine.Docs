---
uid: api.dd3aef6e3605cf35423340adf04e431cfdff9965028b99a06e3b02ad17c5ec17
symbol: "scripting:Inno.Scene:M:InnoEngine.Scene.Transform.SetParent(InnoEngine.Scene.Transform)"
source: xml
reviewed: 6e3c9d6c9b92f9b31f251ca7b4f038ddad20e888ac0986a60e405a926045f390
title: "Transform.SetParent"
kind: api
owners: [Inno.Scene]
apiSurface: editor-script
apiScope: Runtime
---

Sets the parent while preserving this transform's world-space values.

**Parameter `parent`:** New parent, or `null` to move to scene level.

**Exception `T:System.InvalidOperationException`:** Thrown for hierarchy cycles, cross-scene parents, or a non-invertible parent hierarchy.
