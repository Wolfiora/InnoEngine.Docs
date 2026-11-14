---
uid: api.570bd911c35bafc7476b9e587b2e416f4306899756cbffb3db319b5aae61afb7
symbol: "scripting:Inno.Editor.Inspection:M:InnoEditor.Inspection.InspectionDrawer\u00601.DrawHeader(InnoEditor.Inspection.InspectionDrawContext,\u00600)"
source: xml
reviewed: 1c9184a6c17356a32f8ee29ff5a469e499fb4f5b9c987f7d879330ef5c25ab81
title: "InspectionDrawer\u003CTTarget\u003E.DrawHeader"
kind: api
owners: [Inno.Editor.Inspection]
apiSurface: editor-script
apiScope: Editor
---

Draws target-specific controls in the second row of the Inspector target header.

## Parameters

**Parameter `context`:** The active Inspector drawing context.

**Parameter `target`:** The strongly typed target being inspected.

## Remarks

The callback is clipped to one header row. Implementations should keep all controls on the current line and must not begin another window, child, table, or popup.
