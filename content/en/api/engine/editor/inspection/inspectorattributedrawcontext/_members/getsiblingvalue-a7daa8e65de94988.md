---
uid: api.a7daa8e65de9498855a5c5210af39bc2435e504213640cee77932b804393c039
symbol: "engine:Inno.Editor.Inspection:M:Inno.Editor.Inspection.InspectorAttributeDrawContext.GetSiblingValue(System.String)"
source: xml
reviewed: 3db02149d44a210800ac8c7cb1278137647a45946957f3d7bfededc0fbece5f1
title: "GetSiblingValue"
kind: api
owners: [Inno.Editor.Inspection]
apiSurface: source-clr
---

Reads a sibling field or property from the current owner, including non-public base members.

**Parameter `memberName`:** Exact CLR member name.

**Returns:** The current sibling value.

**Exception `T:System.InvalidOperationException`:** Thrown when the sibling is absent, ambiguous, indexed, or unreadable.
