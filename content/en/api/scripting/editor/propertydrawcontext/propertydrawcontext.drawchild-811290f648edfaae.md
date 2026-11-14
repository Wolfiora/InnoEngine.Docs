---
uid: api.811290f648edfaae8d347d7d007a7f99d4da25b25108a24078bc477a28ad20a4
symbol: "scripting:Inno.Editor.Inspection:M:InnoEditor.Inspection.PropertyDrawContext.DrawChild(System.String,System.Type,System.Func{System.Object},System.Action{System.Object},System.Boolean)"
source: xml
reviewed: a9eb1bcea97bc9e1e248ae0aaf02002713c832a7a104ab4d40bcc98711e8f6c9
title: "PropertyDrawContext.DrawChild"
kind: api
owners: [Inno.Editor.Inspection]
apiSurface: editor-script
apiScope: Editor
---

Draws a nested value whose setter writes through this property path.

**Parameter `childName`:** The stable child member name appended to this property path.

**Parameter `childType`:** The declared type used to resolve a property drawer.

**Parameter `getter`:** The callback that reads the latest child value.

**Parameter `setter`:** The callback that writes an edited child value.

**Parameter `readOnly`:** Whether the child should be presented without assignment support.
