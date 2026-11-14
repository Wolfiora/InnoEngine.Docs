---
uid: api.4ee6dcc25bbab149a704981d540798033dc4951de48154f34eef4c92b5c7cd4a
symbol: "scripting:Inno.Editor.Inspection:M:InnoEditor.Inspection.InspectorAttributeDrawContext.GetSiblingValue(System.String)"
source: xml
reviewed: d3edae147424e53cda76f5aed75eeb92b0b53c1b24a873b4d642a5387669bc13
title: "InspectorAttributeDrawContext.GetSiblingValue"
kind: api
owners: [Inno.Editor.Inspection]
apiSurface: editor-script
apiScope: Editor
---

Reads a sibling field or property from the current owner, including non-public base members.

## Parameters

**Parameter `memberName`:** Exact CLR member name.

## Returns

The current sibling value.

## Exceptions

**Exception `T:System.InvalidOperationException`:** Thrown when the sibling is absent, ambiguous, indexed, or unreadable.
