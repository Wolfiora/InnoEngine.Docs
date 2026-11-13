---
uid: api.c2e26e4fa4f61be6dfdda75f585c175a6f00eb415cc9edf0220ec9ee39b82c3b
symbol: "engine:Inno.Editor.Inspection:M:Inno.Editor.Inspection.PropertyDrawContext.TryGetTextState(System.String,System.String@)"
source: xml
reviewed: 58438a4e4034030fe027f622ec2e7430ed689839e593ef0f51f4eae2dda0b2db
title: "TryGetTextState"
kind: api
owners: [Inno.Editor.Inspection]
apiSurface: source-clr
---

Tries to read text-edit state scoped to this renderer, inspected owner, and property path.

**Parameter `key`:** Drawer-local state identity within the current property path.

**Parameter `value`:** Receives the stored text when the state exists.

**Returns:** `true` when text state exists for the exact owner and property path.
