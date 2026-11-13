---
uid: api.c2e26e4fa4f61be6dfdda75f585c175a6f00eb415cc9edf0220ec9ee39b82c3b
symbol: "engine:Inno.Editor.Inspection:M:Inno.Editor.Inspection.PropertyDrawContext.TryGetTextState(System.String,System.String@)"
source: xml
reviewed: 5250a9f21bd7e23dd22092b051b28abbeb93a327de320c7c6e70487409532265
title: "TryGetTextState"
kind: api
owners: [Inno.Editor.Inspection]
apiSurface: source-clr
---

Tries to read text-edit state scoped to this renderer, inspected owner, and property path.

**Parameter `key`:** Drawer-local state identity within the current property path.

**Parameter `value`:** Receives the stored text when the state exists.

**Returns:** `true` when text state exists for the exact owner and property path.
