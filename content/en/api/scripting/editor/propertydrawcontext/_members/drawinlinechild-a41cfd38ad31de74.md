---
uid: api.a41cfd38ad31de7496cff043d88492cdff33b8e589913f8f34ec4f5137cfc234
symbol: "scripting:Inno.Editor.Inspection:M:InnoEditor.Inspection.PropertyDrawContext.DrawInlineChild(System.String,System.Type,System.Func{System.Object},System.Action{System.Object},System.Boolean)"
source: xml
reviewed: ed1bca28562e2588891f9a08b41ce539fef75b8fc6506d2ac06fb99f6f502fb8
title: "DrawInlineChild"
kind: api
owners: [Inno.Editor.Inspection]
apiSurface: editor-script
apiScope: Editor
---

Draws a nested value inline without adding another label row.

**Parameter `childName`:** The stable child member name appended to this property path.

**Parameter `childType`:** The declared type used to resolve a property drawer.

**Parameter `getter`:** The callback that reads the latest child value.

**Parameter `setter`:** The callback that writes an edited child value.

**Parameter `readOnly`:** Whether the child should be presented without assignment support.
