---
uid: api.f05d0c632700b609575745d163d8c86e246092927a1981849284d3c5afca33d2
symbol: "engine:Inno.Editor.Inspection:M:Inno.Editor.Inspection.SerializedPropertyRenderer.GetPropertyAvailability(System.Object,Inno.Core.Serialization.SerializedProperty)"
source: xml
reviewed: 99f72b42e0f254753906bb6801479ad0493adf983515d2f3d0e75ef97d03f4ca
title: "GetPropertyAvailability"
kind: api
owners: [Inno.Editor.Inspection]
apiSurface: source-clr
---

Evaluates the same current-generation presentation attributes used by drawing without creating any UI state.

**Parameter `owner`:** The current object declaring the property's conditional metadata.

**Parameter `property`:** The root serialized property to inspect.

**Returns:** Visibility and editability for this exact owner; callers must combine all selected owners before a batch edit.
