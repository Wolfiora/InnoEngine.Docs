---
uid: api.e2b8b27389a6dbd3cec12e8356e365acd2494efb1ed4ba6928907191104982d5
symbol: "engine:Inno.Editor.Inspection:M:Inno.Editor.Inspection.PropertyDrawContext.DrawInlineChild(System.String,System.Type,System.Func{System.Object},System.Action{System.Object},System.Boolean)"
source: xml
reviewed: 36b2a74b8c284f36e7586c3ca9511f05fc0b8e2bbc4b222ad3a9cbd0e5b4dcd4
title: "PropertyDrawContext.DrawInlineChild"
kind: api
owners: [Inno.Editor.Inspection]
apiSurface: source-clr
---

Draws a nested value inline without adding another label row.

## Parameters

**Parameter `childName`:** The stable child member name appended to this property path.

**Parameter `childType`:** The declared type used to resolve a property drawer.

**Parameter `getter`:** The callback that reads the latest child value.

**Parameter `setter`:** The callback that writes an edited child value.

**Parameter `readOnly`:** Whether the child should be presented without assignment support.
