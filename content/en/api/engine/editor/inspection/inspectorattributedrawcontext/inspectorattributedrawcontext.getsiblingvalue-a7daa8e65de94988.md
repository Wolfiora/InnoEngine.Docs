---
uid: api.a7daa8e65de9498855a5c5210af39bc2435e504213640cee77932b804393c039
symbol: "engine:Inno.Editor.Inspection:M:Inno.Editor.Inspection.InspectorAttributeDrawContext.GetSiblingValue(System.String)"
source: xml
reviewed: baf158b379a3a9ef11aaef42628dd0ea2a5d9d85567a10aae1c1e628f7e209e5
title: "InspectorAttributeDrawContext.GetSiblingValue"
kind: api
owners: [Inno.Editor.Inspection]
apiSurface: source-clr
---

Reads a sibling field or property from the current owner, including non-public base members.

**Parameter `memberName`:** Exact CLR member name.

**Returns:** The current sibling value.

**Exception `T:System.InvalidOperationException`:** Thrown when the sibling is absent, ambiguous, indexed, or unreadable.
