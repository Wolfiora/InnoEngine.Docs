---
uid: api.f280d5655af2fd8038d112f59204075ec470ec3cd840a445ac777d7c487eeaf8
symbol: "engine:Inno.Editor.Inspection:M:Inno.Editor.Inspection.PropertyDrawContext.DrawChild(System.String,System.Type,System.Func{System.Object},System.Action{System.Object},System.Boolean)"
source: xml
reviewed: 8c63f329a876933e770290963cee1ad46e0579f98d639db72ee74c9209277044
title: "DrawChild"
kind: api
owners: [Inno.Editor.Inspection]
apiSurface: source-clr
---

Draws a nested value whose setter writes through this property path.

**Parameter `childName`:** The stable child member name appended to this property path.

**Parameter `childType`:** The declared type used to resolve a property drawer.

**Parameter `getter`:** The callback that reads the latest child value.

**Parameter `setter`:** The callback that writes an edited child value.

**Parameter `readOnly`:** Whether the child should be presented without assignment support.
