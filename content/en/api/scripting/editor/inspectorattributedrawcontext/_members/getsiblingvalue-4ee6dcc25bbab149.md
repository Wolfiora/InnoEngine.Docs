---
uid: api.4ee6dcc25bbab149a704981d540798033dc4951de48154f34eef4c92b5c7cd4a
symbol: "scripting:Inno.Editor.Inspection:M:InnoEditor.Inspection.InspectorAttributeDrawContext.GetSiblingValue(System.String)"
source: xml
reviewed: 024b3d0fa4777e3194d4c08d628ffddfe8c5808da2ad0ea21c5f4bb3668b08c1
title: "GetSiblingValue"
kind: api
owners: [Inno.Editor.Inspection]
apiSurface: editor-script
apiScope: Editor
---

Reads a sibling field or property from the current owner, including non-public base members.

**Parameter `memberName`:** Exact CLR member name.

**Returns:** The current sibling value.

**Exception `T:System.InvalidOperationException`:** Thrown when the sibling is absent, ambiguous, indexed, or unreadable.
