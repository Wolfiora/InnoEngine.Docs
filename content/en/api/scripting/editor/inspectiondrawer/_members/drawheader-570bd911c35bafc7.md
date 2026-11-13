---
uid: api.570bd911c35bafc7476b9e587b2e416f4306899756cbffb3db319b5aae61afb7
symbol: "scripting:Inno.Editor.Inspection:M:InnoEditor.Inspection.InspectionDrawer\u00601.DrawHeader(InnoEditor.Inspection.InspectionDrawContext,\u00600)"
source: xml
reviewed: 181d57e3532a4d368482e65f5face70ffa1255028ecb225962184799229b3515
title: "DrawHeader"
kind: api
owners: [Inno.Editor.Inspection]
apiSurface: editor-script
apiScope: Editor
---

Draws target-specific controls in the second row of the Inspector target header.

**Parameter `context`:** The active Inspector drawing context.

**Parameter `target`:** The strongly typed target being inspected.

## Remarks

The callback is clipped to one header row. Implementations should keep all controls on the current line and must not begin another window, child, table, or popup.
