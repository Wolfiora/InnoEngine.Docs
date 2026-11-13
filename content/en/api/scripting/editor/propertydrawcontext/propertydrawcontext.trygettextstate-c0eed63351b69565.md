---
uid: api.c0eed63351b6956566bb57a806f9650e150f60dad051cc1008d0a3127251c0ea
symbol: "scripting:Inno.Editor.Inspection:M:InnoEditor.Inspection.PropertyDrawContext.TryGetTextState(System.String,System.String@)"
source: xml
reviewed: 98c08a49f8d038a858445948ab1f16e554b1e9ab3c7a5708b10fc5286dd54c51
title: "PropertyDrawContext.TryGetTextState"
kind: api
owners: [Inno.Editor.Inspection]
apiSurface: editor-script
apiScope: Editor
---

Tries to read text-edit state scoped to this renderer, inspected owner, and property path.

**Parameter `key`:** Drawer-local state identity within the current property path.

**Parameter `value`:** Receives the stored text when the state exists.

**Returns:** `true` when text state exists for the exact owner and property path.
